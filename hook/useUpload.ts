import { MutationHookOptions, useMutation } from "@apollo/client";
import { useState } from "react";
import { MULTI_UPLOAD } from "../apollo/gql/mutations";
import { Ffile, multiUpload, multiUploadVariables } from "../types/api";
import { ImgResizeSizes, ResizeKeys } from "../types/const";
import { resizeImage } from "../utils/fileResize";
import { isImgFile } from "../utils/isImgFile";

interface IuploadConfigs {
    resizes?: ResizeKeys[];
}

export const useUpload = (
    options: MutationHookOptions<multiUpload, multiUploadVariables> = {}
) => {
    const [loading, setLoading] = useState(false);
    const [multMu, { loading: uploadLoading }] = useMutation<
        multiUpload,
        multiUploadVariables
    >(MULTI_UPLOAD, {
        ...options,
    });

    const getResized = async (
        file: File,
        maxWdith: number,
        suffix: string,
        changedFileName: string
    ) => {
        if (isImgFile(file)) {
            try {
                const resized = await resizeImage({
                    file,
                    maxSize: maxWdith,
                    suffix,
                    changedFileName,
                });
                return await multMu({
                    variables: {
                        file: [resized],
                    },
                }).then(({ data }) => {
                    return data?.MultiUpload?.data?.[0]?.uri;
                });
            } catch {
                alert("error occured");
                return file;
            }
        } else return file;
    };

    const signleUpload = (
        files: FileList,
        onSucess?: (url: string, data: Ffile) => void,
        config?: IuploadConfigs
    ) => {
        if (!files) return;

        setLoading(true);

        multMu({
            variables: {
                file: files,
            },
        }).then(async ({ data }) => {
            const file = data?.MultiUpload.data?.[0];
            const url = file?.uri;

            const defaultResizes = ["small", "medium", "large"];

            try {
                for (const resize of config.resizes || defaultResizes) {
                    const resized = await getResized(
                        files.item(0),
                        ImgResizeSizes[resize],
                        resize,
                        file.name
                    );
                    if (file && typeof resized === "string") {
                        file.imgScaleUrl = {
                            ...file.imgScaleUrl,
                            [resize]: resized,
                        };
                    }
                }
            } catch {
                console.warn("resizedFail");
            }

            if (url && file) {
                onSucess?.(url, file);
            }
            setLoading(false);
        });
    };

    const totalLoading = loading || uploadLoading;
    return { signleUpload, uploadLoading, totalLoading };
};

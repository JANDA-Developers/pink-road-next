import { MutationHookOptions, useMutation } from "@apollo/client";
import { useState } from "react";
import { MULTI_UPLOAD } from "../apollo/gql/mutations";
import { Ffile, multiUpload, multiUploadVariables } from "../types/api";
import { ImgResizeSizes, ResizeKeys } from "../types/const";
import { checkFileSize } from "../utils/checkFileSIze";
import { fileExtendDivider } from "../utils/fileExtendDivider";
import {
    getFileImageSize,
    IResizeImageOptions,
    resizeImage,
} from "../utils/fileResize";
import { isImgFile } from "../utils/isImgFile";

function renameFile(originalFile: File, newName: string) {
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    });
}

interface IuploadConfigs {
    resizes?: ResizeKeys[];
    fixResizeOnUri?: boolean;
    maxSiszeMb?: number;
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

    const signleUpload = async (
        fileList: FileList,
        onSucess?: (url: string, data: Ffile) => void,
        config?: IuploadConfigs
    ) => {
        if (!fileList) return;
        const file = fileList.item(0);
        let files = [file];

        if (!file) return;
        if (!checkFileSize(file, config?.maxSiszeMb)) return;

        if (isImgFile(file)) {
            const resizes = ["500", "1000", "2000", "3000"];

            const { extend, namePart } = fileExtendDivider(file.name);
            const newName = namePart + "__resized__" + "." + extend;
            const reNamedFile = renameFile(file, newName);

            const resizeFiles: IResizeImageOptions[] = resizes.map(
                (resize) => ({
                    file: reNamedFile,
                    maxSize: parseInt(resize),
                    suffix: resize,
                })
            );

            const resizeImages = await Promise.all(
                resizeFiles
                    .map((resize) => resizeImage(resize))
                    .filter((val) => val)
            );

            files = [reNamedFile, ...resizeImages];
        }
        setLoading(true);

        multMu({
            variables: {
                file: files,
            },
        }).then(async ({ data }) => {
            data?.MultiUpload.data?.map((data) => 1);
            const file = data?.MultiUpload.data?.[0];
            const url = file?.uri;

            if (url && file) {
                onSucess?.(url, file);
            }
            setLoading(false);
        });
    };

    const totalLoading = loading || uploadLoading;
    return { signleUpload, uploadLoading, totalLoading };
};

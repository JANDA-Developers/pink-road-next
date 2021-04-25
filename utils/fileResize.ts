import { FimgScaleUrl } from "../types/api";
import dataURLtoFile from "./dataURLtoFile";

// 그 파일들을 일제히 업로드한다.
export const getFileImageSize = (
    file: File,
    callBack: (size: { width: number; height: number }) => void
) => {
    const _URL = window.URL || window.webkitURL;
    const img = new Image();
    var objectUrl = _URL.createObjectURL(file);
    img.onload = function () {
        _URL.revokeObjectURL(objectUrl);
        img.src = objectUrl;
        const { width, height } = img;
        callBack({ height, width });
    };
};

interface IFileResizeOption {
    size: keyof FimgScaleUrl[];
}

interface IResizeImageOptions {
    suffix?: string;
    changedFileName?: string;
    maxSize: number;
    file: File;
}

export const resizeImage = (settings: IResizeImageOptions): Promise<File> => {
    const file = settings.file;
    const maxSize = settings.maxSize;
    const reader = new FileReader();
    const image = new Image();
    const canvas = document.createElement("canvas");

    const resize = () => {
        let width = image.width;
        let height = image.height;

        if (width > height) {
            if (width > maxSize) {
                height *= maxSize / width;
                width = maxSize;
            }
        } else {
            if (height > maxSize) {
                width *= maxSize / height;
                height = maxSize;
            }
        }

        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(image, 0, 0, width, height);
        let dataUrl = canvas.toDataURL("image/jpeg");
        return dataURLtoFile(
            dataUrl,
            (settings.changedFileName || file.name) +
                `--${settings.suffix || maxSize}`
        );
    };

    return new Promise((ok, no) => {
        if (!file.type.match(/image.*/)) {
            no(new Error("Not an image"));
            return;
        }

        reader.onload = (readerEvent: any) => {
            image.onload = () => ok(resize());
            image.src = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    });
};

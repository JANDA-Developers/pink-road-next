import React, { useContext, useRef } from 'react';
import { AppContext } from 'pages/_app';
import { useUpload } from 'hook/useUpload';
import { TElements } from '../../types/interface';

export interface IUploadProps {
    onUpload: (url: string) => void;
    text?: TElements;
}

export const Upload: React.FC<IUploadProps> = ({ onUpload, text = "이미지교체+" }) => {
    const { signleUpload } = useUpload();
    const hiddenImgInput = useRef<HTMLInputElement>(null);

    const handleUpload = () => {
        const file = hiddenImgInput.current?.files;
        if (!file) return;
        signleUpload(file, (url) => {
            onUpload(url);
        })
    }

    return <div className="imgEdit" onClick={() => {
        hiddenImgInput.current?.click()
    }}>
        <small className="imgEdit__text">{text}</small>
        <input ref={hiddenImgInput} onChange={handleUpload} hidden type="file" />
    </div>;
};

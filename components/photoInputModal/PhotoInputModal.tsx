import React, { useRef, useState } from "react";
import { useArray } from "../../hook/useArray";
import { IUseModal } from "../../hook/useModal";
import { useUpload } from "../../hook/useUpload";
import { Ffile } from "../../types/api";
import { Validater } from "../../utils/validate";
import { Modal2 } from "../modal/Modal";

interface IProp extends IUseModal {
    min?: number;
    max?: number;
    onSubmit: (file: Ffile[]) => void;
}

export const PhotoInputModal: React.FC<IProp> = ({
    onSubmit,
    min,
    max,
    ...props
}) => {
    const [anchor, setAnchor] = useState<number>();
    const filesHook = useArray<Ffile>([]);
    const hiddenInput = useRef<HTMLInputElement>(null);

    const { signleUpload } = useUpload();

    const { validate } = new Validater([
        {
            value: min < filesHook.count,
            failMsg: `최소 ${min}장의 사진을 넣어주세요.`,
        },
    ]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const uploadCallBack = (_: string, data: Ffile) => {
            if (!anchor) {
                filesHook.add(data);
            } else {
                filesHook.change(anchor, data);
            }
        };
        signleUpload(fileUploaded, uploadCallBack);
    };

    return (
        <Modal2 {...props}>
            {filesHook.array.map((photo, index) => (
                <div key={index + "uploadBox"} className="upload__outbox">
                    <span className="upload_out_box__fileName">
                        <span className="mr10">
                            {photo?.name || "프로필 사진이 없습니다."}
                        </span>
                        <i
                            onClick={() => {
                                undefined;
                            }}
                            className="flaticon-multiply mr10"
                        />
                    </span>
                    <button
                        style={{
                            padding: "0 24",
                        }}
                        onClick={() => {
                            if (hiddenInput.current) {
                                setAnchor(index);
                                hiddenInput.current.click();
                            }
                        }}
                        type="button"
                        className="btn btn_mini"
                    >
                        업로드
                    </button>
                </div>
            ))}
            <div key={"uploadBox"} className="upload__outbox">
                <span className="upload_out_box__fileName">
                    <span className="mr10">사진 등록하기</span>
                    <i
                        onClick={() => {
                            undefined;
                        }}
                        className="flaticon-multiply mr10"
                    />
                </span>
                <button
                    style={{
                        padding: "0 24",
                    }}
                    onClick={() => {
                        if (hiddenInput.current) {
                            hiddenInput.current.value = "";
                            hiddenInput.current.click();
                        }
                    }}
                    type="button"
                    className="btn btn_mini"
                >
                    등록하기
                </button>
            </div>
            <input
                ref={hiddenInput}
                hidden
                onChange={handleChange}
                type="file"
                {...props}
            />
            <div className="fin ifMobile">
                <div className="float_left">
                    <button
                        onClick={() => {
                            if (!validate()) return;
                            onSubmit(filesHook.array);
                        }}
                        type="submit"
                        className="btn medium"
                    >
                        등록
                    </button>
                    <button
                        onClick={props.closeModal}
                        type="submit"
                        className="btn medium"
                    >
                        취소
                    </button>
                </div>
                <div className="float_right"></div>
            </div>
        </Modal2>
    );
};

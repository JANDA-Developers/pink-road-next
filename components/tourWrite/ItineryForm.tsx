import React, { useRef } from 'react';
// import { Iitineraries } from "../TourWrite";
import dayjs from "dayjs";
import { ItineraryCreateInput } from '../../types/api';
import { ISet } from 'types/interface';
import { useUpload } from 'hook/useUpload';

export const DEFAULT_itinery: ItineraryCreateInput = {
    contents: ["asd"],
    images: [],
    date: new Date(),
    title: "",
}


interface IProp {
    itineries: ItineraryCreateInput[];
    itinery: ItineraryCreateInput;
    setitineries: ISet<any[]>
    index: number;
}

export const ItineryForm: React.FC<IProp> = ({ itinery, itineries, setitineries, index }) => {
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const { signleUpload, uploadLoading } = useUpload();

    const _id = "temp";

    const handleAddContent = () => {
        itinery.contents = [...itinery.contents, ""]
        setitineries([...itineries])
    }

    const handleAddImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        signleUpload(files, (url, file) => {
            itinery.images = [...(itinery.images || []), file]
            console.log("upload:success:itineries");
            console.log(itineries);
            setitineries([...itineries])
        })
    };

    const handleDeleteImg = (index: number) => () => {
        itinery.images.splice(index, 1);
        setitineries([...itineries])
    }

    const handleDeleteContent = (index: number) => () => {
        itinery.contents.splice(index, 1);
        setitineries([...itineries]);
    }

    const handleOnChange = (i: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value;
        itinery.contents[i] = value;
        setitineries([...itineries])
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        itinery.title = e.currentTarget.value;
        setitineries([...itineries])
    }

    const lastOrSingle = (index: number) => {
        return index === (itinery.contents.length - 1) || itinery.contents.length === 1;
    }

    return <div className="day_tap">
        <div className="texta_title">
            <input type="text" className="input_01" onChange={handleTitle} value={itinery.title} placeholder={`${index}일차`} />
            <input readOnly type="text" className="input_02" value={dayjs(itinery.date).format("YYYY.MM.DD (ddd)")} />
        </div>
        {itinery.contents.map((content, contentIndex) =>
            <div key={`${contentIndex}${index}content`}>
                <textarea onChange={handleOnChange(contentIndex)} key={"initeryFrom__content" + contentIndex} style={{ width: '100%', minHeight: '100px' }} value={content} />
                <button onClick={handleDeleteContent(contentIndex)} className="comment_btn mini elimination">
                    일정삭제
                </button>
                {lastOrSingle(contentIndex) && <button onClick={handleAddContent} className="comment_btn mini add">일정추가</button>}
            </div>
        )}
        <div>
            {itinery?.images?.map((img, i) =>
                <div className="initrary__img">
                    <img key={i + "img" + index} style={{
                        height: "100px"
                    }} src={img.uri} />
                    <i onClick={handleDeleteImg(i)} className="flaticon-multiply icon_x"></i>
                </div>
            )}
        </div>
        <div className="add_img_box">
            <span className="add_img_box__addBtn" onClick={() => {
                hiddenFileInput?.current?.click()
            }}>이미지 추가</span>
            <span className="add_img_box__loading">{uploadLoading && "...Loading"}</span>
            <input style={{
                display: "none"
            }} className="initrary__imgInput" ref={hiddenFileInput} accept="image/png, image/jpeg" onChange={handleAddImg} type="file" />
        </div>
    </div>;
};


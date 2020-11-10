import React, { useRef } from 'react';
// import { Iitineraries } from "../TourWrite";
import dayjs from "dayjs";
import { ItineryCreateInput } from '../../types/api';
import { ISet } from 'types/interface';

export const DEFAULT_itinery: ItineryCreateInput = {
    contents: ["asd"],
    images: [],
    date: new Date(),
    title: "",
}


interface IProp {
    itineries: ItineryCreateInput[];
    itinery: ItineryCreateInput;
    setitineries: ISet<any[]>
    index: number;
}

export const ItineryForm: React.FC<IProp> = ({ itinery, itineries, setitineries, index }) => {
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const _id = "temp";

    const handleAddContent = () => {
        itinery.contents = [...itinery.contents, ""]
        setitineries([...itineries])
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        let fileArray: File[] = [];

        for (var i = 0; i < files.length; i++) {
            const file = files[i];
            fileArray.push(file)
        }
    };

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

    return <div className="day_tap">
        <div className="texta_title">
            <input type="text" className="input_01" onChange={handleTitle} value={itinery.title} placeholder={`${index}일차`} />
            <input readOnly type="text" className="input_02" value={dayjs(itinery.date).format("YYYY.MM.DD (ddd)")} />
        </div>
        {itinery.contents.map((content, contentIndex) =>
            <div style={{
                display: index === 0 ? "none" : undefined
            }} key={`${contentIndex}${index}content`}>
                <textarea onChange={handleOnChange(index)} key={"initeryFrom__content" + index} style={{ width: '100%', minHeight: '100px' }} value={content} />
                <i onClick={handleDeleteContent(index)} className="delete">삭제</i>
            </div>
        )}
        <input className="initrary__imgInput" ref={hiddenFileInput} multiple accept="image/png, image/jpeg" onChange={handleChange} type="file" />
        <div onClick={handleAddContent} className="add_box_btn">
            <span className="texta_add">일정 추가<i className="jandaicon-arr5-bottom"></i></span>
        </div>
    </div>;
};


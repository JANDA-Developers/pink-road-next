import React, { useRef } from 'react';
// import { Iitineraries } from "../TourWrite";
import dayjs from "dayjs";
import { ItineraryArrayInput } from '../../types/api';
import { ISet } from 'types/interface';

export const DEFAULT_SCHEDULE: ItineraryArrayInput = {
    contents: "asd",
    imgs: [],
    title: "",
    date: new Date()
}


interface IProp {
    schedules: ItineraryArrayInput[];
    schedule: ItineraryArrayInput;
    setSchedules: ISet<any[]>
    index: number;
}

export const Scheduler: React.FC<IProp> = ({ schedule, schedules, setSchedules, index }) => {
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const _id = "temp";

    const handleAddContent = () => {
        // schedules[index].contents.push("");
        console.log("changeTo::");
        console.log(schedules);
        setSchedules([...schedules])
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

    const handleDeleteContent = (index: number) => {
        // index로 교체
        // schedule.contents.splice(index, 1);
        setSchedules([...schedules]);
    }

    return <div className="day_tap">
        <div className="texta_title">
            <input type="text" className="input_01" placeholder={`${index}일차`} />
            <input type="text" className="input_02" placeholder={dayjs(schedule.date).format("YYYY.MM.DD (W)")} />
        </div>
        {/* {schedule.contents.map((content, index) =>
            <div style={{
                display: index === 0 ? "none" : undefined
            }} key={`${_id}index`}>
                <textarea key={s4()} style={{ width: '100%', minHeight: '100px' }} value={content} />
                <i onClick={() => { handleDeleteContent(index) }} className="delete">삭제</i>
            </div>
        )} */}
        <input ref={hiddenFileInput} multiple accept="image/png, image/jpeg" onChange={handleChange} type="file" />
        <div onClick={handleAddContent} className="add_box_btn">
            <span className="texta_add">일정 추가<i className="jandaicon-arr5-bottom"></i></span>
        </div>
    </div>;
};


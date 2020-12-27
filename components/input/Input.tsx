import React from 'react';

interface IProp {
    title: string
}

export const Input: React.FC<IProp> = ({ title }) => {
    return <div className="write_type">
        <div className="title">{title}</div>
        <div className="input_form">
            <input id="title" onChange={handleInputChange("title")} value={title} type="text" name="title" className="inputText w100" />
        </div>
    </div>;
};


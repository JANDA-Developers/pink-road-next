import React from 'react';
import $ from "jquery";
import { IDiv } from '../../types/interface';


export interface Ivalue {
    one: string;
    two: string;
    three: string;
}

interface IProp extends Omit<IDiv,"onChange"> {
    value: Ivalue
    onChange: (value: Ivalue) => void;
}

export const ThreePhoneNumberInput: React.FC<IProp> = ({ value: { one, three, two }, onChange }) => {

    //onChange에서 합쳐서 전달
    const handlePhoneNumberChange = (location: 1 | 2 | 3, value: string) => {

        let _one = one
        let _two = two
        let _three = three
        if (location === 1)
            _one = value;

        if (location === 2)
            _two = value;

        if (location === 3)
            _three = value;

        const next = {
            one: _one,
            two: _two,
            three: _three
        };
        console.log({ next })
        onChange(next)
    }


    const handleChangeInput = (index: 1 | 2 | 3) => (e: any) => {
        const val = e.currentTarget.value as string;

        const isDelete = (e.key === "Backspace" || e.key === "Delete");

        const first = index === 1

        if (!isDelete && val.length > (first ? 3 : 4)) {

            const one = val.substr(0, 3);
            const two = val.substr(3, 4);
            const three = val.substr(7, 4);


            const nextInput = e.currentTarget.nextElementSibling;
            if (nextInput) {
                console.count("triggered")
                $(nextInput).focus()

                let next = two
                if (index + 1 === 2) next = two;
                if (index + 1 === 3) next = three;
                handlePhoneNumberChange(index + 1 as any, next);
            }
        } else {
            console.count("delete pressed")
            handlePhoneNumberChange(index, val);
        }
    }

    return <div className="phoneNumberInput">
        <input
            type="text"
            value={one}
            onChange={handleChangeInput(1)}
        />
        -
        <input
            type="text"
            value={two}
            onChange={handleChangeInput(2)}
        />
        -
        <input
            type="text"
            value={three}
            onChange={handleChangeInput(3)}
        />
    </div>;
};

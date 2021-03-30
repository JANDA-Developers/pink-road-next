import React, { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { Fmodal } from '../../types/api';

interface IProp { }

interface IPopUp extends Fmodal {

    mobileMode: boolean;
}

export const Popup: React.FC<IProp> = () => {
    const { } = useContext(AppContext);
    return <div >
        <div className="">
            <div>오늘하루 보지않기</div>
            <div>닫기</div>
        </div>
    </div>;
};

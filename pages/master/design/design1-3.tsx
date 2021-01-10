import { MasterLayout } from 'layout/MasterLayout';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
import { PopupConfigViewBox } from '../../../components/popupconfig/PopupConfigViewBox';
import { usePopupConfig } from '../../../hook/usePopupConfig';

interface IProp { }

export const MsDesignB: React.FC<IProp> = () => {

    const popupHook = usePopupConfig([{ left: 0, top: 0, width: 100, height: 100, }, { height: 100, left: 0, top: 0, width: 100 }, { height: 100, left: 0, top: 0, width: 100 }])
    return <MasterLayout>
        <PopupConfigViewBox {...popupHook} />
    </MasterLayout >
};

export default MsDesignB;
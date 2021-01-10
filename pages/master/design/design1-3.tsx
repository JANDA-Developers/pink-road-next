import { MasterLayout } from 'layout/MasterLayout';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { PopupConfigViewBox } from '../../../components/popupconfig/PopupConfigViewBox';
import { usePopups } from '../../../hook/usePopups';

interface IProp { }

export const MsDesignB: React.FC<IProp> = () => {
    const popupHook = usePopups([{ left: 0, top: 0, width: 100, height: 100, name: "팝업1" }, { height: 100, left: 0, top: 0, width: 100, name: "팝업2" }, { height: 100, left: 0, top: 0, width: 100, name: "팝업3" }])
    const [selectedIndex, setSelcetedIndex] = useState<number | undefined>(undefined)

    return <MasterLayout>
        <PopupConfigViewBox selectedIndex={selectedIndex} onBoxDoubleClick={(view, index) => {
            setSelcetedIndex(index)
        }} {...popupHook} />
    </MasterLayout >
};

export default MsDesignB;
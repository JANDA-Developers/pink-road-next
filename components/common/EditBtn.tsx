import React, { useContext, useEffect } from 'react';
import { AppContext } from 'pages/_app';
import { UserRole } from 'types/api';
import { roleCheck } from 'utils/roleCheck';

interface IProp { }

export const EditBtn: React.FC<IProp> = () => {
    const { editMode, setEditMode, isManager, } = useContext(AppContext)

    //useEffect(() => {
    //    if (editMode)
    //        window.onbeforeunload = function () {
    //            return '편집중인 데이터가 저장되지 않을 수 있습니다. 정말로 페이지를 이동하시겠습니까?';
    //        };
    //    elseW
    //        window.onbeforeunload = () => { }
    //}, [editMode])

    if (!isManager) return null;

    return <div onClick={() => {
        setEditMode(!editMode)
        if (!editMode) return;
        if (window.confirm("변경내용을 저장 하시겠습니까? (취소시 초기화됨)"))
            document.getElementById("PageSubmitBtn")?.click();
        else
            document.getElementById("PageRestBtn")?.click();
    }} id="setting_link"><i><img src="/img/svg/setting_icon.svg" alt="icon" /></i>{editMode ? "편집모드" : "편집종료"}</div>
};

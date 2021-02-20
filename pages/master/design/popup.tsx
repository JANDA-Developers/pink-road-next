import { MasterLayout } from 'layout/MasterLayout';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React, { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import { PopupConfigViewBox } from '../../../components/popupconfig/PopupConfigViewBox';
import { usePopups } from '../../../hook/usePopups';
import { useHomepageUpdate } from '../../../hook/useHomepage';
import { AppContext } from '../../_app';
import dayjs from 'dayjs';
import { Fmodal, LinkBehavior } from '../../../types/api';
import { DayPickerModal } from '../../../components/dayPickerModal/DayPickerModal';
import { closeModal, openModal } from '../../../utils/popUp';
import { Ipopup } from '../../../types/interface';
import { omits } from '../../../utils/omit';
import dynamic from 'next/dynamic';
import { ALLOW_ADMINS, defaultModalGet } from '../../../types/const';
import { cloneObject } from '../../../utils/clone';
import { DesignTopNav } from '../../../components/topNav/MasterTopNav';
import { auth } from '../../../utils/with';
import { useUpload } from '../../../hook/useUpload';

const Editor = dynamic(() => import("components/edit/CKE2"), { ssr: false });

interface IProp { }

export const MsDesignB: React.FC<IProp> = () => {
    const { homepage } = useContext(AppContext);
    const popupHook = usePopups([], "POPWRAP")
    const [popModal, setPopModal] = useState<Fmodal>()
    const [collapseList, setCollapseList] = useState<string[]>([]);
    const { signleUpload } = useUpload();
    const [homepageUpdate] = useHomepageUpdate({
        onCompleted: ({ HomepageUpdate }) => {
            if (HomepageUpdate.ok) {
                alert("업데이트 완료")
            }
        }
    })
    const {
        selectedIndex,
        setSelcetedIndex,
        hideIds,
        setHideIds,
        savePercentageInModal,
        changeAllToPercentage
    } = popupHook;

    const handleUpdate = () => {
        savePercentageInModal();
        //업데이트 
        homepageUpdate({
            variables: {
                params: {
                    ...omits(homepage),
                    modal: omits(popupHook.popups, ['_id' as any, '__typename'])
                }
            }
        })
    }

    const selectedModal = selectedIndex !== undefined ? popupHook.popups[selectedIndex] : null;
    const handleContentChange = (data: string) => {
        if (selectedIndex === undefined) throw Error("no selected Index");
        popupHook.popups[selectedIndex].content = data;
        popupHook.setPopups([...popupHook.popups]);
    }

    const handleAddPopUp = () => {
        const newPopUp: Ipopup = defaultModalGet();
        popupHook.setPopups([...popupHook.popups, newPopUp]);
    }

    const handlePreview = (popup: Fmodal) => () => {
        popupHook.openPercentage(popup);
    }

    const handleCollapesToggle = (popup: Fmodal) => () => {
        // setCollapseList([popup._id]);
    }
    const handleOpenDayPicker = (popup: Fmodal) => () => {
        setPopModal(popup);
        setTimeout(() => {
            openModal("#dayPickerModal")()
        }, 100);
    }

    useEffect(() => {
        if (homepage?.modal)
            popupHook.setPopups(cloneObject(homepage.modal))
    }, [homepage?.modal])

    return <div>

        {popModal && <DayPickerModal defaultRange={{
            from: popModal.startDate ? dayjs(popModal.startDate).toDate() : new Date(),
            to: popModal.endDate ? dayjs(popModal.endDate).toDate() : dayjs().add(1, "d").toDate()
        }} onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            popModal.startDate = range.from;
            popModal.endDate = range.to;
            popupHook.setPopups([...popupHook.popups])
        }} />
        }
        <MasterLayout>
            <div className="in ">
                <h4>디자인 설정</h4>
                <div className="in_content">
                    <DesignTopNav />
                    <div className="con design popup_setting">
                        <div className="fin">
                            <div className="float_left">
                            </div>
                            <div className="float_right">
                                <button onClick={handleUpdate} type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="popupst_box">
                            <div className="hang_list">
                                <ul className="list_setting">
                                    {popupHook.popups.map((modal, index) =>
                                        <li key={`modalLi${index}`} className="con_toggle">
                                            <div className="title">
                                                <h5>
                                                    <span>{modal.title}</span>
                                                    <div className="switch">
                                                        <input onChange={() => { }} className="tgl tgl-skewed" id={`cb${index}`} type="checkbox" />
                                                        <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor={`cb${index}`} />
                                                    </div>
                                                </h5>
                                                <span onClick={handleCollapesToggle(modal)} className="control">
                                                    <i className="flaticon-megaphone-1"></i>
                                                </span>
                                            </div>
                                            <div className="content">
                                                <button className="btn small" onClick={handlePreview(modal)}>미리보기</button>
                                                <div className="line">
                                                    <h6>우선순서</h6>
                                                    <div className="txt">
                                                        <select onChange={(e) => {
                                                            const order = e.currentTarget.value;

                                                        }} className="w50">
                                                            <option value={0}>0</option>
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="line">
                                                    <h6>노출기간</h6>
                                                    <div className="txt">
                                                        <div className="input_box mr5">
                                                            <input onClick={handleOpenDayPicker(modal)} readOnly value={dayjs(modal.startDate).format("YYYY.MM.DD")} type="text" className="day w100" />
                                                            <CalendarIcon />
                                                        </div>
                                                        <span className="pc"> ~ </span>
                                                        <div className="input_box ml5">
                                                            <input onClick={handleOpenDayPicker(modal)} readOnly value={dayjs(modal.endDate).format("YYYY.MM.DD")} type="text" className="day w100" />
                                                            <CalendarIcon />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="line">
                                                    <h6>링크연결</h6>
                                                    <div className="txt">
                                                        <input onChange={(e) => {
                                                            modal.link = e.currentTarget.value;
                                                            popupHook.setPopups([...popupHook.popups]);
                                                        }} value={modal.link || undefined} type="text" className="w100" placeholder="https://" />
                                                        <select className="w100 mt5">
                                                            <option value={LinkBehavior.blank}>새창</option>
                                                            <option value={LinkBehavior.individual}>현재창</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="line">
                                                    <h6>백그라운드 설정</h6>
                                                    <div className="txt">
                                                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                            const file = e.currentTarget.files;
                                                            if (!file || !homepage) return;

                                                            signleUpload(e.currentTarget.files!, (url) => {
                                                                modal.style.backgroundImage = url
                                                                setPopModal({
                                                                    ...modal
                                                                })
                                                            })
                                                        }} type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                    <li className="add_popup">
                                        <button onClick={handleAddPopUp}><i className="flaticon-add"></i> 팝업생성</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="hang_view">
                                <div >
                                    <div className="view_box">
                                        <div className="head">
                                            <ul className="top">
                                                <li><i className="flaticon-multiply"></i></li>
                                            </ul>
                                            <div className="bottomnav">
                                                <div className="tap"></div>
                                                <div className="input">
                                                    <i className="flaticon-menu"></i>
                                                    <i className="flaticon-menu-1"></i>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <PopupConfigViewBox height={360} onBoxClick={(view, index) => {
                                            setSelcetedIndex(index)
                                        }} {...popupHook} />
                                    </div>
                                    <p className="infotxt_gray">우측 팝업리스트에서 'ON'으로 표시하시면 좌측 화면에서 팝업위치와 크기를 설정할 수 있는 미니팝업이 생성됩니다.<br />'OFF'시엔 미니팝업이 사라집니다. 'ON'표시는 3개 이하로 권장드립니다.</p>
                                    <p className="infotxt_gray">각 팝업의 사이즈와 위치는 전체화면에 대한 비례 위치 입니다.</p>
                                    <p className="infotxt_gray">각 팝업을 더블클릭하여 편집 할 수 있습니다.</p>
                                </div>
                                {selectedModal && <Editor key={selectedIndex + "editor"} onChange={handleContentChange} data={selectedModal.content} />}
                            </div>
                        </div>
                        <div className="fin">
                            <div className="float_left">
                            </div>
                            <div className="float_right">
                                <button onClick={handleUpdate} type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </MasterLayout >
    </div>
};

export default auth(ALLOW_ADMINS)(MsDesignB);

























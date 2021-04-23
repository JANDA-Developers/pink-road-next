import { MasterLayout } from 'layout/MasterLayout';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React, { useContext, useEffect, useState } from 'react';
import { usePopups } from '../../../hook/usePopups';
import { useHomepageUpdate } from '../../../hook/useHomepage';
import { AppContext } from '../../_app';
import dayjs from 'dayjs';
import { Fmodal, LinkBehavior } from '../../../types/api';
import { closeModal, openModal } from '../../../utils/popUp';
import { Ipopup } from '../../../types/interface';
import { omits } from '../../../utils/omit';
import { ALLOW_ADMINS, defaultModalGet } from '../../../types/const';
import { cloneObject } from '../../../utils/clone';
import { DesignTopNav } from '../../../components/topNav/MasterTopNav';
import { auth } from '../../../utils/with';
import { useUpload } from '../../../hook/useUpload';
import { LoadEditor } from '../../../components/edit/EdiotrLoading';
import { DayPickerModal } from '../../../components/dayPickerModal/DayPickerModal';
import { toNumber } from '../../../utils/toNumber';
import { Popup } from '../../../components/popup/Popup';

const Editor = LoadEditor();

interface IProp { }

export const MsDesignB: React.FC<IProp> = () => {
    const { homepage } = useContext(AppContext);
    const popupHook = usePopups(homepage?.modal || [], {autoOpen: false});
    const { signleUpload } = useUpload();
    const [datePopUp, setDatePopUp] = useState<Ipopup>()
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
    } = popupHook;

    const handleUpdate = () => {
        homepageUpdate({
            variables: {
                params: {
                    ...omits(homepage),
                    modal: omits(popupHook.popups, ['_id' as any, '__typename', 'isOpen'])
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

    const handleDelete = (popup: Fmodal) => () => {
        const filtered = popupHook.popups.filter(pop => pop._id !== popup._id);
        popupHook.setPopups([...filtered]);
    }

    const handlePreview = (popup: Fmodal) => () => {
        popupHook.openPopup(popup);
    }

    const handleCollapesToggle = (popup: Fmodal) => () => {
        // setCollapseList([popup._id]);
    }

    const handleOpenDayPicker = (popup: Fmodal) => () => {
        setTimeout(() => {
            openModal("#dayPickerModal")()
            setDatePopUp(popup);
        }, 100);
    }

    useEffect(() => {
        if (homepage?.modal)
            popupHook.setPopups(cloneObject(homepage.modal))
    }, [homepage?.modal])


    const defaultPopStartDate = new Date();
    const defaultPopEndDate = dayjs().add(1, "d").toDate();
    return <div>
        {datePopUp && <DayPickerModal 
        defaultRange={{
            from: datePopUp.startDate ? dayjs(datePopUp.startDate).toDate() : defaultPopStartDate,
            to: datePopUp.endDate ? dayjs(datePopUp.endDate).toDate() : defaultPopEndDate
        }} 
        onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            datePopUp.startDate = range.from;
            datePopUp.endDate = range.to;
            popupHook.setPopups([...popupHook.popups])
        }} />
        }
        <MasterLayout>
            {popupHook.popups.map((pop, index) =>
                <Popup {...popupHook} popup={pop} key={pop._id} />
            )}
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
                                                        <input onChange={() => {
                                                            modal.open = !modal.open;
                                                            popupHook.setPopups([...popupHook.popups]);
                                                        }} checked={modal.open} className="tgl tgl-skewed" id={`cb${index}`} type="checkbox" />
                                                        <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor={`cb${index}`} />
                                                    </div>
                                                </h5>
                                                <span onClick={handleCollapesToggle(modal)} className="control">
                                                    <i className="flaticon-megaphone-1"></i>
                                                </span>
                                            </div>
                                            <div className="content">
                                                <button className="btn small mr10" onClick={handlePreview(modal)}>미리보기</button>
                                                <button className="btn small" onClick={handleDelete(modal)}>삭제하기</button>
                                                <div className="line">
                                                    <h6>우선순위</h6>
                                                    <div className="txt">
                                                        <select value={modal.priority} onChange={(e) => {
                                                            const order = e.currentTarget.value;
                                                            modal.priority = toNumber(order);
                                                            popupHook.setPopups([...popupHook.popups])
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
                                                        <select value={modal.linkBehavior || LinkBehavior._blank} onChange={(e)=> {
                                                            modal.linkBehavior = e.currentTarget.value as LinkBehavior
                                                            popupHook.setPopups([...popupHook.popups]);
                                                     }} className="w100 mt5">
                                                            <option value={LinkBehavior._blank}>새창</option>
                                                            <option value={LinkBehavior._self}>현재창</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="line">
                                                    <h6>좌표설정</h6>
                                                    <p>
                                                        모바일일떄는 가운데 정렬 됩니다.
                                                    </p>
                                                    <div className="txt">
                                                        left
                                                        <input onChange={(e) => {
                                                            modal.style = {
                                                                ...modal.style,
                                                                left: toNumber(e.currentTarget.value)
                                                            }
                                                            popupHook.setPopups([...popupHook.popups]);
                                                        }} value={modal.style.left || undefined} type="text" className="w100" />
                                                        top
                                                        <input onChange={(e) => {
                                                            modal.style = {
                                                                ...modal.style,
                                                                top: toNumber(e.currentTarget.value)
                                                            }
                                                            popupHook.setPopups([...popupHook.popups]);
                                                        }} value={modal.style.top || undefined} type="text" className="w100"  />
                                                    </div>
                                                </div>
                                                <div className="line">
                                                    <h6>PC/Mobile</h6>
                                                    <div className="txt">
                                                    <div className="switch">
                                                    모바일 사용 
                                                        <input onChange={() => {
                                                            modal.useMobile = !modal.useMobile 
                                                            popupHook.setPopups([...popupHook.popups]);
                                                        }} checked={modal.useMobile} className="tgl tgl-skewed" id={`cbpc${index}`} type="checkbox" />
                                                        <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor={`cbpc${index}`} />
                                                    </div>
                                                    <div className="switch">
                                                        
                                                        PC사용
                                                        <input onChange={() => {
                                                            modal.usePc = !modal.usePc
                                                            popupHook.setPopups([...popupHook.popups]);
                                                        }} checked={modal.usePc} className="tgl tgl-skewed" id={`cbmb${index}`} type="checkbox" />
                                                        <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor={`cbmb${index}`} />
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="line">
                                                    <h6>크기조절</h6>
                                                    <p>
                                                        최대 화면 크기를 초과할 수 없습니다.
                                                    </p>
                                                    <div className="txt">
                                                        width
                                                        <input onChange={(e) => {
                                                            modal.style = {
                                                                ...modal.style,
                                                                width: toNumber(e.currentTarget.value)
                                                            }
                                                            popupHook.setPopups([...popupHook.popups]);
                                                        }} value={modal.style.width || undefined} type="text" className="w100"  />
                                                        height
                                                        <input onChange={(e) => {
                                                            modal.style =
                                                            {
                                                                ...modal.style,
                                                                height: toNumber(e.currentTarget.value)
                                                            }
                                                            popupHook.setPopups([...popupHook.popups]);
                                                        }} value={modal.style.height || undefined} type="text" className="w100"  />
                                                    </div>
                                                </div>
                                                <div className="line">
                                                    <h6>백그라운드 설정</h6>
                                                    <div className="txt">
                                                        <div className="fileNameInputLabel">{modal.style?.backgroundImage}</div>
                                                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                            const file = e.currentTarget.files;
                                                            if (!file || !homepage) return;

                                                            signleUpload(e.currentTarget.files!, (url) => {
                                                                modal.style = {
                                                                    ...modal.style,
                                                                    backgroundImage: `url(${url})`
                                                                }
                                                                // setPopModal({
                                                                //     ...modal
                                                                // })
                                                            })
                                                        }} type="file" />
                                                    </div>
                                                </div>
                                                <div className="line">
                                                    <h6>컨텐츠 설정</h6>
                                                    <div className="txt">
                                                        <div className="fileNameInputLabel">{modal.style?.backgroundImage}</div>
                                                        <Editor onChange={(data:any) => {
                                                            modal.content = data;
                                                            popupHook.setPopups([...popupHook.popups]);
                                                        }} data={modal.content} />
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

























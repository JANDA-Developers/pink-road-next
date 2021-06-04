import dayjs from "dayjs";
import { useContext, useState } from "react";
import CalendarIcon from "../../../components/common/icon/CalendarIcon";
import { CloseIcon } from "../../../components/common/icon/CloseIcon";
import { DayPickerModal } from "../../../components/dayPickerModal/DayPickerModal";
import { LoadEditor } from "../../../components/edit/EdiotrLoading";
import { Modal2 } from "../../../components/modal/Modal";
import { IUseModal } from "../../../hook/useModal";
import { IPopupBox, IUsePopups } from "../../../hook/usePopups";
import { useUpload } from "../../../hook/useUpload";
import { Fmodal, LinkBehavior } from "../../../types/api";
import { Ipopup } from "../../../types/interface";
import { EmpyFileInput } from "../../../utils/emptyFileInput";
import { closeModal, openModal } from "../../../utils/popUp";
import { toNumber } from "../../../utils/toNumber";
import { AppContext } from "../../_app";
const Editor = LoadEditor();

export interface IPopUpModalHookInfo {
    popup?: IPopupBox;
}

export interface IProps extends IUseModal<IPopUpModalHookInfo> {
    popupHook: IUsePopups;
}

export const PopUpConfigModal: React.FC<IProps> = ({
    popupHook,
    ...modalHook
}) => {
    if (!modalHook.info?.popup) return null;
    const { homepage } = useContext(AppContext);
    const { signleUpload } = useUpload();

    const [datePopUp, setDatePopUp] = useState<Ipopup>();
    const modal = modalHook.info.popup;

    const handleOpenDayPicker = (popup: Fmodal) => () => {
        setTimeout(() => {
            openModal("#dayPickerModal")();
            setDatePopUp(popup);
        }, 100);
    };

    const defaultPopStartDate = new Date();
    const defaultPopEndDate = dayjs().add(1, "d").toDate();

    return (
        <Modal2 UpCon={<h3>팝업설정하기</h3>} {...modalHook}>
            {datePopUp && (
                <DayPickerModal
                    defaultRange={{
                        from: datePopUp.startDate
                            ? dayjs(datePopUp.startDate).toDate()
                            : defaultPopStartDate,
                        to: datePopUp.endDate
                            ? dayjs(datePopUp.endDate).toDate()
                            : defaultPopEndDate,
                    }}
                    onSubmit={(range) => {
                        closeModal("#dayPickerModal")();
                        datePopUp.startDate = range.from;
                        datePopUp.endDate = range.to;
                        popupHook.setPopups([...popupHook.popups]);
                    }}
                />
            )}
            <ul className="list__setting">
                <li className="con_toggle">
                    <div className="content">
                        <div className="line">
                            <h6>팝업 타이틀</h6>
                            <div className="txt">
                                <input
                                    value={modal.title}
                                    onChange={(e) => {
                                        const title = e.currentTarget
                                            .value as string;
                                        modal.title = title;
                                        popupHook.setPopups([
                                            ...popupHook.popups,
                                        ]);
                                    }}
                                    type="text"
                                    className="w100"
                                    placeholder="title"
                                />
                            </div>
                        </div>
                        <div className="line">
                            <h6>우선순위</h6>
                            <div className="txt">
                                <select
                                    className="w50"
                                    value={modal.priority}
                                    onChange={(e) => {
                                        const order = e.currentTarget.value;
                                        modal.priority = toNumber(order);
                                        popupHook.setPopups([
                                            ...popupHook.popups,
                                        ]);
                                    }}
                                >
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <h6>노출기간</h6>
                        <div className="txt">
                            <div className="input_box mr5">
                                <input
                                    onClick={handleOpenDayPicker(modal)}
                                    readOnly
                                    value={dayjs(modal.startDate).format(
                                        "YYYY.MM.DD"
                                    )}
                                    type="text"
                                    className="day w100"
                                />
                                <CalendarIcon
                                    onClick={handleOpenDayPicker(modal)}
                                />
                            </div>
                            <span className="pc"> ~ </span>
                            <div className="input_box ml5">
                                <input
                                    onClick={handleOpenDayPicker(modal)}
                                    value={dayjs(modal.endDate).format(
                                        "YYYY.MM.DD"
                                    )}
                                    readOnly
                                    type="text"
                                    className="day w100"
                                />
                                <CalendarIcon
                                    onClick={handleOpenDayPicker(modal)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <h6>링크연결</h6>

                        <div className="txt">
                            <input
                                type="text"
                                className="w100 mr5"
                                placeholder="https://"
                            />
                            <select
                                value={
                                    modal.linkBehavior || LinkBehavior._blank
                                }
                                onChange={(e) => {
                                    modal.linkBehavior = e.currentTarget
                                        .value as LinkBehavior;
                                    popupHook.setPopups([...popupHook.popups]);
                                }}
                                className="w100"
                            >
                                <option value={LinkBehavior._blank}>
                                    새창
                                </option>
                                <option value={LinkBehavior._self}>
                                    현재창
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="line">
                        <h6>좌표설정</h6>
                        <p>모바일일떄는 가운데 정렬 됩니다.</p>
                        <div className="txt">
                            <input
                                onChange={(e) => {
                                    modal.style = {
                                        ...modal.style,
                                        left: toNumber(e.currentTarget.value),
                                    };
                                    popupHook.setPopups([...popupHook.popups]);
                                }}
                                value={modal.style.left || undefined}
                                type="text"
                                className="w100 mr5"
                                placeholder="Left"
                            />
                            <input
                                onChange={(e) => {
                                    modal.style = {
                                        ...modal.style,
                                        top: toNumber(e.currentTarget.value),
                                    };
                                    popupHook.setPopups([...popupHook.popups]);
                                }}
                                value={modal.style.top || undefined}
                                type="text"
                                className="w100"
                                placeholder="Top"
                            />
                        </div>
                    </div>
                    <div className="line">
                        <h6>PC/Mobile</h6>
                        <div className="txt">
                            <div className="switch">
                                PC사용
                                <input
                                    onChange={() => {
                                        modal.usePc = !modal.usePc;
                                        popupHook.setPopups([
                                            ...popupHook.popups,
                                        ]);
                                    }}
                                    checked={modal.usePc}
                                    id={`cbmb`}
                                    className="tgl tgl-skewed"
                                    type="checkbox"
                                />
                                <label
                                    className="tgl-btn"
                                    data-tg-off="OFF"
                                    data-tg-on="ON"
                                    htmlFor={`cbmb`}
                                />
                            </div>
                            <div className="switch">
                                모바일 사용
                                <input
                                    onChange={() => {
                                        modal.useMobile = !modal.useMobile;
                                        popupHook.setPopups([
                                            ...popupHook.popups,
                                        ]);
                                    }}
                                    checked={modal.useMobile}
                                    id={`cbpc`}
                                    className="tgl tgl-skewed"
                                    type="checkbox"
                                />
                                <label
                                    htmlFor={`cbpc`}
                                    className="tgl-btn"
                                    data-tg-off="OFF"
                                    data-tg-on="ON"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <h6>크기조절</h6>
                        <p>최대 화면 크기를 초과할 수 없습니다.</p>
                        <div className="txt">
                            <input
                                onChange={(e) => {
                                    modal.style = {
                                        ...modal.style,
                                        width: toNumber(e.currentTarget.value),
                                    };
                                    popupHook.setPopups([...popupHook.popups]);
                                }}
                                value={modal.style.width || undefined}
                                type="text"
                                className="w100 mr5"
                                placeholder="width"
                            />
                            <input
                                onChange={(e) => {
                                    modal.style = {
                                        ...modal.style,
                                        height: toNumber(e.currentTarget.value),
                                    };
                                    popupHook.setPopups([...popupHook.popups]);
                                }}
                                value={modal.style.height || undefined}
                                type="text"
                                className="w100"
                                placeholder="height"
                            />
                        </div>
                    </div>
                    <div className="line">
                        <h6>백그라운드 설정</h6>
                        <div className="txt">
                            <div>
                                <div className="fileNameInputLabel">
                                    {modal.style?.backgroundImage && (
                                        <span>
                                            <span className="mr10">
                                                {modal.style?.backgroundImage}
                                            </span>
                                            <CloseIcon
                                                onClick={() => {
                                                    modal.style.backgroundImage =
                                                        undefined;
                                                    popupHook.setPopups([
                                                        ...popupHook.popups,
                                                    ]);
                                                    EmpyFileInput(
                                                        "BackgroundImageInput"
                                                    );
                                                }}
                                                className="fileCloseBtn"
                                            />
                                        </span>
                                    )}
                                </div>
                                <input
                                    id="BackgroundImageInput"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const file = e.currentTarget.files;
                                        if (!file || !homepage) return;

                                        signleUpload(
                                            e.currentTarget.files!,
                                            (url) => {
                                                modal.style = {
                                                    ...modal.style,
                                                    backgroundImage: `url(${url})`,
                                                };
                                                popupHook.setPopups([
                                                    ...popupHook.popups,
                                                ]);
                                            }
                                        );
                                    }}
                                    type="file"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <h6>컨텐츠 설정</h6>
                        <div className="txt">
                            <Editor
                                onChange={(data: any) => {
                                    modal.content = data;
                                    popupHook.setPopups([...popupHook.popups]);
                                }}
                                data={modal.content}
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </Modal2>
    );
};

export default () => <span />;

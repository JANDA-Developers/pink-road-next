import { MasterLayout } from "layout/MasterLayout";
import React, { useContext, useEffect, useState } from "react";
import { usePopups } from "../../../hook/usePopups";
import { useHomepageUpdate } from "../../../hook/useHomepage";
import { AppContext } from "../../_app";
import { Fmodal } from "../../../types/api";
import { openModal } from "../../../utils/popUp";
import { Ipopup } from "../../../types/interface";
import { omits } from "../../../utils/omit";
import { ALLOW_ADMINS, defaultModalGet } from "../../../types/const";
import { cloneObject } from "../../../utils/clone";
import { DesignTopNav } from "../../../components/topNav/MasterTopNav";
import { auth } from "../../../utils/with";
import { JDpopup } from "../../../components/popup/JDpopup";
import { useModal } from "hook/useModal";
import { yyyymmdd } from "../../../utils/yyyymmdd";
import { cutStr } from "../../../utils/cutStr";
import { IPopUpModalHookInfo, PopUpConfigModal } from "./PopUpConfigModal";
import { InfoText } from "../../../components/infoText/InfoText";

interface IProp {}

export const MsDesignB: React.FC<IProp> = () => {
    const { homepage } = useContext(AppContext);
    const popupHook = usePopups(homepage?.modal || [], { autoOpen: false });
    const popupConfigModal = useModal<IPopUpModalHookInfo>();
    const [datePopUp, setDatePopUp] = useState<Ipopup>();
    const [homepageUpdate] = useHomepageUpdate({
        onCompleted: ({ HomepageUpdate }) => {
            if (HomepageUpdate.ok) {
                alert("업데이트 완료");
            }
        },
    });
    const { selectedIndex, setSelcetedIndex, openPopup } = popupHook;

    const handleUpdate = () => {
        homepageUpdate({
            variables: {
                params: {
                    ...omits(homepage),
                    modal: omits(popupHook.popups, [
                        "_id" as any,
                        "__typename",
                        "isOpen",
                    ]),
                },
            },
        });
    };

    const selectedModal =
        selectedIndex !== undefined ? popupHook.popups[selectedIndex] : null;

    // const handleContentChange = (data: string) => {
    //     if (selectedIndex === undefined) throw Error("no selected Index");
    //     popupHook.popups[selectedIndex].content = data;
    //     popupHook.setPopups([...popupHook.popups]);
    // };

    const handleAddPopUp = () => {
        const newPopUp: Ipopup = { ...defaultModalGet() };
        popupHook.popups.push(newPopUp);
        popupHook.setPopups([...popupHook.popups]);
    };

    const handleDelete =
        (popup: Fmodal) =>
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            e.preventDefault();
            const filtered = popupHook.popups.filter(
                (pop) => pop._id !== popup._id
            );
            popupHook.setPopups([...filtered]);
        };

    const handlePreview =
        (popup: Fmodal) =>
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            e.preventDefault();
            popupHook.openPopup(popup);
        };

    const handleCollapesToggle = (popup: Fmodal) => () => {
        // setCollapseList([popup._id]);
    };

    const handleOpenDayPicker = (popup: Fmodal) => () => {
        setTimeout(() => {
            openModal("#dayPickerModal")();
            setDatePopUp(popup);
        }, 100);
    };

    useEffect(() => {
        if (homepage?.modal) popupHook.setPopups(cloneObject(homepage.modal));
    }, [homepage?.modal]);

    return (
        <div>
            <PopUpConfigModal
                key={popupConfigModal.info?.popup._id}
                popupHook={popupHook}
                {...popupConfigModal}
            />
            <MasterLayout>
                <JDpopup popupHook={popupHook} />
                <div className="in ">
                    <h4>디자인 설정</h4>
                    <div className="in_content">
                        <DesignTopNav />
                        <div className="con design popup_setting">
                            <div className="fin">
                                <div className="float_left">
                                    <button
                                        className="btn medium"
                                        onClick={() => {
                                            popupHook.openAllPopUp();
                                        }}
                                    >
                                        OPEN
                                    </button>
                                </div>
                                <div className="float_right">
                                    <button
                                        onClick={handleUpdate}
                                        type="submit"
                                        className="btn medium"
                                    >
                                        저장하기
                                    </button>
                                </div>
                            </div>

                            <div className="popupsetting__list">
                                {popupHook.popups
                                    .sort((a, b) => b.createdAt - a.createdAt)
                                    .map((popup, i) => (
                                        <div
                                            onClick={() => {
                                                popupConfigModal.openModal({
                                                    popup,
                                                });
                                            }}
                                            key={popup._id + "previewCard"}
                                            className="popupsetting__con"
                                        >
                                            <div>
                                                <h5>{popup.title}</h5>
                                                <div className="tag">
                                                    {popup.usePc ? (
                                                        <span className="state_on mr5">
                                                            PC ON
                                                        </span>
                                                    ) : (
                                                        <span className="state_off mr5">
                                                            PC OFF
                                                        </span>
                                                    )}
                                                    {popup.useMobile ? (
                                                        <span className="state_on ">
                                                            MB ON
                                                        </span>
                                                    ) : (
                                                        <span className="state_off ">
                                                            MB OFF
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="body">
                                                <span>
                                                    우선순위: {popup.priority}
                                                </span>
                                                <span className="date">
                                                    {yyyymmdd(popup.startDate)}{" "}
                                                    ~ {yyyymmdd(popup.endDate)}
                                                </span>
                                            </div>
                                            <button
                                                className="btn small mr10"
                                                onClick={handlePreview(popup)}
                                            >
                                                미리보기
                                            </button>
                                            <button
                                                className="btn small"
                                                onClick={handleDelete(popup)}
                                            >
                                                삭제하기
                                            </button>
                                        </div>
                                    ))}
                                <div
                                    className="add mb10"
                                    onClick={handleAddPopUp}
                                >
                                    <button className="btn medium">
                                        <i className="flaticon-add"></i>팝업
                                        생성
                                    </button>
                                </div>
                            </div>
                            <InfoText>우선순위 정렬</InfoText>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        </div>
    );
};

export default auth(ALLOW_ADMINS)(MsDesignB);

{
    /* <div className="popupst_box">
                                <div className="hang_list">
                                    <ul className="list_setting">
                                        {popupHook.popups.map(
                                            (modal, index) => (
                                                <li
                                                    key={`modalLi${index}`}
                                                    className="con_toggle"
                                                >
                                                    <div className="title">
                                                        <h5>
                                                            <span>
                                                                {modal.title}
                                                            </span>
                                                            <div className="switch">
                                                                <input
                                                                    onChange={() => {
                                                                        modal.open =
                                                                            !modal.open;
                                                                        popupHook.setPopups(
                                                                            [
                                                                                ...popupHook.popups,
                                                                            ]
                                                                        );
                                                                    }}
                                                                    checked={
                                                                        modal.open
                                                                    }
                                                                    className="tgl tgl-skewed"
                                                                    id={`cb${index}`}
                                                                    type="checkbox"
                                                                />
                                                                <label
                                                                    className="tgl-btn"
                                                                    data-tg-off="OFF"
                                                                    data-tg-on="ON"
                                                                    htmlFor={`cb${index}`}
                                                                />
                                                            </div>
                                                        </h5>
                                                        <span
                                                            onClick={handleCollapesToggle(
                                                                modal
                                                            )}
                                                            className="control"
                                                        >
                                                            <i className="flaticon-megaphone-1"></i>
                                                        </span>
                                                    </div>
                                                    <div className="content">
                                                       
                                                        <div className="line">
                                                            <h6>우선순위</h6>
                                                            <div className="txt">
                                                                <select
                                                                    value={
                                                                        modal.priority
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        const order =
                                                                            e
                                                                                .currentTarget
                                                                                .value;
                                                                        modal.priority =
                                                                            toNumber(
                                                                                order
                                                                            );
                                                                        popupHook.setPopups(
                                                                            [
                                                                                ...popupHook.popups,
                                                                            ]
                                                                        );
                                                                    }}
                                                                    className="w50"
                                                                >
                                                                    <option
                                                                        value={
                                                                            0
                                                                        }
                                                                    >
                                                                        0
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            1
                                                                        }
                                                                    >
                                                                        1
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            2
                                                                        }
                                                                    >
                                                                        2
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            3
                                                                        }
                                                                    >
                                                                        3
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            4
                                                                        }
                                                                    >
                                                                        4
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            5
                                                                        }
                                                                    >
                                                                        5
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="line">
                                                            <h6>노출기간</h6>
                                                            <div className="txt">
                                                                <div className="input_box mr5">
                                                                    <input
                                                                        onClick={handleOpenDayPicker(
                                                                            modal
                                                                        )}
                                                                        readOnly
                                                                        value={dayjs(
                                                                            modal.startDate
                                                                        ).format(
                                                                            "YYYY.MM.DD"
                                                                        )}
                                                                        type="text"
                                                                        className="day w100"
                                                                    />
                                                                    <CalendarIcon
                                                                        onClick={handleOpenDayPicker(
                                                                            modal
                                                                        )}
                                                                    />
                                                                </div>
                                                                <span className="pc">
                                                                    {" "}
                                                                    ~{" "}
                                                                </span>
                                                                <div className="input_box ml5">
                                                                    <input
                                                                        onClick={handleOpenDayPicker(
                                                                            modal
                                                                        )}
                                                                        readOnly
                                                                        value={dayjs(
                                                                            modal.endDate
                                                                        ).format(
                                                                            "YYYY.MM.DD"
                                                                        )}
                                                                        type="text"
                                                                        className="day w100"
                                                                    />
                                                                    <CalendarIcon
                                                                        onClick={handleOpenDayPicker(
                                                                            modal
                                                                        )}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="line">
                                                            <h6>링크연결</h6>

                                                            <div className="txt">
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        modal.link =
                                                                            e.currentTarget.value;
                                                                        popupHook.setPopups(
                                                                            [
                                                                                ...popupHook.popups,
                                                                            ]
                                                                        );
                                                                    }}
                                                                    value={
                                                                        modal.link ||
                                                                        undefined
                                                                    }
                                                                    type="text"
                                                                    className="w100"
                                                                    placeholder="https://"
                                                                />
                                                                <select
                                                                    value={
                                                                        modal.linkBehavior ||
                                                                        LinkBehavior._blank
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        modal.linkBehavior =
                                                                            e
                                                                                .currentTarget
                                                                                .value as LinkBehavior;
                                                                        popupHook.setPopups(
                                                                            [
                                                                                ...popupHook.popups,
                                                                            ]
                                                                        );
                                                                    }}
                                                                    className="w100 mt5"
                                                                >
                                                                    <option
                                                                        value={
                                                                            LinkBehavior._blank
                                                                        }
                                                                    >
                                                                        새창
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            LinkBehavior._self
                                                                        }
                                                                    >
                                                                        현재창
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="line">
                                                            <h6>좌표설정</h6>
                                                            <p>
                                                                모바일일떄는
                                                                가운데 정렬
                                                                됩니다.
                                                            </p>
                                                            <div className="txt">
                                                                left
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        modal.style =
                                                                            {
                                                                                ...modal.style,
                                                                                left: toNumber(
                                                                                    e
                                                                                        .currentTarget
                                                                                        .value
                                                                                ),
                                                                            };
                                                                        popupHook.setPopups(
                                                                            [
                                                                                ...popupHook.popups,
                                                                            ]
                                                                        );
                                                                    }}
                                                                    value={
                                                                        modal
                                                                            .style
                                                                            .left ||
                                                                        undefined
                                                                    }
                                                                    type="text"
                                                                    className="w100"
                                                                />
                                                                top
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        modal.style =
                                                                            {
                                                                                ...modal.style,
                                                                                top: toNumber(
                                                                                    e
                                                                                        .currentTarget
                                                                                        .value
                                                                                ),
                                                                            };
                                                                        popupHook.setPopups(
                                                                            [
                                                                                ...popupHook.popups,
                                                                            ]
                                                                        );
                                                                    }}
                                                                    value={
                                                                        modal
                                                                            .style
                                                                            .top ||
                                                                        undefined
                                                                    }
                                                                    type="text"
                                                                    className="w100"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="line">
                                                            <h6>PC/Mobile</h6>
                                                            <div className="txt">
                                                                <div className="switch">
                                                                    모바일 사용
                                                                    <input
                                                                        onChange={() => {
                                                                            modal.useMobile =
                                                                                !modal.useMobile;
                                                                            popupHook.setPopups(
                                                                                [
                                                                                    ...popupHook.popups,
                                                                                ]
                                                                            );
                                                                        }}
                                                                        checked={
                                                                            modal.useMobile
                                                                        }
                                                                        className="tgl tgl-skewed"
                                                                        id={`cbpc${index}`}
                                                                        type="checkbox"
                                                                    />
                                                                    <label
                                                                        className="tgl-btn"
                                                                        data-tg-off="OFF"
                                                                        data-tg-on="ON"
                                                                        htmlFor={`cbpc${index}`}
                                                                    />
                                                                </div>
                                                                <div className="switch">
                                                                    PC사용
                                                                    <input
                                                                        onChange={() => {
                                                                            modal.usePc =
                                                                                !modal.usePc;
                                                                            popupHook.setPopups(
                                                                                [
                                                                                    ...popupHook.popups,
                                                                                ]
                                                                            );
                                                                        }}
                                                                        checked={
                                                                            modal.usePc
                                                                        }
                                                                        className="tgl tgl-skewed"
                                                                        id={`cbmb${index}`}
                                                                        type="checkbox"
                                                                    />
                                                                    <label
                                                                        className="tgl-btn"
                                                                        data-tg-off="OFF"
                                                                        data-tg-on="ON"
                                                                        htmlFor={`cbmb${index}`}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="line">
                                                            <h6>크기조절</h6>
                                                            <p>
                                                                최대 화면 크기를
                                                                초과할 수
                                                                없습니다.
                                                            </p>
                                                            <div className="txt">
                                                                width
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        modal.style =
                                                                            {
                                                                                ...modal.style,
                                                                                width: toNumber(
                                                                                    e
                                                                                        .currentTarget
                                                                                        .value
                                                                                ),
                                                                            };
                                                                        popupHook.setPopups(
                                                                            [
                                                                                ...popupHook.popups,
                                                                            ]
                                                                        );
                                                                    }}
                                                                    value={
                                                                        modal
                                                                            .style
                                                                            .width ||
                                                                        undefined
                                                                    }
                                                                    type="text"
                                                                    className="w100"
                                                                />
                                                                height
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        modal.style =
                                                                            {
                                                                                ...modal.style,
                                                                                height: toNumber(
                                                                                    e
                                                                                        .currentTarget
                                                                                        .value
                                                                                ),
                                                                            };
                                                                        popupHook.setPopups(
                                                                            [
                                                                                ...popupHook.popups,
                                                                            ]
                                                                        );
                                                                    }}
                                                                    value={
                                                                        modal
                                                                            .style
                                                                            .height ||
                                                                        undefined
                                                                    }
                                                                    type="text"
                                                                    className="w100"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="line">
                                                            <h6>
                                                                백그라운드 설정
                                                            </h6>
                                                            <div className="txt">
                                                                <div className="fileNameInputLabel">
                                                                    {
                                                                        modal
                                                                            .style
                                                                            ?.backgroundImage
                                                                    }
                                                                </div>
                                                                <input
                                                                    onChange={(
                                                                        e: React.ChangeEvent<HTMLInputElement>
                                                                    ) => {
                                                                        const file =
                                                                            e
                                                                                .currentTarget
                                                                                .files;
                                                                        if (
                                                                            !file ||
                                                                            !homepage
                                                                        )
                                                                            return;

                                                                        signleUpload(
                                                                            e
                                                                                .currentTarget
                                                                                .files!,
                                                                            (
                                                                                url
                                                                            ) => {
                                                                                modal.style =
                                                                                    {
                                                                                        ...modal.style,
                                                                                        backgroundImage: `url(${url})`,
                                                                                    };
                                                                                // setPopModal({
                                                                                //     ...modal
                                                                                // })
                                                                            }
                                                                        );
                                                                    }}
                                                                    type="file"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="line">
                                                            <h6>컨텐츠 설정</h6>
                                                            <div className="txt">
                                                                <div className="fileNameInputLabel">
                                                                    {
                                                                        modal
                                                                            .style
                                                                            ?.backgroundImage
                                                                    }
                                                                </div>
                                                                <Editor
                                                                    onChange={(
                                                                        data: any
                                                                    ) => {
                                                                        modal.content =
                                                                            data;
                                                                        popupHook.setPopups(
                                                                            [
                                                                                ...popupHook.popups,
                                                                            ]
                                                                        );
                                                                    }}
                                                                    data={
                                                                        modal.content
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                        <li className="add_popup">
                                            <button onClick={handleAddPopUp}>
                                                <i className="flaticon-add"></i>{" "}
                                                팝업생성
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="fin">
                                <div className="float_left"></div>
                                <div className="float_right">
                                    <button
                                        onClick={handleUpdate}
                                        type="submit"
                                        className="btn medium"
                                    >
                                        저장하기
                                    </button>
                                </div>
                            </div> */
}

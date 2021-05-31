import { useContext, useState } from "react";
import { AppContext } from "../../pages/_app";
import {
    FkakaoTemplate,
    kakaoTemplateCreateVariables,
    NotificationTriggerCreateInput,
    NotificationTriggerEvent,
    ReplaceString,
    SmsTemplateCreateInput,
    smstemplateCreateVariables,
} from "../../types/api";
import { ReplaceKr } from "../../types/interface";
import { closeModal } from "../../utils/popUp";
import { Modal } from "../modal/Modal";
import { replaceObj } from "../../types/sms";
import {
    useKakaoTemplateCreate,
    useKakaoTemplateDelete,
    useKakaoTemplateUpdate,
} from "../../hook/useKakao";

interface ITriggerDefault
    extends Omit<NotificationTriggerCreateInput, "event"> {
    event: null;
}

interface IProps {
    template?: FkakaoTemplate;
}

export type TSMStemplateTag =
    | "MEMBER"
    | "RESERVATION"
    | "SETTLEMENT"
    | "PRODUCT";

export const KakaoModal: React.FC<IProps> = ({ template }) => {
    const { myProfile } = useContext(AppContext);

    const isCreate = !template;
    // get templates

    const [update] = useKakaoTemplateUpdate({
        onCompleted: ({ KakaoTemplateUpdate }) => {
            if (KakaoTemplateUpdate.ok) closeModal("#SMSmodal")();
            else {
                alert(KakaoTemplateUpdate.error.message);
            }
        },
    });
    const [create] = useKakaoTemplateCreate({
        onCompleted: ({ KakaoTemplateCreate }) => {
            if (KakaoTemplateCreate.ok) closeModal("#SMSmodal")();
            else {
                alert(KakaoTemplateCreate.error.message);
            }
        },
    });

    const [deleteMu] = useKakaoTemplateDelete({
        onCompleted: ({ KakaoTemplateDelete }) => {
            if (KakaoTemplateDelete.ok) closeModal("#SMSmodal")();
            else {
                alert(KakaoTemplateDelete.error.message);
            }
        },
    });

    const [input, setInput] = useState<kakaoTemplateCreateVariables>({
        event: NotificationTriggerEvent.BANK_TRANSFER_BOOKER,
        input: {
            tpl_content: template?.templtContent,
            tpl_name: template?.templtName,
        },
    });

    const handleCreate = () => {
        create({
            //트리거에 값이 있는지 확인하고 있으면 넣고 없으면 넣지 않는다.
            variables: {
                event: input.event,
                input: {
                    tpl_content: input.input.tpl_content,
                    tpl_name: input.input.tpl_name,
                },
            },
        });
    };

    const handleUpdate = () => {
        if (!template) throw Error("template is not exsit ");
        update({
            variables: {
                event: input.event,
                input: {
                    tpl_content: input.input.tpl_content,
                    tpl_name: input.input.tpl_name,
                },
                templtCode: template.templtCode,
            },
        });
    };

    const handelDelete = () => {
        if (!template) throw Error("template is not exsit ");
        deleteMu({
            variables: {
                tpl_code: template.templtCode,
            },
        });
    };

    const hanldeReplaceString = (TUMP: ReplaceString) => () => {
        input.input.tpl_content += `#{${TUMP}}`;
        setInput({ ...input });
    };

    return (
        <Modal
            inClassName="homepage_popup"
            className="popup_bg_full"
            title="템플릿 설정"
            id="SMSmodal"
        >
            <div>
                <div className="sms-box">
                    <div className="setting left">
                        <ul className="list">
                            <li>
                                <div className="th">타이틀</div>
                                <div className="td">
                                    <input
                                        onChange={(e) => {
                                            const title = e.currentTarget.value;
                                            input.input.tpl_name = title;
                                            setInput({ ...input });
                                        }}
                                        value={input.input.tpl_name}
                                        className="w100"
                                        placeholder=""
                                        type="text"
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="th">자동발신</div>
                                <div className="td">
                                    <select
                                        value={input?.event || ""}
                                        onChange={(e) => {
                                            const Event = e.currentTarget.value;
                                            input.event =
                                                Event as NotificationTriggerEvent;
                                            setInput({ ...input });
                                        }}
                                        className="w40"
                                    >
                                        <option value="">= 상태 =</option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.CANCEL_BOOKING_BOOKER
                                            }
                                        >
                                            예약취소시 예약자에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.CANCEL_BOOKING_SELLER
                                            }
                                        >
                                            예약취소시 판매자에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.COMPLETE_BOOKING_BOOKER
                                            }
                                        >
                                            예약완료시 구매자에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.COMPLETE_BOOKING_SELLER
                                            }
                                        >
                                            예약완료시 판매자에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.SIGNUP_PARTNER_USER
                                            }
                                        >
                                            {" "}
                                            일반파트너 회원가입시 유저에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.SIGNUP_PARNTER_B_USER
                                            }
                                        >
                                            기업파트너 회원가입시 유저에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.SIGNUP_INDI_USER
                                            }
                                        >
                                            일반회원 회원가입시 유저에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.SETTLEMENT_REQUEST
                                            }
                                        >
                                            정산 요청시 요청자에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.SETTLEMENT_COMPLETE
                                            }
                                        >
                                            정산 완료시 요청자에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.SETTLEMENT_REJECT
                                            }
                                        >
                                            정산 거절시 요청자에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.PRODUCT_CONFIRM_REQUEST
                                            }
                                        >
                                            상품검토 요청시 판매자에게
                                        </option>
                                        <option
                                            value={
                                                NotificationTriggerEvent.PRODUCT_EXPIRE_SELLER
                                            }
                                        >
                                            상품 만료시 판매자에게
                                        </option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div className="th">자동메시지</div>
                                <div className="td">
                                    <ul className="text_ul">
                                        {input.event &&
                                            (
                                                replaceObj[
                                                    input.event
                                                ] as ReplaceString[]
                                            ).map((r) => (
                                                <li
                                                    key={r}
                                                    onClick={hanldeReplaceString(
                                                        r
                                                    )}
                                                >
                                                    <span>{ReplaceKr[r]}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="form right">
                        <textarea
                            onChange={(e) => {
                                const val = e.currentTarget.value;
                                input.input.tpl_content = val;
                                setInput({
                                    ...input,
                                });
                            }}
                            value={input.input.tpl_content}
                        />
                    </div>
                </div>
                <div className="fin ifMobile">
                    <div className="float_left">
                        <button
                            onClick={isCreate ? handleCreate : handleUpdate}
                            type="submit"
                            className="btn medium"
                        >
                            {isCreate ? "생성하기" : "수정하기"}
                        </button>
                        <button
                            onClick={handelDelete}
                            type="submit"
                            className="btn medium"
                        >
                            삭제하기
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

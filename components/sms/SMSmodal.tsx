import { useContext, useState } from "react";
import { useSmsTemplateCreate, useSmsTemplateDelete, useSmsTemplateUpdate } from "../../hook/useNotification";
import { AppContext } from "../../pages/_app";
import { FsmsTemplate, NotificationTriggerCreateInput, NotificationTriggerEvent, SmsTemplateCreateInput, smstemplateCreateVariables } from "../../types/api";
import { E_INPUT, ReplaceString } from "../../types/interface";
import { closeModal } from "../../utils/popUp";
import { Modal } from "../modal/Modal";


interface ITriggerDefault extends Omit<NotificationTriggerCreateInput, "event"> {
    event: null
}

interface IProps {
    template?: FsmsTemplate;
}

type TSMStemplateTag = "MEMBER" | "RESERVATION" | "SETTLEMENT"

export const SMSmodal: React.FC<IProps> = ({ template }) => {
    const { me } = useContext(AppContext);

    // get templates 
    const [smsTag, setTag] = useState<TSMStemplateTag>("MEMBER");
    const [update] = useSmsTemplateUpdate();
    const [create] = useSmsTemplateCreate({
        onCompleted: ({ SmsTemplateCreate }) => {
            if (SmsTemplateCreate.ok)
                closeModal("#SMSmodal")()
        }
    });
    const [deleteMu] = useSmsTemplateDelete();

    //발신전략은 한 템플릿에 하나의 트리거만 연결되도록 한다. 
    const [input, setInput] = useState<SmsTemplateCreateInput>({
        name: template?.name || "",
        content: template?.content || "",
        description: template?.description || "",
    });

    const [trigger, setTrigger] = useState<NotificationTriggerCreateInput | ITriggerDefault>(template?.trigger[0] || {
        event: null,
        isEnabled: false,
        sender: "",
        tags: []
    })

    const handleCreate = () => {
        create({
            //트리거에 값이 있는지 확인하고 있으면 넣고 없으면 넣지 않는다.
            variables: {
                input
            }
        })
    }

    function set<T extends keyof SmsTemplateCreateInput>(key: T) {
        return (e: E_INPUT) => {
            // @ts-ignore
            input[key] = e.currentTarget.value;
            setInput({ ...input })
        }
    }

    const hanldeReplaceString = (TUMP: ReplaceString) => () => {
        input.content += TUMP;
        setInput({ ...input })
    }

    return <Modal inClassName="homepage_popup" className="popup_bg_full" title="템플릿 설정" id="SMSmodal">
        <div className="sms-box">
            <div className="setting left">
                <ul className="list">
                    <li>
                        <div className="th">카테고리</div>
                        <div className="td">
                            <select value={smsTag} className="w50">
                                <option value="MEMBER">회원</option>
                                <option value="RESERVATION">예약</option>
                                <option value="SETTLEMENT">정산</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div className="th">타이틀</div>
                        <div className="td"><input onChange={set("name")} value={input.name} className="w100" placeholder="" type="text" /></div>
                    </li>

                    {/* 카테고리가 예약일때 */}
                    {smsTag === "RESERVATION" &&
                        <li>
                            <div className="th">자동메시지</div>
                            <div className="td">
                                <ul className="text_ul">
                                    <li onClick={hanldeReplaceString(ReplaceString.BOOKERNMAE)}><span>예약자명</span></li>
                                    <li onClick={hanldeReplaceString(ReplaceString.TRAVEL_DATE_YMD)}><span>여행일자(년/월/일)</span></li>
                                    <li onClick={hanldeReplaceString(ReplaceString.PEOPLE)}><span>예약인원(총인원)</span></li>
                                    <li onClick={hanldeReplaceString(ReplaceString.PRICE)}><span>결제금액</span></li>
                                    <li onClick={hanldeReplaceString(ReplaceString.TRAVEL_DATE_YMD)}><span>상품명(상품명/출발장소/출발일시)</span></li>
                                </ul>
                            </div>
                        </li>
                    }

                    {/* 카테고리가 회원일때 */}
                    <li>
                        <div className="th">자동메시지</div>
                        <div className="td">
                            <ul className="text_ul">
                                {smsTag === "MEMBER" && <>
                                    <li onClick={hanldeReplaceString(ReplaceString.BOOKERNMAE)}><span>회원명(파트너사명)</span></li>
                                    <li><span>예약정보(상품명/예약인원/예약금/출발일자)</span></li>
                                    <li><span>예약상태(완료/취소)</span></li>
                                    <li><span>여행출발(확정/미확정)</span></li>
                                    <li><span>승인상태(미승인/승인)</span></li>
                                </>
                                }
                            </ul>
                        </div>
                    </li>
                    {/* 카테고리가 정산일때 */}
                    {smsTag === "SETTLEMENT" &&
                        <li>
                            <div className="th">자동메시지</div>
                            <div className="td">
                                <ul className="text_ul">
                                    <li><span>회원정보(파트너명)</span></li>
                                    <li><span>상품정보(상품명/인원/총금액)</span></li>
                                </ul>
                            </div>
                        </li>
                    }

                    {/* 자동 */}
                    <li>
                        <div className="th">자동발신 활성화 여부</div>
                        <div className="td">
                            <div className="switch">
                                <input onChange={() => {
                                    trigger.isEnabled = !trigger.isEnabled
                                    setTrigger({ ...trigger })
                                }} className="tgl tgl-skewed" checked={trigger.isEnabled} id="cb3" type="checkbox" />
                                <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                            </div>
                        </div>
                    </li>

                    {/*  자동발신 활성화시 보여주기 */}
                    {/*  각 태그에 맞는 발신 이벤트를 보여주자 */}
                    <li>
                        <div className="th">자동발신</div>
                        <div className="td">
                            <select value={trigger?.event || ""} onChange={(e) => {
                                const Event = e.currentTarget.value;
                                trigger.event = Event as any;
                                setTrigger({ ...trigger });
                            }} className="w40">
                                <option value="">= 상태 =</option>

                                {smsTag === "RESERVATION" &&
                                    <>
                                        <option value="">예약취소시 구매자에게</option>
                                        <option value="">예약취소시 판매자에게</option>
                                        <option value="">예약완료시 구매자에게</option>
                                        <option value="">예약완료시 판매자에게</option>
                                        <option value="">출발확정시 구매자에게</option>
                                        <option value="">출발확정시 판매자에게</option>
                                        <option value="">출발무산시 구매자에게</option>
                                        <option value="">출발무산시 판매자에게</option>
                                        <option value="">무통장결제시 구매자에게</option>
                                        <option value="">무통장결제시 판매자에게</option>
                                    </>
                                }
                                {smsTag === "MEMBER" && <>
                                    <option value=""> 일반파트너 회원가입시 유저에게</option>
                                    <option value="">비지니스파트너 회원가입시 유저에게</option>
                                    <option value="">일반회원 회원가입시 유저에게</option>
                                </>}
                                {smsTag === "SETTLEMENT" && <>
                                    <option value="">정산신청시 신청자에게</option>
                                    <option value="">승인요청시 신청자에게</option>
                                </>}
                            </select>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="form right">
                <textarea>

                </textarea>
                <div className="count">0Byte</div>
                <p className="infotxt_gray">80Byte 이하일땐 80Byte 이상시 LMS입니다.</p>
            </div>
        </div>
        <div className="fin ifMobile">
            <div className="float_left">
                <button onClick={handleCreate} type="submit" className="btn medium">생성하기</button>
                <button type="submit" className="btn medium">삭제하기</button>
            </div>
            <div className="float_right">
                <button type="submit" className="btn medium">저장하기</button>
            </div>
        </div>
    </Modal>

    return <div id="Popup01" className="popup_bg_full" >
        <div className="in_txt homepage_popup">
            <a className="close_icon" onClick={popupClose}>
                <i className="flaticon-multiply"></i>
            </a>
            <div className="page">
                <h3>템플릿 설정</h3>
                {/* 가입 */}

            </div>
        </div>
    </div>
}



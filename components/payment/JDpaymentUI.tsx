import React, { useContext, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useHomepage } from "../../hook/useHomepage";
import { AppContext } from "../../pages/_app";
import {
    Fbooking,
    Fhomepage,
    Fhomepage_bankInfo,
    homepage_Homepage_data_bankInfo,
    PayMethod,
} from "../../types/api";
import { TElements } from "../../types/interface";
import { nameOf, phoneNumberOf } from "../../utils/enumToKr";
import { autoHypenPhone } from "../../utils/formatter";
import { closeModal, openModal } from "../../utils/popUp";
import { getFromUrl } from "../../utils/url";
import { Validater } from "../../utils/validate";
import { Modal } from "../modal/Modal";
import { Policy } from "../policy/PriviacyPolicy";

type TRequirePolicy = Pick<
    Fhomepage,
    "bookingPrivacyPolicy" | "bookingThirdPolicy" | "travelerPolicy"
>;
type CKlist = Record<keyof TRequirePolicy, boolean>;
export type TPaySubmitInfo = {
    buyerInfo: {
        phone: string;
        name: string;
        email: string;
        memo: string;
    };
    payMethod: PayMethod;
    bankTransInput: IBankInput;
};

interface IProp {
    Preview: TElements;
    onDoPay: (param: TPaySubmitInfo) => void;
    booking?: Fbooking;
}

interface IBankInput extends Omit<Fhomepage_bankInfo, "__typename"> {
    bankTransfter: string;
}

{
    /* TODO 독립처리 => 나중에 시간나면 */
}
export const JDpaymentUI: React.FC<IProp> = ({ Preview, onDoPay, booking }) => {
    const { isLogin, myProfile } = useContext(AppContext);
    const urlPhone = getFromUrl("phone") || "";
    const urlName = getFromUrl("name") || "";
    const { data: item } = useHomepage();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [payMethod, setPayMethod] = useState<PayMethod>(PayMethod.BANK);
    const [buyerInfo, setBuyerInfo] = useState({
        phone: phoneNumberOf(myProfile),
        name: nameOf(myProfile) || "",
        email: myProfile?.email || "",
        memo: "",
    });

    const [bankRefundInfo, setBankRefundInfo] = useState<IBankInput>({
        bankTransfter: "",
        accountHolder: "",
        accountNumber: "",
        bankName: "",
    });

    const submitInfo: TPaySubmitInfo = {
        buyerInfo,
        payMethod,
        bankTransInput: bankRefundInfo,
    };

    const bankInfo: homepage_Homepage_data_bankInfo | undefined =
        item?.bankInfo || undefined;

    const UnLoginedFrom = (
        <div>
            <div className="tr">
                <div className="th">이름</div>
                <div className="td">
                    <input
                        value={buyerInfo.name}
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            buyerInfo.name = val;
                            setBuyerInfo({
                                ...buyerInfo,
                            });
                        }}
                        type="text"
                    />
                </div>
            </div>
            <div className="tr">
                <div className="th">연락처</div>
                <div className="td">
                    <input
                        value={autoHypenPhone(buyerInfo.phone)}
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            buyerInfo.phone = val;
                            setBuyerInfo({
                                ...buyerInfo,
                            });
                        }}
                        type="text"
                    />
                </div>
            </div>
            <div className="tr">
                <div className="th">이메일</div>
                <div className="td">
                    <input
                        value={buyerInfo.email}
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            buyerInfo.email = val;
                            setBuyerInfo({
                                ...buyerInfo,
                            });
                        }}
                        type="text"
                    />
                </div>
            </div>
        </div>
    );

    function set<T extends keyof typeof buyerInfo>(key: T) {
        return (value: any) => {
            buyerInfo[key] = value;
            setBuyerInfo({ ...buyerInfo });
        };
    }

    const [chkPolocy, setChkPolicy] = useState<CKlist>({
        bookingPrivacyPolicy: false,
        bookingThirdPolicy: false,
        travelerPolicy: false,
    });

    let chkAll = true;
    (() => {
        let policy: keyof CKlist;
        let agreeAll = chkPolocy;
        for (policy in agreeAll) {
            if (!agreeAll[policy]) {
                chkAll = false;
            }
        }
    })();

    const { validate } = new Validater([
        {
            value: buyerInfo.name,
            failMsg: "구매자 이름은 필수 입니다.",
        },
        {
            value: buyerInfo.phone,
            failMsg: "구매자 연락처는 필수 입니다.",
        },
        {
            value: chkAll,
            failMsg: "필수 약관에 동의 해주세요.",
        },
    ]);

    const handlePayment = () => {
        if (validate()) {
            onDoPay(submitInfo);
        }
    };

    const isCheckAll = () => {
        let chkAll = true;
        let policy: keyof CKlist;

        for (policy in chkPolocy) {
            const check = chkPolocy[policy];
            if (!check) {
                chkAll = false;
                break;
            }
        }

        return chkAll;
    };

    const handleAgreeAll = () => {
        const toggle = (flag: boolean) => {
            let policy: keyof CKlist;
            let agreeAll = chkPolocy;
            for (policy in agreeAll) {
                agreeAll[policy] = flag;
            }
            setChkPolicy({
                ...agreeAll,
            });
        };

        toggle(true);
    };

    const handlePolicy = (policyTarget: keyof CKlist) => {
        let agreeNewState = chkPolocy;
        agreeNewState[policyTarget] = !chkPolocy[policyTarget];
        setChkPolicy({
            ...agreeNewState,
        });
    };

    const openPolicy = (index: number) => () => {
        setSelectedIndex(index);
        openModal("#PolicyModal")();
    };

    // const { } = item;

    return (
        <div className="payment_box ">
            <div className="head">
                {Preview}
                <div className="write_type write_type_box mt20">
                    <h4 className="title">결제수단</h4>
                    <div className="input_form">
                        <span id="category" className="category r3">
                            {/* <select onChange={(e) => {
                            const val = e.currentTarget.value;
                            setPayMethod(val as PayMethod)
                        }} value={payMethod} name="category_srl">
                            <option value={PayMethod.BANK}>
                                카드결제
                            </option>
                            <option value={PayMethod.NICEPAY_CARD} >
                                무통장입금
                            </option>
                        </select> */}
                            <ul className="paymethod__Check">
                                <li>
                                    <div
                                        onClick={() => {
                                            setPayMethod(
                                                PayMethod.NICEPAY_CARD
                                            );
                                        }}
                                        className="paymethod__Check_head"
                                    >
                                        <span>
                                            <input
                                                checked={
                                                    payMethod ===
                                                    PayMethod.NICEPAY_CARD
                                                }
                                                type="radio"
                                            />
                                        </span>
                                        <span className="title">카드결제</span>
                                        {/* <button /> */}
                                    </div>
                                    {payMethod === PayMethod.NICEPAY_CARD &&
                                        !isLogin && (
                                            <div className="paymethod__Check_body">
                                                <div className="paymethod__Check_table">
                                                    {UnLoginedFrom}
                                                </div>
                                            </div>
                                        )}
                                </li>
                                <li>
                                    <div
                                        onClick={() => {
                                            setPayMethod(PayMethod.BANK);
                                        }}
                                        className="paymethod__Check_head"
                                    >
                                        <span>
                                            <input
                                                checked={
                                                    payMethod === PayMethod.BANK
                                                }
                                                type="radio"
                                            />
                                        </span>
                                        <span className="title">
                                            무통장입금
                                        </span>
                                        {/* <button /> */}
                                    </div>
                                    {payMethod === PayMethod.BANK && (
                                        <div className="paymethod__Check_body">
                                            <div className="paymethod__Check_table">
                                                {isLogin || UnLoginedFrom}
                                                <div className="tr">
                                                    <div className="th">
                                                        입금은행
                                                    </div>
                                                    <div className="td">
                                                        <span className="mr5">
                                                            {bankInfo?.bankName}
                                                        </span>
                                                        <span className="mr15">
                                                            {
                                                                bankInfo?.accountNumber
                                                            }
                                                        </span>
                                                        <span>
                                                            예금주:
                                                            {
                                                                bankInfo?.accountHolder
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="tr">
                                                    <div className="th">
                                                        입금자 정보
                                                    </div>
                                                    <div className="td">
                                                        <input
                                                            onChange={(e) => {
                                                                const val =
                                                                    e
                                                                        .currentTarget
                                                                        .value;
                                                                bankRefundInfo.bankTransfter =
                                                                    val;
                                                                setBankRefundInfo(
                                                                    {
                                                                        ...bankRefundInfo,
                                                                    }
                                                                );
                                                            }}
                                                            value={
                                                                bankRefundInfo.bankTransfter
                                                            }
                                                            type="text"
                                                            className="mr5"
                                                            placeholder="입금자명"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="tr">
                                                    <div className="th">
                                                        환불방법
                                                    </div>
                                                    <div className="td">
                                                        <div className="radio_check">
                                                            <input
                                                                checked={true}
                                                                type="radio"
                                                            />{" "}
                                                            본인 계좌환불
                                                        </div>
                                                        <div className="bank_info">
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const val =
                                                                        e
                                                                            .currentTarget
                                                                            .value;
                                                                    bankRefundInfo.bankName =
                                                                        val;
                                                                    setBankRefundInfo(
                                                                        {
                                                                            ...bankRefundInfo,
                                                                        }
                                                                    );
                                                                }}
                                                                value={
                                                                    bankRefundInfo.bankName ||
                                                                    ""
                                                                }
                                                                type="text"
                                                                className="mr5"
                                                                placeholder="은행명"
                                                            />
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const val =
                                                                        e
                                                                            .currentTarget
                                                                            .value;
                                                                    bankRefundInfo.accountHolder =
                                                                        val;
                                                                    setBankRefundInfo(
                                                                        {
                                                                            ...bankRefundInfo,
                                                                        }
                                                                    );
                                                                }}
                                                                value={
                                                                    bankRefundInfo.accountHolder ||
                                                                    ""
                                                                }
                                                                type="text"
                                                                className="mr5"
                                                                placeholder="예금주"
                                                            />
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const val =
                                                                        e
                                                                            .currentTarget
                                                                            .value;
                                                                    bankRefundInfo.accountNumber =
                                                                        val;
                                                                    setBankRefundInfo(
                                                                        {
                                                                            ...bankRefundInfo,
                                                                        }
                                                                    );
                                                                }}
                                                                value={
                                                                    bankRefundInfo.accountNumber ||
                                                                    ""
                                                                }
                                                                type="text"
                                                                placeholder="계좌번호"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="info__txt gray">
                                                <i className="jandaicon-info2 mini"></i>{" "}
                                                무통장 입금은 24시간 이내에
                                                입금하지 않으시면 예약이
                                                자동취소 됩니다.
                                            </p>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="write_comment payment__memoForm">
                    <h3>예약메모</h3>
                    <div className="comment_layout">
                        <ul className="text_box">
                            <li>
                                <div className="txta w100">
                                    <textarea
                                        onChange={(e) => {
                                            const val = e.currentTarget.value;
                                            buyerInfo.memo = val;
                                            setBuyerInfo({
                                                ...buyerInfo,
                                            });
                                        }}
                                        maxLength={3000}
                                        value={buyerInfo.memo}
                                        className="payment__textarea"
                                        style={{ height: "100px" }}
                                        placeholder="예약시 전달할 메모를 작성해 주세요 :)"
                                    ></textarea>
                                </div>
                            </li>
                            <li className="tr count">
                                {buyerInfo.memo.length}/3000
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="agreeChk__box">
                    <h4 className="title">약관동의</h4>
                    <div className="agreeChk">
                        {/* <input checked={chkAll} type="checkbox" className="checkbox" onChange={handleAgreeAll} /> */}
                        <span className="checkbox">
                            <input
                                checked={chkAll}
                                type="checkbox"
                                className="checkbox"
                                onChange={handleAgreeAll}
                                name="agreeChek01"
                                id="agreeChek01"
                                title="전체선택"
                            />
                            <label htmlFor="agreeChek01" />
                        </span>
                        <span>모두 동의합니다</span>
                    </div>
                    <div className="agreeChk_list">
                        <ul>
                            {/* <Tab>이용약관</Tab> */}
                            <li>
                                {/* ALL */}
                                <div className="in_box1">
                                    {/* <input type="checkbox" className="checkbox"
                                    checked={chkPolocy.travelerPolicy}
                                    onChange={() => { handlePolicy('travelerPolicy') }} /> */}
                                    <span className="checkbox">
                                        <input
                                            checked={chkPolocy.travelerPolicy}
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => {
                                                handlePolicy("travelerPolicy");
                                            }}
                                            name="agreeChek02"
                                            id="agreeChek02"
                                            title="선택"
                                        />
                                        <label htmlFor="agreeChek02" />
                                    </span>
                                    <span className="txt">
                                        <strong>여행자약관</strong>[필수]
                                    </span>
                                </div>
                                <div className="in_box2">
                                    <a onClick={openPolicy(0)}>전문보기 &gt;</a>
                                </div>
                            </li>
                            {/* <Tab>개인정보 수집 및 이용 동의</Tab> */}
                            <li>
                                {/* ALL */}
                                <div className="in_box1">
                                    {/* <input type="checkbox" className="checkbox"
                                    checked={chkPolocy.bookingPrivacyPolicy}
                                    onClick={() => { handlePolicy('bookingPrivacyPolicy') }} /> */}
                                    <span className="checkbox">
                                        <input
                                            checked={
                                                chkPolocy.bookingPrivacyPolicy
                                            }
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => {
                                                handlePolicy(
                                                    "bookingPrivacyPolicy"
                                                );
                                            }}
                                            name="agreeChek04"
                                            id="agreeChek04"
                                            title="선택"
                                        />
                                        <label htmlFor="agreeChek04" />
                                    </span>
                                    <span className="txt">
                                        <strong>개인정보수집 및 이용</strong>
                                        [필수]
                                    </span>
                                </div>
                                <div className="in_box2">
                                    <a onClick={openPolicy(1)}>전문보기 &gt;</a>
                                </div>
                            </li>
                            {/* <Tab>개인정보 제 3자 제공</Tab> */}
                            <li>
                                {/* ALL */}
                                <div className="in_box1">
                                    {/* <input type="checkbox" className="checkbox"
                                    checked={chkPolocy.bookingThirdPolicy}
                                    onClick={() => { handlePolicy('bookingThirdPolicy') }} /> */}
                                    <span className="checkbox">
                                        <input
                                            checked={
                                                chkPolocy.bookingThirdPolicy
                                            }
                                            type="checkbox"
                                            className="checkbox"
                                            onClick={() => {
                                                handlePolicy(
                                                    "bookingThirdPolicy"
                                                );
                                            }}
                                            name="agreeChek03"
                                            id="agreeChek03"
                                            title="선택"
                                        />
                                        <label htmlFor="agreeChek03" />
                                    </span>
                                    <span className="txt">
                                        <strong>개인정보 제3자 제공</strong>
                                        [필수]
                                    </span>
                                </div>
                                <div className="in_box2">
                                    <a onClick={openPolicy(2)}>전문보기 &gt;</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="infobox__bottom">
                        <i className="jandaicon-info2"></i> 유의사항 <br />
                        모든 상품은 당사의 취소·환불 정책을 적용하지만, 상품
                        상세 설명 내용에 별도 취소 및 환불 규정이 기재되어 있는
                        경우 그 내용을 우선으로 합니다. 약관 동의 후 예약을
                        진행하시면 이 내용을 숙지 후 동의한 것으로 간주합니다.
                        <br /> <br />
                        • 결제가 정상적으로 진행되지 않으면 최종 예약이 완료되지
                        않습니다.
                        <br />
                        • 상품 관련 변경사항 발생 시 안내드리고자 모든 만 19세
                        이상 참여자는 휴대폰번호를 필수로 입력하셔야 합니다.
                        <br />
                        • 휴대폰이 없으실 경우 연락 가능한 대체 휴대폰번호를
                        입력해 주시기 바랍니다.
                        <br />
                        • 예약 정보는 예약/결제 진행 후 마이페이지→예약내역에서
                        확인 가능 합니다.
                        <br />
                        • 보호자가 동반되지 않은 미성년자는 참여가 불가합니다.
                        <br />
                        • 출발일 기준 7일 전 진행 확정 여부가 안내됩니다.
                        (최소인원 미달 시 취소될 수 있습니다.)
                        <br />• 일정은 현지 사정 및 기상에 따라 다소 변경될 수
                        있습니다.
                    </div>
                    <Modal id="PolicyModal" title="약관보기">
                        <Tabs
                            onSelect={setSelectedIndex}
                            selectedIndex={selectedIndex}
                        >
                            <TabList>
                                <Tab>여행자약관</Tab>
                                <Tab>개인정보수집 및 이용</Tab>
                                <Tab>개인정보 제3자 제공</Tab>
                            </TabList>
                            <TabPanel>
                                <Policy type="travelerPolicy" />
                            </TabPanel>
                            <TabPanel>
                                <Policy type="bookingPrivacyPolicy" />
                            </TabPanel>
                            <TabPanel>
                                <Policy type="bookingThirdPolicy" />
                            </TabPanel>
                        </Tabs>
                        <div className="alignment">
                            <div className="left_div">
                                <button
                                    onClick={() => {
                                        closeModal("#PolicyModal")();
                                        handleAgreeAll();
                                    }}
                                    className="btn w50"
                                >
                                    전체동의
                                </button>
                            </div>
                            <div className="right_div">
                                <button
                                    onClick={() => {
                                        closeModal("#PolicyModal")();
                                    }}
                                    className="btn w50"
                                >
                                    확인
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>
                <a onClick={handlePayment} className="paymentBtn">
                    예약하기
                </a>
            </div>
        </div>
    );
};

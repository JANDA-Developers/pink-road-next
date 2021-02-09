import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useIdSelecter } from '../../hook/useIdSelecter';
import { useAcceptCreateProduct, useAcceptUpdateProduct, useProductFindByIdForSeller, useProductUpdate, useRejectCreateProduct, useRejectUpdateProduct } from '../../hook/useProduct';
import { useSettlementsComplete, useSettlementsReject, useSettlementsRequest } from '../../hook/useSettlement';
import { generateSearchLink } from '../../pages/search';
import { AppContext } from '../../pages/_app';
import { PaymentStatus, BookingStatus, UserRole, ProductStatus, SettlementStatus } from '../../types/api';
import { BG } from '../../types/const';
import { bookingStatus, determinedKr, genderToKR, productStatus } from '../../utils/enumToKr';
import { autoComma, autoHypenPhone } from '../../utils/formatter';
import { getExcelByBookings } from '../../utils/getExcelData';
import { arraySum } from '../../utils/math';
import { closeModal, openModal } from '../../utils/popUp';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { BookingCancelModal } from '../cacnelModal/BookingCancelModal';
import Excel from '../excel/Execel';
import { Prompt } from '../promptModal/Prompt';
import { SmsSendModal } from '../smsSnedModal/SmsSendModal';

interface IProp {
    productId: string;
}

type TrejectType = "update" | "create" | "settlement";

export const ProductModal: React.FC<IProp> = ({ productId }) => {
    const ProductId = productId;
    const { isManager } = useContext(AppContext);
    const { item: product } = useProductFindByIdForSeller(productId, {
        onCompleted: ({ ProductFindByIdForSeller }) => {
            if (!ProductFindByIdForSeller.ok) {
                alert("해당 상품을 조회 할 수 없습니다.");
                closeModal("#ProductModal")()
            }

        }
    });
    const { productUpdate } = useProductUpdate({
        onCompleted: ({ ProductUpdate }) => {
            if (ProductUpdate.ok) {
                alert("메모 저장완료")
            }
        }
    })
    const { title, code, createdAt, keyWards, status, bookings = [], _id, adminMemo: _adminMemo } = product || {};
    const { check, toggle, isChecked, selectAll, selectedIds, setSelectedIds } = useIdSelecter(bookings.map(bk => bk._id));
    const [adminMemo, setAdminMemo] = useState(_adminMemo);
    const [settlementComplete] = useSettlementsComplete({
        onCompleted: ({ SettlementComplete }) => {
            if (SettlementComplete.ok) alert("정산요청이 완료 되었습니다.");
        }
    })
    const [settlementRject] = useSettlementsReject({
        onCompleted: ({ SettlementReject }) => {
            if (SettlementReject.ok) alert("정산 요청이 거절 처리 되었습니다.")
        }
    })
    const [settlementRquest] = useSettlementsRequest({
        onCompleted: ({ SettlementRequest }) => {
            if (SettlementRequest.ok) alert("정산 요청이 처리되었습니다.")
        }
    })
    const [acceptCreate] = useAcceptCreateProduct({
        onCompleted: ({ ProductCreateAccept }) => {
            if (ProductCreateAccept.ok) alert("상품 생성 요청이 허용 되었습니다.");
        }
    });
    const [rejectCreate] = useRejectCreateProduct({
        onCompleted: ({ ProductCreateReject }) => {
            if (ProductCreateReject.ok) alert("상품 생성이 거절처리 되었습니다.")
        }
    });
    const [acceptUpdate] = useAcceptUpdateProduct({
        onCompleted: ({ ProductUpdateAccept }) => {
            if (ProductUpdateAccept.ok) alert("상품 업데이트가 승인 되었습니다.");
        }
    });
    const [rejectUpdate] = useRejectUpdateProduct({
        onCompleted: ({ ProductUpdateReject }) => {
            if (ProductUpdateReject.ok) alert("상품 업데이트가 거절처리 되었습니다.");
        }
    });

    const settlement = product?.settlement
    const seller = product?.author;
    const settlementId = settlement?._id || "";

    const readyBookings = bookings.filter(bk => bk.status === BookingStatus.READY);
    const cancelBookings = bookings.filter(bk => bk.status === BookingStatus.CANCEL);
    const completeBookings = bookings.filter(bk => bk.status === BookingStatus.COMPLETE);
    const payments = bookings.map(b => b.payment);
    const completes = payments.filter(p => p?.status === PaymentStatus.COMPLETE);
    const cancles = payments.filter(p => p?.status === PaymentStatus.CANCEL);
    const payCount = completes.length;
    const payAmt = completes.map(c => c?.price || 0);
    const cancelCount = cancles.length;
    const cancelAmt = cancles.map(c => c?.totalCancelPrice || 0);
    const totalCacnelPeopleCount = arraySum(cancelBookings.map(cb => cb.totalCount));
    const readyBookingsPeopleCount = arraySum(readyBookings.map(cb => cb.totalCount));
    const completeBookingsTotalCount = arraySum(completeBookings.map(cb => cb.totalCount));
    const selectedBookings = bookings.filter(bk => selectedIds.includes(bk._id));
    const selectedOne = selectedBookings[0];

    const [refuseTarget, setRefuseTarget] = useState<TrejectType>();

    const print = () => {
        window.print();
    }

    const handleSendSMS = () => {
        openModal("#SMSsendModal")();
    }

    const handleSelectComplete = () => {
        setSelectedIds(completeBookings.map(bk => bk._id));
    }

    //하나씩만됨
    const handleCancel = () => {
        if (selectedIds.length > 1) alert("한번에 하나의 예약만 취소 가능합니다.")
        else if (selectedIds.length < 1) alert("예약을 선택 해주세요.")
        else openModal("#CancelModal")()
    }

    const handleSave = () => {
        productUpdate({
            _id: product!._id,
            params: {
                adminMemo
            }
        })
    }

    const handleOpenRejct = (target: TrejectType) => () => {
        setRefuseTarget(target);
        openModal("#RejectModal")();
    }

    const handleAcceptCreate = () => {
        acceptCreate({
            variables: {
                ProductId
            }
        })
    }

    const handleAcceptUpdate = () => {
        acceptCreate({
            variables: {
                ProductId
            }
        })
    }

    const handleSettlementComplete = () => {
        settlementComplete({
            variables: {
                settlementId
            }
        })
    }

    const handleCreateReject = (reason: string) => {
        rejectCreate({
            variables: {
                ProductId,
                reason
            }
        })
    }

    const handleUpdateReject = (reason: string) => {
        rejectUpdate({
            variables: {
                ProductId,
                reason
            }
        })
    }

    const handleSettlementReject = (reason: string) => {
        settlementRject({
            variables: {
                reason,
                settlementId
            }
        })
    }

    const handleSettlementRequest = () => {
        settlementRquest({
            variables: {
                params: [{
                    price: 0,
                    returnTargetId: ""
                }],
                settlementId
            }
        })
    }

    const rejectHandle = (() => {
        if (refuseTarget === "create") return handleCreateReject
        if (refuseTarget === "update") return handleUpdateReject
        if (refuseTarget === "settlement") return handleSettlementReject
        return () => { }
    })()

    return <div id="ProductModal" className="popup_bg_full" >
        {product &&
            <div className="in_txt master_popup">
                <a className="close_icon" onClick={closeModal("#ProductModal")}>
                    <i className="flaticon-multiply"></i>
                </a>
                <div className="page">
                    <h3>상세정보</h3>
                    <div className="info_txt">
                        <span className="g-number">상품명: {title}</span>
                        <span className="g-number">상품번호: {product.code}</span>
                        <span className="goods-state1 st01">확정여부: <i>{determinedKr(product.determined)}</i></span>{/* 출발확정/출발미정 */}
                        <span className="r-day">출발일: {yyyymmdd(createdAt)}</span>
                        <span className="goods-state2">상품상태: {productStatus(status)}</span>
                        <button onClick={print} className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                        <Excel
                            data={getExcelByBookings(bookings)}
                            element={
                                <button className="btn mr5"><i className="flaticon-download mr5"></i>엑셀저장</button>
                            }
                        />
                    </div>

                    <div className="info_table goodsinfo">
                        <div className="tr">
                            <div className="top04">
                                <div className="img" style={BG(product?.images?.[0]?.uri || "")} ></div>
                                <div className="info goods__info_title">
                                    <span className="ct">{product.category?.label}</span>
                                    <strong className="title"><Link href={generateSearchLink({ title: product.title })}><a>{product.title}</a></Link></strong>
                                    <div className="txt">
                                        <div className="subTitle">{product.subTitle}</div>
                                        <ul className="tag">
                                            {product.keyWards?.map((key, index) =>
                                                <li key={product._id + index + "keyward"}>#{key}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="top05">
                                <div className="align">
                                    <span className="s-day">출발일: {yyyymmdd(product.startDate)}</span>
                                    <span className="where">출발장소: {product.startPoint}</span>
                                    <span className="people">인원: {product.compeltePeopleCnt}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info_page">
                        <div className="left_div">
                            <h4>결제 정보</h4>
                            <div className="info_table w50">
                                <div className="tr">
                                    <div className="th01">
                                        결제건수
                                </div>
                                    <div className="td01">
                                        <span>{payCount}</span>
                                    </div>
                                    <div className="th02">
                                        결제금액
                                </div>
                                    <div className="td02">
                                        <span className="blue_font">{autoComma(arraySum(payAmt))}원</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="right_div">
                            <h4>환불 정보</h4>
                            <div className="info_table w50">
                                <div className="tr">
                                    <div className="th01">
                                        환불건수
                                </div>
                                    <div className="td01">
                                        <span>{cancelCount}</span>
                                    </div>
                                    <div className="th02">
                                        환불금액
                                </div>
                                    <div className="td02">
                                        <span className="red_font">- {autoComma(arraySum(cancelAmt))}원</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {isManager &&
                        <div className="info_page">
                            <div className="full_div">
                                <h4>
                                    파트너 정보
                        </h4>
                                <div className="info_table partnerinfo">
                                    <div className="tr">
                                        <div className="th01">
                                            파트너명
                                    </div>
                                        <div className="td01">
                                            <span>{seller?.nickName}</span>
                                        </div>
                                        <div className="th02">
                                            아이디
                                </div>
                                        <div className="td02">
                                            <span>{seller?.email}</span>
                                        </div>
                                        <div className="th03">
                                            담당자
                                </div>
                                        <div className="td03">
                                            <span>{seller?.busi_name || seller?.name} (<a href="tel:">{autoHypenPhone(seller?.phoneNumber)}</a> )</span>
                                        </div>
                                        <div className="th04">
                                            정산계좌
                                </div>
                                        <div className="td04">
                                            <span>({seller?.bank_name}){seller?.account_number} / {seller?.name}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }

                    <div className="info_page">
                        <div className="full_div">
                            <h4>
                                예약자 정보
                            <span className="full_div__right__btn">
                                    <button onClick={selectAll} className="btn topside">전체선택</button>
                                    <button onClick={handleSelectComplete} className="btn topside">예약완료 선택</button>
                                </span>
                            </h4>
                            <div className="info_table peoplelist">
                                <div className="top_info">
                                    <span className="tt">예약인원</span>
                                    <span>총 {product.peopleCount}명</span>
                                    <span className="float_right">예약완료 {completeBookingsTotalCount}명 / 예약취소 {totalCacnelPeopleCount}명 / 예약대기 {readyBookingsPeopleCount}명</span>
                                </div>
                                {bookings.map(bk =>
                                    <div key={bk._id} className="tr first">
                                        <div className="pp01">
                                            <span onClick={() => { toggle(bk._id) }} className="checkbox">
                                                <input checked={isChecked(bk._id)} type="checkbox" name="agree" id={`agree${i}`} title="개별선택" />
                                                <label htmlFor={`agree${i}`} />
                                            </span>
                                        </div>
                                        <div className="th">예약번호</div>
                                        <div className="td"><span>{code}</span></div>
                                        <div className="th">예약상태</div>
                                        <div className="td"><span className="blue_font">{bookingStatus(bk.status)}</span></div>
                                        <div className="th">예약자명</div>
                                        <div className="td"><span>{bk.name}</span></div>
                                        <div className="th">연락처</div>
                                        <div className="td"><a href={`tel:${autoHypenPhone(bk.phoneNumber)}`}>{autoHypenPhone(bk.phoneNumber)}</a></div>
                                        <div className="th">성별</div>
                                        <div className="td"><span>{genderToKR(bk.gender)}</span></div>
                                        <div className="th">메모</div>
                                        <div className="td"><span>{bk.memo}</span></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {isManager &&
                        <div className="info_page">
                            <h4>메모</h4>
                            <div className="write_comment">
                                <div className="comment_layout">
                                    <ul className="text_box">
                                        <li>
                                            <div className="txta w100">
                                                <textarea onChange={(e) => {
                                                    const val = e.currentTarget.value;
                                                    setAdminMemo(val);
                                                }} value={adminMemo} style={{ height: "100px;" }} placeholder="메모는 꼼꼼하게 체크는 정확하게"></textarea>
                                            </div>
                                        </li>
                                        <li className="tr count">{adminMemo?.length}/3000</li>
                                    </ul>
                                    <div className="text_box_bottom">
                                        <div className="float_left w50">
                                            <span><i className="jandaicon-info2"></i>기존의 메모를 삭제하시면 되돌릴 수 없습니다. 신중하게 입력해 주세요.</span>
                                        </div>
                                        <div className="btn_send float_right"><button onClick={handleSave} className="comment_btn">저장</button> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="fin ifMobile">
                        <div className="float_left">
                            {settlement?.status === SettlementStatus.READY && status === ProductStatus.EXPIRED && <button onClick={handleSettlementRequest} type="submit" className="btn medium">지급신청</button>}
                            {isManager && settlement?.status === SettlementStatus.REQUEST && <button onClick={handleSettlementComplete} type="submit" className="btn medium">지급완료</button>}
                            {isManager && settlement?.status === SettlementStatus.REQUEST && <button onClick={handleOpenRejct("settlement")} type="submit" className="btn medium">지급보류</button>}
                            {isManager && status === ProductStatus.READY && <button onClick={handleAcceptCreate} type="submit" className="btn medium">생성허용</button>}
                            {isManager && status === ProductStatus.READY && <button onClick={handleOpenRejct("create")} type="submit" className="btn medium">생성거절</button>}
                            {isManager && status === ProductStatus.UPDATE_REQ && <button onClick={handleAcceptUpdate} type="submit" className="btn medium">업데이트허용</button>}
                            {isManager && status === ProductStatus.UPDATE_REQ && <button onClick={handleOpenRejct("update")} type="submit" className="btn medium">업데이트거절</button>}
                        </div>
                        <div className="float_right">
                            <button disabled={selectedBookings.length !== 1} type="submit" onClick={handleCancel} className="btn medium">예약취소</button>
                            <Link href={`/tour/write/${_id}`}><a className="btn medium">수정하기</a></Link>{/* 상품수정폼 가기 */}
                        </div>
                    </div>
                </div>
                {selectedBookings.length === 1 && <BookingCancelModal booking={selectedOne} />}
                <SmsSendModal bookings={selectedBookings} />
                <Prompt title="거절사유 입력 해주세요." onSubmit={rejectHandle} id="RejectModal" />
            </div>
        }
    </div>
};

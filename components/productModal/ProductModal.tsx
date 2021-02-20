import dayjs from 'dayjs';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { useIdSelecter } from '../../hook/useIdSelecter';
import { useAcceptCreateProduct, useAcceptUpdateProduct, useProductController, useProductFindByIdForSeller, useProductUpdate, useRejectCreateProduct, useRejectUpdateProduct, useTravelDetermine } from '../../hook/useProduct';
import { useSettlementController, useSettlementsComplete, useSettlementsReject, useSettlementsRequest } from '../../hook/useSettlement';
import { generateSearchLink } from '../../pages/search';
import { AppContext } from '../../pages/_app';
import { PaymentStatus, BookingStatus, UserRole, ProductStatus, SettlementStatus, ProductElseReq } from '../../types/api';
import { AFTER_OPEN_PRODUCT_STATUS, BG, CONDITION, DELETE_AVAIABLE_PRODUCTS, SETTLEMENT_REQ_AVAIABLE, SYSTEM_CHECK_MESSAGE } from '../../types/const';
import { bookingStatus, determinedKr, genderToKR, productStatus, reqToKr } from '../../utils/enumToKr';
import { autoComma, autoHypenPhone } from '../../utils/formatter';
import { generateClientPaging } from '../../utils/generateClientPaging';
import { getExcelByBookings } from '../../utils/getExcelData';
import { arraySum } from '../../utils/math';
import { closeModal, openModal } from '../../utils/popUp';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { BookingCancelModal } from '../cacnelModal/BookingCancelModal';
import { Paginater } from '../common/Paginator';
import Excel from '../excel/Execel';
import { Prompt } from '../promptModal/Prompt';
import { SmsSendModal } from '../smsSnedModal/SmsSendModal';

interface IProp {
    productId: string;
}

type promptTarget = "denyReq" | "travelWithdrwal" | "update" | "create" | "settlement" | "determine" | "travelCancel";

interface IPromptInfo {
    title?: string;
    target: promptTarget;
}

export const ProductModal: React.FC<IProp> = ({ productId }) => {
    const ProductId = productId;
    const { isManager, isParterB, isParterNonB, role, isSeller } = useContext(AppContext);
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

    const { title, code, createdAt, keyWards, status, bookings = [], _id, adminMemo: _adminMemo, requestMemo } = product || {};
    const { check, toggle, isChecked, selectAll, selectedIds, setSelectedIds } = useIdSelecter(bookings.map(bk => bk._id));
    const [adminMemo, setAdminMemo] = useState(_adminMemo);

    const { settlementComplete, settlementRject, settlementRquest, totalLoading: settlementLoading } = useSettlementController();
    const { acceptCreate, acceptUpdate, rejectCreate, rejectUpdate, productDelete, tarvelDetermine, travelCancel, travelWithdrwal, loading, productElseAccept, productElseDeny, productElseReq } = useProductController(
        () => {
            closeModal("#PromptModal")();
        },
        role
    );
    const totalLoading = settlementLoading || loading;

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
    const [proptTarget, setPomptTarget] = useState<IPromptInfo>();

    const pagination = generateClientPaging(bookings, 10);

    const handleTravelCancel = (reason: string) => {
        if (totalLoading) return;
        if (confirm(SYSTEM_CHECK_MESSAGE.travelCancel)) {
            return travelCancel({
                variables: {
                    ProductId,
                    reason
                }
            })
        }
    }

    const handleTravelDelete = () => {
        if (totalLoading) return;
        if (confirm(SYSTEM_CHECK_MESSAGE.productDelete)) {
            return productDelete({
                variables: {
                    id: productId
                }
            })
        }
    }


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
        if (totalLoading) return;
        if (selectedIds.length > 1) alert("한번에 하나의 예약만 취소 가능합니다.")
        else if (selectedIds.length < 1) alert("예약을 선택 해주세요.")
        else openModal("#CancelModal")()
    }

    const handleSave = () => {
        if (totalLoading) return;
        productUpdate({
            _id: product!._id,
            params: {
                adminMemo
            }
        })
    }

    const handleOpenPrompt = (target: promptTarget, title?: string) => () => {
        if (totalLoading) return;
        setPomptTarget({
            target,
            title
        });
        openModal("#PromptModal")();
    }

    const handleAcceptCreate = () => {
        if (totalLoading) return;
        acceptCreate({
            variables: {
                ProductId
            }
        })
    }

    const handleAcceptUpdate = () => {
        if (totalLoading) return;
        acceptUpdate({
            variables: {
                ProductId
            }
        })
    }

    const handleSettlementComplete = () => {
        if (totalLoading) return;
        settlementComplete({
            variables: {
                settlementId
            }
        })
    }

    const handleDetermine = (message: string) => {
        if (totalLoading) return;
        tarvelDetermine({
            variables: {
                ProductId,
                message
            }
        })
    }

    const handleCreateReject = (reason: string) => {
        if (totalLoading) return;
        rejectCreate({
            variables: {
                ProductId,
                reason
            }
        })
    }

    const handleTravelWidthWral = (reason: string) => {
        if (totalLoading) return;
        travelWithdrwal({
            variables: {
                ProductId,
                reason
            }
        })
    }

    const handleUpdateReject = (reason: string) => {
        if (totalLoading) return;
        rejectUpdate({
            variables: {
                ProductId,
                reason
            }
        })
    }

    const handleSettlementReject = (reason: string) => {
        if (totalLoading) return;
        settlementRject({
            variables: {
                reason,
                settlementId
            }
        })
    }

    const handleSettlementRequest = () => {
        if (totalLoading) return;
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

    // 인원없음
    const noPeople = product?.peopleCount === 0;
    // 출발7일전
    const left7overDay = dayjs().diff(product?.startDate, "day") > 7
    // 출발 하기: 일반파트너일경우 출발 7일 전일때 
    const determindAble = (left7overDay || isManager || isParterB) && product?.determined === false && product.status === ProductStatus.OPEN;
    // 출발 안하기: 일반파트너일경우 출발 7일 전일때 
    const unDetermindAble = (left7overDay || isManager || isParterB) && product?.determined === true && product.status === ProductStatus.OPEN;
    // 취소 가능: 일반파트너일경우 인원이 없을때 
    const cancelAvailable = (noPeople || isManager || isParterB) && product?.status === ProductStatus.OPEN && product?.determined === false; // Travel 캔슬함수 사용하면됨
    // 삭제 가능: 사람없을때 || 오픈이거나 마감 상태가 아닐떄 
    const deleteAvailable = (noPeople || isManager) && product && DELETE_AVAIABLE_PRODUCTS.includes(product?.status);
    // 다시 오픈이 가능한가
    const reopenAvailable = (isManager || isParterB) && product?.status === ProductStatus.CANCELD;
    // 다시 오픈 요청이 가능한가
    const reopenReqAB = !isManager && isParterNonB && product?.status === ProductStatus.CANCELD && product?.elseReq !== ProductElseReq.REOPEN;
    // 다시 오픈 요청 접수가 가능한가
    const elseReopenAcceptAB = isManager && product?.elseReq === ProductElseReq.REOPEN;
    // 다시 오픈 요청 거절이 가능한가
    const elseReopenDenyAB = isManager && product?.elseReq === ProductElseReq.REOPEN;
    // 정산 요청이 가능한가 
    const settlementReqAB = product?.status && SETTLEMENT_REQ_AVAIABLE.includes(product.status);


    const handleDenyElseReq = (reason: string) => {
        if (totalLoading) return;
        productElseDeny({
            variables: {
                ProductId,
                reason
            }
        })
    }

    const handleReqElse = (req: ProductElseReq) => () => {
        if (totalLoading) return;
        productElseReq({
            variables: {
                ProductId,
                req
            }
        })
    }

    const handleAcceptElseReq = () => {
        if (totalLoading) return;
        productElseAccept({
            variables: {
                ProductId
            }
        })
    }

    const elseReqHandle = (elseReq: ProductElseReq) => {
        if (elseReq === ProductElseReq.REOPEN) return handleReqElse(ProductElseReq.REOPEN)
    }

    const handleReopen = () => {
        handleReqElse(ProductElseReq.REOPEN)();
    }

    const rejectHandle = (() => {
        if (proptTarget?.target === "create") return handleCreateReject
        if (proptTarget?.target === "update") return handleUpdateReject
        if (proptTarget?.target === "settlement") return handleSettlementReject
        if (proptTarget?.target === "determine") return handleDetermine
        if (proptTarget?.target === "travelWithdrwal") return handleTravelWidthWral
        if (proptTarget?.target === "travelCancel") return handleTravelCancel
        if (proptTarget?.target === "denyReq") return handleDenyElseReq
        return () => { }
    })() as () => void;



    return <div id="ProductModal" className="productModal popup_bg_full" >
        {product &&
            <div className="in_txt master_popup productModal__inWrap">
                <div className="page productModal__wrap">
                    <div className="productModal__head">
                        <h3 className="productModal__title">상세정보</h3>
                        <a className="close_icon productModal__close" onClick={closeModal("#ProductModal")}>
                            <i className="flaticon-multiply"></i>
                        </a>
                    </div>
                    <div className="productModal__body">
                        <div className="info_txt">
                            <span className="g-number">상품명: {title}</span>
                            <span className="g-number">상품번호: {product.code}</span>
                            <span className="goods-state1 st01">확정여부: <i>{determinedKr(product.determined)}</i></span>{/* 출발확정/출발미정 */}
                            <span className="r-day">출발일: {yyyymmdd(createdAt)}</span>
                            <span className="goods-state2">상품상태: {productStatus(status)}</span>
                            <button onClick={print} className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                        </div>

                        <div className="info_table goodsinfo">
                            <div className="tr">
                                <div className="top04">
                                    {/* <div className="img" style={BG(product?.images?.[0]?.uri || "")} ></div> */}
                                    <div className="info goods__info_title">
                                        <span className="ct">{product.category?.label}</span>
                                        <strong className="title"><Link href={generateSearchLink({ title: product.title })}><a>{product.title}{product.elseReq && "[" + reqToKr(product.elseReq) + "]"}</a></Link></strong>
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

                        {AFTER_OPEN_PRODUCT_STATUS.includes(product.status) && <div className="info_page">
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
                        </div>}
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
                        {AFTER_OPEN_PRODUCT_STATUS.includes(product.status) &&
                            <div className="info_page">
                                <div className="full_div">
                                    <h4>
                                        예약자 정보
                            <span className="full_div__right__btn">
                                            {/* <button onClick={selectAll} className="btn topside">전체선택</button>
                                        <button onClick={handleSelectComplete} className="btn topside">예약완료 선택</button> */}
                                        </span>
                                    </h4>
                                    <div className="info_table peoplelist">
                                        <div className="top_info">
                                            <span className="tt">예약인원</span>
                                            <span>총 {product.peopleCount}명 </span>
                                            <span className="float_right">예약완료 {completeBookingsTotalCount}명 / 예약취소 {totalCacnelPeopleCount}명 / 예약대기 {readyBookingsPeopleCount}명</span>
                                        </div>
                                        {pagination.slice.map((bk, i) =>
                                            <div key={bk._id} className="tr first">
                                                {/* <div className="pp01">
                                                <span onClick={() => { toggle(bk._id) }} className="checkbox">
                                                    <input checked={isChecked(bk._id)} type="checkbox" name="agree" id={`agree${i}`} title="개별선택" />
                                                    <label htmlFor={`agree${i}`} />
                                                </span>
                                            </div> */}
                                                <div className="th">예약번호</div>
                                                <div className="td"><span>{code}</span></div>
                                                <div className="th">예약상태</div>
                                                <div className="td"><span className="blue_font">{bookingStatus(bk.status)}</span></div>
                                                <div className="th">예약자명</div>
                                                <div className="td"><span>{bk.name}</span></div>
                                                <div className="th">연락처</div>
                                                <div className="td"><a href={`tel:${autoHypenPhone(bk.phoneNumber)}`}>{autoHypenPhone(bk.phoneNumber)}</a></div>
                                                <div className="th">성별</div>
                                                <div className="td"><span>{genderToKR(bk.gender) || "정보없음"}</span></div>
                                                <div className="th">메모</div>
                                                <div className="td"><span>{bk.memo}</span></div>
                                            </div>
                                        )}
                                        <div className="productModal__paginatorWrap">
                                            <Paginater isMini pageInfo={pagination.paging} setPage={pagination.setPage} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {product.status === ProductStatus.UPDATE_REQ &&
                            <div className="info_page">
                                <h4>업데이트 요청사항</h4>
                                <div className="write_comment">
                                    <div className="comment_layout">
                                        <ul className="text_box">
                                            <li>
                                                <div className="txta w100">
                                                    <textarea readOnly value={requestMemo} style={{ height: "100px;" }} ></textarea>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }
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
                                {/* 출발확정 */}
                                {determindAble && <button onClick={handleOpenPrompt("determine", "출발 확정 메세지를 입력 해주세요.")} type="submit" className="btn medium">출발확정
                                <i className="jandaicon-info2 tooltip" data-tip={CONDITION.travelDetermineChange} />
                                </button>}

                                {/* 출발미확정 */}
                                {unDetermindAble && <button onClick={handleOpenPrompt("travelWithdrwal", "확정 취소 사유를 입력해 주세요.")} type="submit" className="btn medium">출발미확정
                                <i className="jandaicon-info2 tooltip" data-tip={CONDITION.travelDetermineChange} />
                                </button>}

                                {/* 상품삭제 */}
                                {deleteAvailable && <button onClick={() => { handleTravelDelete() }} type="submit" className="btn medium">상품삭제</button>}

                                {/* 여행취소 */}
                                {cancelAvailable && <button onClick={handleOpenPrompt("travelCancel", "취소 사유를 입력 해주세요")} type="submit" className="btn medium">여행취소
                                {isSeller && <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={CONDITION.travelCacnel} />}
                                </button>}

                                {/* 여행재개 */}
                                {reopenAvailable && <button onClick={handleReopen} type="submit" className="btn medium">여행재개
                                {isParterNonB && <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={CONDITION.travelCacnel} />}
                                </button>}


                                {/* 기타 요청 들::여행재개 */}
                                {reopenReqAB && <button onClick={elseReqHandle(ProductElseReq.REOPEN)} type="submit" className="btn medium">재개요청
                                {/* {isParterNonB && <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={CONDITION.travelCacnel} />} */}
                                </button>}
                                {/* 기타 요청 들 */}
                                {/* 기타 요청 들 */}
                                {/* 기타 요청 들 */}

                                {/* 기타 요청수락 */}
                                {elseReopenAcceptAB && <button onClick={handleAcceptElseReq} type="submit" className="btn medium">요청수락
                                <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={`상품요청: ${reqToKr(product.elseReq)}`} />
                                </button>}

                                {/* 기타 요청거절 */}
                                {elseReopenDenyAB && <button onClick={handleOpenPrompt("denyReq", "거절 사유를 입력 해주세요")} type="submit" className="btn medium">요청거절
                                <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={`상품요청: ${reqToKr(product.elseReq)}`} />
                                </button>}

                                {/* 지급신청 */}
                                {settlementReqAB && <button onClick={handleSettlementRequest} type="submit" className="btn medium">지급신청</button>}

                                {/* 지급완료 */}
                                {isManager && settlement?.status === SettlementStatus.REQUEST && <button onClick={handleSettlementComplete} type="submit" className="btn medium">지급완료</button>}

                                {/* 지급보류 */}
                                {isManager && settlement?.status === SettlementStatus.REQUEST && <button onClick={handleOpenPrompt("settlement", "지급 보류 사유를 입력 해주세요.")} type="submit" className="btn medium">지급보류</button>}

                                {/* 생성허용 */}
                                {isManager && status === ProductStatus.READY && <button onClick={handleAcceptCreate} type="submit" className="btn medium">생성허용</button>}

                                {/* 생성거절 */}
                                {isManager && status === ProductStatus.READY && <button onClick={handleOpenPrompt("create", "생성 거절 사유를 입력 해주세요.")} type="submit" className="btn medium">생성거절</button>}

                                {/* 업데이트 허용 */}
                                {isManager && status === ProductStatus.UPDATE_REQ && <button onClick={handleAcceptUpdate} type="submit" className="btn medium">업데이트허용</button>}

                                {/* 업데이트 거절 */}
                                {isManager && status === ProductStatus.UPDATE_REQ && <button onClick={handleOpenPrompt("update", "업데이트 거절 사유를 입력 해주세요.")} type="submit" className="btn medium">업데이트거절</button>}
                            </div>
                            <div className="float_right">
                                {/* <button disabled={selectedBookings.length !== 1} type="submit" onClick={handleCancel} className="btn medium">예약취소</button> */}
                                <Link href={`/tour/write/${_id}`}><a className="btn medium">수정하러가기</a></Link>{/* 상품수정폼 가기 */}
                            </div>
                        </div>
                    </div>
                </div>
                {selectedBookings.length === 1 && <BookingCancelModal booking={selectedOne} />}
                <SmsSendModal bookings={selectedBookings} />
                <Prompt title={proptTarget?.title || "거절 사유를 입력 해주세요"} onSubmit={rejectHandle} id="PromptModal" />
                <ReactTooltip id="TooltipProductModal" effect="solid" type="info" />
            </div>
        }
    </div>
};

import React, { useEffect, useState } from 'react';
import { useBookingCreateByHand, useBookingUpdate } from '../../hook/useBooking';
import { useProductFindById } from '../../hook/useProduct';
import { BookingCreateByHandInput, bookingCreateByHandVariables, BookingStatus, GENDER } from '../../types/api';
import { autoComma, autoHypenPhone } from '../../utils/formatter';
import { openModal } from '../../utils/popUp';
import { dateRangeFullString, getRangeString, getRangeStringByNumber, getTypeTextOfProduct } from '../../utils/product';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { Modal } from '../modal/Modal';
import { ProductSelectModal } from '../ProductSelectModal';
import { ProductSelectView } from './ProductSelectView';

interface IProp { }

export const HandBookingModal: React.FC<IProp> = () => {
    const [input, setInput] = useState<BookingCreateByHandInput>({
        adultCount: 0,
        babyCount: 0,
        kidCount: 0,
        email: "",
        name: "",
        phoneNumber: "",
        product: "",
        status: BookingStatus.READY
    });
    const [bookingCreate] = useBookingCreateByHand()
    const [bookingUpdate] = useBookingUpdate();
    const { item } = useProductFindById(input?.product)


    const handleSearch = () => {
        openModal("#ProductSearchModal")()
    }

    const handleGender = (gender: GENDER) => () => {
        input.gender = gender
        setInput({ ...input });
    }

    const handleCount = (key: keyof BookingCreateByHandInput, isUp: boolean) => () => {
        let val = input[key] as number;
        val = val + (isUp ? 1 : -1);
        if (val < 0) val = 0;
        // @ts-ignore
        input[key] = val;

        setInput({ ...input })

    }

    const totalPrice =
    (count.adult * adult_price) +
    (count.baby * baby_price) +
    (count.kids * kids_price);

    //수기 등록시 여러가지 부킹을 한번에 생산 할 수 있나?  ㄴㄴ
    //하나씩 하면됨 

    //수기 등록후 수정할때는 어떻게하나?

    return <Modal title="예약 수기등록" inClassName="master_popup handwritten_registration" className="popup_bg_full" id="HandwrittenRegistration">
        <div className="box">
            <h3>예약 수기등록</h3>
            <div className="info_page">
                <div className="full_div">
                    <h4>상품선택</h4>
                    <div className="goodsall__choice">
                        {/* 상품 선택시에 아래 goodsall__choice_info 노출됨 */}
                        <div className="goodsall__choice_touch">
                            <button onClick={handleSearch}><i className="flaticon-add"></i>추가</button>
                        </div>
                        {/* goodsall__choice_info 노출됨과 동시에 goodsall__choice_touch 숨김*/}
                        {input.product && <ProductSelectView key={input.product} id={input.product} />}
                    </div>

                    <h4>상품 정보</h4>
                    <div className="info_table w100">
                        <div className="tr">
                            <div className="th01">상품타입</div>
                            <div className="td01">{item && getTypeTextOfProduct(item.type, item.dateRange)}</div>
                            <div className="th02">카테고리</div>
                            <div className="td02">{item?.category?.label}</div>
                        </div>
                        <div className="tr">
                            <div className="th01">상품명</div>
                            <div className="td01">{item?.title}</div>
                            <div className="th02">부제목</div>
                            <div className="td02">{item?.subTitle}</div>
                        </div>
                        <div className="tr">
                            <div className="th01">최소인원/최대인원</div>
                            <div className="td01">{item?.minMember}/{item?.maxMember}</div>
                            <div className="th02">장소</div>
                            <div className="td02">{item?.address}</div>
                        </div>
                        <div className="tr">
                            <div className="th01">출발장소</div>
                            <div className="td01">{item?.startPoint}</div>
                            <div className="th02">여행기간</div>
                            <div className="td02">
                                {item && dateRangeFullString(item.startDate, item.endDate, item.dateRange)}
                            </div>
                        </div>
                    </div>

                    <h4>예약 정보</h4>
                    <div className="info_table w100">
                        <div className="tr">
                            <div className="th01">예약자명</div>
                            <div className="td01">
                                <input onChange={(e) => {
                                    const val = e.currentTarget.value;
                                    input.name = val;
                                    setInput({ ...input })
                                }} type="text" className="w80" placeholder="" />
                            </div>
                            <div className="th02">연락처</div>
                            <div className="td02">
                                <input onChange={(e) => {
                                    const val = e.currentTarget.value;
                                    input.phoneNumber = val;
                                    setInput({ ...input })
                                }} value={autoHypenPhone(input.phoneNumber)} type="text" className="w80" placeholder="" /></div>
                        </div>
                        <div className="tr">
                            <div className="th01">이메일</div>
                            <div className="td01"><input onChange={(e) => {
                                const val = e.currentTarget.value;
                                input.email = val;
                                setInput({ ...input })
                            }} value={input?.email} type="text" className="w80" placeholder="" /></div>
                            <div className="th02">성별</div>
                            <div className="td02">
                                <ul className="gender_check">
                                    <li className={`female ${input.gender == GENDER.FEMALE ? "on" : ""}`}
                                        onClick={handleGender(GENDER.FEMALE)}>여</li>
                                    <li className={`men ${input.gender == GENDER.MAIL ? "on" : ""}`}
                                        onClick={handleGender(GENDER.MAIL)}>남</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">메모</div>
                            <div className="td01"><input onChange={e => {
                                const val = e.currentTarget.value;
                                input.memo = val;
                                setInput({ ...input })
                            }} type="text" className="w100" placeholder="" /></div>
                        </div>
                    </div>

                    <h4>결제 정보</h4>
                    <div className="info_table w100">
                        <div className="tr">
                            <div className="th01">인원선택</div>
                            <div className="td01">
                                <div className="option__div">
                                    <div className="option__div_people">
                                        <strong>대인</strong>
                                        <span>{item?.adult_price}원</span>
                                        <div className="Number__box">
                                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                                <i className="flaticon-substract"></i>
                                            </span><span className="number">{input.adultCount}</span>
                                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                                <i className="flaticon-add"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="option__div_people">
                                        <strong>소인</strong>
                                        <span>{autoComma(item?.kids_price)}원</span>
                                        <div className="Number__box">
                                            <span onClick={handleCount("kidCount", false)} className="left_btn">
                                                <i className="flaticon-substract"></i>
                                            </span><span className="number">{input.kidCount}</span>
                                            <span onClick={handleCount("kidCount", true)} className="right_btn">
                                                <i className="flaticon-add"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="option__div_people">
                                        <strong>유아</strong>
                                        <span>{autoComma(item?.baby_price)}원</span>
                                        <div className="Number__box">
                                            <span className="left_btn">
                                                <i onClick={handleCount("babyCount", false)} className="flaticon-substract"></i>
                                            </span><span className="number">{input.babyCount}</span>
                                            <span onClick={handleCount("babyCount", true)} className="right_btn">
                                                <i className="flaticon-add"></i>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="tr">
                            <div className="th01">합계금액</div>
                            <div className="td01">
                                <strong className="color02">30,000</strong>원
                            </div>
                            <div className="th02">결제방법</div>
                            <div className="td02">
                                <select className="w50">
                                    <option>
                                        가상계좌
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">메모</div>
                            <div className="td01"><input type="text" className="w100" placeholder="" /></div>
                        </div>


                    </div>
                </div>
            </div>
            <button className="btn">등록하기</button>
        </div>
        <ProductSelectModal onSelect={() => {

        }} />
    </Modal>;
};

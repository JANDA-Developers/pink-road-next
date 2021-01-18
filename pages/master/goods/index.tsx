import { MasterLayout } from 'layout/MasterLayout';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import React, { useState } from 'react';
import Link from "next/link";
import { useProductList } from '../../../hook/useProduct';
import { yyyymmdd } from '../../../utils/yyyymmdd';
import { generateSearchLink } from '../../search';
import { getTypeTextOfProduct } from '../../../utils/product';
import { PordStatusBadge } from '../../../components/Status/StatusBadge';
import { useCustomCount } from '../../../hook/useCount';
import { useDateFilter } from '../../../hook/useSearch';
import { MasterSearchBar } from '../../../components/master/MasterSearchBar';
import { MasterModal } from '../../../components/masterModal/MasterModal';
import { openModal } from '../../../utils/popUp';

interface IProp { }

const popupOpen = () => {
    $('#Popup01').css({
        'display': 'flex'
    });

}
const popupClose = () => {
    $('#Popup01').css({
        'display': 'none'
    });
}
const popupOpen1 = () => {
    $('#MiniPopup01').css({
        'display': 'flex'
    });

}
const popupClose1 = () => {
    $('#MiniPopup01').css({
        'display': 'none'
    });
}

const popupOpen2 = () => {
    $('#MiniPopup02').css({
        'display': 'flex'
    });

}
const popupClose2 = () => {
    $('#MiniPopup02').css({
        'display': 'none'
    });
}
export const MsGoodsMain: React.FC<IProp> = () => {
    const { items, filter, setFilter, setSort, sort, viewCount, setViewCount } = useProductList();
    const { filterEnd, filterStart, hanldeCreateDateChange } = useDateFilter({ filter, setFilter });

    const [popProductId, setPopProductId] = useState("");

    const {
        totalProductCountMaster,
        cancelProductCountMaster,
        compeltedProductCountMaster,
        openProductCountMaster
    } = useCustomCount(["totalProductCountMaster", "cancelProductCountMaster", "compeltedProductCountMaster"]);

    const handleOpen = (id: string) => () => {
        setPopProductId(id);
        setTimeout(() => {
            openModal("#MasterModal")()
        }, 1000)
    }

    const doSearch = () => {

    }

    return <MasterLayout>
        <div className="in ">
            <h4>상품관리</h4>
            <div className="in_content">

                <div className="tab-nav">
                    <ul>
                        <li className="on"><Link href="/master/goods"><a>상품관리</a></Link></li>
                        {/* <li><Link href="/master/goods/goods1-2"><a>카테고리설정</a></Link></li> */}
                    </ul>
                </div>
                <div className="con goods">
                    <div className="con_box_top pb5">
                        <div className="top_info_number">
                            <ul className="ln4">
                                <li>
                                    <strong>{totalProductCountMaster}</strong>
                                    <span>전체</span>
                                </li>
                                <li>
                                    <strong>{openProductCountMaster || 0}</strong>
                                    <span>판매중</span>
                                </li>
                                <li>
                                    <strong>{cancelProductCountMaster}</strong>
                                    <span>판매중지</span>
                                </li>
                                <li>
                                    <strong>{compeltedProductCountMaster}</strong>
                                    <span>판매완료</span>
                                </li>
                            </ul>
                        </div>
                        <MasterSearchBar onDateChange={hanldeCreateDateChange} Option={
                            <select className="option">
                                <option>상품명</option>
                                <option>상품번호</option>
                            </select>
                        } defaultRange={{}} doSearch={doSearch} filterEnd={filterEnd} filterStart={filterStart} />
                        <div className="alignment">
                            <div className="left_div">
                                <ul className="board_option">
                                    <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                    <li><a href="/">출발확정<strong>23</strong></a></li>
                                    <li><a href="/">출발미확정<strong>23</strong></a></li>
                                    <li><a href="/">여행취소<strong>23</strong></a></li>
                                    <li><a href="/">기획요청<strong>23</strong></a></li>
                                    <li><a href="/">기획반려<strong>23</strong></a></li>
                                </ul>
                            </div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a href="/">전체선택</a></li>
                                    <li><a href="/">엑셀파일<i className="jandaicon-info2 tooltip" data-tip="선택된 항목에 한해서 엑셀파일로 저장이 가능합니다." ></i></a></li>
                                    <li><a href="/">신규여행작성</a></li>
                                </ul>
                                <select className="sel01">
                                    <option>출발일 &uarr;</option>
                                    <option>출발일 &darr;</option>
                                    <option>등록일 &uarr;</option>
                                    <option>등록일 &darr;</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="con_box_body">
                        <div className="list_head">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02">카테고리</div>
                            <div className="td03">상품번호</div>
                            <div className="td04">상품명</div>
                            <div className="td05">여행일</div>
                            <div className="td06">인원</div>
                            <div className="td07">형태</div>
                            <div className="td08">상태</div>
                            <div className="td09">상세보기</div>
                        </div>

                        {items.map((item) =>
                            <div key={item._id} className="list_line">
                                <div className="td01">
                                    <i className="checkbox">
                                        <input type="checkbox" name="agree" id="agree0" title="선택" />
                                        <label htmlFor="agree0" />
                                    </i>
                                </div>
                                <div className="td02"><i className="m_title">카테고리:</i>{item.category?.label}</div>
                                <div className="td03"><i className="m_title">상품번호:</i>{item.code.slice(0, 6)}</div>
                                <div className="td04"><Link href={generateSearchLink({ title: item.title })}><a> {item.title}</a></Link></div>
                                <div className="td05"><i className="m_title">여행일:</i>{yyyymmdd(item.createdAt)}</div>
                                <div className="td06"><i className="m_title">인원:</i> {item.compeltePeopleCnt}/{item.maxMember}</div>
                                <div className="td07"><i className="m_title">형태:</i>{getTypeTextOfProduct(item.type, item.dateRange)}</div>
                                <div className="td08"><PordStatusBadge status={item.status} /> </div>
                                <div className="td09"><button onClick={handleOpen(item._id)} className="btn small">상세보기</button></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <SearcfInfoBox />
            <MasterModal productId={popProductId} />


            {/* popup-기획반려 사유 */}
            <div className="popup_bg_mini" id="MiniPopup01">
                <div className="in_txt master_popup_mini">
                    <a className="close_icon" onClick={popupClose1}><i className="flaticon-multiply" /></a>
                    <div className="page">
                        <h3>기획반려 사유</h3>
                        <div className="con">
                            <div className="input_box">
                                <textarea></textarea>
                            </div>
                            <div className="info">
                                <p><i className="flaticon-flag-1" /> 기획서의 어떤 부분을 보완하기를 원하는지 사유를 적어주세요.</p>
                            </div>
                            <div className="fin">
                                <div className="float_left">

                                </div>
                                <div className="float_right">
                                    <button type="submit" className="btn medium">기획반려</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout >
};

export default MsGoodsMain;
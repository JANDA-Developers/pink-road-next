import React from 'react';
import { IDiv } from "../../types/interface"

interface IProp extends IDiv { }

export const Itinery: React.FC<IProp> = ({ ...props }) => {
    return <div {...props}>
        <h4>여행일정</h4>
        <div className="hang">
            <div className="top_day">
                <h5>1일차</h5>
                <span>2020.03.03(화)</span>
            </div>
            <div className="tour-list">
                <p>[07:00] 터미널에서 모임</p>
                <p>[08:00] 버스로 출발</p>
                <p>[09:00] 도착 및 아침식사</p>
                <p>
                    [10:30] 걷기 시작 &gt; 돌담길 &gt; 가로수길 &gt; 기념품집 &gt;
                    강변공원 &gt; 공연장 도착(약 1시간 걷기)
                    으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으
              </p>
                <p>[11:55] 점심식사-한정식</p>
                <p>[13:00] 간단한 공연관람</p>
                <p>[15:00] 버스로 출발</p>
                <p>[16:00] 행복복지센터도착 및 해산</p>
            </div>
        </div>
        <div className="bottom_ifon_txt">
            <span>
                <i className="flaticon-garbage-1" />
              유의사항
            </span>
            <p>
                상기일정은 예정일정표입니다. 출발시 담당자에게 확인해주세요. <br />-
            </p>
        </div>
    </div>
};

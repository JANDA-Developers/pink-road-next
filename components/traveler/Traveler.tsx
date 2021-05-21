import React from "react";
import { Ftraveler, GENDER } from "../../types/api";
import { AgeTypeToKR } from "../../utils/enumToKr";
import { autoHypenPhone } from "../../utils/formatter";

interface IProp {
    index?: number;
    isLast?: boolean;
    isFisrt?: boolean;
    handleDelete: () => void;
    handleAdd: () => void;
    onChange: (traveler: Ftraveler) => void;
    traveler: Ftraveler;
    isBooker?: boolean;
}

export const Traveler: React.FC<IProp> = ({
    index,
    traveler,
    handleDelete,
    handleAdd,
    onChange,
    isLast,
    isFisrt,
    isBooker,
}) => {
    return (
        <div className="tr">
            <div className="re01">
                {AgeTypeToKR[traveler.ageType]}
                {isBooker ? "(예약자)" : ""}
                {/* <span className="cut_nev">
                    {!isFisrt && (
                        <i
                            onClick={handleDelete}
                            className="flaticon-substract"
                            title="추가하기"
                        ></i>
                    )}
                    {isLast && (
                        <i
                            onClick={handleAdd}
                            className="flaticon-add"
                            title="삭제하기"
                        ></i>
                    )}
                </span> */}
            </div>
            <div className="re02">여행자명</div>
            <div className="re03">
                <span>
                    <input
                        readOnly={isBooker}
                        type="text"
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            traveler.name = val;
                            onChange(traveler);
                        }}
                        value={traveler.name || ""}
                    />
                </span>
            </div>
            <div className="re04">연락처</div>
            <div className="re05">
                <span>
                    <input
                        readOnly={isBooker}
                        type="text"
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            traveler.phoneNumber = val;
                            onChange(traveler);
                        }}
                        value={autoHypenPhone(traveler.phoneNumber)}
                    />
                </span>
            </div>
            <div className="re06">성별</div>
            <div className="re07">
                <select
                    value={traveler.gender}
                    onChange={(op) => {
                        const val = op.currentTarget.value;
                        traveler.gender = val as GENDER;
                        onChange(traveler);
                    }}
                >
                    <option value={GENDER.FEMALE}>여성</option>
                    <option value={GENDER.MAIL}>남성</option>
                </select>
            </div>
            <div className="re08">내/외국인</div>
            <div className="re09">
                <select
                    value={traveler.isForegin ? "true" : "false"}
                    onChange={(op) => {
                        const val = op.currentTarget.value;
                        traveler.gender = val as GENDER;
                        onChange(traveler);
                    }}
                >
                    <option value={"true"}>내국인</option>
                    <option value={"false"}>외국인</option>
                </select>
            </div>
        </div>
    );
};

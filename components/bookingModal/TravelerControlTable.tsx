import React, { useEffect } from "react";
import { AgeType, Ftraveler, GENDER } from "../../types/api";
import { DEFAULT_TRAVLER } from "../../types/const";
import { Traveler } from "../traveler/Traveler";

interface IProp {
    withIncludeBooker?: boolean;
    bookerName: string;
    bookerPhoneNumber: string;
    totalCount: number;
    adultCount: number;
    kidsCount: number;
    babyCount: number;
    bookerInclue: boolean;
    travelers: Ftraveler[];
    onChnageBookerInclude: (include: boolean) => void;
    onChangeTravlers: (travlers: Ftraveler[]) => void;
}

export const TravlerControlTable: React.FC<IProp> = ({
    withIncludeBooker = true,
    bookerName,
    bookerPhoneNumber,
    adultCount,
    babyCount,
    kidsCount,
    totalCount,
    bookerInclue,
    travelers,
    onChnageBookerInclude,
    onChangeTravlers,
}) => {
    const handleToggleBookerInclude = () => {
        onChnageBookerInclude(!bookerInclue);
    };

    useEffect(() => {
        if (bookerInclue) {
            const nameBooker = travelers[0]?.name === bookerName;
            const contactBooker =
                travelers[0]?.phoneNumber === bookerPhoneNumber;
            const isBookerAleradyIncluded = nameBooker && contactBooker;

            let nextTravelers = [
                {
                    ...DEFAULT_TRAVLER,
                    name: bookerName,
                    phoneNumber: bookerPhoneNumber,
                },
                ...travelers,
            ];

            if (isBookerAleradyIncluded) {
                return;
            }

            if (nextTravelers.length > totalCount) {
                nextTravelers = nextTravelers.splice(0, totalCount - 1);
            }
            console.log({ nextTravelers });
            onChangeTravlers([...nextTravelers]);
        } else {
            if (!travelers) return;
            travelers.splice(0, 1);
            onChangeTravlers([...travelers]);
        }
    }, [bookerInclue]);

    return (
        <div className="info_table peoplelist">
            <div className="top_info">
                <span className="tt">선택된 예약 인원</span>
                <span>
                    총 {totalCount}명 ( 성인
                    {adultCount} / 소아
                    {kidsCount} / 유아
                    {babyCount} )
                </span>
                {withIncludeBooker && (
                    <span className="float_right">
                        <i
                            onClick={handleToggleBookerInclude}
                            className={bookerInclue ? "menok" : "menno"}
                        >
                            {bookerInclue ? "예약자-포함" : "예약자-미포함"}
                        </i>
                    </span>
                )}
            </div>
            <div>
                {travelers?.map((traveler, index) => (
                    <Traveler
                        isBooker={index === 0 && bookerInclue}
                        isFisrt={index === 0}
                        isLast={index === travelers.length - 1}
                        handleDelete={() => {
                            travelers.splice(index, 1);
                            onChangeTravlers([...travelers]);
                        }}
                        handleAdd={() => {
                            travelers.push({ ...DEFAULT_TRAVLER });
                            onChangeTravlers([...travelers]);
                        }}
                        traveler={traveler}
                        key={index + "traveler"}
                        onChange={() => {
                            onChangeTravlers([...travelers]);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

{
    /* <div className="tr first peoplelist__wrap">
        <div className="re01 peoplelist__li">
            예약자{" "}
            {bookingCopy.bookerInclue &&
                "(본인)"}
        </div>
        <div className="re02 peoplelist__li">
            예약자명
        </div>
        <div className="re03 peoplelist__li">
            <span>{booking.name}</span>
        </div>
        <div className="re04 peoplelist__li">
            연락처
        </div>
        <div className="re05 peoplelist__li">
            <a
                href={`tel:${autoHypenPhone(
                    booking.phoneNumber
                )}`}
            >
                {autoHypenPhone(
                    booking.phoneNumber
                )}
            </a>
        </div>
        <div className="re06 peoplelist__li">
            성별
        </div>
        <div className="re07 peoplelist__li">
            <span>
                {genderToKR(booking.gender) ||
                    "정보없음"}
            </span>
        </div>
        <div className="re08 peoplelist__li">
            나이
        </div>
        <div className="re09 peoplelist__li">
            <span>
                {booking.age || "정보없음"}
            </span>
        </div>
    </div> */
}

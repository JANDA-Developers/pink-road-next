import dayjs from "dayjs";
import React from "react";
import { useFindProductsByGroup } from "../hook/useProduct";
import { productList_ProductList_data } from "../types/api";
import isEmpty from "../utils/isEmpty";

interface IProp {
    currentId: string;
    groupCode: string;
    onChange: (target?: productList_ProductList_data) => void;
}

export const ProductDateSelecter: React.FC<IProp> = ({
    currentId,
    groupCode,
    onChange,
}) => {
    const { dateOrderedItems, getLoading } = useFindProductsByGroup(groupCode);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.currentTarget.value;
        const target = dateOrderedItems.find((item) => item._id === id);
        onChange(target);
    };

    const Result = () => (
        <div className="productDateSelecter write_type">
            <div className="input_form">
                <span className="productDateSelecter__categoryWrap category r3">
                    <select
                        onChange={handleChange}
                        value={currentId}
                        name="type"
                    >
                        {dateOrderedItems?.map((p) => (
                            <option key={p._id} value={p._id}>
                                {dayjs(p.startDate).format("YYYY.MM.DD")}{" "}
                                {p.isOpen ? "" : ` [비공개]`}
                            </option>
                        ))}
                    </select>
                </span>
            </div>
        </div>
    );

    let availableExsist = false;

    if (getLoading) return <Result />;
    for (let item of dateOrderedItems) {
        if (dayjs(item.startDate).isAfter(new Date(), "day")) {
            availableExsist = true;
        }
    }
    if (isEmpty(dateOrderedItems))
        return <span>예약가능 기간이 지났습니다.</span>;
    if (!availableExsist) return <span>예약가능 기간이 지났습니다.</span>;
    if (!groupCode) return <span>{}</span>;

    return <Result />;
};

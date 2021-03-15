import CalendarIcon from 'components/common/icon/CalendarIcon';
import React, { useState } from 'react';
import Link from "next/link";
import { useEstimateList } from '../hook/useEstimate';
import { EstimateCounter } from '../components/Estimate/EstimateCounter';
import { estimateItemList_EstimateItemList_data, FestimateItem, FestimateOption } from '../types/api';
import { EstimateViewer } from '../components/Estimate/EstimateViewer';
import { useCopy } from '../hook/useUpdate';
import { getStaticPageInfo, Ipage } from '../utils/page';
import { PageEditor } from '../components/common/PageEditer';
import { usePageEdit } from '../hook/usePageEdit';
import SubTopNav from '../layout/components/SubTop';
import defaultInfo from "../info/estimate.json";

export interface EstimateOption extends FestimateOption {
    count: number;
    calculatedPrice: number
}

export interface Estimate extends FestimateItem {
    options: EstimateOption[];
}

interface IProp extends Ipage {
    itemsFormData: Estimate[]
    items: estimateItemList_EstimateItemList_data[]
}

export const CustomQuotation: React.FC<IProp> = ({ items, pageInfo, itemsFormData }) => {
    const [estimate, setEstimate] = useCopy<Estimate[]>(itemsFormData)
    const pageTools = usePageEdit(pageInfo, defaultInfo)
    const { edit } = pageTools;
    return <div className="w1200 customquotation ">
        <SubTopNav pageTools={pageTools}>
            <li>
                <a>맞춤견적</a>
            </li>
        </SubTopNav>
        <PageEditor {...pageInfo} />
        <div className="quotation__table">
            <div className="quotation__table_fom">

                {estimate.map(item => <div key={item._id}>
                    <div className="title">{item.title}</div>
                    <div className="quotation__table_list">
                        {item.options.map((option, index) =>
                            <EstimateCounter onChange={() => {
                                setEstimate([...estimate]);
                            }} option={option} key={item._id + "option" + index} />
                        )}
                    </div>
                </div>
                )}
            </div>
            <h4 {...edit("totalPriceTitle")} />
            <EstimateViewer estimate={estimate} />
            <div className="quotation__info">
                <strong {...edit("cautionTitle")} /><br />
                <span {...edit("cautionContent")} />
            </div>
        </div>
    </div>
};

export const getStaticProps = getStaticPageInfo("estimate");
export const CustomQuotationWrap: React.FC<Ipage> = (pageTools) => {
    const { items } = useEstimateList();
    const itemsFormData = items.map(item => {
        const formItem = item.options.map((option): EstimateOption => ({
            ...option,
            count: 0,
            calculatedPrice: 0
        }))
        return {
            ...item,
            options: formItem
        };
    })
    return <CustomQuotation itemsFormData={itemsFormData} key={items.length} items={items} {...pageTools} />
}

export default CustomQuotation;
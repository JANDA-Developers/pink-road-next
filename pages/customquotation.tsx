import React from 'react';
import { useEstimateFindOne } from '../hook/useEstimate';
import { EstimateCounter } from '../components/Estimate/EstimateCounter';
import { estimateItemListFindOne_EstimateItemListFindOne_data, FestimateItem, FestimateOption } from '../types/api';
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

interface IProp {
    _pageInfo: Ipage;
    itemsFormData: Estimate[];
    items: estimateItemListFindOne_EstimateItemListFindOne_data[];
}

export const CustomQuotation: React.FC<IProp> = ({ items, itemsFormData, _pageInfo }) => {
    const [estimate, setEstimate] = useCopy<Estimate[]>(itemsFormData)
    const pageInfo = usePageEdit(_pageInfo, defaultInfo)
    const { edit } = pageInfo;
    const filteredEstimate = estimate?.filter(estimate => estimate.isUse) || [];

    return <div>
        <SubTopNav pageTools={pageInfo}>
            <li>
                <a>맞춤견적</a>
            </li>
        </SubTopNav>
        <div className="w1200 customquotation ">
            <PageEditor pageTools={pageInfo} />
            <div className="quotation__table">
                <div className="quotation__table_fom">
                    {filteredEstimate?.map((item, index) => <div key={"estimate" + index}>
                        <div className="title">{item.title}</div>
                        <div className="quotation__table_list">
                            {item.options.map((option, _index) =>
                                <EstimateCounter needtoGrow={_index === (item.options.length - 1) && (item.options.length % 2 !== 0)} onChange={() => {
                                    setEstimate([...estimate]);
                                }} option={option} key={index + "option" + _index} />
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
    </div>
};

export const getStaticProps = getStaticPageInfo("estimate");
export const CustomQuotationWrap: React.FC<Ipage> = (pageInfo) => {
    const { data } = useEstimateFindOne();

    const itemsFormData = data?.map(item => {
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

    return <CustomQuotation itemsFormData={itemsFormData} key={data?.length} items={data} _pageInfo={pageInfo} />
}

export default CustomQuotationWrap;

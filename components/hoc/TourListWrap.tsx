import { Parameter } from "aws-sdk/clients/iot";
import { useCategoryList } from "../../hook/useCategory";
import { IuseProductList, useProductList } from "../../hook/useProduct";
import { Fcategory, ProductType } from "../../types/api";
import { getFromUrl } from "../../utils/url";

interface IComponentProp {
    context: ITourListWrapContext;
    [key: string]: any
}

export interface ITourListWrapContext extends IuseProductList {
    cats: Fcategory[];
    typeFilter: ProductType;
    isExp: boolean;
}

export const TourListWrap = (Compoent: React.FC<IComponentProp & any>): React.FC<any> => (props: Parameters<typeof Compoent>) => {
    const isExp = getFromUrl("exp") == "true";
    const typeFilter = isExp ? ProductType.EXPERIENCE : ProductType.TOUR;
    const productContext = useProductList({
        initialFilter: {
            type_eq: typeFilter
        }
    });
    const { items: cats, getLoading } = useCategoryList();

    const context: ITourListWrapContext = {
        ...productContext,
        typeFilter,
        isExp,
        cats
    }

    return <Compoent {...props} context={context} />
}

import { PortfolioCreateInput } from "types/api";
import { SAMPLE_FILE } from "types/const";
import { IPortfolio } from "types/interface";


const DEFAULT_PORTFOLIO_INPUT:PortfolioCreateInput = process.env.NODE_ENV === "development" ? {
    thumb: SAMPLE_FILE,
    title: "타이틀",
    content: undefined,
    pCategoryId: "",
    isOpen: false,
    keyWards: ["key1","key2","key3"],
    subTitle: "서브타이틀",
    summary: "요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약"
} : {
    thumb: undefined,
    title: "",
    content: undefined,
    pCategoryId: "",
    isOpen: false,
    keyWards: [],
    subTitle: ""
}

export const getDefault = (product?: IPortfolio):PortfolioCreateInput => {
    const defaults:PortfolioCreateInput  = product ? {
        thumb: product.thumb,
         title: product.title,
          content: product.content,
          pCategoryId: product.pCategory._id,
          isOpen: product.isOpen,
          keyWards: [],
          subTitle: product.subTitle,
          summary: product.summary
        } : DEFAULT_PORTFOLIO_INPUT

    return  defaults

}


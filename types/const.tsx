import { IPageInfo } from "./interface"
import { ItineraryCreateInput, ProductStatus, UserRole, } from "./api";

export const DEFAULTS = {
    logo: "src/img/logo_1.png",
    productImg: "src/img/sample_01.gif",
}

export const BG = (url: string) => ({ backgroundImage: `url(${url})` })

export const Econvert = (status: ProductStatus) => {

    if (status === ProductStatus.OPEN) {
        return "해결완료"
    }

    if (status === ProductStatus.READY) {
        return "해결중"
    }
}

export const DEFAULT_PAGE: IPageInfo = {
    __typename: "Page",
    cntPerPage: 1,
    end_page_num: 0,
    isNext: false,
    isPrev: false,
    next_page_num: 0,
    page: 1,
    prev_page_num: 0,
    start_page_num: 0,
    totalPageSize: 0
}

export const EMPTY_EDITOR = { blocks: [] }


export const SAMPLE_FILE = {
    description: "",
    extension: "",
    fileType: "",
    name: "doob.jpg",
    owner: "admin@naver.com",
    uri: "https://pink-loader-storage.s3.ap-northeast-2.amazonaws.com/doob.jpg"
}

export const DEFAULT_IT: ItineraryCreateInput = {
    contents: ["asd"],
    images: [],
    date: new Date(),
    title: ""
}


export const ADMINS = [UserRole.admin, UserRole.manager];
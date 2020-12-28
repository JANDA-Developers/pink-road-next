import dayjs from "dayjs";
import { IPageInfo } from "./interface"
import { Fquestion_author_profileImg, ItineraryCreateInput, ProductStatus, UserRole, } from "./api";

export const lastMonthFirstDate = dayjs().add(-1, "m").set("day", 1).toDate();
export const lastMonthLastDate = dayjs().add(-1, "m").endOf("month").toDate();
export const thisMonthLastDate = dayjs().endOf("month").toDate();
export const thisMonthFirstDate = dayjs().set("day", 1).toDate();


export const DEFAULTS = {
    logo: "src/its/logo_1.png",
    productImg: "src/img/sample_01.gif",
}

export const BG = (url: string) => ({ backgroundImage: `url(${url})` })
export const BGprofile = (profileImg: Fquestion_author_profileImg | null | undefined) => {
    return BG(profileImg?.uri || DEFAULT_PROFILE_IMG);
}

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
    totalPageSize: 0,
    remainder: 0,
    totalCount: 0
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
    contents: [""],
    images: [],
    date: new Date(),
    title: ""
}


export const SELLERS = [UserRole.partner, UserRole.partnerB];
export const ADMINS = [UserRole.admin, UserRole.manager];
export const ONLY_LOGINED = [UserRole.admin, UserRole.individual, UserRole.manager, UserRole.partner, UserRole.partnerB];
export const FULL_ACCESS = [...ONLY_LOGINED, UserRole.anonymous];
export const ALLOW_SELLERS = [UserRole.partner, UserRole.partnerB, UserRole.manager, UserRole.admin];
export const DEFAULT_PROFILE_IMG = "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";

export const DEFAULT_PAGEINFO = {
    pageInfo: {}, defaultPageInfo: {}, pageKey: ""
}
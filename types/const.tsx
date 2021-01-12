import dayjs from "dayjs";
import { IPageInfo, Ipopup } from "./interface"
import { Fquestion_author_profileImg, ItineraryCreateInput, LinkBehavior, ProductStatus, UserRole, } from "./api";
import { generateRandomStringCode } from "../utils/codeGenerator";

export const lastMonthFirstDate = dayjs().add(-1, "m").set("day", 1).toDate();
export const lastMonthLastDate = dayjs().add(-1, "m").endOf("month").toDate();
export const thisMonthLastDate = dayjs().endOf("month").toDate();
export const thisMonthFirstDate = dayjs().set("day", 1).toDate();


export const DEFAULTS = {
    logo: "src/img/logo_1.png",
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


export const ALLOW_SELLERS = [UserRole.partner, UserRole.partnerB];
export const ALLOW_ADMINS = [UserRole.admin, UserRole.manager];
export const ALLOW_LOGINED = [UserRole.admin, UserRole.individual, UserRole.manager, UserRole.partner, UserRole.partnerB];
export const ALLOW_FULLESS = [...ALLOW_LOGINED, UserRole.anonymous];
export const ALLOW_ALLOW_SELLERS = [UserRole.partner, UserRole.partnerB, UserRole.manager, UserRole.admin];

export const DEFAULT_PROFILE_IMG = "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";

export const DEFAULT_PAGEINFO = {
    pageInfo: {}, defaultPageInfo: {}, pageKey: ""
}

export const defaultModalGet: () => Ipopup = () => ({
    __typename: "Modal",
    isDelete: false,
    _id: generateRandomStringCode(4),
    content: "",
    createdAt: new Date(),
    endDate: new Date(),
    link: "",
    linkBehavior: LinkBehavior.blank,
    startDate: new Date(),
    style: {
        height: 100,
        left: 0,
        top: 0,
        width: 100,
    },
    title: "",
    updatedAt: new Date()
})

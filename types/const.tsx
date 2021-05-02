import dayjs from "dayjs";
import { IPageInfo, Ipopup } from "./interface";
import {
    Ffile,
    FimgScaleUrl,
    Fquestion_author_profileImg,
    Fuser,
    ItineraryCreateInput,
    LinkBehavior,
    ProductStatus,
    SettlementStatus,
    UserRole,
} from "./api";
import { generateRandomStringCode } from "../utils/codeGenerator";

export const DEFAULT_LOGO = "/img/logo_1.png";

export const lastMonthFirstDate = dayjs()
    .add(-1, "month")
    .set("day", 1)
    .toDate();
export const lastMonthLastDate = dayjs()
    .add(-1, "month")
    .endOf("month")
    .toDate();
export const thisMonthLastDate = dayjs().endOf("month").toDate();
export const thisMonthFirstDate = dayjs().startOf("month").toDate();
export const oneYearBefore = dayjs().add(-1, "y").toDate();
export const sixMonthBefore = dayjs().add(-6, "month").toDate();

export const DEFAULTS = {
    logo: "src/img/logo_1.png",
    productImg: "src/img/sample_01.gif",
};

export const BG = (url: string) => ({ backgroundImage: `url(${url})` });
export const BGprofile = (
    profileImg: Fquestion_author_profileImg | null | undefined
) => {
    return BG(profileImg?.uri || DEFAULT_PROFILE_IMG);
};

export const Econvert = (status: ProductStatus) => {
    if (status === ProductStatus.OPEN) {
        return "해결완료";
    }

    if (status === ProductStatus.READY) {
        return "해결중";
    }
};

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
    totalCount: 0,
};

export const EMPTY_EDITOR = { blocks: [] };

export const SAMPLE_FILE = {
    description: "",
    extension: "",
    fileType: "",
    name: "doob.jpg",
    owner: "admin@naver.com",
    uri: "https://pink-loader-storage.s3.ap-northeast-2.amazonaws.com/doob.jpg",
};

export const DEFAULT_IT: ItineraryCreateInput = {
    contents: [""],
    images: [],
    date: new Date(),
    title: "",
};

export const ALLOW_ADMINS = [UserRole.admin, UserRole.manager];
export const ALLOW_LOGINED = [
    UserRole.admin,
    UserRole.individual,
    UserRole.manager,
    UserRole.partner,
    UserRole.partnerB,
];
export const ALLOW_FULLESS = [...ALLOW_LOGINED, UserRole.anonymous];
export const ALLOW_SELLERS = [
    UserRole.partner,
    UserRole.partnerB,
    UserRole.manager,
    UserRole.admin,
];

export const DEFAULT_PROFILE_IMG =
    "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";

export const DEFAULT_PAGEINFO = {
    pageInfo: {},
    defaultPageInfo: {},
    pageKey: "",
};

export const defaultModalGet: () => Ipopup = () => ({
    __typename: "Modal",
    open: true,
    isDelete: false,
    _id: generateRandomStringCode(4),
    content: "",
    createdAt: new Date(),
    endDate: new Date(),
    link: "",
    useMobile: false,
    usePc: true,
    linkBehavior: LinkBehavior._blank,
    startDate: new Date(),
    style: {
        height: 500,
        left: 100,
        top: 100,
        width: 300,
    },
    title: "",
    updatedAt: new Date(),
    priority: 1,
});

export const AFTER_OPEN_PRODUCT_STATUS = [
    ProductStatus.OPEN,
    ProductStatus.EXPIRED,
    ProductStatus.CANCELD,
    ProductStatus.COMPLETED,
];
export const DELETE_AVAIABLE_PRODUCTS = [
    ProductStatus.UPDATE_REQ,
    ProductStatus.UPDATE_REQ_REFUSED,
    ProductStatus.REFUSED,
    ProductStatus.READY,
];
export const SETTLEMENT_REQ_AVAIABLE = [ProductStatus.COMPLETED];

export const CONDITION = {
    travelCacnel: "여행취소는 예약자가 없을때만 가능합니다.",
    travelDetermineChange: "출발 확정 임의변경은 최소 7일전에 해주셔야합니다.",
};
export const SYSTEM_CHECK_MESSAGE = {
    travelCancel: `
    정말로 상품을 취소 하시겠습니까?
    `,
    productDelete: `
        정말로 상품을 삭제 하시겠습니까?
    `,
};

export const NUMBER_OPS = (() => {
    const blueBirds = new Array(100).fill(null).map((val, index) => index);
    return blueBirds;
})();

export const REGEX = {
    float: new RegExp(/^[+-]?\d*(\.?\d*)$/),
};

export const userNameWith = (user: Fuser) => {
    const bracket = user.blueBird ? user.blueBird : user.busi_name;
    return user.name + bracket ? "(" + bracket + ")" : "";
};

export type ResizeKeys = keyof Omit<FimgScaleUrl, "__typename">;

export const ImgResizeSizes: Record<ResizeKeys, number> = {
    huge: 3000,
    large: 1500,
    medium: 800,
    small: 400,
    tiny: 200,
};

export const getImg = (
    file: Ffile | null | undefined,
    hopeSize: ResizeKeys
) => {
    if (!file) return "";
    const windowSize = window.outerWidth;
    const hopeSizeNumber = ImgResizeSizes[hopeSize];
    const sizes: ResizeKeys[] = ["tiny", "small", "medium", "large", "huge"];
    const checkExist = (size: ResizeKeys) => {
        return !!file.imgScaleUrl?.[size];
    };

    if (windowSize < 800 && windowSize < hopeSizeNumber) {
        hopeSize = "medium";
    }

    if (windowSize < 400 && windowSize < hopeSizeNumber) {
        hopeSize = "small";
    }

    const targetIndex = sizes.findIndex((size) => size === hopeSize);
    const largetThans = sizes.slice(targetIndex, sizes.length);

    console.log({ largetThans });

    const size = largetThans.find((size) => checkExist(size));

    if (size) {
        return file.imgScaleUrl[size];
    }
    return file.uri;
};



import dayjs from "dayjs";
import {
    Dispatch,
    RefObject,
    SetStateAction,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import {
    filterOver,
    generateitinery,
    TRange,
} from "../components/tourWrite/helper";
import {
    Ffile,
    ItineraryCreateInput,
    productCreate,
    ProductCreateInput,
    productCreateVariables,
    ProductStatus,
    ProductType,
    ProductUpdateInput,
} from "../types/api";
import { IproductFindById, ISet } from "../types/interface";
import isEmpty from "../utils/isEmpty";
import { omits } from "../utils/omit";
import { Storage } from "../utils/Storage";
import { toNumber } from "../utils/toNumber";
import { Validater } from "../utils/validate";
import { useUpload } from "./useUpload";
import { autoComma, deepCopy } from "../utils/formatter";
import {
    useProductCreate,
    useProductDelete,
    useProductUpdate,
} from "./useProduct";
import { useRouter } from "next/router";
import { ProductTempBoard } from "../utils/Storage2";
import { openModal } from "../utils/popUp";
import { AppContext } from "../pages/_app";
import { cloneDeep } from "@apollo/client/utilities";

type SimpleTypePart =
    | "isOpen"
    | "title"
    | "address"
    | "adult_price"
    | "baby_price"
    | "kids_price"
    | "startPoint"
    | "maxMember"
    | "minMember"
    | "subTitle"
    | "caution"
    | "info"
    | "contents"
    | "inOrNor"
    | "isNotice";
export type TSimpleTypePart = Pick<
    Required<ProductCreateInput>,
    SimpleTypePart
>;

export type TRangeType = "Range" | "Single";

export const DEFAULT_SIMPLE_TOUR_DATA: TSimpleTypePart = {
    address: "",
    adult_price: 0,
    baby_price: 0,
    kids_price: 0,
    info: "",
    maxMember: 0,
    minMember: 0,
    startPoint: "",
    subTitle: "",
    title: "",
    caution: "",
    contents: "",
    inOrNor: "",
    isNotice: false,
    isOpen: true,
};

export interface IUseTourData {
    its: ItineraryCreateInput[];
    simpleData: TSimpleTypePart;
    categoryId: string;
    regionId: string;
    status: ProductStatus;
    keyWards: string[];
    thumbs: Ffile[];
    type: ProductType;
    dates: Date[];
    range: number;
    rangeType: TRangeType;
}

interface IUseTourDefaultData {
    simpleData: TSimpleTypePart;
    categoryId: string;
    files: Ffile[];
    thumbs: Ffile[];
    regionId: string;
    contents: string;
    status: ProductStatus;
    its: ItineraryCreateInput[];
    keyWards: string[];
    type: ProductType;
}

interface ITourDataSet {
    setits: ISet<ItineraryCreateInput[]>;
    setSimpleData: ISet<TSimpleTypePart>;
    setCategoryId: ISet<string>;
    setStatus: ISet<ProductStatus>;
    setThumbs: ISet<Ffile[]>;
    setkeyWards: ISet<string[]>;
    setLoadKey: ISet<number>;
    setType: ISet<ProductType>;
}

export interface IUseTour {
    setDates: ISet<Date[]>;
    dates: Date[];
    rangeType: TRangeType;
    setRangeType: ISet<TRangeType>;
    tempSavedIts: ItineraryCreateInput[];
    setTempSavedIts: ISet<ItineraryCreateInput[]>;
    range: number;
    setRange: ISet<number>;
    imgUploading: boolean;
    loadKeyAdd: () => void;
    tourData: IUseTourData;
    tourSets: ITourDataSet;
    validater: Validater;
    groupCode: string;
    setGroupCode: Dispatch<SetStateAction<string | undefined>>;
    setTourData: (data: Partial<IUseTourData>) => void;
    loadKey: number;
    firstDate?: Date;
    lastDate?: Date;
    mutations: {
        createFn: (params: [ProductCreateInput]) => void;
        updateFn: (_id: string, params: ProductUpdateInput) => void;
        deleteFn: (id: string) => void;
    };
    getCreateInput: () => [ProductCreateInput];
    getUpdateInput: () => ProductUpdateInput;
    hiddenFileInput: RefObject<HTMLInputElement>;
    handles: {
        handleRegionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
        handleTextData: (key: keyof TSimpleTypePart) => (data: string) => void;
        handleTempSave: () => Promise<void>;
        handleDateState: (dates: Date[]) => void;
        handleClearThumb: (index: number) => () => void;
        handleChangeSumbNail: (
            event: React.ChangeEvent<HTMLInputElement>
        ) => void;
        handleUploadClick: () => void;
        handleCatChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
        handleChangeStatus: (e: React.ChangeEvent<HTMLInputElement>) => void;
        handleInputChange<T extends SimpleTypePart>(
            key: T
        ): (e: React.ChangeEvent<HTMLInputElement>) => void;
        handleInputCommaChange<T extends SimpleTypePart>(
            key: T
        ): (e: React.ChangeEvent<HTMLInputElement>) => void;
        handleLoad: () => void;
    };
}

interface IUseTourProps extends Partial<IUseTourDefaultData> {}
export const useTourWrite = ({ ...defaults }: IUseTourProps): IUseTour => {
    const { isParterB, isParterNonB, isManager } = useContext(AppContext);
    const [range, setRange] = useState(1);
    const [rangeType, setRangeType] = useState<TRangeType>("Single");
    const [tempSavedIts, setTempSavedIts] =
        useState<ItineraryCreateInput[] | undefined>();
    const [type, setType] = useState<ProductType>(
        defaults.type || ProductType.TOUR
    );
    const [dates, setDates] = useState<Date[]>(defaults.its?.[0]?.date || []);
    const [its, setits] = useState<ItineraryCreateInput[]>(
        deepCopy(
            defaults.its ||
                // generateitinery(
                //     {
                //         from: dates[0],
                //         to: dayjs(dates[0]).add(range, "day").toDate(),
                //     },
                //     []
                // )
                []
        )
    );
    const filterOverIts = filterOver(its, range);
    const [simpleData, setSimpleData] = useState<TSimpleTypePart>(
        defaults.simpleData || DEFAULT_SIMPLE_TOUR_DATA
    );
    const [categoryId, setCategoryId] = useState<string>(
        defaults.categoryId || ""
    );
    const [regionId, setRegionId] = useState<string>(defaults.regionId || "");
    const [status, setStatus] = useState<ProductStatus>(
        defaults.status || ProductStatus.READY
    );
    const [thumbs, setThumbs] = useState<Ffile[]>(
        Array.from(defaults.thumbs || [])
    );
    const [keyWards, setkeyWards] = useState<string[]>(
        Array.from(defaults.keyWards || [])
    );
    const [loadKey, setLoadKey] = useState<number>(0);
    const [groupCode, setGroupCode] = useState<string>();
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const { signleUpload, totalLoading: imgUploading } = useUpload();
    const router = useRouter();

    const [productDelete] = useProductDelete({
        onCompleted: ({ ProductDelete }) => {
            if (ProductDelete.ok) router.push("/tour/list");
        },
    });

    const { productUpdate, updateLoading } = useProductUpdate({
        onCompleted: ({ ProductUpdate }) => {
            if (ProductUpdate.ok)
                router.push(`/tour/view/${ProductUpdate?.data?._id}`);
        },
    });

    const [ProductCreateMu, { loading: createLoading }] = useProductCreate({
        onCompleted: ({ ProductCreate }) => {
            console.log({ ProductCreate });
            if (ProductCreate.ok) {
                if (!isManager) {
                    if (isParterB) alert("상품 등록이 완료되었습니다.");
                    else if (isParterNonB)
                        alert(
                            "등록 요청이 완료되었습니다. 핑크로더 승인 후 홈페이지에 상품이 바로 오픈 됩니다."
                        );
                }
                router.push(`/tour/view/${ProductCreate!.data!._id}`);
            }
        },
    });

    const createFn = (params: ProductCreateInput[]) => {
        if (createLoading) return;
        ProductCreateMu({
            variables: {
                params,
                groupCode,
            },
        });
    };

    const updateFn = (_id: string, params: ProductUpdateInput) => {
        if (updateLoading) return;
        productUpdate({
            _id,
            params: {
                ...params,
            },
            reason: "",
        });
    };

    const deleteFn = (id: string) => {
        if (confirm("정말로 상품을 삭제 하시겠습니가?"))
            productDelete({
                variables: {
                    id,
                },
            });
    };

    const mutations = {
        createFn,
        updateFn,
        deleteFn,
    };

    const validater = new Validater([
        {
            value: thumbs?.[0]?.uri,
            failMsg: "썸네일은 필수 입니다.",
            id: "thumb",
        },
        {
            value: simpleData.title,
            failMsg: "제목값은 필수 입니다.",
            id: "title",
        },
        {
            value: simpleData.contents,
            failMsg: "안내 및 참고를 입력 해주세요.",
            failFn: () => {
                document.getElementById("tap2")?.click();
            },
            id: "content",
        },
        {
            value: simpleData.inOrNor,
            failMsg: "포함 및 불포함 내용을 입력 해주세요.",
            failFn: () => {
                document.getElementById("tap3")?.click();
            },
            id: "inOrNor",
        },
        {
            value: simpleData.caution && simpleData.info,
            failMsg: "유의사항 및 안내문 내용을 입력 해주세요.",
            failFn: () => {
                document.getElementById("tap4")?.click();
            },
            id: "info",
        },
        {
            value: categoryId,
            failMsg: "카테고리 값은 필수 입니다.",
            id: "category",
        },
        {
            value: simpleData.startPoint,
            failMsg: "출발 장소값은 필수 입니다.",
            id: "startPoint",
        },
        {
            value: regionId,
            failMsg: "지역을 선택 해주세요",
            id: "RegionId",
        },
        {
            value: !isEmpty(its),
            failMsg: "여행일정은 필수 입니다.",
            failFn: () => {
                document.getElementById("tap1")?.click();
            },
            id: "itinerary",
        },
        {
            value: simpleData.baby_price || simpleData.baby_price === 0,
            failMsg: "유아 가격을 입력 해주세요.",
            id: "inputBabyPrice",
        },
        {
            value: simpleData.adult_price || simpleData.adult_price === 0,
            failMsg: "성인 가격을 입력 해주세요.",
            id: "inputAdultPrice",
        },
        {
            value: simpleData.kids_price || simpleData.kids_price === 0,
            failMsg: "소인 가격을 입력 해주세요.",
            id: "inputKidsPrice",
        },
        {
            value: !isEmpty(keyWards),
            failMsg: "키워드 값은 필수 입니다.",
            id: "keywards",
        },
        {
            value: !isEmpty(type),
            failMsg: "상품타입 값은 필수 입니다.",
            id: "type",
        },
        {
            value: !filterOverIts?.find((it) => Boolean(it.title) === false),
            failMsg: "일정 타이틀 값은 필수 입니다.",
            failFn: () => {
                document.getElementById("tap01")?.click();
                $(".taptitle .input_01")
                    .filter(function () {
                        return !(this as HTMLInputElement).value;
                    })
                    .focus();
            },
        },
    ]);

    const tourData: IUseTourData = {
        categoryId,
        regionId,
        its,
        keyWards,
        type,
        simpleData,
        status,
        thumbs,
        dates,
        range,
        rangeType,
    };
    const {
        address,
        adult_price,
        baby_price,
        caution,
        contents,
        inOrNor,
        info,
        isNotice,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        subTitle,
        title,
        isOpen,
    } = simpleData;

    const tourSets: ITourDataSet = {
        setCategoryId,
        setkeyWards,
        setLoadKey,
        setSimpleData,
        setStatus,
        setThumbs,
        setits,
        setType,
    };

    const getTemplate = () => {
        const template = {
            categoryId,
            keyWards,
            address,
            adult_price: toNumber(adult_price),
            baby_price: toNumber(baby_price),
            kids_price: toNumber(kids_price),
            maxMember: toNumber(maxMember),
            minMember: toNumber(minMember),
            caution,
            contents,
            images: thumbs,
            inOrNor,
            info,
            regionId,
            itinerary: omits(filterOverIts, [
                "isOver" as any,
            ]) as ItineraryCreateInput[],
            startPoint,
            title,
            isNotice,
            isOpen: true,
            subTitle,
            type,
        };
        return template;
    };

    const getCreateInput = (): [ProductCreateInput] => {
        const template: ReturnType<typeof getTemplate> = getTemplate();

        const inputs = dates.map((date) => {
            const templateCopy: ReturnType<typeof getTemplate> = JSON.parse(
                JSON.stringify(template)
            );
            templateCopy.itinerary.forEach((its, i) => {
                its.date = dayjs(date).add(i, "day").toDate();
            });
            return templateCopy;
        });
        return omits(inputs);
    };

    const getUpdateInput = (): ProductUpdateInput => {
        const updateParams = getCreateInput()?.[0];
        const updateInput = omits(updateParams);
        return updateInput;
    };

    const loadKeyAdd = () => {
        setLoadKey(loadKey + 1);
    };

    const handleUploadClick = () => {
        if (!hiddenFileInput.current) return;
        hiddenFileInput.current.value = "";
        hiddenFileInput.current?.click();
    };

    const handleChangeSumbNail = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            thumbs.push(data);
            setThumbs([...thumbs]);
        };
        signleUpload(fileUploaded, onUpload, { resizes: ["small", "medium"] });
    };

    const handleClearThumb = (index: number) => () => {
        thumbs.splice(index, 1);
        setThumbs([...thumbs]);
    };

    const setTourData = (data: Partial<IUseTourData>) => {
        if (data.simpleData) data.simpleData.isOpen = true;
        if (data.categoryId) setCategoryId(data.categoryId);
        if (data.its) setits(data.its);
        if (data.simpleData) setSimpleData(data.simpleData);
        if (data.thumbs) setThumbs(data.thumbs);
        if (data.type) setType(data.type);
        if (data.keyWards) setkeyWards(data.keyWards);
        if (data.regionId) setRegionId(data.regionId);
        if (data.dates) setDates(data.dates);
        if (data.range) setRange(data.range);
        if (data.rangeType) setRangeType(data.rangeType);
        if (!data.dates) setDates([data?.its?.[0]?.date]);
    };

    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextRegion = e.currentTarget.value;
        setRegionId(nextRegion);
    };

    const handleCatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextCat = e.currentTarget.value;
        setCategoryId(nextCat);
    };

    const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value as ProductStatus);
    };

    const handleTempSave = async () => {
        ProductTempBoard.addItem({
            ...tourData,
        });
        loadKeyAdd();
        Storage!.saveLocal("write", tourData);
        alert(
            "임시저장이 완료되었습니다. 작성 중인 상품은 마이페이지에서 확인 가능합니다."
        );
    };

    const handleLoad = () => {
        openModal("#LocalStorageBoard")();
    };

    const handleDateState = (dates: Date[]) => {
        setDates([...dates]);
    };

    useEffect(() => {
        const from = dates[0];
        const to = dayjs(from)
            .add(rangeType === "Range" ? range : 0, "day")
            .toDate();
        const newItinerary = generateitinery({ from, to }, tempSavedIts || its);
        console.log({ newItinerary });
        setits([...newItinerary]);
        setTempSavedIts(undefined);
    }, [range, dates.length]);

    function set<T extends keyof TSimpleTypePart>(key: T, value: any) {
        simpleData[key] = value;
        setSimpleData({ ...simpleData });
    }

    function handleInputChange<T extends keyof TSimpleTypePart>(key: T) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            set(key, e.currentTarget.value);
        };
    }

    function handleInputCommaChange<T extends keyof TSimpleTypePart>(key: T) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            set(key, autoComma(e.currentTarget.value));
        };
    }

    const handleTextData = (key: keyof TSimpleTypePart) => (data: string) => {
        set(key, data);
    };

    const fistItDate = filterOverIts[0]?.date;
    const firstDate = fistItDate ? dayjs(fistItDate).toDate() : undefined;
    const lastItDate = filterOverIts[filterOverIts.length - 1]?.date;
    const lastDate = lastItDate ? dayjs(lastItDate).toDate() : undefined;

    return {
        dates,
        groupCode,
        setDates,
        rangeType,
        setRangeType,
        tempSavedIts,
        setTempSavedIts,
        range,
        setRange,
        imgUploading,
        tourData,
        loadKey,
        loadKeyAdd,
        tourSets,
        validater,
        setTourData,
        setGroupCode,
        firstDate,
        hiddenFileInput,
        getCreateInput,
        getUpdateInput,
        lastDate,
        mutations,
        handles: {
            handleLoad,
            handleTextData,
            handleTempSave,
            handleInputChange,
            handleRegionChange,
            handleCatChange,
            handleChangeStatus,
            handleUploadClick,
            handleChangeSumbNail,
            handleClearThumb,
            handleDateState,
            handleInputCommaChange,
        },
    };
};

export const getDefault = (
    product: IproductFindById | undefined
): Partial<IUseTourDefaultData> => {
    if (!product) return {};

    const {
        address,
        adult_price,
        baby_price,
        category,
        caution,
        contents,
        images: thumbs,
        inOrNor,
        info,
        isNotice,
        itinerary: its,
        keyWards,
        kids_price,
        maxMember,
        minMember,
        type,
        startPoint,
        status,
        subTitle,
        region,
        title,
        isOpen,
    } = product;

    const simpleData: TSimpleTypePart = {
        address,
        adult_price,
        baby_price,
        caution,
        contents,
        inOrNor,
        info,
        isNotice,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        subTitle,
        title,
        isOpen,
    };

    return {
        categoryId: category?._id,
        contents,
        its,
        regionId: region?._id || "",
        keyWards: keyWards || [],
        simpleData,
        status,
        type,
        thumbs: thumbs || [],
    };
};

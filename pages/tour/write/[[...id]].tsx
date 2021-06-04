import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { initStorage } from "../../../utils/Storage";
import "react-day-picker/lib/style.css";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import {
    Fproduct,
    ItineraryCreateInput,
    productFindById,
    productFindByIdVariables,
    ProductStatus,
    ProductType,
} from "../../../types/api";
import DayRangePicker from "components/dayPicker/DayRangePicker";
import { ItineryForm } from "components/tourWrite/ItineryForm";
import { AppContext } from "pages/_app";
import { tapCheck } from "../../../utils/style";
import TagInput from "../../../components/tagInput/TagInput";
import {
    getDefault,
    TRangeType,
    useTourWrite,
} from "../../../hook/useTourWrite";
import {
    useFindProductsByGroup,
    useProductFindById,
    useProductUpdateReq,
} from "../../../hook/useProduct";
import { changeVal } from "../../../utils/eventValueExtracter";
import PageLoading from "../../Loading";
import { auth } from "../../../utils/with";
import { ALLOW_SELLERS } from "../../../types/const";
import { LoadEditor } from "../../../components/edit/EdiotrLoading";
import pageInfoDefault from "info/tourWrite.json";
import { getStaticPageInfo, Ipage } from "../../../utils/page";
import { usePageEdit } from "../../../hook/usePageEdit";
import { cloneObject } from "../../../utils/clone";
import { productStatus } from "../../../utils/enumToKr";
import { Prompt } from "../../../components/promptModal/Prompt";
import { closeModal, openModal } from "../../../utils/popUp";
import {
    LocalStorageBoard,
    SampleBoard,
} from "../../../components/localStorageBoard/LocalStorageBoard";
import dayjs from "dayjs";
import { checkIsExp } from "../../../utils/product";
import { PageEditor } from "../../../components/common/PageEditer";
import { yyyymmdd, weekOf } from "../../../utils/yyyymmdd";
import {
    filterOver,
    generateitinery,
} from "../../../components/tourWrite/helper";
import { ProductSelectModal } from "../../../components/ProductSelectModal";
import { useHomepage, useHomepageUpdate } from "../../../hook/useHomepage";
import { toNumber } from "../../../utils/toNumber";
import { IProductTemp } from "../../../utils/Storage2";
import { Tip } from "../../../components/tip/Tip";
import { measureMemory } from "vm";
import isEmpty from "../../../utils/isEmpty";
import { GraphQLClient } from "graphql-request";
import PinkClient from "../../../apollo/client";
import { PRODUCT_FIND_BY_ID } from "../../../apollo/gql/product";
import { generateRandomStringCode } from "../../../utils/codeGenerator";
import ChainedDayRangesPicker from "../../../components/dayPicker/ChainedDayRangesPicker";
import {
    TourWriteDateViewer,
    TourWriteDateViewerCurrentModify,
} from "../../../components/tourWriteDateViewer/TourWriteDateViewer";
// const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

const Editor = LoadEditor();
interface IProp {}

// 그룹을 어차피 조회할거면 애초에 그룹을 조회하는게 좋지않아 ?
// 그러게말이야....
// 그룹만 불러오고 싶을 수도 있지 ㅇㅇ
// 그룹만 불러오는 경우라면 어떻게함?

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    //   const res = await fetch('https://.../posts')
    //   const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    //   const paths = posts.map((post) => ({
    //     params: { id: post.id },
    //   }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    //   return { paths, fallback: false }

    return {
        paths: [{ params: { id: [] } }],
        fallback: true,
    };
}
export const getStaticProps = getStaticPageInfo("tourWrite");
export const TourWrite: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const isExp = checkIsExp();
    const { query } = router;
    const pageTools = usePageEdit(pageInfo, pageInfoDefault);
    const id = query.id?.[0] as string | undefined;
    const isCreateMode = id?.length > 10 ? false : true;
    const { item: product, getData, loading } = useProductFindById(id);
    const [selectEditorIndex, setSelectEditorIndex] = useState({
        itsIndex: 0,
        contentIndex: 0,
    });

    const { data: homepage } = useHomepage();
    const sampleProducts = homepage?.productSamples || [];
    const [homepageUpdate] = useHomepageUpdate();
    const [sampleIndex, setSampleIndex] = useState<number>(-1);
    const notSample = sampleIndex === -1;

    const updateSampels = (nextSample: string[], suecssMessage: string) => {
        homepageUpdate({
            variables: {
                params: {
                    productSamples: nextSample,
                },
            },
        }).then(({ data }) => {
            if (data?.HomepageUpdate.ok) {
                alert(suecssMessage);
            }
        });
    };

    const sampleUpdate = (sample: string, index: number) => {
        const newSamples = [...sampleProducts];
        newSamples.splice(index, 1, sample);
        updateSampels(newSamples, "업데이트 완료");
    };

    const sampleCreate = (sample: string) => {
        const nextSampls = [sample, ...sampleProducts];
        updateSampels(nextSampls, "추가 완료");
    };

    const handleSampleDelete = (index: number) => {
        const newSamples = [...sampleProducts];
        newSamples.splice(index, 1);
        const nextSampls = [...newSamples];
        updateSampels(nextSampls, "삭제 완료");
    };

    const handleSampleCreate = () => {
        const sample = JSON.stringify(tourData);
        sampleCreate(sample);
    };

    const handleSampleUpdate = () => {
        const sample = JSON.stringify(tourData);
        sampleUpdate(sample, sampleIndex);
    };

    const handleSampleLoad = (index: number) => {
        const target = sampleProducts[index];
        const val = JSON.parse(target);
        if (val) {
            alert("불러오기 완료");
            setSampleIndex(index);
            setTourData(val);
        }
    };

    const onLoadeded = (item: IProductTemp) => {
        setTourData(item);
        alert("불러오기 완료");
        closeModal("#LocalStorageBoard")();
    };

    const [updateReq, { loading: updateReqLoading }] = useProductUpdateReq({
        onCompleted: ({ ProductUpdateReq }) => {
            if (ProductUpdateReq?.ok) {
                alert("상품 수정요청이 접수 되었습니다.");
                router
                    .push(`/tour/view/${ProductUpdateReq?.data?._id}`)
                    .then(() => window.scrollTo(0, 0));
            }
        },
    });
    const {
        categoriesMap,
        isAdmin,
        myProfile,
        isManager,
        isParterB,
        isParterNonB,
    } = useContext(AppContext);
    const isMyProduct = product?.author?._id === myProfile?._id;

    const {
        dates,
        setDates,
        rangeType,
        groupCode,
        setRangeType,
        range,
        setRange,
        tourSets,
        imgUploading,
        tourData,
        loadKey,
        validater: { validate },
        handles,
        firstDate,
        getCreateInput,
        getUpdateInput,
        setTourData,
        mutations,
        setGroupCode,
        hiddenFileInput,
        lastDate,
        setTempSavedIts,
        tempSavedIts,
    } = useTourWrite(getDefault(cloneObject(product)));

    useEffect(() => {
        if (!product) return;
        const newProductData = getDefault(cloneObject(product));

        // 수정일때는 회차연결을 신경쓰지 말아야함
        if (isCreateMode) {
            // 회차연결을 위한 조치
            setTempSavedIts(newProductData.its);
            newProductData.its = [];
            //하지만 여기서 상태값에 대해서는 신경쓰지 말아야함.
            newProductData.status = undefined;
        }

        setTourData(newProductData);
    }, [product]);

    const { createFn, deleteFn, updateFn } = mutations;
    const {
        categoryId,
        its,
        simpleData,
        status,
        thumbs,
        keyWards,
        type,
        regionId,
    } = tourData;
    const { setkeyWards, setits, setType, setSimpleData } = tourSets;
    const {
        address,
        adult_price,
        baby_price,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        subTitle,
        title,
        contents,
        caution,
        inOrNor,
        info,
    } = simpleData;
    const {
        handleRegionChange,
        handleTextData,
        handleCatChange,
        handleChangeStatus,
        handleChangeSumbNail,
        handleClearThumb,
        handleDateState,
        handleInputChange,
        handleInputCommaChange,
        handleLoad,
        handleTempSave,
        handleUploadClick,
    } = handles;
    const [tab, setTab] = useState<number>(1);

    const tabOnCheck = (index: number) => (tab === index ? "on" : undefined);

    const handleTab = (index: number) => () => {
        setTab(index);
    };

    const handleCreate = async () => {
        if (validate()) {
            const nextData = getCreateInput();
            createFn(nextData);
        }
    };
    const handleEdit = async () => {
        if (!product) return;
        if (validate()) {
            const nextData = getUpdateInput();
            updateFn(product?._id, nextData);
        }
    };
    const handleEditReq = () => {
        openModal("#UpdateMemo")();
    };

    const handleSubmitUpdateReq = (memo: string) => {
        if (!product) return;
        if (!updateReqLoading) {
            const nextData = getUpdateInput();
            updateReq({
                variables: {
                    reason: "",
                    params: {
                        ...nextData,
                        requestMemo: memo,
                    },
                    _id: product?._id,
                },
            });
        }
    };

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            deleteFn(product!._id);
    };

    const handleCancel = () => {
        if (confirm("작성하시던 내용이 저장되지 않을 수 있습니다."))
            router.push("/tour/list");
    };

    const tapDisplay = tapCheck.bind(tapCheck, tab);

    const setAsNewProduct = () => {
        location.reload();
    };

    const openProductSelecter = () => {
        openModal("#ProductSearchModal")();
    };

    const handleBaseProdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.currentTarget.value;
        if (!val) {
            setAsNewProduct();
            return;
        } else if (val?.includes("ProductLink")) openProductSelecter();
    };

    const sampleSelectOpen = () => {
        openModal("#SampleSelecter")();
    };

    const changeBaseProd = async (productId: string) => {
        const reuslt = await PinkClient.query<
            productFindById,
            productFindByIdVariables
        >({
            query: PRODUCT_FIND_BY_ID,
            variables: {
                _id: productId,
            },
        });
        const result = reuslt?.data?.ProductFindById?.data;

        const newProductData = getDefault(cloneObject(result));

        if (result) {
            setTourData({ ...newProductData });
            setGroupCode(result.groupCode);
            filter.groupCode_eq = result.groupCode;
            setFilter({
                ...filter,
            });
            closeModal("#ProductSearchModal")();
        }
    };

    const callAnotherProd = (pid: string) => {
        getData({
            variables: {
                _id: pid,
            },
        });
        closeModal("#ProductSearchModal")();
    };

    const {
        dateOrderedItems: dateOrderGroupProducts,
        filter,
        setFilter,
    } = useFindProductsByGroup(product?.groupCode || groupCode);

    useEffect(() => {
        initStorage();
    }, []);

    useEffect(() => {
        if (product?.groupCode) {
            filter.groupCode_eq = groupCode;
            setFilter({
                ...filter,
            });
        }
    }, [product?.groupCode, groupCode]);

    const noram_partner_updateable_status = [
        ProductStatus.READY,
        ProductStatus.UPDATE_REQ,
        ProductStatus.UPDATE_REQ_REFUSED,
        ProductStatus.REFUSED,
    ];
    const updateAble =
        (!isCreateMode && (isParterB || isManager)) ||
        noram_partner_updateable_status.includes(product?.status!);
    const normalPartnerUpdateReqAble = updateBtnDisableCheck(
        product!,
        isParterB || false
    );

    const categories =
        type === ProductType.TOUR
            ? categoriesMap.TOUR
            : categoriesMap.EXPERIENCE;
    const regionCategories = categoriesMap.REGION;

    const isDateOverDisabled = (date: Date) => {
        const daysAgo = dayjs().add(30, "day").toDate();
        const daysAfter = dayjs().add(90, "day").toDate();

        return dayjs(date).isBefore(daysAgo) || dayjs(date).isAfter(daysAfter);
    };

    const allDaysFixed = useMemo(
        () =>
            dateOrderGroupProducts
                .filter((pd) => pd._id !== product?._id)
                .map((prod) => prod.itinerary.map((it) => it.date))
                .flat(2),
        [dateOrderGroupProducts?.map((d) => d._id).join(""), range]
    );

    if (loading) return <PageLoading />;
    return (
        <div>
            <SubTopNav
                pageTools={pageTools}
                children={
                    <>
                        <li className="homedeps1">
                            <Link href="">
                                <a>상품</a>
                            </Link>
                        </li>
                        <li className="homedeps2">
                            <Link href="/tour/write">
                                <a>상품등록</a>
                            </Link>
                        </li>
                    </>
                }
            />
            <div key={loadKey} className="tour_box w100 board_write">
                <PageEditor pageTools={pageTools} />
                <div className="w1200 con_bottom">
                    <div className="write_box">
                        {!isCreateMode && product && (
                            <Tip
                                message="수정중인 상품의 현재상태"
                                className="write_top_tag"
                                Tag="h3"
                            >
                                {productStatus(product.status)}
                            </Tip>
                        )}
                        {/* 
                            새로상품을 만들경우에는 프로덕트들이 여기서 그냥 나열될 수 없지.
                            하지만 회차를 끌어오거나, 수정하는경우에는 여기에 나열된다
                            // 우선은 수정하는 경우에만 집중해보자
                            // 수정할경우 회차를 나열해준다음 각각에 대한 수정이 가능하도록 조치해야지

                            // 회차를 당겨온 경우에는, 
                            // 회차를 당겨오는 행위가 해당 회차를 이어가는 경우임.
                            // 회차를 이어갈경우
                            // 기존날짜들은 손못대야함.
                        */}

                        {isCreateMode && (
                            <div className="write_type">
                                <div className="title">등록타입</div>
                                <div className="input_form">
                                    <div style={{ display: "flex" }}>
                                        <span className="category r3">
                                            <select
                                                onChange={handleBaseProdChange}
                                                value={product?._id}
                                                name="type"
                                            >
                                                <option value={""}>
                                                    새로운상품
                                                </option>
                                                <option
                                                    value={
                                                        "ProductLink" +
                                                        generateRandomStringCode()
                                                    }
                                                >
                                                    등록타입(기존 상품 재오픈)
                                                </option>
                                            </select>
                                        </span>
                                        <button
                                            onClick={sampleSelectOpen}
                                            className="btn medium write"
                                        >
                                            샘플 불러오기
                                        </button>
                                    </div>
                                    <p className="info_txt">
                                        <i className="jandaicon-info2 mini"></i>{" "}
                                        회차연결 상품은 내용에 중대한 변경 없이
                                        재오픈하는 상품을 뜻합니다.
                                        <br /> 일정에 큰 변경이 있을 때는
                                        신규상품으로 등록해 주세요.
                                    </p>
                                </div>
                            </div>
                        )}

                        {!isCreateMode && (
                            <div className="tourWrite__dateViewrs mb10">
                                {dateOrderGroupProducts.map((gp, index) => (
                                    <div
                                        onClick={() => {
                                            callAnotherProd(gp._id);
                                        }}
                                        key={gp._id + "tourWrite"}
                                        className={`mr10 btn tourWrite__dateViewr 
                                        ${
                                            product?._id === gp._id &&
                                            "pink_font tourWrite__dateViewr--selected"
                                        }`}
                                    >
                                        {`[${index + 1}회차] ${yyyymmdd(
                                            gp.startDate
                                        )} (${weekOf(gp.startDate)})`}
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="write_type">
                            <div className="title">상품타입</div>
                            <div className="input_form">
                                <span className="category r3 mr20">
                                    <select
                                        onChange={changeVal(setType)}
                                        value={type}
                                        name="type"
                                    >
                                        <option value={ProductType.TOUR}>
                                            투어
                                        </option>
                                        <option value={ProductType.EXPERIENCE}>
                                            체험
                                        </option>
                                        <option value="">선택없음</option>
                                    </select>
                                </span>
                                <input
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        setRangeType(val as TRangeType);
                                    }}
                                    type="radio"
                                    id="single"
                                    name="gender"
                                    value="Single"
                                    checked={rangeType === "Single"}
                                />
                                <label htmlFor="single">당일여행</label>
                                <input
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        setRangeType(val as TRangeType);
                                    }}
                                    type="radio"
                                    id="range"
                                    name="gender"
                                    value="Range"
                                    checked={
                                        rangeType === ("Range" as TRangeType)
                                    }
                                />
                                <label htmlFor="range">연일여행</label>
                                {rangeType === "Range" && (
                                    <div>
                                        <input
                                            onChange={(e) => {
                                                const range = toNumber(
                                                    e.currentTarget.value
                                                );
                                                setRange(range);
                                            }}
                                            className="w10 mr10"
                                            type="text"
                                            value={range || ""}
                                        />
                                        박
                                        <span className="mr10" />
                                        <input
                                            className="w10 mr10"
                                            type="text"
                                            readOnly
                                            value={range + 1 || ""}
                                        />
                                        일
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="write_type">
                            <div className="title">카테고리</div>
                            <div className="input_form">
                                <span className="category r3">
                                    <select
                                        id="category"
                                        onChange={handleCatChange}
                                        value={categoryId}
                                        name="category_srl"
                                    >
                                        {categories.map((cat) => (
                                            <option
                                                value={cat._id}
                                                key={cat._id}
                                            >
                                                {cat.label}
                                            </option>
                                        ))}
                                        <option value="">선택없음</option>
                                    </select>
                                </span>
                                {/* <p className="info_txt">
                                    <i className="jandaicon-info2 mini"></i>{" "}
                                    카테고리 추가는 마스터에게 문의를 해주세요.
                                </p> */}
                            </div>
                        </div>
                        <div className="write_type">
                            <div className="title">상품명</div>
                            <div className="input_form">
                                <input
                                    id="title"
                                    onChange={handleInputChange("title")}
                                    value={title}
                                    type="text"
                                    maxLength={40}
                                    name="title"
                                    className="inputText w100"
                                />
                            </div>
                        </div>
                        <div className="write_type">
                            <div className="title">부제목</div>
                            <div className="input_form">
                                <input
                                    maxLength={40}
                                    onChange={handleInputChange("subTitle")}
                                    value={subTitle || ""}
                                    type="text"
                                    name="title"
                                    className="inputText w100"
                                />
                            </div>
                        </div>

                        <div className="write_type">
                            <div className="title">판매금액</div>
                            <div className="input_form">
                                <div>
                                    <span className="mr5">성인</span>
                                    <input
                                        onChange={handleInputCommaChange(
                                            "adult_price"
                                        )}
                                        id="inputAdultPrice"
                                        value={adult_price}
                                        type="text"
                                        className="text w20 mr15"
                                    />
                                    <span className="mr5">소인</span>
                                    <input
                                        onChange={handleInputCommaChange(
                                            "kids_price"
                                        )}
                                        id="inputKidsPrice"
                                        value={kids_price}
                                        type="text"
                                        className="text w20 mr15"
                                    />
                                    <span className="mr5">유아</span>
                                    <input
                                        onChange={handleInputCommaChange(
                                            "baby_price"
                                        )}
                                        id="inputBabyPrice"
                                        value={baby_price}
                                        type="text"
                                        className="text w20"
                                    />
                                </div>
                                <p className="info_txt">
                                    <i className="jandaicon-info2 mini"></i>{" "}
                                    원을 빼고 ','를 넣어서 구분해서
                                    입력해주세요. ex) 50,000
                                </p>
                            </div>
                        </div>

                        <div className="write_type">
                            <div className="title">인원설정</div>
                            <div className="input_form">
                                <div>
                                    <span className="mr5">최소인원</span>
                                    <input
                                        onChange={handleInputChange(
                                            "minMember"
                                        )}
                                        value={minMember}
                                        type="text"
                                        className="text w20 mr15"
                                    />
                                    <span className="mr5">최대인원</span>
                                    <input
                                        onChange={handleInputChange(
                                            "maxMember"
                                        )}
                                        value={maxMember}
                                        type="text"
                                        className="text w20"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="write_type">
                            <div className="title">지역</div>
                            <div className="input_form">
                                <span className="category">
                                    <select
                                        id="RegionId"
                                        onChange={handleRegionChange}
                                        value={regionId || ""}
                                        name="category_srl"
                                    >
                                        {regionCategories.map((cat) => (
                                            <option
                                                value={cat._id}
                                                key={cat._id}
                                            >
                                                {cat.label}
                                            </option>
                                        ))}
                                        <option value="">선택없음</option>
                                    </select>
                                </span>
                            </div>
                        </div>

                        {/* <div className="write_type">
                            <div className="title">장소</div>
                            <div className="input_form">
                                <div>
                                    <input
                                        onChange={handleInputChange("address")}
                                        value={address}
                                        type="text"
                                        className="text w100"
                                    />
                                </div>
                                <p className="info_txt">
                                    <i className="jandaicon-info2 mini"></i>{" "}
                                    해당 상품이 도착하는 장소 or 체험이
                                    이루어지는 장소를 뜻합니다. ex:) 강원도,
                                    @@주민센터
                                </p>
                            </div>
                        </div> */}

                        <div className="write_type">
                            <div className="title">출발장소</div>
                            <div className="input_form">
                                <div>
                                    <input
                                        onChange={handleInputChange(
                                            "startPoint"
                                        )}
                                        value={startPoint}
                                        type="text"
                                        className="text w100"
                                    />
                                </div>
                                <p className="info_txt">
                                    <i className="jandaicon-info2 mini"></i>{" "}
                                    고객이 모여서 출발하는 장소(미팅포인트)를
                                    뜻합니다.
                                </p>
                            </div>
                        </div>

                        <div className="write_type">
                            <div className="title">키워드</div>
                            <div className="input_form">
                                <TagInput
                                    id="keywards"
                                    tags={keyWards}
                                    setTags={setkeyWards}
                                />
                                <p className="input_form info_txt">
                                    <i className="jandaicon-info2 mini"></i>{" "}
                                    'enter'로 구분시 자동으로 키워드가
                                    생성됩니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="write_type bottom_write">
                        <div className="write_type">
                            <div className="title">썸네일</div>
                            <div className="img_box_add">
                                <ul className="img_add">
                                    {thumbs.map((thumb, i) => (
                                        <li
                                            key={i + "thumb"}
                                            className="on_file"
                                        >
                                            {thumb.name}
                                            <i
                                                onClick={handleClearThumb(i)}
                                                className="flaticon-multiply icon_x"
                                            ></i>
                                        </li>
                                    ))}
                                    {thumbs.length < 4 && (
                                        <li
                                            id="thumb"
                                            onClick={
                                                imgUploading
                                                    ? undefined
                                                    : handleUploadClick
                                            }
                                        >
                                            {imgUploading
                                                ? "파입업로드중..."
                                                : "이미지추가"}
                                            <i className="flaticon-add icon_plus"></i>
                                        </li>
                                    )}
                                    <input
                                        onChange={handleChangeSumbNail}
                                        ref={hiddenFileInput}
                                        hidden
                                        accept="image/*"
                                        type="file"
                                    />
                                </ul>
                                <p className="input_form info_txt">
                                    <i className="jandaicon-info2 mini"></i>{" "}
                                    유의사항에 최대 4개까지 등록 가능. 썸네일
                                    이미지사이즈 720px * 434px
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="write_con">
                        <ul className="con_tap">
                            <li
                                id="tap1"
                                onClick={handleTab(1)}
                                className={tabOnCheck(1)}
                            >
                                <span>
                                    <i>01.</i>상품상세설명
                                </span>
                            </li>
                            <li
                                id="tap2"
                                onClick={handleTab(2)}
                                className={tabOnCheck(2)}
                            >
                                <span>
                                    <i>02.</i>안내 및 참고
                                </span>
                            </li>
                            <li
                                id="tap3"
                                onClick={handleTab(3)}
                                className={tabOnCheck(3)}
                            >
                                <span>
                                    <i>03.</i>포함 및 불포함
                                </span>
                            </li>
                            <li
                                id="tap4"
                                onClick={handleTab(4)}
                                className={tabOnCheck(4)}
                            >
                                <span>
                                    <i>04.</i>유의사항 및 안내문
                                </span>
                            </li>
                        </ul>
                        <div
                            {...tapDisplay(1)}
                            id="texta_01"
                            className="texta tourWrite__daypikcer"
                        >
                            <h5 id="itinerary">상품일정</h5>
                            <ChainedDayRangesPicker
                                singleDay={!isCreateMode}
                                startDays={dates}
                                isFixedDate={(_date) => {
                                    return !!allDaysFixed.find((date) =>
                                        dayjs(date).isSame(_date, "day")
                                    );
                                }}
                                length={rangeType === "Range" ? range + 1 : 1}
                                month={dayjs().add(20, "day").toDate()}
                                disabledDays={isDateOverDisabled}
                                renderDay={(date, props) => {
                                    const isOverDate = isDateOverDisabled(date);

                                    let messages: string | undefined =
                                        undefined;

                                    if (isOverDate) {
                                        messages =
                                            "최소 30일 이전 최대 90일 앞까지 가능합니다.";
                                    } else if (props.fixed) {
                                        messages = "해당 상품의 다른 회차";
                                    }

                                    return (
                                        <Tip
                                            className="tourWrite__daypikcerInDate"
                                            message={messages}
                                        >
                                            {date.getDate()}
                                        </Tip>
                                    );
                                }}
                                onRangeChange={handleDateState}
                            >
                                {!isEmpty(dateOrderGroupProducts) && (
                                    <div className="tourWrite__dayPikcerRangeViewer  mb10">
                                        {dateOrderGroupProducts.map(
                                            (prd, index) => {
                                                const isModifyProd =
                                                    prd._id === product?._id;

                                                if (isModifyProd) {
                                                    return (
                                                        <TourWriteDateViewerCurrentModify
                                                            key={prd._id}
                                                            range={
                                                                prd.itinerary
                                                                    .length
                                                            }
                                                            date={prd.startDate}
                                                            index={
                                                                isCreateMode
                                                                    ? undefined
                                                                    : index
                                                            }
                                                            nextDate={
                                                                dates?.[0]
                                                            }
                                                            nextRange={range}
                                                        />
                                                    );
                                                }
                                                return (
                                                    <TourWriteDateViewer
                                                        key={prd._id}
                                                        fixed
                                                        range={
                                                            prd.itinerary.length
                                                        }
                                                        date={prd.startDate}
                                                        index={
                                                            isCreateMode
                                                                ? undefined
                                                                : index
                                                        }
                                                    />
                                                );
                                            }
                                        )}
                                    </div>
                                )}

                                {isCreateMode && (
                                    <div className="tourWrite__dayPikcerRangeViewer  mb10">
                                        {dates.map((date, index) => (
                                            <TourWriteDateViewer
                                                range={range}
                                                date={date}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                )}
                                <div className="info_txt">
                                    <h4>
                                        <i className="jandaicon-info2 mini"></i>
                                        일정 등록 시 유의사항
                                    </h4>
                                    <ul>
                                        <li>
                                            - 출발일이 최소 30일 ~ 최대 90일
                                            이상 남은 시점으로 등록해 주세요.
                                        </li>
                                        <li>
                                            - 달력에서 선택한 기간만큼 일별
                                            일정등록 창이 생성됩니다.
                                        </li>
                                        <li>
                                            - 다회차 출발상품은 동일한 일정에
                                            출발일만 상이한 상품을 말합니다.
                                            (회차별 일정 등록 불가)
                                        </li>
                                        <li>
                                            - 상세설명에 이미지 첨부 시에는
                                            모바일 화면을 고려해 이미지 내
                                            텍스트 크기를 크게 작업해주세요.
                                            {/* <a
                                                href="https://www.iloveimg.com/ko/compress-image"
                                                target="_blank"
                                            >
                                                (추천사이트 이동)
                                            </a> */}
                                        </li>
                                        <li>
                                            - 일정에 관련된 내용만 기입해 주세요
                                        </li>
                                        <li className="red_font">
                                            - 이동하는 장소별 일정추가 버튼을
                                            눌러 개별 입력해 주세요.
                                        </li>
                                    </ul>
                                </div>
                            </ChainedDayRangesPicker>
                            {filterOver(its, range).map((itinery, index) => (
                                <div key={"itineryForm" + index}>
                                    <ItineryForm
                                        setSelectEditorIndex={
                                            setSelectEditorIndex
                                        }
                                        selectEditorIndex={selectEditorIndex}
                                        index={index}
                                        setits={setits}
                                        itinery={itinery}
                                        its={its}
                                    />
                                </div>
                            ))}
                        </div>
                        <div {...tapDisplay(2)} id="texta_02" className="texta">
                            <h5>상품 안내문</h5>
                            <Editor
                                edit={tab === 2}
                                data={contents}
                                onChange={handleTextData("contents")}
                            />
                        </div>
                        <div {...tapDisplay(3)} id="texta_03" className="texta">
                            <h5>포함 / 불포함</h5>
                            <Editor
                                edit={tab === 3}
                                data={inOrNor}
                                onChange={handleTextData("inOrNor")}
                            />
                        </div>
                        <div {...tapDisplay(4)} id="texta_04" className="texta">
                            <h5>커리큐럼 유의사항</h5>
                            <Editor
                                edit={tab === 4}
                                data={caution}
                                onChange={handleTextData("caution")}
                            />
                            <h5>간략한 안내문</h5>
                            <Editor
                                edit={tab === 4}
                                data={info}
                                onChange={handleTextData("info")}
                            />
                        </div>
                    </div>
                    <div className="boardNavigation">
                        <div className="float_left">
                            <button
                                onClick={handleTempSave}
                                type="button"
                                className="btn medium"
                            >
                                임시저장
                            </button>
                            <button
                                onClick={handleLoad}
                                type="button"
                                className="btn medium"
                            >
                                작성중 상품 불러오기
                            </button>
                        </div>
                        <div className="float_right">
                            {/* 차라리 여기서 상품을 취소 상태로 변경하거나, 다시 오픈 상태로 변경 하거나 요청을 수락 하거나  */}
                            {/* {isManager && status === ProductStatus.OPEN && <button onClick={handleEdit} type="submit" className="btn medium pointcolor">
                        상품취소
                    </button>}
                    {isManager && status === ProductStatus.CANCELD && <button onClick={handleEdit} type="submit" className="btn medium pointcolor">
                        취소철회
                    </button>}
                    {isManager && status === ProductStatus.UPDATE_REQ && <button onClick={handleEdit} type="submit" className="btn medium pointcolor">
                        수정수락
                    </button>}
                    {isManager && status === ProductStatus.READY && <button onClick={handleEdit} type="submit" className="btn medium pointcolor">
                        생성수락
                    </button>} */}
                            {!updateAble && !isCreateMode && isParterNonB && (
                                <button
                                    disabled={!normalPartnerUpdateReqAble}
                                    onClick={handleEditReq}
                                    type="submit"
                                    className="btn medium pointcolor"
                                >
                                    {status === ProductStatus.UPDATE_REQ_REFUSED
                                        ? "재신청"
                                        : "수정요청"}
                                    <i
                                        data-for="ToolTipLayOut"
                                        className="jandaicon-info2 tooltip"
                                        data-iscapture={true}
                                        data-tip="수정요청은 예약인원이 없을때만 가능합니다."
                                    />
                                </button>
                            )}
                            {updateAble && (
                                <button
                                    onClick={handleEdit}
                                    type="submit"
                                    className="btn medium pointcolor"
                                >
                                    {status === ProductStatus.REFUSED
                                        ? "재신청"
                                        : "수정완료"}
                                </button>
                            )}
                            {isCreateMode && (
                                <button
                                    onClick={handleCreate}
                                    type="submit"
                                    className="btn medium pointcolor"
                                >
                                    {isParterB ? "등록완료" : "등록요청 "}
                                </button>
                            )}
                            {isManager && (
                                <button
                                    onClick={
                                        notSample
                                            ? handleSampleCreate
                                            : handleSampleUpdate
                                    }
                                    type="submit"
                                    className="btn medium pointcolor"
                                >
                                    {notSample
                                        ? "샘플로 등록하기"
                                        : "샘플 업데이트"}
                                </button>
                            )}
                            <button
                                onClick={handleCancel}
                                type="button"
                                className="btn medium impact"
                            >
                                취소
                            </button>
                            {!isCreateMode && (
                                <button
                                    onClick={handleDelete}
                                    type="submit"
                                    className="btn medium"
                                >
                                    삭제
                                </button>
                            )}
                        </div>
                    </div>
                    <LocalStorageBoard key={loadKey} onLoad={onLoadeded} />
                    <SampleBoard
                        items={sampleProducts}
                        onDelete={handleSampleDelete}
                        onLoad={handleSampleLoad}
                    />
                </div>
                <Prompt
                    id="UpdateMemo"
                    onSubmit={handleSubmitUpdateReq}
                    title="업데이트 변경 사항을 입력 해주세요."
                />
                {/* <ReactTooltip id="ToolTipLayOut" effect="solid" type="info" /> */}
            </div>
            <ProductSelectModal
                filter={{
                    authorEmail_eq: isAdmin ? undefined : myProfile?.email,
                }}
                onSelect={(pd) => {
                    changeBaseProd(pd._id);
                }}
            />
        </div>
    );
};

export default auth(ALLOW_SELLERS)(TourWrite);

const updateBtnDisableCheck = (
    product: Fproduct,
    isParterB: boolean
): boolean => {
    if (!product) return false;
    // 기업 파트너면 업데이트가 가능하다.
    if (isParterB) return true;
    // 예약자가 없으면 업데이트 요청이 가능하다.
    if (product.peopleCount === 0) return true;
    // 확정되지 않은 예약만 수정요청 할 수 있다.
    if (product.determined === false) return true;
    return false;
};

import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { initStorage } from "../../../utils/Storage";
import "react-day-picker/lib/style.css";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import {
    Fproduct,
    ItineraryCreateInput,
    ProductStatus,
    ProductType,
} from "../../../types/api";
import DayRangePicker from "components/dayPicker/DayRangePicker";
import { ItineryForm } from "components/tourWrite/ItineryForm";
import { AppContext } from "pages/_app";
import { tapCheck } from "../../../utils/style";
import TagInput from "../../../components/tagInput/TagInput";
import { getDefault, useTourWrite } from "../../../hook/useTourWrite";
import {
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
import { yyyymmdd } from "../../../utils/yyyymmdd";
import {
    filterOver,
    generateitinery,
} from "../../../components/tourWrite/helper";
import { ProductSelectModal } from "../../../components/ProductSelectModal";
import { useHomepage, useHomepageUpdate } from "../../../hook/useHomepage";
// const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

const Editor = LoadEditor();
interface IProp {}

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
    const isCreateMode = id ? false : true;
    const { item: product, getData, loading } = useProductFindById(id);
    const [tempSavedIts, setTempSavedIts] = useState<ItineraryCreateInput[]>();
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
        productGroupList,
    } = useContext(AppContext);
    const isMyProduct = product?.author?._id === myProfile?._id;

    const {
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
    } = useTourWrite(getDefault(cloneObject(product)));

    useEffect(() => {
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
            updateFn(product._id, nextData);
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
        } else if (val === "ProductLink") openProductSelecter();
    };

    const sampleSelectOpen = () => {
        openModal("#SampleSelecter")();
    };

    const changeBaseProd = (code: string) => {
        const target = productGroupList.find((g) => g.groupCode === code);
        setGroupCode(target?.groupCode);
        getData({
            variables: {
                _id: target?._id || "",
            },
        });
        closeModal("#ProductSearchModal")();
    };

    const handleTempDateMove = ({ from, to }: { from?: Date; to?: Date }) => {
        const newIts = generateitinery({ from, to }, tempSavedIts || []);
        if (newIts) {
            setits(newIts);
            setTempSavedIts(undefined);
        }
    };

    useEffect(() => {
        initStorage();
    }, []);

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

    // if (!isManager && !isMyProduct) return <PageDeny />
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
                        {product && (
                            <h3 className="write_top_tag">
                                {productStatus(product.status)}
                            </h3>
                        )}
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
                                                <option value="ProductLink">
                                                    회차연결(기존 상품 재오픈)
                                                </option>
                                            </select>
                                        </span>
                                        <button
                                            onClick={sampleSelectOpen}
                                            className="btn"
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
                        <div className="write_type">
                            <div className="title">상품타입</div>
                            <div className="input_form">
                                <span className="category r3">
                                    <select
                                        onChange={changeVal(setType)}
                                        value={type}
                                        name="type"
                                    >
                                        <option value={ProductType.TOUR}>
                                            투어(연일)
                                        </option>
                                        <option value={ProductType.EXPERIENCE}>
                                            체험(당일)
                                        </option>
                                        <option value="">선택없음</option>
                                    </select>
                                </span>
                                {/* <p className="info_txt">
                                    <i className="jandaicon-info2 mini"></i>{" "}
                                    여행과 체험은 글쓰기 화면이 동일합니다.
                                    구분은 상품타입으로 이루어집니다.
                                </p> */}
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
                                <p className="info_txt">
                                    <i className="jandaicon-info2 mini"></i>{" "}
                                    카테고리 추가는 마스터에게 문의를 해주세요.
                                </p>
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
                                        value={adult_price}
                                        type="text"
                                        className="text w20 mr15"
                                    />
                                    <span className="mr5">소인</span>
                                    <input
                                        onChange={handleInputCommaChange(
                                            "kids_price"
                                        )}
                                        value={kids_price}
                                        type="text"
                                        className="text w20 mr15"
                                    />
                                    <span className="mr5">유아</span>
                                    <input
                                        onChange={handleInputCommaChange(
                                            "baby_price"
                                        )}
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
                                    출발장소 or 모임장소를 뜻합니다.
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
                            <DayRangePicker
                                Header={
                                    tempSavedIts && (
                                        <h2 style={{ marginBottom: "1rem" }}>
                                            새로운 상품일정 시작일을 선택 해주세요{" "}
                                        </h2>
                                    )
                                }
                                month={dayjs().add(20, "day").toDate()}
                                disabledDays={{
                                    before: dayjs()
                                        .add(isManager ? 0 : 30, "day")
                                        .toDate(),
                                    after: dayjs()
                                        .add(isManager ? 9999 : 90, "day")
                                        .toDate(),
                                }}
                                isRange={type === ProductType.TOUR}
                                onRangeChange={
                                    tempSavedIts
                                        ? handleTempDateMove
                                        : handleDateState
                                }
                                from={firstDate}
                                to={lastDate}
                            >
                                <div className="tourWrite__dayPikcerRangeViewer  mb10">
                                    <div className="tourWrite__Choiceday">
                                        <strong>선택된 상품날짜</strong>{" "}
                                        {yyyymmdd(firstDate)} ~{" "}
                                        {yyyymmdd(lastDate)}
                                    </div>
                                </div>
                                <div className="info_txt">
                                    <h4>
                                        <i className="jandaicon-info2 mini"></i>
                                        상품일정 등록시 유의점
                                    </h4>
                                    <ul>
                                        <li>
                                            - 여행일은 최소 30일 이전 최대 90일
                                            이상해주세요.
                                        </li>
                                        <li>
                                            - 달력에서 여행기간을 선택해 주세요.
                                            그래야 아래에 입력창이 생성됩니다.
                                        </li>
                                        <li>
                                            - 이미지를 첨부시에 이미지 내부에
                                            이미지를 입력할 경우 텍스트를 크게
                                            써주세요. 모바일 화면도 고려
                                            해야합니다.
                                        </li>
                                        <li>
                                            - 이미지를 꼭 한번 용량을 압축해서
                                            올려주세요. 로딩시에 시간이
                                            단축됩니다.{" "}
                                            <a
                                                href="https://www.iloveimg.com/ko/compress-image"
                                                target="_blank"
                                            >
                                                (추천사이트 이동)
                                            </a>
                                        </li>
                                        <li>
                                            - 일정에 관련된 내용만 간략하게
                                            써주세요.
                                        </li>
                                    </ul>
                                </div>
                            </DayRangePicker>

                            {filterOver(its).map((itinery, index) => (
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
                                임시 저장
                            </button>
                            <button
                                onClick={handleLoad}
                                type="button"
                                className="btn medium"
                            >
                                불러오기
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
                                        : "수정"}
                                </button>
                            )}
                            {isCreateMode && (
                                <button
                                    onClick={handleCreate}
                                    type="submit"
                                    className="btn medium pointcolor"
                                >
                                    등록
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
                    <LocalStorageBoard key={loadKey} onLoad={setTourData} />
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
                    const groupdCode = pd.groupCode;
                    changeBaseProd(groupdCode);
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

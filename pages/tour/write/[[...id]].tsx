
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import "react-day-picker/lib/style.css";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import { Ffile, ItineraryCreateInput, productPostCreate, ProductPostCreateInput, productPostCreateVariables, ProductPostStatus, ProductPostUpdateInput } from '../../../types/api';
import { IProductDefaultData, TProductDataPart } from '../../../types/defaults/defaultProduct';
import { useMutation } from '@apollo/client';
import { useProductFindById } from '../../../hook/useProductFindById';
import DayPicker from "components/dayPicker/DayRangePicker"
import dynamic from 'next/dynamic'
import { generateitinery, getDefault, getNextData, TRange } from '../../../components/tourWrite/helper';
import { useUpload } from "hook/useUpload";
import { PRODUCT_POST_CREATE } from "apollo/mutations";
import { ItineryForm } from "components/tourWrite/ItineryForm";
import { autoComma } from "utils/formatter";
import dayjs from "dayjs";
import { IProductPostFindById } from "types/interface";
import { AppContext } from "pages/_app";
import { useProductPostUpdate } from "hook/useProductPostUpdate";
import { useProductPostDelete } from "hook/useProductDelete";
import { TDeleteFn } from "pages/portfolio/write/[[...id]]";
import Page404 from "pages/404";
import { Validater } from "utils/validate";
import isEmpty from "utils/isEmpty";
import { OutputData } from "@editorjs/editorjs";
import { EMPTY_EDITOR } from "types/const"
const EditorJs = dynamic(() => import("components/editorjs/EditorJs"));
interface IProp {
    context: ITourWriteWrapContext;
}

export const TourWrite: React.FC<IProp> = ({ context }) => {
    const router = useRouter();
    const { categories } = useContext(AppContext);
    const { createFn, updateFn, deleteFn, productPost, mode } = context;
    const defaults = getDefault(productPost);
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const [its, setits] = useState<ItineraryCreateInput[]>(defaults.itinerary);
    const { signleUpload } = useUpload();
    const [data, setData] = useState<TProductDataPart>(defaults.data)
    const [categoryId, setCategoryId] = useState(defaults.categoryId);
    const [status, setStatus] = useState(defaults.status);
    const [thumbs, setThumbs] = useState<Partial<Ffile>[]>(defaults.images)
    const [tab, setTab] = useState<number>(1);
    const [loadCount, setLoad] = useState(0);
    const [contents, setContents] = useState<OutputData>(defaults.contents);
    const [inOrNor, setInOrNor] = useState<OutputData>(defaults.inOrNor);
    const isCreateMode = mode === "create";

    const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value as ProductPostStatus)
    }

    const handleUploadClick = () => {
        hiddenFileInput.current.click();
    }

    const handleChangeSumbNail = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_, data) => {
            thumbs.push(data);
            setThumbs([...thumbs])
        }
        signleUpload(fileUploaded, onUpload);
        // data.images[FILE_SELECT_INDEX] = fileUploaded;
    };

    const handleClearThumb = (index: number) => {
        thumbs.splice(index, 1);
        setThumbs([...thumbs])
    }

    const tabOnCheck = (index: number) => tab === index ? "on" : undefined;

    const handleTab = (index: number) => {
        setTab(index)
    }

    const {
        address,
        keyWards,
        adult_price,
        baby_price,
        info,
        caution,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        subTitle,
        title,
    } = data;

    const nextData = getNextData({
        address,
        adult_price,
        baby_price,
        categoryId,
        caution,
        contents,
        inOrNor,
        info,
        its,
        keyWards,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        status,
        subTitle,
        thumbs,
        title
    })

    function set<T extends keyof TProductDataPart>(key: T, value: any) {
        setData({ ...data, [key]: value })
    }


    const { validate } = new Validater([{
        value: !!thumbs?.[0]?.uri,
        failMsg: "썸네일은 필수 입니다.",
        id: "thumb"
    }, {
        value: !!title,
        failMsg: "제목값은 필수 입니다.",
        id: "title"
    }, {
        value: !isEmpty(contents),
        failMsg: "안내 및값은 필수 입니다.",
        id: "content"
    }, {
        value: !!categoryId,
        failMsg: "카테고리 값은 필수 입니다.",
        id: "category"
    }, {
        value: !isEmpty(its),
        failMsg: "여행일정은 필수 입니다.",
        id: "itinerary"
    }, {
        value: !isEmpty(its),
        failMsg: "키워드 값은 필수 입니다.",
        id: "keywards"
    }]);


    const handleCreate = async () => {
        if (validate())
            createFn(await nextData)
    }
    const handleEdit = async () => {
        if (!productPost) return;
        if (validate()) {
            // @ts-ignore
            updateFn(productPost._id, await nextData)
        }
    }

    const handleTempSave = async () => {
        Storage.saveLocal("write", await nextData);
    }

    const handleLoad = () => {
        const savedData: IProductDefaultData = Storage.getLocalObj("write", undefined);
        if (!savedData) alert("저장된 정보가 없습니다.")
        const { itinerary, title, address, adult_price, baby_price, categoryId, caution, contents, images, inOrNor, info, keyWards, kids_price, maxMember, minMember, productId, startPoint, status, subTitle, type } = savedData;

        setData({
            address,
            adult_price,
            baby_price,
            caution,
            info,
            keyWards,
            kids_price,
            maxMember,
            minMember,
            startPoint,
            subTitle,
            title
        })
        setThumbs(images)
        setContents(contents);
        setInOrNor(inOrNor);
        setits(itinerary);
        setLoad(loadCount + 1);
    }


    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            deleteFn(productPost._id)
    }

    const handleCancel = () => {
        if (confirm("작성하시던 내용이 저장되지 않을 수 있습니다."))
            router.push("/tour/list")
    }

    const handleCatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextCat = e.currentTarget.value
        setCategoryId(nextCat)
    }

    useEffect(() => {
        initStorage()
    }, [])

    return <div key={loadCount} className="tour_box w100 board_write">
        <SubTopNav children={
            <>
                <li className="homedeps1">
                    <Link href="/tour/">
                        <a>Tour</a>
                    </Link></li>
                <li className="homedeps2">
                    <Link href="/tour/write">
                        <a >상품등록</a>
                    </Link>
                </li>
            </>
        } title="Tour" desc="지금 여행을 떠나세요~!~~!!!!!" subTopBg={'/img/work_top_bg2.jpg'} />
        <div className="w1200 con_bottom">
            <div className="write_box">
                <div className="write_type">
                    <div className="title">카테고리</div>
                    <div className="input_form">
                        <span className="category r3">
                            <select onChange={handleCatChange} value={categoryId} name="category_srl">
                                {categories.map(cat =>
                                    <option value={cat._id} key={cat._id}>
                                        {cat.label}
                                    </option>
                                )}
                                <option value="">
                                    선택없음
                                </option>
                            </select>
                        </span>
                    </div>
                </div>
                <div className="write_type">
                    <div className="title">제목</div>
                    <div className="input_form">
                        <input id="title" onChange={(e) => {
                            set("title", e.currentTarget.value)
                        }} value={title} type="text" name="title" className="inputText w100" />
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">부제목</div>
                    <div className="input_form">
                        <input onChange={(e) => {
                            set("subTitle", e.currentTarget.value)
                        }} value={subTitle} type="text" name="title" className="inputText w100" />
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">판매금액</div>
                    <div className="input_form">
                        <div>
                            <span className="mr5">성인</span>
                            <input onChange={(e) => {
                                set("adult_price", autoComma(e.currentTarget.value))
                            }} value={adult_price} type="text" className="text w20 mr15" />
                            <span className="mr5">소인</span>
                            <input onChange={(e) => {
                                set("kids_price", autoComma(e.currentTarget.value))
                            }} value={kids_price} type="text" className="text w20 mr15" />
                            <span className="mr5">유아</span>
                            <input onChange={(e) => {
                                set("baby_price", autoComma(e.currentTarget.value))
                            }} value={baby_price} type="text" className="text w20" />
                        </div>
                        <p className="info_txt">- 원을 빼고 ','를 넣어서 구분해서 입력해주세요. ex) 50,000</p>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">인원설정</div>
                    <div className="input_form">
                        <div>
                            <span className="mr5">최소인원</span>
                            <input onChange={(e) => {
                                set("minMember", e.currentTarget.value)
                            }} value={minMember} type="text" className="text w20 mr15" />
                            <span className="mr5">최대인원</span>
                            <input onChange={(e) => {
                                set("maxMember", e.currentTarget.value)
                            }} value={maxMember} type="text" className="text w20" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">장소</div>
                    <div className="input_form">
                        <div>
                            <input onChange={(e) => {
                                set("address", e.currentTarget.value)
                            }} value={address} type="text" className="text w100" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">출발장소</div>
                    <div className="input_form">
                        <div>
                            <input onChange={(e) => {
                                set("startPoint", e.currentTarget.value)
                            }} value={startPoint} type="text" className="text w100" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">판매여부</div>
                    <div className="input_form">
                        <ul>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-open" value={ProductPostStatus.OPEN} checked={status === ProductPostStatus.OPEN} className="radio" /><label htmlFor="status-open">판매중</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-sold" value={ProductPostStatus.SOLD} checked={status === ProductPostStatus.SOLD} className="radio" /><label htmlFor="status-sold">완판</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-close" value={ProductPostStatus.CLOSE} checked={status === ProductPostStatus.CLOSE} className="radio" /><label htmlFor="status-close">판매종료</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-refused" value={ProductPostStatus.REFUSED} checked={status === ProductPostStatus.REFUSED} className="radio" /><label htmlFor="status-refused">거절됨</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-hide" value={ProductPostStatus.HIDE} checked={status === ProductPostStatus.HIDE} className="radio" /><label htmlFor="status-hide">숨겨짐</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-ready" value={ProductPostStatus.READY} checked={status === ProductPostStatus.READY} className="radio" /><label htmlFor="status-ready">준비중</label></li>
                        </ul>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">키워드</div>
                    <div className="input_form">
                        <input id="keywards" onChange={(e) => {
                            set("keyWards", e.currentTarget.value)
                        }} value={keyWards} type="text" className="text w100" />
                        <p className="input_form info_txt">- ','로 구분시 자동으로 키워드가 생성됩니다.</p>
                    </div>
                </div>
            </div>

            <div className="write_type bottom_write">

                <div className="write_type">
                    <div className="title">썸네일</div>
                    <div className="img_box_add">
                        <ul className="img_add">
                            {thumbs.map((thumb, i) =>
                                <li key={i + "thumb"} className="on_file">{thumb.name}<i onClick={() => { handleClearThumb(i) }} className="flaticon-multiply icon_x"></i></li>
                            )}
                            <li id="thumb" onClick={handleUploadClick}>이미지추가<i className="flaticon-add icon_plus"></i></li>
                            <input onChange={handleChangeSumbNail} ref={hiddenFileInput} hidden type="file" />
                        </ul>
                        <p className="input_form info_txt">- 썸네일 이미지사이즈 720px * 434px</p>
                    </div>
                </div>

            </div>

            <div className="write_con">
                <ul className="con_tap">
                    <li onClick={() => { handleTab(1) }} className={tabOnCheck(1)}><span><i>01.</i>여행상세설명</span></li>
                    <li onClick={() => { handleTab(2) }} className={tabOnCheck(2)}><span><i>02.</i>안내 및 참고</span></li>
                    <li onClick={() => { handleTab(3) }} className={tabOnCheck(3)}><span><i>03.</i>포함 및 불포함</span></li>
                    <li onClick={() => { handleTab(4) }} className={tabOnCheck(4)}><span><i>04.</i>기타 설정</span></li>
                </ul>
                {tab === 1 &&
                    <div id="texta_01" className="texta">
                        <h5 id="itinerary">여행일정</h5>
                        <DayPicker setState={({ from, to }: TRange) => {
                            const newItinerary = generateitinery({ from, to }, its);
                            if (newItinerary)
                                setits([...newItinerary]);
                        }} from={dayjs(its[0]?.date).toDate()} to={dayjs(its[its.length - 1]?.date).toDate()} />
                        {(its || []).map((itinery, index) => <ItineryForm key={"itineryForm" + index} index={index} setits={setits} itinery={itinery} its={its} />)}
                    </div>
                }
                <div style={{
                    display: tab === 2 ? undefined : "none"
                }} id="texta_02" className="texta">
                    <h5>상품 안내문</h5>
                    <EditorJs holder="content" data={contents} setData={setContents} />
                    <div id="content" />
                </div>
                <div style={{
                    display: tab === 3 ? undefined : "none"
                }} id="texta_03" className="texta">
                    <h5>포함 / 불포함</h5>
                    <EditorJs holder="include" data={inOrNor} setData={setInOrNor} />
                </div>
                {tab === 4 &&
                    <div id="texta_04" className="texta">
                        <h5>커리큐럼 유의사항</h5>
                        <textarea onChange={(e) => {
                            set("caution", e.currentTarget.value)
                        }} value={caution} id="warrant" style={{
                            width: "100%",
                            minHeight: "200px"
                        }} />
                        <h5>간략한 안내문</h5>
                        <textarea onChange={(e) => {
                            set("info", e.currentTarget.value)
                        }} value={info} id="warrant" style={{
                            width: "100%",
                            minHeight: "200px"
                        }} />
                    </div>
                }
            </div>
            <div className="boardNavigation">
                <div className="float_left">
                    <button onClick={handleTempSave} type="button" className="btn medium">임시 저장</button>
                    <button onClick={handleLoad} type="button" className="btn medium">불러오기</button>
                </div>
                <div className="float_right">
                    {isCreateMode || <button onClick={handleEdit} type="submit" className="btn medium pointcolor">수정</button>}
                    {isCreateMode && <button onClick={handleCreate} type="submit" className="btn medium pointcolor">등록</button>}
                    <button onClick={handleCancel} type="button" className="btn medium impact">취소</button>
                    {isCreateMode || <button onClick={handleDelete} type="submit" className="btn medium">삭제</button>}
                </div>
            </div>
        </div>
    </div>
};


type TCreateFn = (params: ProductPostCreateInput) => void;
type TUpdateFn = (_id: string, params: ProductPostUpdateInput) => void;
interface IProp {
    isExperience?: boolean;
    mode?: "edit" | "create"
}

interface ITourWriteWrapContext {
    createFn: TCreateFn;
    updateFn: TUpdateFn;
    deleteFn: TDeleteFn;
    productPost: IProductPostFindById;
    findLoading: boolean;
    createLoading: boolean;
    mode: "create" | "edit"
}

//수정하고 나면 수정한 내용을 그대로 덮어버리면 안됨. 핑크로드의 승인이 필요함.
export const TourWriteWrap: React.FC<IProp> = ({ isExperience }) => {
    const { isManager } = useContext(AppContext);
    const router = useRouter(); // => 넥스트에서는 변경
    const { query } = router;


    const id = query.id?.[0] as string | undefined;

    const { productPostDelete, deleteLoading } = useProductPostDelete({
        onCompleted: ({
            ProductPostDelete
        }) => {
            if (ProductPostDelete.ok)
                router.push("/tour/list")

        }
    })
    const { productPostUpdate, updateLoading } = useProductPostUpdate({
        onCompleted: ({ ProductPostUpdate }) => {
            router.push(`/tour/view/${ProductPostUpdate?.data?._id}`)
        }
    })

    const [productCreateMu, { loading: createLoading }] = useMutation<productPostCreate, productPostCreateVariables>(PRODUCT_POST_CREATE, {
        onCompleted: ({ ProductPostCreate }) => {
            if (ProductPostCreate.ok)
                router.push(`/tour/view/${ProductPostCreate.data._id}`)
        }
    })

    const { productPost, loading: findLoading } = useProductFindById({
        variables: {
            _id: id!
        },
        skip: !id
    })

    const createFn: TCreateFn = (params: ProductPostCreateInput) => {
        productCreateMu({
            variables: {
                params
            },
        })
    }

    const updateFn: TUpdateFn = (_id, params) => {
        productPostUpdate({
            _id,
            params: {
                ...params,
            }
        })
    }

    const deleteFn: TDeleteFn = (id) => {
        productPostDelete({
            id
        })
    }

    const unexistId = !findLoading && id && !productPost;

    if (findLoading) return null;
    if (unexistId) return <Page404 />
    if (!isManager) {
        return <Page404 />
    }

    const context: ITourWriteWrapContext = {
        createFn,
        updateFn,
        deleteFn,
        productPost,
        findLoading,
        createLoading,
        mode: !id ? "create" : "edit"
    }


    return <TourWrite context={context} />;
};


export default TourWriteWrap;
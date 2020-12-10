
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from 'react';
import { initStorage } from '../../../utils/Storage';
import "react-day-picker/lib/style.css";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import { ProductCreate, ProductCreateInput, ProductCreateVariables, ProductStatus, ProductType, ProductUpdateInput, } from '../../../types/api';
import { useMutation } from '@apollo/client';
import DayRangePicker from "components/dayPicker/DayRangePicker"
import dynamic from 'next/dynamic'
import { ItineryForm } from "components/tourWrite/ItineryForm";
import { IproductFindById } from "types/interface";
import { AppContext } from "pages/_app";
import { TDeleteFn } from "pages/portfolio/write/[[...id]]";
import Page404 from "pages/404";
import { tapCheck } from "../../../utils/style";
import TagInput from "../../../components/tagInput/TagInput";
import { getDefault, useTourWrite } from "../../../hook/useTourWrite";
import { useProductDelete, useProductFindById, useProductUpdate } from "../../../hook/useProduct";
import { PRODUCTS_CREATE } from "../../../apollo/gql/product";
import { changeVal } from "../../../utils/eventValueExtracter";
const Editor = dynamic(() => import("components/edit/CKE2"), { ssr: false });
interface IProp {
    context: ITourWriteWrapContext;
}

export const TourWrite: React.FC<IProp> = ({ context }) => {
    const router = useRouter();
    const { categories } = useContext(AppContext);
    const { createFn, updateFn, deleteFn, product, mode } = context;
    const {
        tourSets, tourData,
        loadKey, validater: { validate },
        handles, firstDate,
        getCreateInput, getUpdateInput,
        hiddenFileInput, lastDate,
    } = useTourWrite(getDefault(product));
    const { categoryId, its, simpleData, status, thumbs, keyWards, type } = tourData;
    const {
        setkeyWards,
        setits,
        setType,
        setSimpleData
    } = tourSets;
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
        isOpen,
    } = simpleData;
    const {
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
        handleUploadClick
    } = handles;
    const [tab, setTab] = useState<number>(1);
    const isCreateMode = mode === "create";

    const handleChangeOpen = (e: React.ChangeEvent<HTMLInputElement>) => {
        const bool = (e.currentTarget.value === "true")
        setSimpleData({
            ...simpleData,
            isOpen: bool
        })
    }

    const tabOnCheck = (index: number) => tab === index ? "on" : undefined;

    const handleTab = (index: number) => () => {
        setTab(index)
    }

    const handleCreate = async () => {
        if (validate()) {
            const nextData = getCreateInput()
            createFn(nextData)
        }
    }
    const handleEdit = async () => {
        if (!product) return;
        if (validate()) {
            const nextData = getUpdateInput()
            updateFn(product._id, nextData)
        }
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            deleteFn(product!._id)
    }

    const handleCancel = () => {
        if (confirm("작성하시던 내용이 저장되지 않을 수 있습니다."))
            router.push("/tour/list")
    }


    const tapDisplay = tapCheck.bind(tapCheck, tab);

    useEffect(() => {
        initStorage()
    }, [])

    return <div key={loadKey} className="tour_box w100 board_write">
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
                    <div className="title">상품타입</div>
                    <div className="input_form">
                        <span className="category r3">
                            <select onChange={changeVal(setType)} value={type} name="type">
                                <option value={ProductType.TOUR}>
                                    투어(연일)
                                </option>
                                <option value={ProductType.EXPERIENCE}>
                                    체험(당일)
                                </option>
                                <option value="">
                                    선택없음
                                </option>
                            </select>
                        </span>
                    </div>
                </div>
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
                        <input id="title" onChange={handleInputChange("title")} value={title} type="text" name="title" className="inputText w100" />
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">부제목</div>
                    <div className="input_form">
                        <input onChange={handleInputChange("subTitle")} value={subTitle || ""} type="text" name="title" className="inputText w100" />
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">판매금액</div>
                    <div className="input_form">
                        <div>
                            <span className="mr5">성인</span>
                            <input onChange={handleInputCommaChange("adult_price")} value={adult_price} type="text" className="text w20 mr15" />
                            <span className="mr5">소인</span>
                            <input onChange={handleInputCommaChange("kids_price")} value={kids_price} type="text" className="text w20 mr15" />
                            <span className="mr5">유아</span>
                            <input onChange={handleInputCommaChange("baby_price")} value={baby_price} type="text" className="text w20" />
                        </div>
                        <p className="info_txt">- 원을 빼고 ','를 넣어서 구분해서 입력해주세요. ex) 50,000</p>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">인원설정</div>
                    <div className="input_form">
                        <div>
                            <span className="mr5">최소인원</span>
                            <input onChange={handleInputChange("minMember")} value={minMember} type="text" className="text w20 mr15" />
                            <span className="mr5">최대인원</span>
                            <input onChange={handleInputChange("maxMember")} value={maxMember} type="text" className="text w20" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">장소</div>
                    <div className="input_form">
                        <div>
                            <input onChange={handleInputChange("address")} value={address} type="text" className="text w100" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">출발장소</div>
                    <div className="input_form">
                        <div>
                            <input onChange={handleInputChange("startPoint")} value={startPoint} type="text" className="text w100" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">판매여부</div>
                    <div className="input_form">
                        <ul>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-sale" value={ProductStatus.OPEN} checked={status === ProductStatus.OPEN} className="radio" /><label htmlFor="status-sale">판매중</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-sold" value={ProductStatus.SOLD} checked={status === ProductStatus.SOLD} className="radio" /><label htmlFor="status-sold">완판</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-close" value={ProductStatus.CLOSE} checked={status === ProductStatus.CLOSE} className="radio" /><label htmlFor="status-close">판매종료</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-refused" value={ProductStatus.REFUSED} checked={status === ProductStatus.REFUSED} className="radio" /><label htmlFor="status-refused">거절됨</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-hide" value={ProductStatus.HIDE} checked={status === ProductStatus.HIDE} className="radio" /><label htmlFor="status-hide">숨겨짐</label></li>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-ready" value={ProductStatus.READY} checked={status === ProductStatus.READY} className="radio" /><label htmlFor="status-ready">준비중</label></li>
                        </ul>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">키워드</div>
                    <div className="input_form">
                        <TagInput tags={keyWards} setTags={setkeyWards} />
                        <p className="input_form info_txt">- 'enter'로 구분시 자동으로 키워드가 생성됩니다.</p>
                    </div>
                </div>
                <div className="write_type">
                    <div className="title">공개/비공개</div>
                    <div className="input_form">
                        <ul>
                            <li><input onChange={handleChangeOpen} type="radio" name="isOpen" id="status-open" value={"true"} checked={isOpen} className="radio" /><label htmlFor="status-open">공개</label></li>
                            <li><input onChange={handleChangeOpen} type="radio" name="isOpen" id="status-sold" value={"false"} checked={!isOpen} className="radio" /><label htmlFor="status-sold">비공개</label></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="write_type bottom_write">

                <div className="write_type">
                    <div className="title">썸네일</div>
                    <div className="img_box_add">
                        <ul className="img_add">
                            {thumbs.map((thumb, i) =>
                                <li key={i + "thumb"} className="on_file">{thumb.name}<i onClick={handleClearThumb(i)} className="flaticon-multiply icon_x"></i></li>
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
                    <li onClick={handleTab(1)} className={tabOnCheck(1)}><span><i>01.</i>여행상세설명</span></li>
                    <li onClick={handleTab(2)} className={tabOnCheck(2)}><span><i>02.</i>안내 및 참고</span></li>
                    <li onClick={handleTab(3)} className={tabOnCheck(3)}><span><i>03.</i>포함 및 불포함</span></li>
                    <li onClick={handleTab(4)} className={tabOnCheck(4)}><span><i>04.</i>기타 설정</span></li>
                </ul>
                <div {...tapDisplay(1)} id="texta_01" className="texta">
                    <h5 id="itinerary">여행일정</h5>
                    <DayRangePicker isRange={type === ProductType.TOUR} onRangeChange={handleDateState} from={firstDate} to={lastDate} >
                        <div className="info_txt">
                            <h4><i className="jandaicon-info2"></i>여행일정 등록시 유의점</h4>
                            <ul>
                                <li>- 달력에서 여행기간을 선택해 주세요. 그래야 아래에 입력창이 생성됩니다.</li>
                                <li>- 이미지를 첨부시에 이미지 내부에 이미지를 입력할 경우 텍스트를 크게 써주세요.<br />모바일 화면도 고려해야합니다.</li>
                                <li>- 이미지를 꼭 한번 용량을 압축해서 올려주세요. 로딩시에 시간이 단축됩니다.<br /><a href="https://www.iloveimg.com/ko/compress-image" target="_blank">(추천사이트 이동)</a></li>
                                <li>- 일정에 관련된 내용만 간략하게 써주세요.</li>
                            </ul>
                        </div>
                    </DayRangePicker>
                    {its.map((itinery, index) => <div key={"itineryForm" + index}>
                        <ItineryForm index={index} setits={setits} itinery={itinery} its={its} />
                    </div>)}
                </div>
                <div {...tapDisplay(2)} id="texta_02" className="texta">
                    <h5>상품 안내문</h5>
                    <Editor data={contents} onChange={handleTextData("contents")} />
                </div>
                <div {...tapDisplay(3)} id="texta_03" className="texta">
                    <h5>포함 / 불포함</h5>
                    <Editor data={inOrNor} onChange={handleTextData("inOrNor")} />
                </div>
                <div {...tapDisplay(4)} id="texta_04" className="texta">
                    <h5>커리큐럼 유의사항</h5>
                    <Editor data={caution} onChange={handleTextData("caution")} />
                    <h5>간략한 안내문</h5>
                    <Editor data={info} onChange={handleTextData("info")} />
                </div>
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



type TCreateFn = (params: ProductCreateInput) => void;
type TUpdateFn = (_id: string, params: ProductUpdateInput) => void;
interface IProp {
    isExperience?: boolean;
    mode?: "edit" | "create"
}

interface ITourWriteWrapContext {
    createFn: TCreateFn;
    updateFn: TUpdateFn;
    deleteFn: TDeleteFn;
    product?: IproductFindById;
    findLoading: boolean;
    createLoading: boolean;
    mode: "create" | "edit"
}

//수정하고 나면 수정한 내용을 그대로 덮어버리면 안됨. 핑크로드의 승인이 필요함.
export const TourWriteWrap: React.FC<IProp> = () => {
    const { isManager } = useContext(AppContext);
    const router = useRouter(); // => 넥스트에서는 변경
    const { query } = router;

    const id = query.id?.[0] as string | undefined;
    const { productDelete, deleteLoading } = useProductDelete({
        onCompleted: ({
            ProductDelete
        }) => {
            if (ProductDelete.ok)
                router.push("/tour/list")

        }
    })
    const { productUpdate, updateLoading } = useProductUpdate({
        onCompleted: ({ ProductUpdate }) => {
            router.push(`/tour/view/${ProductUpdate?.data?._id}`)
        }
    })

    const [ProductCreateMu, { loading: createLoading }] = useMutation<ProductCreate, ProductCreateVariables>(PRODUCTS_CREATE, {
        onCompleted: ({ ProductCreate }) => {
            if (ProductCreate.ok)
                router.push(`/tour/view/${ProductCreate!.data!._id}`)
        }
    })

    const { product, loading: findLoading } = useProductFindById({
        variables: {
            _id: id!
        },
        skip: !id
    })

    const createFn: TCreateFn = (params: ProductCreateInput) => {
        ProductCreateMu({
            variables: {
                params
            },
        })
    }

    const updateFn: TUpdateFn = (_id, params) => {
        productUpdate({
            _id,
            params: {
                ...params,
            }
        })
    }

    const deleteFn: TDeleteFn = (id) => {
        productDelete({
            id
        })
    }

    const unexistId = !findLoading && id && !product;

    if (findLoading) return null;
    if (unexistId) return <Page404 />
    if (!isManager) {
        return <Page404 />
    }

    const context: ITourWriteWrapContext = {
        createFn,
        updateFn,
        deleteFn,
        product,
        findLoading,
        createLoading,
        mode: !id ? "create" : "edit"
    }


    return <TourWrite context={context} />;
};


export default TourWriteWrap;
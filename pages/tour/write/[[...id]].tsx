
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import { OutputData } from '@editorjs/editorjs';
import "react-day-picker/lib/style.css";
import { Ffile, ItineraryCreateInput, productPostCreate, ProductPostCreateInput, productPostCreateVariables, ProductPostStatus } from '../../../types/api';
import { IProductDefaultData, TProductDataPart } from '../../../types/defaults/defaultProduct';
import { EMPTY_EDITOR } from '../../../types/const';
import { useMutation } from '@apollo/client';
import { useProductFindById } from '../../../hook/useProductFindById';
import DayPicker from "components/dayPicker/DayRangePicker"
import dynamic from 'next/dynamic'
import { generateitinery, getDefault, TRange } from '../../../components/tourWrite/helper';
import { useUpload } from "hook/useUpload";
import { PRODUCT_POST_CREATE } from "apollo/mutations";
import { ItineryForm } from "components/tourWrite/ItineryForm";
import { autoComma } from "utils/formatter";
import dayjs from "dayjs";

const EditorJs = dynamic(() => import('components/editor/Editor'), { ssr: false })
interface IProp {
    context: ITourWriteWrapContext;
}

export const TourWrite: React.FC<IProp> = ({ context }) => {
    const { createFn, product, mode } = context;
    const { data: defaultData, defaults, content: contentBlocks, images, itinerary } = getDefault(product);
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const [itineries, setitineries] = useState<ItineraryCreateInput[]>(itinerary);
    const { signleUpload } = useUpload();
    const [data, setData] = useState<TProductDataPart>(defaultData)
    const [categoryId, setCategoryId] = useState(defaults.categoryId);
    const [status, setStatus] = useState(defaults.status);
    const [thumbs, setThumbs] = useState<Partial<Ffile>[]>(images)
    const [tab, setTab] = useState<number>(1);
    const [d, setD] = useState(0);


    const [content, setContent] = useState<OutputData>({
        blocks: contentBlocks
    });

    const [include, setInclude] = useState<OutputData>({
        blocks: contentBlocks
    });

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
        const onUpload = (url, data) => {
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

    const { address,
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

    function set<T extends keyof TProductDataPart>(key: T, value: any) {
        setData({ ...data, [key]: value })
    }

    const nextData: ProductPostCreateInput = {
        itinerary,
        title,
        address,
        adult_price,
        baby_price,
        caution,
        content,
        images,
        inOrNor: include,
        info,
        keyWards,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        status,
        subTitle,
        categoryId
    }

    const handleCreate = () => {
        createFn(nextData)
    }

    const handleTempSave = () => {
        const data: IProductDefaultData = {
            ...nextData
        }
        Storage.saveLocal("write", data);
    }

    const handleLoad = () => {
        const savedData: IProductDefaultData = Storage.getLocalObj("write", undefined);
        if (!savedData) alert("저장된 정보가 없습니다.")
        const { itinerary, title, address, adult_price, baby_price, categoryId, caution, content, images, inOrNor, info, keyWards, kids_price, maxMember, minMember, productId, startPoint, status, subTitle, type } = savedData;
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
        setInclude(inOrNor)
        setContent(content)
        setitineries(itinerary)
        setD(9);
    }

    const handleEdit = () => {

    }
    useEffect(() => {
        initStorage()
    }, [])

    return <div key={d} className="mdeal_writing_in w100 board_write">
        <div className="w1200">
            <div className="write_box">
                <div className="write_type">
                    <div className="title">카테고리</div>
                    <div className="input_form">
                        <span className="category r3">
                            <select name="category_srl">
                                <option>분류</option>
                                <option>
                                    문화/예술
                            </option>
                                <option>
                                    문화/예술
                            </option>
                                <option>
                                    문화/예술
                            </option>
                            </select>
                        </span>
                    </div>
                </div>
                <div className="write_type">
                    <div className="title">제목</div>
                    <div className="input_form">
                        <input onChange={(e) => {
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
                        <input onChange={(e) => {
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
                            <li onClick={handleUploadClick}>이미지추가<i className="flaticon-add icon_plus"></i></li>
                            <input onChange={handleChangeSumbNail} ref={hiddenFileInput} hidden type="file" />
                        </ul>
                        <p className="input_form info_txt">- 썸네일 이미지사이즈 400px * 400px</p>
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
                        <h5>여행일정</h5>
                        <DayPicker setState={({ from, to }: TRange) => {
                            const newItinerary = generateitinery({ from, to }, itinerary);
                            if (newItinerary)
                                setitineries([...newItinerary]);
                        }} from={dayjs(itineries[0]?.date).toDate()} to={dayjs(itineries[itineries.length - 1]?.date).toDate()} />
                        {(itineries || []).map((itinery, index) => <ItineryForm key={"itineryForm" + index} index={index} setitineries={setitineries} itinery={itinery} itineries={itineries} />)}
                    </div>
                }

                <div style={{
                    display: tab === 2 ? undefined : "none"
                }} id="texta_02" className="texta">
                    <h5>상품 안내문</h5>
                    <EditorJs holder="content" data={content} onChange={(api: any, data?: OutputData) => {
                        setContent(data || EMPTY_EDITOR);
                    }} />
                    <div id="content" />
                </div>
                <div style={{
                    display: tab === 3 ? undefined : "none"
                }} id="texta_03" className="texta">
                    <h5>포함 / 불포함</h5>
                    <EditorJs holder="include" data={include} onChange={(api: any, data?: OutputData) => {
                        setInclude(data || EMPTY_EDITOR);
                    }} />
                    <div id="include" />
                </div>
                {tab === 4 &&
                    <div id="texta_04" className="texta">
                        <h5>커리큐럼 유의사항</h5>
                        <textarea value={caution} id="warrant" style={{
                            width: "100%",
                            minHeight: "200px"
                        }} />
                        <h5>간략한 안내문</h5>
                        <textarea value={info} id="warrant" style={{
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
                    <button onClick={() => {
                        if (confirm("작성을 취소 하고 이전 페이지로 이동하시겠습니까? "))
                            history.go(-1);
                    }} type="button" className="btn medium impact">취소</button>
                    {isCreateMode || <button type="submit" className="btn medium">삭제</button>}
                </div>
            </div>
        </div>
    </div>
};


export type TCreateFn = (params: ProductPostCreateInput) => void;
interface IProp {
    isExperience?: boolean;
    mode?: "edit" | "create"
}

interface ITourWriteWrapContext {
    createFn: TCreateFn;
    product: IProductPostFindById;
    findLoading: boolean;
    createLoading: boolean;
    mode: "create" | "edit"
}

//수정하고 나면 수정한 내용을 그대로 덮어버리면 안됨. 핑크로드의 승인이 필요함.
export const TourWriteWrap: React.FC<IProp> = ({ isExperience }) => {
    const { query } = useRouter(); // => 넥스트에서는 변경
    const id = query.id as string | undefined;

    const [productCreateMu, { loading: createLoading }] = useMutation<productPostCreate, productPostCreateVariables>(PRODUCT_POST_CREATE)
    const { product, loading: findLoading } = useProductFindById({
        variables: {
            _id: id!
        },
        skip: !id
    })

    const createFn: TCreateFn = (params: ProductPostCreateInput) => {
        productCreateMu({
            variables: {
                params
            }
        })
    }

    const context: ITourWriteWrapContext = {
        createFn,
        product,
        findLoading,
        createLoading,
        mode: !id ? "create" : "edit"
    }

    return <TourWrite context={context} />;
};


export default TourWriteWrap;
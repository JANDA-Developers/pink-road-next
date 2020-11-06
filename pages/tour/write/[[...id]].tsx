
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { Storage } from '../../../utils/Storage';
import { Scheduler } from '../../../components/tourWrite/Scheduler';
import { OutputData } from '@editorjs/editorjs';
import "react-day-picker/lib/style.css";
import { Ffile, ItineraryArrayInput, productCreate, ProductCreateInput, productCreateVariables, ProductStatus } from '../../../types/api';
import { IProductDefaultData, TProductDataPart } from '../../../types/defaults/defaultProduct';
import { EMPTY_EDITOR } from '../../../types/const';
import { useMutation } from '@apollo/client';
import { useProductFindById } from '../../../hook/useProductFindById';
import { PRODUCT_CREATE } from '../../../apollo/mutations';
import DayPicker from "components/dayPicker/DayRangePicker"
import dynamic from 'next/dynamic'
import { detactRangeChange, generateSchedule, getDefault } from './helper';
import { useUpload } from "hook/useUpload";
const EditorJs = dynamic(() => import('components/editor/Editor'), { ssr: false })

let FILE_SELECT_INDEX = 0;
interface IProp {
    product?: IProductDefaultData;
    mode?: "edit" | "create";
    createFn: TCreateFn
}

export const TourWrite: React.FC<IProp> = ({ mode, product, createFn }) => {
    const { data: defaultData, defaults, range: defaultRange } = getDefault(product);
    console.log(defaults.schedule);
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const [schedules, setSchedules] = useState<ItineraryArrayInput[]>([]);
    const [range, setRange] = useState(defaultRange);
    const { signleUpload } = useUpload();
    const [data, setData] = useState<TProductDataPart>(defaultData)
    const [status, setStatus] = useState(defaults.Status);
    const [thumbs, setThumbs] = useState<Partial<Ffile>[]>([])
    const [tab, setTab] = useState<number>(1);

    const [infoProduct, setInfoProduct] = useState<OutputData>({
        blocks: []
    });
    const [include, setInclude] = useState<OutputData>({
        blocks: []
    });

    const isCreateMode = mode === "create";

    const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value as ProductStatus)
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
        const newThumbs = thumbs.splice(index, 1);
        setThumbs([...newThumbs])
    }

    useEffect(() => {

        const newSch = generateSchedule(range, schedules)


        setSchedules(newSch || [])

    }, detactRangeChange(range))


    const tabOnCheck = (index: number) => tab === index ? "on" : undefined;

    const handleTab = (index: number) => {
        setTab(index)
    }

    const { address, keyWards, adult_price, baby_price, info, kids_price, maxMember, minMember, startPoint, subTitle, title } = data;

    function set<T extends keyof TProductDataPart>(key: T, value: any) {
        setData({ ...data, [key]: value })
    }

    return <div className="mdeal_writing_in w100 board_write">
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
                                set("adult_price", e.currentTarget.value)
                            }} value={adult_price} type="text" className="text w20 mr15" />
                            <span className="mr5">소인</span>
                            <input onChange={(e) => {
                                set("kids_price", e.currentTarget.value)
                            }} value={kids_price} type="text" className="text w20 mr15" />
                            <span className="mr5">유아</span>
                            <input onChange={(e) => {
                                set("baby_price", e.currentTarget.value)
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
                            }} value={startPoint} type="text" className="text w100" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">출발장소</div>
                    <div className="input_form">
                        <div>
                            <input onChange={(e) => {
                                set("address", e.currentTarget.value)
                            }} value={startPoint} type="text" className="text w100" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">판매여부</div>
                    <div className="input_form">
                        <ul>
                            <li><input onChange={handleChangeStatus} type="radio" name="status" id="status-open" value={ProductStatus.OPEN} checked={status === ProductStatus.OPEN} className="radio" /><label htmlFor="status-open">판매중</label></li>
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
                        <input value={keyWards} type="text" className="text w100" />
                        <p className="input_form info_txt">- ','로 구분시 자동으로 키워드가 생성됩니다.</p>
                    </div>
                </div>
            </div>

            <div className="write_type bottom_write">

                <div className="write_type">
                    <div className="title">썸네일</div>
                    <div className="img_box_add">
                        <ul className="img_add">
                            {/* {thumbs.map((thumb, i) =>
                                <li key={thumb._id} className="on_file">{thumb.name}<i onClick={() => { handleClearThumb(i) }} className="flaticon-multiply icon_x"></i></li>
                            )} */}
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
                        <DayPicker setState={setRange} from={range.from} to={range.to} />
                        {(schedules || []).map((schedule, index) => <Scheduler index={index} setSchedules={setSchedules} schedule={schedule} schedules={schedules} />)}
                    </div>
                }

                <div style={{
                    display: tab === 2 ? undefined : "none"
                }} id="texta_02" className="texta">
                    <h5>상품 안내문</h5>
                    <div id="content">
                        <EditorJs key={"editor1"} holder="content" onChange={(api: any, data?: OutputData) => {
                            setInfoProduct(data || EMPTY_EDITOR);
                        }} data={infoProduct} />
                    </div>
                </div>
                <div style={{
                    display: tab === 3 ? undefined : "none"
                }} id="texta_03" className="texta">
                    <h5>포함 / 불포함</h5>
                    <div id="include">
                        <EditorJs key={"editor2"} holder="include" onChange={(api: any, data?: OutputData) => {
                            setInclude(data || EMPTY_EDITOR);
                        }} data={include} />
                    </div>
                </div>
                {tab === 4 &&
                    <div id="texta_04" className="texta">
                        <h5>커리큐럼 유의사항</h5>
                        <textarea id="warrant" style={{
                            width: "100%",
                            minHeight: "200px"
                        }} />
                        <h5>간략한 안내문</h5>
                        <textarea id="warrant" style={{
                            width: "100%",
                            minHeight: "200px"
                        }} />
                    </div>
                }
            </div>
            <div className="boardNavigation">
                <div className="float_left">
                    <button onClick={() => {
                        Storage.saveLocal("write", data)
                    }} type="button" className="btn medium">임시 저장</button>
                    <button onClick={() => {
                        const writeData = Storage.getLocalObj("write", undefined);

                        if (!writeData) {
                            alert("저장된 정보가 없습니다.");
                            return;
                        }

                        setData(writeData);
                    }} type="button" className="btn medium">불러오기</button>
                </div>
                <div className="float_right">
                    {isCreateMode || <button type="submit" className="btn medium pointcolor">수정</button>}
                    {isCreateMode && <button type="submit" className="btn medium pointcolor">등록</button>}
                    <button onClick={() => {
                        if (confirm("작성을 취소 하고 이전 페이지로 이동하시겠습니까? "))
                            history.go(-1);
                    }} type="button" className="btn medium impact">취소</button>
                    {isCreateMode || <button type="submit" className="btn medium">삭제</button>}
                </div>
            </div>
        </div>
    </div>
        ;
};

export type TCreateFn = (newProduct: ProductCreateInput, newItinerary: ItineraryArrayInput[]) => void;
interface IProp {
    isExperience?: boolean;
    mode?: "edit" | "create"
}

//수정하고 나면 수정한 내용을 그대로 덮어버리면 안됨. 핑크로드의 승인이 필요함.
export const TourWriteWrap: React.FC<IProp> = ({ isExperience }) => {
    const { query } = useRouter(); // => 넥스트에서는 변경
    const id = query.id as string | undefined;

    const [productCreateMu, { loading: createLoading }] = useMutation<productCreate, productCreateVariables>(PRODUCT_CREATE)
    const { product, loading: findLoading } = useProductFindById({
        variables: {
            id: id!
        },
        skip: !id
    })

    const createFn: TCreateFn = (newProduct: ProductCreateInput, newItinerary: ItineraryArrayInput[]) => {
        productCreateMu({
            variables: {
                newItinerary,
                newProduct
            }
        })
    }

    return <TourWrite createFn={createFn} mode={!id ? "create" : "edit"} />;
};


export default TourWriteWrap;
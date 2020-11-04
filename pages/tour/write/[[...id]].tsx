import EditorJs from 'react-editor-js';
import dayjs from 'dayjs';
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { Storage } from '../../../utils/Storage';
import { DEFAULT_SCHEDULE, Scheduler } from '../../../components/tourWrite/Scheduler';
import { OutputData } from '@editorjs/editorjs';
import "react-day-picker/lib/style.css";
import { EDITOR_JS_TOOLS } from 'components/editor/tools';
import { ItineraryArrayInput, productCreate, ProductCreateInput, productCreateVariables, ProductStatus } from '../../../types/api';
import { DEFAULT_PRODUCT_INPUT, IProductDefaultData, TProductDataPart } from '../../../types/defaults/defaultProduct';
import { EMPTY_EDITOR } from '../../../types/const';
import { useMutation } from '@apollo/client';
import { useProductFindById } from '../../../hook/useProductFindById';
import { PRODUCT_CREATE } from '../../../apollo/mutations';
import DayPicker from "components/dayPicker/DayPicker"

let FILE_SELECT_INDEX = 0;
interface IProp {
    product?: IProductDefaultData;
    mode?: "edit" | "create";
    createFn: TCreateFn
}

export const TourWrite: React.FC<IProp> = ({ mode, product, createFn }) => {
    const defaults: IProductDefaultData = product ? product : DEFAULT_PRODUCT_INPUT
    const start = defaults.schedule[0]?.date || null;
    const end = defaults.schedule[defaults.schedule.length - 1]?.date || null;
    const [schedules, setSchedules] = useState<ItineraryArrayInput[]>(defaults.schedule);
    const [range, setRange] = useState({
        from: undefined,
        to: undefined
    });

    const [data, setData] = useState<TProductDataPart>({
        address: defaults.address || "",
        adult_price: defaults.adult_price || 0,
        baby_price: defaults.baby_price || 0,
        info: defaults.info || "",
        kids_price: defaults.kids_price || 0,
        maxMember: defaults.maxMember || 0,
        minMember: defaults.minMember || 0,
        startPoint: defaults.startPoint || "",
        subTitle: defaults.subTitle || "",
        title: defaults.title,
        keyWards: defaults.keyWards || []
    })
    const [status, setStatus] = useState(defaults.Status);
    // const [content, setContet] = useState<OutputData>(defaultData.content);
    const [infoProduct, setInfoProduct] = useState<OutputData>({
        blocks: []
    });
    const [include, setInclude] = useState<OutputData>({
        blocks: []
    });
    const [exclude, setexclude] = useState<OutputData>({
        blocks: []
    });
    const [warrant, setWarrant] = useState<OutputData>({
        blocks: []
    });

    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const isCreateMode = mode === "create";


    const handleUploadClick = (index: number) => {
        FILE_SELECT_INDEX = index;
        if (!hiddenFileInput.current) throw Error("no hiddenFileInput.current")
        hiddenFileInput.current.click();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files[0];
        // data.images[FILE_SELECT_INDEX] = fileUploaded;
        setData({ ...data });
    };

    useEffect(() => {

        const { from, to } = range;

        if (!to) return;
        if (!from) return;

        let newSch = schedules;

        const diff = dayjs(to).diff(from, "d") + 1;

        // 인덱스 넘치는건 죽이고
        if (diff < schedules.length)
            newSch = schedules.slice(0, diff);

        // 인덱스 남는거는 default채운후
        if (diff > schedules.length)
            newSch = [...newSch, ...Array(diff - newSch.length).fill(DEFAULT_SCHEDULE)]

        for (let i = 0; i <= diff; i++) {
            if (newSch[i])
                newSch[i].date = dayjs(from).add(i, "d").toDate();
        }

        setSchedules(newSch)

    }, [dayjs(range.from || new Date())?.format("MMDD"), dayjs(range.to || new Date())?.format("MMDD")])



    const { address, keyWards, adult_price, baby_price, info, kids_price, maxMember, minMember, startPoint, subTitle, title } = data;


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
                        <input value={title} type="text" name="title" className="inputText w100" />
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">부제목</div>
                    <div className="input_form">
                        <input value={subTitle} type="text" name="title" className="inputText w100" />
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">판매금액</div>
                    <div className="input_form">
                        <div>
                            <span className="mr5">성인</span>
                            <input value={adult_price} type="text" className="text w20 mr15" />
                            <span className="mr5">소인</span>
                            <input value={kids_price} type="text" className="text w20 mr15" />
                            <span className="mr5">유아</span>
                            <input value={baby_price} type="text" className="text w20" />
                        </div>
                        <p className="info_txt">- 원을 빼고 ','를 넣어서 구분해서 입력해주세요. ex) 50,000</p>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">인원설정</div>
                    <div className="input_form">
                        <div>
                            <span className="mr5">최소인원</span>
                            <input value={minMember} type="text" className="text w20 mr15" />
                            <span className="mr5">최대인원</span>
                            <input value={maxMember} type="text" className="text w20" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">출발장소</div>
                    <div className="input_form">
                        <div>
                            <input value={address} type="text" className="text w100" />
                        </div>
                    </div>
                </div>

                <div className="write_type">
                    <div className="title">판매여부</div>
                    <div className="input_form">
                        <ul>
                            <li><input type="radio" name="status" id="status-open" value={ProductStatus.OPEN} checked={status === ProductStatus.OPEN} className="radio" /><label htmlFor="status-open">판매중</label></li>
                            <li><input type="radio" name="status" id="status-sold" value={ProductStatus.SOLD} checked={status === ProductStatus.SOLD} className="radio" /><label htmlFor="status-sold">완판</label></li>
                            <li><input type="radio" name="status" id="status-close" value={ProductStatus.CLOSE} checked={status === ProductStatus.CLOSE} className="radio" /><label htmlFor="status-close">판매종료</label></li>
                            <li><input type="radio" name="status" id="status-refused" value={ProductStatus.REFUSED} checked={status === ProductStatus.REFUSED} className="radio" /><label htmlFor="status-refused">거절됨</label></li>
                            <li><input type="radio" name="status" id="status-hide" value={ProductStatus.HIDE} checked={status === ProductStatus.HIDE} className="radio" /><label htmlFor="status-hide">숨겨짐</label></li>
                            <li><input type="radio" name="status" id="status-ready" value={ProductStatus.READY} checked={status === ProductStatus.READY} className="radio" /><label htmlFor="status-ready">준비중</label></li>
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
                            <li onClick={() => { handleUploadClick(0) }} className="on_file">썸네일은_내가_만든다_진짜최종.jpg <i className="flaticon-multiply icon_x"></i></li>
                            <li onClick={() => { handleUploadClick(1) }}>이미지추가<i className="flaticon-add icon_plus"></i></li>
                            <li onClick={() => { handleUploadClick(2) }}>이미지추가<i className="flaticon-add icon_plus"></i></li>
                            <li onClick={() => { handleUploadClick(3) }}>이미지추가<i className="flaticon-add icon_plus"></i></li>
                            <input onChange={handleChange} ref={hiddenFileInput} hidden type="file" />
                        </ul>
                        <p className="input_form info_txt">- 썸네일 이미지사이즈 400px * 400px</p>
                    </div>
                </div>

            </div>

            <div className="write_con">
                <ul className="con_tap">
                    <li className="on"><span><i>01.</i>여행상세설명</span></li>
                    <li><span><i>02.</i>안내 및 참고</span></li>
                    <li><span><i>03.</i>포함 및 불포함</span></li>
                    <li><span><i>04.</i>기타 설정</span></li>
                </ul>
                <div id="texta_01" className="texta">
                    <h5>여행일정</h5>
                    <DayPicker setState={setRange} from={range.from} to={range.to} />
                    {schedules.map((schedule, index) => <Scheduler index={index} setSchedules={setSchedules} schedule={schedule} schedules={schedules} />)}
                </div>
                <div>
                    <div id="texta_02" className="texta">
                        <h5>상품 안내문</h5>
                        <div id="content">
                            <EditorJs holder="content" onChange={(api: any, data?: OutputData) => {
                                setInfoProduct(data || EMPTY_EDITOR);
                            }} data={infoProduct} tools={EDITOR_JS_TOOLS} />
                        </div>
                    </div>
                    <div id="texta_03" className="texta">
                        <h5>포함 / 불포함</h5>
                        <div id="include">
                            <EditorJs holder="include" onChange={(api: any, data?: OutputData) => {
                                setInclude(data || EMPTY_EDITOR);
                            }} data={include} tools={EDITOR_JS_TOOLS} />
                        </div>
                    </div>
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
                </div>
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

    //주말에 넥스트로 변경
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
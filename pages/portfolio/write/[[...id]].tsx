
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import { OutputData } from '@editorjs/editorjs';
import "react-day-picker/lib/style.css";
import { Ffile, ItineraryCreateInput, productPostCreate, ProductPostCreateInput, productPostCreateVariables, ProductPostStatus } from '../../../types/api';
import { IProductDefaultData, TProductDataPart } from '../../../types/defaults/defaultProduct';
import { useMutation } from '@apollo/client';
import { useUpload } from "hook/useUpload";
import { PRODUCT_POST_CREATE } from "apollo/mutations";
import { IProductPostFindById } from "types/interface";

interface IProp {
    context: ITourWriteWrapContext;
}

export const PortFolioWrite: React.FC<IProp> = ({ context }) => {
    const { createFn, product, mode } = context;
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const { signleUpload } = useUpload();
    const [categoryId, setCategoryId] = useState(defaults.categoryId);
    const [status, setStatus] = useState(defaults.status);
    const [thumbs, setThumbs] = useState<Partial<Ffile>[]>(images)
    const [d, setD] = useState(0);

    const [content, setContent] = useState<OutputData>({
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
        setContent(content)
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
export const PortFolioWriteWrap: React.FC<IProp> = ({ isExperience }) => {
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

    return <PortFolioWrite context={context} />;
};


export default PortFolioWriteWrap;
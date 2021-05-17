import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BoardWrite, TCategory } from "components/board/Write";
import { useBoard } from "hook/useBoard";
import { omits } from "../../../../utils/omit";
import { Validater } from "../../../../utils/validate";
import {
    useQuestionCreate,
    useQuestionDelete,
    useQuestionFindById,
    useQuestionUpdate,
} from "../../../../hook/useQuestion";
import { getFromUrl } from "../../../../utils/url";
import { AppContext } from "../../../_app";
import { ProductSelectModal } from "../../../../components/ProductSelectModal";
import { closeModal, openModal } from "../../../../utils/popUp";
import { ThreePhoneNumberInput } from "../../../../components/phoneNumberInput/PhoneNumberInput";
import { isPhone } from "../../../../utils/validation";
import { QuestionAS, QuestionUpdateInput } from "../../../../types/api";

interface IProp {}

export const QuestionWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const { categoriesMap, isLogin, isSeller } = useContext(AppContext);
    const id = router.query.id?.[0] as string;
    const pw = getFromUrl("pw");
    const { item: question } = useQuestionFindById(id, {
        variables: {
            id,
            password: pw,
        },
    });
    const mode = id ? "edit" : "create";
    const urlProductId = getFromUrl("pid") || "";
    const urlProductName = getFromUrl("name") || "";
    const defaulQuestionAs =
        question?.questionAS ||
        (isSeller ? QuestionAS.PARTNER : QuestionAS.NORMAL);
    const [target, setTarget] = useState<QuestionAS>(defaulQuestionAs);
    const isTargetAll = target === QuestionAS.NORMAL;
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState({
        one: "",
        two: "",
        three: "",
    });

    const targetCats = isTargetAll
        ? categoriesMap?.QUESTION
        : categoriesMap?.QUESTION_FOR_PARTNER;

    const categoryList = (targetCats || [])?.map(
        (cat): TCategory => ({
            _id: cat._id,
            label: cat.label,
        })
    );

    //아래 대충 상품캣 찾는 로직
    const productCat = categoryList.find((cat) => cat.label.includes("상품"));

    const [questionUpdateMu] = useQuestionUpdate({
        onCompleted: ({ QuestionUpdate }) => {
            if (QuestionUpdate.ok) {
                const _pw = password || pw;
                const id = QuestionUpdate.data!._id;
                const to = `/member/question/view/${id}`;

                router.push(to + "?pw=" + _pw);
            }
        },
        awaitRefetchQueries: true,
    });

    const [questionCreateMu] = useQuestionCreate({
        onCompleted: ({ QuestionCreate }) => {
            if (QuestionCreate.ok) {
                const id = QuestionCreate.data!._id;
                const toPid = password || urlProductId;
                const pidParam = urlProductId ? "?pid=" + toPid : "";
                router.push(`/member/question/view/${id}` + pidParam);
            }
        },
        awaitRefetchQueries: true,
    });

    const [questionDeleteMu] = useQuestionDelete({
        onCompleted: ({ QuestionDelete }) => {
            if (QuestionDelete.ok) router.push(`/member/question`);
        },
    });

    const boardHook = useBoard(
        {
            ...question,
            isOpen: false,
            categoryId:
                question?.category?._id ||
                (urlProductId ? productCat?._id : undefined),
        },
        { storeKey: "questionWrite" }
    );

    const isProductMode = productCat?._id === boardHook.boardData.categoryId;

    const [productId, setProductId] = useState(urlProductId);
    const [productName, setProductName] = useState(urlProductName);
    const {
        boardData,
        loadKey,
        handleCancel,
        handleLoad,
        handleTempSave,
        setBoardData,
    } = boardHook;
    const contact = phoneNumber.one + phoneNumber.three + phoneNumber.two;

    const { validate } = new Validater([
        {
            value: isLogin || password.length >= 4,
            failMsg: "패스워드를 입력 해주세요 (4자리이상).",
        },
        {
            value: isLogin || name,
            failMsg: "성함을 입력 해주세요",
        },
        {
            value: isLogin || isPhone(contact),
            failMsg: "연락처를 입력 해주세요.",
        },
        {
            value: boardData.title,
            failMsg: "제목 값은 필수 입니다.",
        },
        {
            value: boardData.contents,
            failMsg: "콘텐츠 값은 필수 입니다.",
        },
    ]);

    const next: QuestionUpdateInput = {
        ...boardData,
        productId,
        password,
        anonymousContact: contact,
        anonymousName: name,
        questionAS: target,
    };

    const handleUpdate = () => {
        if (!validate()) return;

        const params = {
            ...boardData,
        };

        questionUpdateMu({
            variables: {
                params: omits(params, ["categoryId"]),
                id,
            },
        });
    };

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            questionDeleteMu({
                variables: {
                    id,
                },
            });
    };

    const handleCreate = () => {
        if (!validate()) return;

        questionCreateMu({
            variables: {
                params: {
                    ...omits(next, ["categoryId" as any]),
                    productId: productId ? productId : undefined,
                },
            },
        });
    };

    useEffect(() => {
        setBoardData({
            files: question?.files || [],
            isOpen: !!question?.isOpen,
            title: question?.title,
            contents: question?.contents,
            categoryId: question?.category?._id,
        });
        setProductId(urlProductId || question?.product?._id || "");
    }, [question?._id]);

    return (
        <div>
            <BoardWrite
                className={urlProductId ? "boardWrite--categoryFix" : ""}
                categoryList={categoryList}
                WriteInjectionTop={
                    <div>
                        <div className="write_type">
                            <div className="title">문의타입</div>
                            <div className="input_form">
                                <input
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        setTarget(val as QuestionAS);
                                    }}
                                    type="radio"
                                    id="all"
                                    name="all"
                                    value={QuestionAS.NORMAL}
                                    checked={target === QuestionAS.NORMAL}
                                />
                                <label htmlFor="all">일반문의</label>
                                <input
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        setTarget(val as QuestionAS.PARTNER);
                                    }}
                                    type="radio"
                                    id="partner"
                                    name="partner"
                                    value={QuestionAS.PARTNER}
                                    checked={target === QuestionAS.PARTNER}
                                />
                                <label htmlFor="partner">파트너문의</label>
                            </div>
                        </div>
                    </div>
                }
                WriteInjection={
                    <div>
                        {isProductMode ? (
                            <div className="write_type">
                                <div className="title">상품명</div>
                                <div className="input_form">
                                    <input
                                        onFocus={openModal(
                                            "#ProductSelectModal"
                                        )}
                                        readOnly={!!urlProductName}
                                        id="title"
                                        value={productName}
                                        type="text"
                                        name="title"
                                        className="inputText w100"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div />
                        )}
                        {isLogin || (
                            <div>
                                <div className="write_type">
                                    <div className="title">패스워드</div>
                                    <div className="input_form">
                                        <input
                                            onChange={(e) => {
                                                const val =
                                                    e.currentTarget.value;
                                                setPassword(val);
                                            }}
                                            value={password}
                                            type="password"
                                            name="summary"
                                            className="inputText"
                                        />
                                    </div>
                                </div>
                                <div className="write_type">
                                    <div className="title">성함</div>
                                    <div className="input_form">
                                        <input
                                            onChange={(e) => {
                                                const val =
                                                    e.currentTarget.value;
                                                setName(val);
                                            }}
                                            value={name}
                                            type="text"
                                            name="summary"
                                            className="inputText"
                                        />
                                    </div>
                                </div>
                                <div className="write_type">
                                    <div className="title">연락처</div>
                                    <div className="input_form">
                                        <ThreePhoneNumberInput
                                            onChange={setPhoneNumber}
                                            value={phoneNumber}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                }
                boardHook={boardHook}
                key={loadKey + (question?._id || "") + productId}
                mode={mode}
                useTextarea
                onCancel={handleCancel}
                onCreate={handleCreate}
                onDelete={handleDelete}
                onEdit={handleUpdate}
                onSave={handleTempSave}
                onLoad={handleLoad}
                opens={{
                    category: true,
                    title: true,
                    files: true,
                }}
            />
            <ProductSelectModal
                id="ProductSelectModal"
                onSelect={(pd) => {
                    setProductId(pd._id);
                    setProductName(pd.title);
                    closeModal("#ProductSelectModal")();
                }}
            />
        </div>
    );
};

export default QuestionWrite;

import { NextRouter, useRouter } from "next/router";
import { BoardType, myBoardList_MyBoardList_data } from "../types/api";

export const boardTypeRedirection = (
    router: NextRouter,
    boardType: BoardType,
    id: string
) => {
    const isProduct = boardType === BoardType.PRODUCT;
    const isQuestion = boardType === BoardType.QUESTION;
    if (isProduct) router.push(`/tour/view/${id}`);
    if (isQuestion) router.push(`/member/question/view/${id}`);
};

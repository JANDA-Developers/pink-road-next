import {  MY_BOARD_LIST } from "../apollo/gql/board";
import { myBoardList, myBoardListVariables, myBoardList_MyBoardList_data, _BoardFilter, _BoardSort } from "../types/api";
import { generateListQueryHook } from "../utils/query";

export const useBoardFindByEmail = generateListQueryHook<_BoardFilter,_BoardSort,myBoardList,myBoardListVariables,myBoardList_MyBoardList_data>(MY_BOARD_LIST);

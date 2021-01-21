import {  BOARD_CONTROl_MASTER, MY_BOARD_LIST } from "../apollo/gql/board";
import { boardControlMaster, boardControlMasterVariables, myBoardList, myBoardListVariables, myBoardList_MyBoardList_data, _BoardFilter, _BoardSort } from "../types/api";
import { generateListQueryHook, generateMutationHook } from "../utils/query";

export const useMyBoardList = generateListQueryHook<_BoardFilter,_BoardSort,myBoardList,myBoardListVariables,myBoardList_MyBoardList_data>(MY_BOARD_LIST);
export const useBoardControl = generateMutationHook<boardControlMaster,boardControlMasterVariables>(BOARD_CONTROl_MASTER)
import { CategoryType, Fcategory, Fgroup, groupList_GroupList_data } from "../types/api";
import { cloneObject } from "./clone";

export const defaultCatsMap:Record<CategoryType, Fcategory[]> = {
  GUIDE_KEYWARD: [],
  QUESTION: [],
  QNA: [],
  TOUR: [],
  REGION: []
}

export const categoryMap = (catList:Fcategory[]) => {
  const catsMap = cloneObject(defaultCatsMap)

  catList.forEach(cat => {
     catsMap[cat.type]?.push(cat);
  })

  return catsMap;
}

export enum GroupTypes {
  Main1 = "Main1",
  Main2 = "Main2",
  tourMain1 = "tourMain1",
  tourMain2 = "tourMain2",
  guideMain1 = "guideMain1",
  guideMain2 = "guideMain2",
  guideMain3 = "guideMain3",
}

export const defaultGroupMap:Record<GroupTypes, string[]> = {
  Main1: [],
  Main2: [],
  tourMain1: [],
  tourMain2: [],
  guideMain1: [],
  guideMain2: [],
  guideMain3: [],
}

export const groupMap = (groupList:groupList_GroupList_data[]) => {
  const groupsMap = cloneObject(defaultGroupMap)

  groupList.forEach(group => {
    groupsMap[group.key as GroupTypes] = group.members;
  })

  return groupsMap;
}

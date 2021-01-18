import { CategoryType, Fcategory } from "../types/api";
import { cloneObject } from "./clone";

export const defaultCatsMap = {
  CUSTOMER_QNA: [],
  PORTPOLIO: [],
  QNA: [],
  EXPERIENCE: [],
  TOUR: []
}

export const categoryMap = (catList:Fcategory[]) => {
  const catsMap: Record<CategoryType, Fcategory[]> = cloneObject(defaultCatsMap)

  catList.forEach(cat => {
     catsMap[cat.type].push(cat);
  })

  return catsMap;
}
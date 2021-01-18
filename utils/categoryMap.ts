import { CategoryType, Fcategory } from "../types/api";

export const defaultCatsMap = {
  CUSTOMER_QNA: [],
  PORTPOLIO: [],
  QNA: [],
  EXPERIENCE: [],
  TOUR: []
}

export const categoryMap = (catList:Fcategory[]) => {
  const catsMap: Record<CategoryType, Fcategory[]> = defaultCatsMap

  catList.forEach(cat => {
    catsMap[cat.type].push(cat);
  })

  return catsMap;
}
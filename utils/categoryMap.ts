import { CategoryType, Fcategory } from "../types/api";


export const categoryMap = (catList:Fcategory[]) => {
  const catsMap: Record<CategoryType, Fcategory[]> = {
    CUSTOMER_QNA: [],
    PORTPOLIO: [],
    QNA: [],
    EXPERIENCE: [],
    TOUR: []
  }

  catList.forEach(cat => {
    catsMap[cat.type].push(cat);
  })

  return catsMap;
}
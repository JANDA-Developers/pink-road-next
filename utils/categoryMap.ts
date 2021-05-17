import { CategoryType, Fcategory } from "../types/api";
import { cloneObject } from "./clone";

export const defaultCatsMap: Record<CategoryType, Fcategory[]> = {
    QUESTION: [],
    PORTPOLIO: [],
    QNA: [],
    EXPERIENCE: [],
    TOUR: [],
    REGION: [],
    QNA_FOR_PARTNER: [],
    QUESTION_FOR_PARTNER: [],
};

export const categoryMap = (catList: Fcategory[]) => {
    const catsMap = cloneObject(defaultCatsMap);

    catList.forEach((cat) => {
        catsMap[cat.type]?.push(cat);
    });

    return catsMap;
};

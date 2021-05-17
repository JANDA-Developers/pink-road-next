import { _ProductFilter, _UserFilter } from "../types/api";

export const integratedProductSearch = (
    search?: string,
    filter?: _ProductFilter
): _ProductFilter => {
    return {
        ...filter,
        OR: search
            ? [
                  {
                      title_contains: search,
                  },
                  {
                      subTitle_contains: search,
                  },
                  {
                      keyWards_in: [search],
                  },
              ]
            : undefined,
    };
};

//a
export const createOrSearch = <T>(keys: (keyof T)[], search: string) => {
    const filter = keys.map((key) => ({
        [key]: (key as string).includes("_in") ? [search] : search,
    }));
    const result = search ? filter : undefined;

    return result;
};

export const integratedUserSearch = (
    search?: string,
    filter?: _UserFilter
): _UserFilter => {
    return {
        ...filter,
        OR: search
            ? [
                  {
                      nickName_contains: search,
                  },
                  {
                      name_contains: search,
                  },
                  {
                      keywards_in: [search],
                  },
              ]
            : undefined,
    };
};

//a

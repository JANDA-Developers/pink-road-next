export const randomInteger = (max: number, min = 0) =>
    Math.floor(Math.random() * (max + 1 - min) + min);

const genCode = (d: number) =>
    Math.random().toString(36).substr(2, d).toUpperCase();

const numTo36str = (n: number) => n.toString(36).toUpperCase();

const charSum = (v: string) =>
    [...v].map((v) => v.charCodeAt(0)).reduce((a, b) => a + b);

export const generateRandomStringCode = (
    digits = 6,
    ableToValidate = false
) => {
    if (ableToValidate) {
        const tempCode = genCode(digits - 2);
        const charCodeSum = numTo36str(charSum(tempCode));
        return charCodeSum + tempCode;
    }
    return genCode(digits);
};

export const validateCode = (code: string) => {
    const digits = code.length;
    const headerSum = parseInt(code.substr(0, 2), 36);
    const bodySum = charSum(code.substr(2, digits));
    return headerSum === bodySum;
};

export const binarySearchForObject = <T, S = any>(
    sortedArray: T[],
    seekElement: S,
    searchValueFunc: (
        element: T,
        seekElement: S,
        middleIndex: number,
        originArr: T[]
    ) => boolean,
    compareFunc: (
        element: T,
        seekElement: S,
        middleIndex: number,
        originArr: T[]
    ) => boolean
) => {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex =
            startIndex + Math.floor((endIndex - startIndex) / 2);
        if (
            searchValueFunc(
                sortedArray[middleIndex],
                seekElement,
                middleIndex,
                sortedArray
            )
        ) {
            return middleIndex;
        }
        if (
            compareFunc(
                sortedArray[middleIndex],
                seekElement,
                middleIndex,
                sortedArray
            )
        ) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }

    return -1;
};

export const arrayTypeGuart = <T>(
    errors: any[],
    validator: (args?: any) => boolean
): errors is T[] => {
    const temp = errors.every((a) => {
        return validator(a);
    });
    return temp;
};

export const getByteLength = (s: string): number => {
    let b = 0;
    let c = 0;
    let i = 0;
    for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
    return b;
};

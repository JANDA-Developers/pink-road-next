export const enumToArray = (enumm: any) => {
    return Object.keys(enumm)
        .map(key => enumm[key]);
}
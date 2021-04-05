export const cutStr = (str:string, len:number, tail:string = "...") => {
    if(str.length > len) {
        return str.substr(0,len) + tail;
    }
    return str
}
type Toption = {
    size?: "thumb" | "large"
}

export const callResized = (src:string, option?:Toption) =>  {
    const useResizeImgae = process.env.NEXT_PUBLIC_USE_RESIZE === "T";
    let resized = src;

    if(!useResizeImgae) return src;
    //스토리지 네임 변경
    resized = src.replace(process.env.NEXT_PUBLIC_S3_STROAGE,"janda-resize-image-bucket")
    resized = src.replace("amazonaws.com/",`amazonaws.com/${process.env.NEXT_PUBLIC_S3_STROAGE}/` + option.size)

    return resized;
} 





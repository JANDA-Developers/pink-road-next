import $ from "jquery";

export const closeModal = (selecter:string) => () => {
    $(selecter).css("display","none");
}

export const openModal = (selecter:string) => ()=> {
    console.log({selecter});
    console.log($("#BookingModal"));
    $(selecter).css("display","flex");
}


export const openModalTimeSet = (selecter:string, time:number = 300) => {
    setTimeout(()=>{
        $(selecter).css("display","flex");
    },time)
}

    
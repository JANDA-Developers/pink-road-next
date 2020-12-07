import $ from "jquery";

    export const closeModal = (selecter:string) => () => {
        $(selecter).css("display","none");
    }

    export const openModal = (selecter:string) => ()=> {
        $(selecter).css("display","flex");
    }
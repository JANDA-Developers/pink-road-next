import $ from "jquery";

    export const closeModal = (selecter:string) => () => {
        $(selecter).css("display","none");
        $(selecter + " + .fade").css("display","none");
    }

    export const openModal = (selecter:string) => ()=> {
        $(selecter).css("display","block");
        $( selecter + " + .fade").css("display","block");
    }
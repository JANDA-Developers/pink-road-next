import $ from "jquery";

    export const closeModal = (className) => () => {
        $(`.${className}`).css("display","none");
        $(".fade").css("display","none");
    }

    export const openModal = (className) => ()=> {
        $(`.${className}`).css("display","block");
        $(".fade").css("display","block");
    }
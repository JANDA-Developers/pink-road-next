import $ from "jquery";

export const closeModal = (selecter: string) => () => {
    $(selecter).css("display", "none");
};

export const openModal = (selecter: string, echo?: boolean) => () => {
    $(selecter).css("display", "flex");
    if (echo) {
        return;
    }
    openModal(selecter, true);
};

export const openModalTimeSet = (selecter: string, time: number = 300) => {
    setTimeout(() => {
        $(selecter).css("display", "flex");
    }, time);
};

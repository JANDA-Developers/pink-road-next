import dayjs from "dayjs";

export const weekOf = (date?: Date | null) =>
    date ? dayjs(date).format("dd") : "";
export const yyyymmdd = (date?: Date | null) =>
    date ? dayjs(date).format("YYYY.MM.DD") : "";
export const yyyymmddHHmm = (date?: Date | null) =>
    date ? dayjs(date).format("YYYY.MM.DD HH:mm") : "";

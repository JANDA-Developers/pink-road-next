import dayjs from "dayjs";

export const yyyymmdd = (date?:Date | null) => date ? dayjs(date).format("YYYY.MM.DD") : "";

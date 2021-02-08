import dayjs from "dayjs";

export const todayIn = (start:Date,end:Date) => dayjs(start).isBefore(new Date()) && dayjs(end).isAfter(new Date())
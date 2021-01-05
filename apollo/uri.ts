
const END_POINT = "http://its.api.stayjanda.cloud:4000/graphql" + "/graphql";
export const SERVER_URI: string = END_POINT || "";

// 개발: http://3.35.164.252:4000/graphql
// 프로덕트-잇츠: http://its.api.stayjanda.cloud:4000/graphql

export default (() => {
    return SERVER_URI;
})();
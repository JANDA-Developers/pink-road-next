const PROD = "https://api.itsguide.co.kr";
const LOCAL = "http://localhost:4000";
export const SERVER = PROD;

const END_POINT = PROD + "/graphql";
export const SERVER_URI: string = END_POINT || "";

export default (() => {
    return SERVER_URI;
})();
const LOCAL = "http://localhost:4000"; 
const PROD = "http://13.209.234.84:4000"; 
const DEV = "http://3.35.164.252:4000";
 
export const SEVER = PROD;
export const END_POINT = SEVER + "/graphql";
export const SERVER_URI: string = END_POINT || "";

export default (() => {
    return SERVER_URI;
})();
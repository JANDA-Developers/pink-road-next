const LOCAL = "http://localhost:4000";
const PROD = "https://pink.stayjanda.cloud";
const DEV = "http://3.35.164.252:4000";

<<<<<<< HEAD
export const SEVER = process.env.NODE_ENV === "production" ? LOCAL : LOCAL;
=======
export const SEVER = process.env.NODE_ENV === "production" ? PROD : PROD;
>>>>>>> origin/design
export const END_POINT = SEVER + "/graphql";
export const SERVER_URI: string = END_POINT || "";

export default (() => {
    return SERVER_URI;
})();

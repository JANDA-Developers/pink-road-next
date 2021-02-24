<<<<<<< HEAD
const PROD = "https://api.itsguide.co.kr";
=======
const PROD = "http://api.itsguide.co.kr";
>>>>>>> origin/잇츠가이드-디자인
const LOCAL = "http://localhost:4000";

export const SERVER = PROD;

const END_POINT = PROD + "/graphql";
export const SERVER_URI: string = END_POINT || "";


export default (() => {
    return SERVER_URI;
})();
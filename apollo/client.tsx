import { ApolloClient, from } from "@apollo/client";
import uri from "./uri";
import cache from "./cache";
import { createUploadLink } from "apollo-upload-client";


export function getCookie(name: string) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

export function eraseCookie(name: string) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

const getCookieToken = () => {
  const cookieToken = getCookie("jwt")
  if (cookieToken) {
    window.localStorage.setItem("jwt", cookieToken);
    eraseCookie("jwt")
  }
}

const getToken = () => {
  if (typeof window === "undefined") {
    return ""
  } else {
    getCookieToken();
    return window.localStorage.getItem("jwt")
  }
}
const headers = {
  "Authorization": "Bearer " + getToken()
}

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, locations, path }) => {
//       console.error(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       );
//     });
//   } else if (networkError) {
//     console.error("서버가 응답하지 않습니다.");
//   }
// });

const fileUploadLink = createUploadLink({
  uri,
  headers
});

export const PinkClient = new ApolloClient({
  link: from([fileUploadLink]),
  cache
});

export default PinkClient;
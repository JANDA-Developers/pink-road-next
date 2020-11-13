import { ApolloClient, from } from "@apollo/client";
import uri from "./uri";
import cache from "./cache";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

const headers = {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluQG5hdmVyLmNvbSIsImlhdCI6MTYwNDkwMjIzMX0.Akxsuj1uVGgqqiSjC8O8WOQ5gOATTSyssIa6VSiqei0"
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
  headers,
  credentials: "include",
});


export const PinkClient = new ApolloClient({
  link: from([fileUploadLink]),
  uri,
  cache,
  headers,
  credentials: "include"
});

export default PinkClient;
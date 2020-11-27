export const SERVER_URI =
  "http://10.159.6.11:4000/graphql"

export default (() => {
  return SERVER_URI;
})();




// import { gql, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// import fetch from 'isomorphic-unfetch';
// import { GetServerSideProps } from 'next';

// export const getApolloClient = () => {
//   const isLocalHost = process.env.NOW_URL?.includes('localhost');
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: `http${isLocalHost ? '' : 's'}://${process.env.NOW_URL}/api/graphql`,
//       fetch,
//     }),
//   });
// };

// const TRANSACTIONS_BY_PRODUCT_ID_QUERY = gql`
//   query TRANSACTIONS_BY_PRODUCT_ID_QUERY($product_id: String!) {
//     transactionsByProductId(productId: $product_id) {
//       id
//       bitcoinAddress
//       blockchainTxId
//       invoice {
//         status
//       }
//     }
//   }
// `;
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const apolloClient = getApolloClient();
//   const { id } = params;
//   const { data } = await apolloClient.query({
//     query: TRANSACTIONS_BY_PRODUCT_ID_QUERY,
//     variables: { product_id: id },
//   });
//   const transactions: Transaction[] = data.transactionsByProductId;
//   return { props: { transactions } };
// };
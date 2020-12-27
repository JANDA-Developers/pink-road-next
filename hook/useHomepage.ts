import { GraphQLClient } from "graphql-request";
import { HOMEPAGE, HOMEPAGE_UPDATE } from "../apollo/gql/homepage";
import { SERVER_URI } from "../apollo/uri";
import { Fhomepage, homepage, homepageUpdate, homepageUpdateVariables } from "../types/api";
import { getRefetch,} from "../utils/api";
import { generateFindQuery, generateMutationHook } from "../utils/query";

export const useHomepage = generateFindQuery<homepageUpdate,homepageUpdateVariables,Fhomepage>(null, HOMEPAGE);
export const useHomepageUpdate = generateMutationHook<homepageUpdate,homepageUpdateVariables>(HOMEPAGE_UPDATE, {
    ...getRefetch(HOMEPAGE)
});

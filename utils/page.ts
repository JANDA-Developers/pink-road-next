import { GraphQLClient } from "graphql-request";
import { HOMEPAGE } from "../apollo/gql/homepage";
import { SERVER_URI } from "../apollo/uri";
import { usePageInfo } from "../hook/usePageInfo";
import { Fhomepage, Fpage, homepage } from "../types/api"
import { TPageKeys } from "../types/interface";
import { Page } from "./generateClientPaging";

export const getQueryIndex = (inPageIndex: number, pageInfo: Fpage) => {
    const { remainder, cntPerPage, totalPageSize } = pageInfo;
    const diff = cntPerPage - remainder;
    const inPageReverse = cntPerPage - inPageIndex;
    return ((pageInfo.totalPageSize - 2) * pageInfo.cntPerPage) + inPageReverse + diff;
}

export const useHomepageServerSide = async () => {
    const graphQLClient = new GraphQLClient(SERVER_URI, {
        credentials: 'include',
        mode: 'cors',
        cache: "reload",
    })

<<<<<<< HEAD
    const {Homepage:{data}} = await graphQLClient.request<homepage>(HOMEPAGE)
    if(!data) throw Error("homepage is not exsist");
    return { data };
}

export const getStaticPageInfo = (key:TPageKeys, defaultPageInfo:any) => async () => {
=======
    const defaultHomePage = {
        PrivacyPolicy: "",
        __typename: "Homepage",
        blacklist: [],
        logi: "",
        loginOutRedirect: "",
        loginRedirect: "",
        marketingPolic: "",
        partnerBpolicy: "",
        partnerPolicy: "",
        signUpRedirect: "",
        siteDesc: "",
        siteKeyWards: "",
        siteName: "",
        thirdPolicy: "",
        travelerPolicy: "",
        usePolicy: ""
    }

    const { Homepage: { data = defaultHomePage } } = await graphQLClient.request<homepage>(HOMEPAGE)
    console.log(data);
    return { data };
}

export const getStaticPageInfo = (key: TPageKeys) => async () => {
>>>>>>> origin/design
    const { data } = await usePageInfo(key);
    const { data: homepage } = await useHomepageServerSide();
    return {
        revalidate: 1,
        props: {
            defaultPageInfo,
            pageKey: key,
            pageInfo: data?.value || "",
            homepage
        }, // will be passed to the page component as props
    }
}


export const getHomepage = async () => {
    const homepage = await useHomepageServerSide();
    return {
        revalidate: 10,
        props: {
            homepage: homepage.data
        }, // will be passed to the page component as props
    }
}

export type TGetHomepage = {
    homepage: Fhomepage
}
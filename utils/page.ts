import { GraphQLClient } from "graphql-request";
import { GetServerSideProps, GetStaticProps } from "next";
import { HOMEPAGE } from "../apollo/gql/homepage";
import { SERVER_URI } from "../apollo/uri";
import { usePageInfo } from "../hook/usePageInfo";
import { Fhomepage, Fpage, homepage } from "../types/api";
import { TPageKeys } from "../types/interface";
import { Page } from "./generateClientPaging";

export const getQueryIndex = (
    inPageIndex: number,
    pageInfo: Fpage | Page,
    currentPageCnt: number
) => {
    const { cntPerPage, page, totalPageSize } = pageInfo;
    let pageStartNumber = (totalPageSize - page) * pageInfo.cntPerPage;
    if (pageStartNumber < 0) {
        pageStartNumber = 0;
    }
    const reverseIndex = inPageIndex - currentPageCnt;
    return pageStartNumber + reverseIndex * -1;
};

const graphQLClient = new GraphQLClient(SERVER_URI, {
    credentials: "include",
    mode: "cors",
    cache: "reload",
});

export const useHomepageServerSide = async () => {
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
        usePolicy: "",
    };

    const {
        Homepage: { data = defaultHomePage },
    } = await graphQLClient.request<homepage>(HOMEPAGE);
    return { data };
};

export const getStaticPageInfo = (
    key: TPageKeys
): GetStaticProps => async () => {
    const { data } = await usePageInfo(key);
    const { data: homepage } = await useHomepageServerSide();

    return {
        revalidate: 1,
        props: {
            pageKey: key,
            pageInfo: data?.value || {},
            homepage,
        }, // will be passed to the page component as props
    };
};

export interface Ipage {
    pageKey: TPageKeys;
    pageInfo: any;
}

export const getHomepage: GetServerSideProps<TGetHomepage> = async () => {
    const homepage = await useHomepageServerSide();
    return {
        revalidate: 10,
        props: {
            homepage: homepage.data as Fhomepage,
        }, // will be passed to the page component as props
    };
};

export type TGetHomepage = {
    homepage: Fhomepage;
};

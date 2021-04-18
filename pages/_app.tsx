import React, { useEffect, useState } from 'react';
import 'css/all.css';
import "dayjs/locale/ko"
import dayjs from 'dayjs';
import Layout from '../layout/Layout';
import { ApolloProvider, useQuery } from '@apollo/client';
import { getContext_GetProfile_data as IProfile, categoryList_CategoryList_data, getContext, UserRole, Fhomepage, Fcategory, CategoryType } from 'types/api';
import PinkClient from "apollo/client"
import { ALLOW_ADMINS, ALLOW_FULLESS, ALLOW_LOGINED, ALLOW_SELLERS } from '../types/const';
import { GET_CONTEXT } from '../apollo/gql/queries';
import PageDeny from './Deny';
import { categoryMap, defaultCatsMap } from '../utils/categoryMap';
import { Router, useRouter } from 'next/router';
import PageLoading from './Loading';
import { arrayEquals } from '../utils/filter';
import "slick-carousel/slick/slick.css";
import useRouterScroll from '../hook/useRouterScroll';
import { pageLoadingEffect } from '../utils/query';



Router.events.on('routeChangeStart', () => { pageLoadingEffect(true) });
Router.events.on('routeChangeComplete', () => { pageLoadingEffect(false) });
Router.events.on('routeChangeError', () => { pageLoadingEffect(false) });


dayjs.locale('ko')

export type TContext = {
  categories: categoryList_CategoryList_data[]
  role: UserRole
  isAdmin: boolean,
  isSeller: boolean,
  isManager: boolean,
  myProfile?: IProfile
  isLogin?: boolean;
  isParterB?: boolean;
  homepage?: Fhomepage;
  isParterNonB?: boolean;
  categoriesMap: Record<CategoryType, Fcategory[]>
  productGroupList: TProductGrop[]
}


export type TProductGrop = {
  _id: string;
  label: string;
  groupCode: string;
}

const defaultContext: TContext = {
  categories: [],
  role: UserRole.anonymous,
  isAdmin: false,
  isManager: false,
  isSeller: false,
  myProfile: undefined,
  homepage: undefined,
  isLogin: false,
  isParterB: false,
  isParterNonB: false,
  categoriesMap: defaultCatsMap,
  productGroupList: []
}

export const AppContext = React.createContext<TContext>(defaultContext);

//APp파일은 서버사이드 렌더링만함
function App({ Component, pageProps }: any) {
  const [editMode, setEditMode] = useState(false);
  const router = useRouter()

  useRouterScroll();

  const ComponentLayout = Component.Layout ? Component.Layout : Layout;
  const ComponentAuth = Component.Auth ? Component.Auth : ALLOW_FULLESS;

  const { data, loading } = useQuery<getContext>(GET_CONTEXT, {
    client: PinkClient,
    nextFetchPolicy: "cache-first"
  })

  const homepage = data?.Homepage.data || undefined;
  const catList = data?.CategoryList?.data || []
  const myProfile = data?.GetProfile?.data || undefined
  const role: UserRole = myProfile?.role || UserRole.anonymous
  const productList = data?.GetProfile.data?.products.map(p => ({
    _id: p._id,
    label: p.title,
    groupCode: p.groupCode
  }))

  const productGroupList: {
    _id: string;
    label: string;
    groupCode: string;
  }[] = [];

  productList?.forEach((p) => {
    if (!productGroupList.find(g => g.groupCode === p.groupCode)) {
      productGroupList.push({
        ...p,
      })
    }
  })

  const isSeller = [UserRole.partner, UserRole.partnerB, UserRole.manager, UserRole.admin].includes(role);
  const isParterB = [UserRole.partnerB, UserRole.manager, UserRole.admin].includes(role);
  const isParterNonB = [UserRole.partner, UserRole.manager, UserRole.admin].includes(role);
  {/* <DaumPostcode autoResize autoClose onSearch={() => { }} onComplete={(asd) => { }} /> */ }

  const catsMap = categoryMap(catList);

  if (data) {
    const error = data.GetProfile.error
  }


  if (!ComponentAuth.includes(role || null) && !loading) {
    if (arrayEquals(ComponentAuth, ALLOW_LOGINED)) {
      if (loading) return;
      Component = () => <PageDeny redirect="/login" msg="해당 페이지는 로그인후 이용 가능합니다." />
      return <Component />;
    } else {
      if (loading) return;
      Component = () => <PageDeny />
    }
  }

  if (
    //인증 받지 않았으며 일반 권한은 아닌경우
    ALLOW_SELLERS.includes(role) &&
    !myProfile?.isVerifiedManager &&
    !ComponentAuth.includes(UserRole.anonymous) &&
    !ComponentAuth.includes(UserRole.individual)
  ) {
    Component = () => <PageDeny msg="인증되지 않은 판매자 입니다. 인증 소요시간은 평균 24시간 입니다." />
  }

  if (router.isFallback) {
    return <div></div>
  }

  if (loading) return <PageLoading />
  return (
    <div className="App">
      <div id="MuPageLoading" className="muPageLoading" />

      <ApolloProvider client={PinkClient}>
        <AppContext.Provider value={{
          categoriesMap: catsMap,
          categories: catList || [],
          role,
          myProfile,
          isSeller,
          isParterB,
          isAdmin: role === UserRole.admin,
          isManager: ALLOW_ADMINS.includes(role),
          isLogin: !!myProfile,
          isParterNonB,
          homepage,
          productGroupList,
        }}>
          <ComponentLayout>
            <Component {...pageProps} />
          </ComponentLayout>
        </AppContext.Provider>
      </ApolloProvider>
      <div id="portal" />
    </div>
  );
}

export default App;
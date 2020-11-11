import React, { useState } from 'react';
import 'css/all.css';
import Layout from '../layout/Layout';
import { ApolloProvider, useMutation, useQuery } from '@apollo/client';
import { categoryList, getContext_GetProfile_data as IProfile, categoryList_CategoryList_data, pageInfoCreate, pageInfoCreateVariables, pageInfoUpdate, pageInfoUpdateVariables, getContext, UserRole } from 'types/api';
import { CATEGORY_LIST, GET_CONTEXT, PAGE_INFO_READ } from 'apollo/queries';
import PinkClient from "apollo/client"
import { ISet } from 'types/interface';
import { PAGE_INFO_CREATE, PAGE_INFO_UPDATE } from 'apollo/mutations';

export type TContext = {
  editMode: boolean;
  setEditMode: ISet<boolean>;
  submitEdit?: (pageKey: string, data: any) => void;
  categories: categoryList_CategoryList_data[]
  role: UserRole
  myProfile?: IProfile
}

const defaultContext: TContext = {
  editMode: false,
  setEditMode: () => { },
  categories: [],
  role: UserRole.anonymous,
  submitEdit: undefined,
  myProfile: undefined
}

export const AppContext = React.createContext<TContext>(defaultContext);

function App({ Component, pageProps }) {

  const [pageInfoCreateMu, { loading: pageInfoCreateLoading }] = useMutation<pageInfoCreate, pageInfoCreateVariables>(PAGE_INFO_CREATE, {
    client: PinkClient
  })
  const [pageInfoUpdateMu, { loading: pageInfoUpdateLoading }] = useMutation<pageInfoUpdate, pageInfoUpdateVariables>(PAGE_INFO_UPDATE, {
    client: PinkClient
  })
  const { data } = useQuery<getContext>(GET_CONTEXT, {
    client: PinkClient
  })

  const catList = data?.CategoryList?.data || []
  const myProfile = data?.GetProfile?.data || undefined
  const role: UserRole = myProfile?.role || UserRole.anonymous

  const submitEdit = (key: string, value: any) => {
    const params = {
      key,
      value
    };
    pageInfoCreateMu({
      variables: {
        params
      }
    }).then((data) => {
      console.log(data)
      pageInfoUpdateMu({
        variables: {
          key,
          params: {
            key,
            value
          }
        }
      })
    })
  }

  const [editMode, setEditMode] = useState<boolean>(false);
  {/* <DaumPostcode autoResize autoClose onSearch={() => { }} onComplete={(asd) => { }} /> */ }

  return (
    <div className="App">
      <ApolloProvider client={PinkClient}>
        <AppContext.Provider value={{
          editMode,
          setEditMode,
          submitEdit,
          categories: catList || [],
          role,
          myProfile
        }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;
import { ISet } from '@janda-com/front/dist/types/interface';
import React, { useState } from 'react';
import 'css/all.css';
import Layout from '../layout/Layout';
import { ApolloProvider, useQuery } from '@apollo/client';
import { categoryList, categoryList_CategoryList_data } from 'types/api';
import { CATEGORY_LIST } from 'apollo/queries';
import PinkClient from "apollo/client"

export type TContext = {
  editMode: boolean;
  setEditMode: ISet<boolean>;
  submitEdit?: (pageKey: string, data: any) => void;
  categories: categoryList_CategoryList_data[]
}

const defaultContext: TContext = {
  editMode: false,
  setEditMode: () => { },
  submitEdit: undefined,
  categories: []
}

export const AppContext = React.createContext<TContext>(defaultContext);

function App({ Component, pageProps }) {

  const { data, loading } = useQuery<categoryList>(CATEGORY_LIST, {
    client: PinkClient
  })

  const submitEdit = (pageKey: string, data: any) => {
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
          categories: data?.CategoryList?.data || []
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
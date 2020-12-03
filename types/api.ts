/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryCreate
// ====================================================

export interface categoryCreate_CategoryCreate_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
}

export interface categoryCreate_CategoryCreate {
  __typename: "CategoryCreateResponse";
  ok: boolean;
  error: string | null;
  data: categoryCreate_CategoryCreate_data | null;
}

export interface categoryCreate {
  CategoryCreate: categoryCreate_CategoryCreate;
}

export interface categoryCreateVariables {
  params: CategoryCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: pcategoryCreate
// ====================================================

export interface pcategoryCreate_pCategoryCreate {
  __typename: "pCategoryCreateResponse";
  ok: boolean;
  error: string | null;
}

export interface pcategoryCreate {
  pCategoryCreate: pcategoryCreate_pCategoryCreate;
}

export interface pcategoryCreateVariables {
  params: pCategoryCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: pcategoryDelete
// ====================================================

export interface pcategoryDelete_pCategoryDelete {
  __typename: "pCategoryDeleteResponse";
  ok: boolean;
  error: string | null;
}

export interface pcategoryDelete {
  pCategoryDelete: pcategoryDelete_pCategoryDelete;
}

export interface pcategoryDeleteVariables {
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: pcategoryUpdate
// ====================================================

export interface pcategoryUpdate_pCategoryUpdate {
  __typename: "pCategoryUpdateResponse";
  ok: boolean;
  error: string | null;
}

export interface pcategoryUpdate {
  pCategoryUpdate: pcategoryUpdate_pCategoryUpdate;
}

export interface pcategoryUpdateVariables {
  params: pCategoryUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryDelete
// ====================================================

export interface categoryDelete_CategoryDelete_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
}

export interface categoryDelete_CategoryDelete {
  __typename: "CategoryDeleteResponse";
  ok: boolean;
  error: string | null;
  data: categoryDelete_CategoryDelete_data | null;
}

export interface categoryDelete {
  CategoryDelete: categoryDelete_CategoryDelete;
}

export interface categoryDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: multiUpload
// ====================================================

export interface multiUpload_MultiUpload_data {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface multiUpload_MultiUpload {
  __typename: "FileUploadsResponse";
  ok: boolean;
  error: string | null;
  data: multiUpload_MultiUpload_data[];
}

export interface multiUpload {
  MultiUpload: multiUpload_MultiUpload;
}

export interface multiUploadVariables {
  file: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUp
// ====================================================

export interface signUp_SignUp_data {
  __typename: "SignUpResult";
  email: string;
}

export interface signUp_SignUp {
  __typename: "SignUpResponse";
  ok: boolean;
  error: string | null;
  data: signUp_SignUp_data | null;
}

export interface signUp {
  SignUp: signUp_SignUp;
}

export interface signUpVariables {
  data: AddUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signInGoogle
// ====================================================

export interface signInGoogle_SignInGoogle_data {
  __typename: "SignInGoogle";
  email: string;
  token: string;
}

export interface signInGoogle_SignInGoogle {
  __typename: "SignInGoogleResponse";
  ok: boolean;
  error: string | null;
  data: signInGoogle_SignInGoogle_data | null;
}

export interface signInGoogle {
  SignInGoogle: signInGoogle_SignInGoogle;
}

export interface signInGoogleVariables {
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: pageInfoCreate
// ====================================================

export interface pageInfoCreate_PageInfoCreate {
  __typename: "PageInfoCreateResponse";
  ok: boolean;
  error: string | null;
}

export interface pageInfoCreate {
  PageInfoCreate: pageInfoCreate_PageInfoCreate;
}

export interface pageInfoCreateVariables {
  params: PageInfoCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignInGoogle
// ====================================================

export interface SignInGoogle_SignInGoogle_data {
  __typename: "SignInGoogle";
  token: string;
  email: string;
}

export interface SignInGoogle_SignInGoogle {
  __typename: "SignInGoogleResponse";
  ok: boolean;
  error: string | null;
  data: SignInGoogle_SignInGoogle_data | null;
}

export interface SignInGoogle {
  SignInGoogle: SignInGoogle_SignInGoogle;
}

export interface SignInGoogleVariables {
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignInKakao
// ====================================================

export interface SignInKakao_SignInKakao_data {
  __typename: "SignInKakao";
  token: string;
  email: string;
}

export interface SignInKakao_SignInKakao {
  __typename: "SignInKakaoResponse";
  ok: boolean;
  error: string | null;
  data: SignInKakao_SignInKakao_data | null;
}

export interface SignInKakao {
  SignInKakao: SignInKakao_SignInKakao;
}

export interface SignInKakaoVariables {
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: pageInfoDelete
// ====================================================

export interface pageInfoDelete_PageInfoDelete_data {
  __typename: "PageInfo";
  _id: string;
  updatedAt: any;
  isDelete: boolean;
  key: string;
  value: any;
}

export interface pageInfoDelete_PageInfoDelete {
  __typename: "PageInfoDeleteResponse";
  ok: boolean;
  error: string | null;
  data: pageInfoDelete_PageInfoDelete_data | null;
}

export interface pageInfoDelete {
  PageInfoDelete: pageInfoDelete_PageInfoDelete;
}

export interface pageInfoDeleteVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: pageInfoUpdate
// ====================================================

export interface pageInfoUpdate_PageInfoUpdate_data {
  __typename: "PageInfo";
  _id: string;
  updatedAt: any;
  isDelete: boolean;
  key: string;
  value: any;
}

export interface pageInfoUpdate_PageInfoUpdate {
  __typename: "PageInfoUpdateResponse";
  ok: boolean;
  error: string | null;
  data: pageInfoUpdate_PageInfoUpdate_data | null;
}

export interface pageInfoUpdate {
  PageInfoUpdate: pageInfoUpdate_PageInfoUpdate;
}

export interface pageInfoUpdateVariables {
  params: PageInfoUpdateInput;
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: newsFindById
// ====================================================

export interface newsFindById_NewsFindById_data_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface newsFindById_NewsFindById_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsFindById_NewsFindById_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsFindById_NewsFindById_data {
  __typename: "News";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: newsFindById_NewsFindById_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: newsFindById_NewsFindById_data_attachFiles[] | null;
  thumb: newsFindById_NewsFindById_data_thumb | null;
  viewCount: number;
  type: NEWS_TYPE;
}

export interface newsFindById_NewsFindById {
  __typename: "NewsFindByIdResponse";
  ok: boolean;
  error: string | null;
  data: newsFindById_NewsFindById_data | null;
}

export interface newsFindById {
  NewsFindById: newsFindById_NewsFindById;
}

export interface newsFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: newsList
// ====================================================

export interface newsList_NewsList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
}

export interface newsList_NewsList_data_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface newsList_NewsList_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsList_NewsList_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsList_NewsList_data {
  __typename: "News";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: newsList_NewsList_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: newsList_NewsList_data_attachFiles[] | null;
  thumb: newsList_NewsList_data_thumb | null;
  viewCount: number;
  type: NEWS_TYPE;
}

export interface newsList_NewsList {
  __typename: "NewsListResponse";
  ok: boolean;
  error: string | null;
  page: newsList_NewsList_page;
  data: newsList_NewsList_data[];
}

export interface newsList {
  NewsList: newsList_NewsList;
}

export interface newsListVariables {
  sort?: _NewsSort[] | null;
  filter?: _NewsFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: newsCreate
// ====================================================

export interface newsCreate_NewsCreate_data {
  __typename: "News";
  _id: string;
}

export interface newsCreate_NewsCreate {
  __typename: "NewsCreateResponse";
  ok: boolean;
  error: string | null;
  data: newsCreate_NewsCreate_data | null;
}

export interface newsCreate {
  NewsCreate: newsCreate_NewsCreate;
}

export interface newsCreateVariables {
  params: NewsCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: newsDelete
// ====================================================

export interface newsDelete_NewsDelete {
  __typename: "NewsDeleteResponse";
  ok: boolean;
  error: string | null;
}

export interface newsDelete {
  NewsDelete: newsDelete_NewsDelete;
}

export interface newsDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: newsUpdate
// ====================================================

export interface newsUpdate_NewsUpdate_data {
  __typename: "News";
  _id: string;
}

export interface newsUpdate_NewsUpdate {
  __typename: "NewsUpdateResponse";
  ok: boolean;
  error: string | null;
  data: newsUpdate_NewsUpdate_data | null;
}

export interface newsUpdate {
  NewsUpdate: newsUpdate_NewsUpdate;
}

export interface newsUpdateVariables {
  params: NewsUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: portfolioFindById
// ====================================================

export interface portfolioFindById_PortfolioFindById_data_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface portfolioFindById_PortfolioFindById_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioFindById_PortfolioFindById_data_pCategory {
  __typename: "pCategory";
  _id: string;
  label: string;
}

export interface portfolioFindById_PortfolioFindById_data {
  __typename: "Portfolio";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  isOpen: boolean | null;
  keyWards: string[] | null;
  summary: string | null;
  subTitle: string | null;
  contents: string;
  author: portfolioFindById_PortfolioFindById_data_author | null;
  thumb: portfolioFindById_PortfolioFindById_data_thumb | null;
  pCategory: portfolioFindById_PortfolioFindById_data_pCategory | null;
}

export interface portfolioFindById_PortfolioFindById {
  __typename: "PortfolioFindByIdResponse";
  ok: boolean;
  error: string | null;
  data: portfolioFindById_PortfolioFindById_data | null;
}

export interface portfolioFindById {
  PortfolioFindById: portfolioFindById_PortfolioFindById;
}

export interface portfolioFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: portfolioList
// ====================================================

export interface portfolioList_PortfolioList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
}

export interface portfolioList_PortfolioList_data_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface portfolioList_PortfolioList_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioList_PortfolioList_data_pCategory {
  __typename: "pCategory";
  _id: string;
  label: string;
}

export interface portfolioList_PortfolioList_data {
  __typename: "Portfolio";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  isOpen: boolean | null;
  keyWards: string[] | null;
  summary: string | null;
  subTitle: string | null;
  contents: string;
  author: portfolioList_PortfolioList_data_author | null;
  thumb: portfolioList_PortfolioList_data_thumb | null;
  pCategory: portfolioList_PortfolioList_data_pCategory | null;
}

export interface portfolioList_PortfolioList {
  __typename: "PortfolioListResponse";
  ok: boolean;
  error: string | null;
  page: portfolioList_PortfolioList_page;
  data: portfolioList_PortfolioList_data[];
}

export interface portfolioList {
  PortfolioList: portfolioList_PortfolioList;
}

export interface portfolioListVariables {
  sort?: _PortfolioSort[] | null;
  filter?: _PortfolioFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: portfolioCreate
// ====================================================

export interface portfolioCreate_PortfolioCreate_data {
  __typename: "Portfolio";
  _id: string;
}

export interface portfolioCreate_PortfolioCreate {
  __typename: "PortfolioCreateResponse";
  ok: boolean;
  error: string | null;
  data: portfolioCreate_PortfolioCreate_data | null;
}

export interface portfolioCreate {
  PortfolioCreate: portfolioCreate_PortfolioCreate;
}

export interface portfolioCreateVariables {
  params: PortfolioCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: portfolioDelete
// ====================================================

export interface portfolioDelete_PortfolioDelete {
  __typename: "PortfolioDeleteResponse";
  ok: boolean;
  error: string | null;
}

export interface portfolioDelete {
  PortfolioDelete: portfolioDelete_PortfolioDelete;
}

export interface portfolioDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: portfolioUpdate
// ====================================================

export interface portfolioUpdate_PortfolioUpdate_data {
  __typename: "Portfolio";
  _id: string;
}

export interface portfolioUpdate_PortfolioUpdate {
  __typename: "PortfolioUpdateResponse";
  ok: boolean;
  error: string | null;
  data: portfolioUpdate_PortfolioUpdate_data | null;
}

export interface portfolioUpdate {
  PortfolioUpdate: portfolioUpdate_PortfolioUpdate;
}

export interface portfolioUpdateVariables {
  params: PortfolioUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productCreate
// ====================================================

export interface productCreate_ProductCreate_data {
  __typename: "Product";
  _id: string;
}

export interface productCreate_ProductCreate {
  __typename: "ProductCreateResponse";
  ok: boolean;
  error: string | null;
  data: productCreate_ProductCreate_data | null;
}

export interface productCreate {
  ProductCreate: productCreate_ProductCreate;
}

export interface productCreateVariables {
  params: ProductCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productUpdate
// ====================================================

export interface productUpdate_ProductUpdate_data {
  __typename: "Product";
  _id: string;
}

export interface productUpdate_ProductUpdate {
  __typename: "ProductUpdateResponse";
  ok: boolean;
  error: string | null;
  data: productUpdate_ProductUpdate_data | null;
}

export interface productUpdate {
  ProductUpdate: productUpdate_ProductUpdate;
}

export interface productUpdateVariables {
  params: ProductUpdateInput;
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productDelete
// ====================================================

export interface productDelete_ProductDelete_data_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface productDelete_ProductDelete_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productDelete_ProductDelete_data_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productDelete_ProductDelete_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: productDelete_ProductDelete_data_itinerary_images[];
  date: any;
}

export interface productDelete_ProductDelete_data_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productDelete_ProductDelete_data {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  code: string;
  contents: string;
  author: productDelete_ProductDelete_data_author | null;
  category: productDelete_ProductDelete_data_category | null;
  status: ProductStatus;
  itinerary: productDelete_ProductDelete_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: productDelete_ProductDelete_data_images[];
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  startDate: any;
  Dday: number;
}

export interface productDelete_ProductDelete {
  __typename: "ProductDeleteResponse";
  ok: boolean;
  error: string | null;
  data: productDelete_ProductDelete_data | null;
}

export interface productDelete {
  ProductDelete: productDelete_ProductDelete;
}

export interface productDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productList
// ====================================================

export interface productList_ProductList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
}

export interface productList_ProductList_data_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface productList_ProductList_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productList_ProductList_data_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: productList_ProductList_data_itinerary_images[];
  date: any;
}

export interface productList_ProductList_data_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  code: string;
  contents: string;
  author: productList_ProductList_data_author | null;
  category: productList_ProductList_data_category | null;
  status: ProductStatus;
  itinerary: productList_ProductList_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: productList_ProductList_data_images[];
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  startDate: any;
  Dday: number;
}

export interface productList_ProductList {
  __typename: "ProductListResponse";
  ok: boolean;
  error: string | null;
  page: productList_ProductList_page;
  data: productList_ProductList_data[];
}

export interface productList {
  ProductList: productList_ProductList;
}

export interface productListVariables {
  sort?: _ProductSort[] | null;
  filter?: _ProductFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productFindById
// ====================================================

export interface productFindById_ProductFindById_data_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface productFindById_ProductFindById_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productFindById_ProductFindById_data_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: productFindById_ProductFindById_data_itinerary_images[];
  date: any;
}

export interface productFindById_ProductFindById_data_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  code: string;
  contents: string;
  author: productFindById_ProductFindById_data_author | null;
  category: productFindById_ProductFindById_data_category | null;
  status: ProductStatus;
  itinerary: productFindById_ProductFindById_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: productFindById_ProductFindById_data_images[];
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  startDate: any;
  Dday: number;
}

export interface productFindById_ProductFindById {
  __typename: "ProductFindByIdResponse";
  ok: boolean;
  error: string | null;
  data: productFindById_ProductFindById_data | null;
}

export interface productFindById {
  ProductFindById: productFindById_ProductFindById;
}

export interface productFindByIdVariables {
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pcategoryList
// ====================================================

export interface pcategoryList_pCategoryList_data {
  __typename: "pCategory";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
}

export interface pcategoryList_pCategoryList {
  __typename: "pCategoryListResponse";
  ok: boolean;
  error: string | null;
  data: pcategoryList_pCategoryList_data[];
}

export interface pcategoryList {
  pCategoryList: pcategoryList_pCategoryList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryFindById
// ====================================================

export interface categoryFindById_CategoryFindById_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
}

export interface categoryFindById_CategoryFindById {
  __typename: "CategoryFindByIdResponse";
  ok: boolean;
  error: string | null;
  data: categoryFindById_CategoryFindById_data | null;
}

export interface categoryFindById {
  CategoryFindById: categoryFindById_CategoryFindById;
}

export interface categoryFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryList
// ====================================================

export interface categoryList_CategoryList_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
}

export interface categoryList_CategoryList {
  __typename: "CategoryListResponse";
  ok: boolean;
  error: string | null;
  data: categoryList_CategoryList_data[];
}

export interface categoryList {
  CategoryList: categoryList_CategoryList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: signIn
// ====================================================

export interface signIn_SignIn_data {
  __typename: "SignIn";
  token: string;
}

export interface signIn_SignIn {
  __typename: "SiginResponse";
  ok: boolean;
  error: string | null;
  data: signIn_SignIn_data | null;
}

export interface signIn {
  SignIn: signIn_SignIn;
}

export interface signInVariables {
  email: any;
  pw: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pageInfoRead
// ====================================================

export interface pageInfoRead_PageInfoRead_data {
  __typename: "PageInfo";
  _id: string;
  updatedAt: any;
  isDelete: boolean;
  key: string;
  value: any;
}

export interface pageInfoRead_PageInfoRead {
  __typename: "PageInfoReadResponse";
  ok: boolean;
  error: string | null;
  data: pageInfoRead_PageInfoRead_data | null;
}

export interface pageInfoRead {
  PageInfoRead: pageInfoRead_PageInfoRead;
}

export interface pageInfoReadVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getContext
// ====================================================

export interface getContext_GetProfile_data {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface getContext_GetProfile {
  __typename: "MeResponse";
  ok: boolean;
  error: string | null;
  data: getContext_GetProfile_data | null;
}

export interface getContext_CategoryList_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
}

export interface getContext_CategoryList {
  __typename: "CategoryListResponse";
  ok: boolean;
  error: string | null;
  data: getContext_CategoryList_data[];
}

export interface getContext {
  GetProfile: getContext_GetProfile;
  CategoryList: getContext_CategoryList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fcategory
// ====================================================

export interface Fcategory {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffile
// ====================================================

export interface Ffile {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fportfolio
// ====================================================

export interface Fportfolio_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface Fportfolio_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fportfolio_pCategory {
  __typename: "pCategory";
  _id: string;
  label: string;
}

export interface Fportfolio {
  __typename: "Portfolio";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  isOpen: boolean | null;
  keyWards: string[] | null;
  summary: string | null;
  subTitle: string | null;
  contents: string;
  author: Fportfolio_author | null;
  thumb: Fportfolio_thumb | null;
  pCategory: Fportfolio_pCategory | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FpageInfo
// ====================================================

export interface FpageInfo {
  __typename: "PageInfo";
  _id: string;
  updatedAt: any;
  isDelete: boolean;
  key: string;
  value: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpage
// ====================================================

export interface Fpage {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fitinerary
// ====================================================

export interface Fitinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fitinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: Fitinerary_images[];
  date: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fproduct
// ====================================================

export interface Fproduct_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface Fproduct_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface Fproduct_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fproduct_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: Fproduct_itinerary_images[];
  date: any;
}

export interface Fproduct_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fproduct {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  code: string;
  contents: string;
  author: Fproduct_author | null;
  category: Fproduct_category | null;
  status: ProductStatus;
  itinerary: Fproduct_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: Fproduct_images[];
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  startDate: any;
  Dday: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fnews
// ====================================================

export interface Fnews_author {
  __typename: "User";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  is_froreginer: boolean;
  gender: GENDER;
  busi_num: string;
  is_priv_corper: boolean;
  busi_name: string;
  bsui_address: string;
  account_number: string;
  bank_name: string;
}

export interface Fnews_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fnews_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fnews {
  __typename: "News";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: Fnews_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: Fnews_attachFiles[] | null;
  thumb: Fnews_thumb | null;
  viewCount: number;
  type: NEWS_TYPE;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 성별
 */
export enum GENDER {
  FEMALE = "FEMALE",
  MAIL = "MAIL",
}

/**
 * 뉴스 타입
 */
export enum NEWS_TYPE {
  COMPLETE = "COMPLETE",
  MEDIA = "MEDIA",
  TRAVEL = "TRAVEL",
}

/**
 * 성별
 */
export enum ProductStatus {
  CLOSE = "CLOSE",
  HIDE = "HIDE",
  OPEN = "OPEN",
  READY = "READY",
  REFUSED = "REFUSED",
  SOLD = "SOLD",
}

/**
 * 상품 타입
 */
export enum ProductType {
  EXPERIENCE = "EXPERIENCE",
  TOUR = "TOUR",
}

/**
 * 유저 역할!
 */
export enum UserRole {
  admin = "admin",
  anonymous = "anonymous",
  individual = "individual",
  manager = "manager",
  partner = "partner",
  partnerB = "partnerB",
}

/**
 * Auto generated sort type
 */
export enum _NewsSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _PortfolioSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _ProductSort {
  address_asc = "address_asc",
  address_desc = "address_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

export interface AddUserInput {
  email: any;
  pw?: string | null;
  role: UserRole;
  brith_date?: string | null;
  address?: string | null;
  is_froreginer?: boolean | null;
  gender?: GENDER | null;
  busi_contact?: string | null;
  busi_num?: string | null;
  is_priv_corper?: boolean | null;
  busi_name?: string | null;
  bsui_address?: string | null;
  account_number?: string | null;
  bank_name?: string | null;
}

export interface CategoryCreateInput {
  label: string;
}

export interface FileCreateInput {
  name?: string | null;
  description?: string | null;
  extension?: string | null;
  fileType?: string | null;
  uri: string;
  owner?: string | null;
}

export interface FileUpdateInput {
  name?: string | null;
  description?: string | null;
  extension?: string | null;
  fileType?: string | null;
  uri: string;
  owner?: string | null;
}

export interface ItineraryCreateInput {
  title: string;
  contents?: string[] | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  images?: FileCreateInput[] | null;
  date?: any | null;
}

export interface ItineraryUpdateInput {
  title: string;
  contents?: string[] | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  images?: FileUpdateInput[] | null;
  date?: any | null;
}

export interface NewsCreateInput {
  title: string;
  content: string;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  type: NEWS_TYPE;
}

export interface NewsUpdateInput {
  title?: string | null;
  contents: string;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  type: NEWS_TYPE;
}

export interface PageInfoCreateInput {
  key: string;
  value: any;
}

export interface PageInfoUpdateInput {
  key?: string | null;
  value?: any | null;
}

export interface PortfolioCreateInput {
  title: string;
  contents: string;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  pCategoryId: string;
}

export interface PortfolioUpdateInput {
  title?: string | null;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  pCategoryId?: string | null;
}

export interface ProductCreateInput {
  title: string;
  contents: string;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  categoryId: string;
  status?: ProductStatus | null;
  itinerary: ItineraryCreateInput[];
  inOrNor: string;
  info: string;
  caution: string;
  images: FileCreateInput[];
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  adult_price: number;
  kids_price: number;
  baby_price: number;
  type?: ProductType | null;
}

export interface ProductUpdateInput {
  title?: string | null;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  productId?: string | null;
  categoryId: string;
  status?: ProductStatus | null;
  itinerary: ItineraryUpdateInput[];
  inOrNor?: string | null;
  info?: string | null;
  caution?: string | null;
  images?: FileUpdateInput[] | null;
  address?: string | null;
  startPoint?: string | null;
  maxMember?: number | null;
  minMember?: number | null;
  adult_price?: number | null;
  kids_price?: number | null;
  baby_price?: number | null;
  type?: ProductType | null;
}

export interface _NewsFilter {
  AND?: _NewsFilter[] | null;
  OR?: _NewsFilter[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorId_eq?: string | null;
  authorId_not_eq?: string | null;
  authorId_in?: string[] | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: string | null;
  createdAt_not_eq?: string | null;
  createdAt_contains?: string | null;
  createdAt_not_contains?: string | null;
  createdAt_in?: string[] | null;
  createdAt_not_in?: string[] | null;
}

export interface _PortfolioFilter {
  AND?: _PortfolioFilter[] | null;
  OR?: _PortfolioFilter[] | null;
  pCategoryId_eq?: string | null;
  pCategoryId_not_eq?: string | null;
  pCategoryId_in?: string[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorId_eq?: string | null;
  authorId_not_eq?: string | null;
  authorId_in?: string[] | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: string | null;
  createdAt_not_eq?: string | null;
  createdAt_contains?: string | null;
  createdAt_not_contains?: string | null;
  createdAt_in?: string[] | null;
  createdAt_not_in?: string[] | null;
}

export interface _ProductFilter {
  AND?: _ProductFilter[] | null;
  OR?: _ProductFilter[] | null;
  code_eq?: string | null;
  code_not_eq?: string | null;
  code_contains?: string | null;
  code_not_contains?: string | null;
  code_in?: string[] | null;
  code_not_in?: string[] | null;
  address_eq?: string | null;
  address_not_eq?: string | null;
  address_contains?: string | null;
  address_not_contains?: string | null;
  address_in?: string[] | null;
  address_not_in?: string[] | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorId_eq?: string | null;
  authorId_not_eq?: string | null;
  authorId_in?: string[] | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: string | null;
  createdAt_not_eq?: string | null;
  createdAt_contains?: string | null;
  createdAt_not_contains?: string | null;
  createdAt_in?: string[] | null;
  createdAt_not_in?: string[] | null;
}

export interface pCategoryCreateInput {
  label: string;
}

export interface pCategoryUpdateInput {
  label?: string | null;
}

export interface pageInput {
  page: number;
  cntPerPage: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

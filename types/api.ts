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
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
  value: string;
}

export interface categoryCreate_CategoryCreate {
  __typename: "CategoryCreateResponse";
  ok: boolean;
  error: string;
  data: categoryCreate_CategoryCreate_data | null;
}

export interface categoryCreate {
  CategoryCreate: categoryCreate_CategoryCreate;
}

export interface categoryCreateVariables {
  data: CategoryCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryUpdate
// ====================================================

export interface categoryUpdate_CategoryUpdate_data {
  __typename: "Category";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
  value: string;
}

export interface categoryUpdate_CategoryUpdate {
  __typename: "CategoryUpdateResponse";
  ok: boolean;
  error: string | null;
  data: categoryUpdate_CategoryUpdate_data | null;
}

export interface categoryUpdate {
  CategoryUpdate: categoryUpdate_CategoryUpdate;
}

export interface categoryUpdateVariables {
  data: CategoryUpdateInput;
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
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
  value: string;
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
// GraphQL mutation operation: itineraryCreate
// ====================================================

export interface itineraryCreate_ItineraryCreate_data {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface itineraryCreate_ItineraryCreate {
  __typename: "ItineraryCreateResponse";
  ok: boolean;
  error: string | null;
  data: itineraryCreate_ItineraryCreate_data | null;
}

export interface itineraryCreate {
  ItineraryCreate: itineraryCreate_ItineraryCreate;
}

export interface itineraryCreateVariables {
  data: ItineraryCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: itineraryUpdate
// ====================================================

export interface itineraryUpdate_ItineraryUpdate_data {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface itineraryUpdate_ItineraryUpdate {
  __typename: "ItineraryUpdateResponse";
  ok: boolean;
  error: string | null;
  data: itineraryUpdate_ItineraryUpdate_data | null;
}

export interface itineraryUpdate {
  ItineraryUpdate: itineraryUpdate_ItineraryUpdate;
}

export interface itineraryUpdateVariables {
  data: ItineraryUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: itineraryDelete
// ====================================================

export interface itineraryDelete_ItineraryDelete_data {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface itineraryDelete_ItineraryDelete {
  __typename: "ItineraryDeleteResponse";
  ok: boolean;
  error: string | null;
  data: itineraryDelete_ItineraryDelete_data | null;
}

export interface itineraryDelete {
  ItineraryDelete: itineraryDelete_ItineraryDelete;
}

export interface itineraryDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productCreate
// ====================================================

export interface productCreate_ProductCreate_data_author {
  __typename: "User";
  _id: string;
}

export interface productCreate_ProductCreate_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productCreate_ProductCreate_data_itineraries {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface productCreate_ProductCreate_data {
  __typename: "Product";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: string;
  author: productCreate_ProductCreate_data_author;
  category: productCreate_ProductCreate_data_category | null;
  Status: ProductStatus;
  itineraryIds: string[];
  itineraries: productCreate_ProductCreate_data_itineraries[] | null;
  include: any;
  uninclude: any;
  productInfo: string;
  info: string;
  caution: string;
  keyWards: string[];
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
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
  newItinerary: ItineraryArrayInput[];
  newProduct: ProductCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productUpdate
// ====================================================

export interface productUpdate_ProductUpdate_data_author {
  __typename: "User";
  _id: string;
}

export interface productUpdate_ProductUpdate_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productUpdate_ProductUpdate_data_itineraries {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface productUpdate_ProductUpdate_data {
  __typename: "Product";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: string;
  author: productUpdate_ProductUpdate_data_author;
  category: productUpdate_ProductUpdate_data_category | null;
  Status: ProductStatus;
  itineraryIds: string[];
  itineraries: productUpdate_ProductUpdate_data_itineraries[] | null;
  include: any;
  uninclude: any;
  productInfo: string;
  info: string;
  caution: string;
  keyWards: string[];
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
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
  newItinerary: ItineryUpdateInput[];
  newProduct: ProductUpdateInput;
  productId: string;
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
}

export interface productDelete_ProductDelete_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productDelete_ProductDelete_data_itineraries {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface productDelete_ProductDelete_data {
  __typename: "Product";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: string;
  author: productDelete_ProductDelete_data_author;
  category: productDelete_ProductDelete_data_category | null;
  Status: ProductStatus;
  itineraryIds: string[];
  itineraries: productDelete_ProductDelete_data_itineraries[] | null;
  include: any;
  uninclude: any;
  productInfo: string;
  info: string;
  caution: string;
  keyWards: string[];
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
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
// GraphQL mutation operation: singleUpload
// ====================================================

export interface singleUpload_SingleUpload_data {
  __typename: "File";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  name: string;
  description: string;
  extension: string;
  fileType: string;
  uri: string;
  owner: string;
}

export interface singleUpload_SingleUpload {
  __typename: "FileUploadResponse";
  ok: boolean;
  error: string | null;
  data: singleUpload_SingleUpload_data | null;
}

export interface singleUpload {
  SingleUpload: singleUpload_SingleUpload;
}

export interface singleUploadVariables {
  file: any;
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
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  name: string;
  description: string;
  extension: string;
  fileType: string;
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
  accessToken: string;
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
}

export interface productList_ProductList_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productList_ProductList_data_itineraries {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface productList_ProductList_data {
  __typename: "Product";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: string;
  author: productList_ProductList_data_author;
  category: productList_ProductList_data_category | null;
  Status: ProductStatus;
  itineraryIds: string[];
  itineraries: productList_ProductList_data_itineraries[] | null;
  include: any;
  uninclude: any;
  productInfo: string;
  info: string;
  caution: string;
  keyWards: string[];
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
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
  pageInput: pageInput;
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
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
  value: string;
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
// GraphQL query operation: productFindById
// ====================================================

export interface productFindById_ProductFindById_data_author {
  __typename: "User";
  _id: string;
}

export interface productFindById_ProductFindById_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productFindById_ProductFindById_data_itineraries {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface productFindById_ProductFindById_data {
  __typename: "Product";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: string;
  author: productFindById_ProductFindById_data_author;
  category: productFindById_ProductFindById_data_category | null;
  Status: ProductStatus;
  itineraryIds: string[];
  itineraries: productFindById_ProductFindById_data_itineraries[] | null;
  include: any;
  uninclude: any;
  productInfo: string;
  info: string;
  caution: string;
  keyWards: string[];
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
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
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
  value: string;
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
// GraphQL query operation: itineraryFindById
// ====================================================

export interface itineraryFindById_ItineraryFindById_data {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface itineraryFindById_ItineraryFindById {
  __typename: "ItineraryFindByIdResponse";
  ok: boolean;
  error: string | null;
  data: itineraryFindById_ItineraryFindById_data | null;
}

export interface itineraryFindById {
  ItineraryFindById: itineraryFindById_ItineraryFindById;
}

export interface itineraryFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: itineraryList
// ====================================================

export interface itineraryList_ItineraryList_data {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface itineraryList_ItineraryList {
  __typename: "ItineraryListResponse";
  ok: boolean;
  error: string | null;
  data: itineraryList_ItineraryList_data[];
}

export interface itineraryList {
  ItineraryList: itineraryList_ItineraryList;
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
// GraphQL fragment: Fcategory
// ====================================================

export interface Fcategory {
  __typename: "Category";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
  value: string;
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

export interface Fitinerary {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
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
}

export interface Fproduct_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface Fproduct_itineraries {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date: any;
}

export interface Fproduct {
  __typename: "Product";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: string;
  author: Fproduct_author;
  category: Fproduct_category | null;
  Status: ProductStatus;
  itineraryIds: string[];
  itineraries: Fproduct_itineraries[] | null;
  include: any;
  uninclude: any;
  productInfo: string;
  info: string;
  caution: string;
  keyWards: string[];
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string;
  adult_price: number;
  kids_price: number;
  baby_price: number;
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
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  pw: string;
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
// GraphQL fragment: Ffile
// ====================================================

export interface Ffile {
  __typename: "File";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  name: string;
  description: string;
  extension: string;
  fileType: string;
  uri: string;
  owner: string;
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
  value: string;
}

export interface CategoryUpdateInput {
  label?: string | null;
  value?: string | null;
}

export interface ItineraryArrayInput {
  title: string;
  contents: string;
  imgs: string[];
  date?: any | null;
}

export interface ItineraryCreateInput {
  productId: string;
  title: string;
  contents: string;
  imgs: string[];
  date?: any | null;
}

export interface ItineraryUpdateInput {
  label?: string | null;
  value?: string | null;
}

export interface ItineryUpdateInput {
  _id?: string | null;
  productId?: string | null;
  title: string;
  contents: string;
  imgs: string[];
  date?: any | null;
}

export interface ProductCreateInput {
  title: string;
  content: string;
  CategoryID?: string | null;
  Status?: ProductStatus | null;
  include?: any | null;
  uninclude?: any | null;
  productInfo?: string | null;
  info?: string | null;
  caution?: string | null;
  keyWards?: string[] | null;
  images?: string[] | null;
  address?: string | null;
  startPoint?: string | null;
  maxMember?: number | null;
  minMember?: number | null;
  subTitle?: string | null;
  adult_price?: number | null;
  kids_price?: number | null;
  baby_price?: number | null;
}

export interface ProductUpdateInput {
  title?: string | null;
  content?: string | null;
  CategoryID?: string | null;
  Status?: ProductStatus | null;
  include: any;
  uninclude: any;
  productInfo?: string | null;
  info?: string | null;
  caution?: string | null;
  keyWards?: string[] | null;
  address?: string | null;
  startPoint?: string | null;
  maxMember?: number | null;
  minMember?: number | null;
  subTitle?: string | null;
  adult_price?: number | null;
  kids_price?: number | null;
  baby_price?: number | null;
}

export interface pageInput {
  page: number;
  cntPerPage: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

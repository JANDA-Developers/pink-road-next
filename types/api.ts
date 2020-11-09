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
// GraphQL mutation operation: productPostCreate
// ====================================================

export interface productPostCreate_ProductPostCreate_data_author {
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

export interface productPostCreate_ProductPostCreate_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productPostCreate_ProductPostCreate_data_itinerary_images {
  __typename: "File";
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

export interface productPostCreate_ProductPostCreate_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  productPostId: string;
  title: string;
  contents: string[];
  images: productPostCreate_ProductPostCreate_data_itinerary_images[];
  date: any;
}

export interface productPostCreate_ProductPostCreate_data {
  __typename: "ProductPost";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: any;
  author: productPostCreate_ProductPostCreate_data_author;
  category: productPostCreate_ProductPostCreate_data_category | null;
  status: ProductPostStatus;
  itinerary: productPostCreate_ProductPostCreate_data_itinerary[];
  inOrNor: any;
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

export interface productPostCreate_ProductPostCreate {
  __typename: "ProductPostCreateResponse";
  ok: boolean;
  error: string | null;
  data: productPostCreate_ProductPostCreate_data | null;
}

export interface productPostCreate {
  ProductPostCreate: productPostCreate_ProductPostCreate;
}

export interface productPostCreateVariables {
  params: ProductPostCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productPostUpdate
// ====================================================

export interface productPostUpdate_ProductPostUpdate_data_author {
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

export interface productPostUpdate_ProductPostUpdate_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productPostUpdate_ProductPostUpdate_data_itinerary_images {
  __typename: "File";
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

export interface productPostUpdate_ProductPostUpdate_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  productPostId: string;
  title: string;
  contents: string[];
  images: productPostUpdate_ProductPostUpdate_data_itinerary_images[];
  date: any;
}

export interface productPostUpdate_ProductPostUpdate_data {
  __typename: "ProductPost";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: any;
  author: productPostUpdate_ProductPostUpdate_data_author;
  category: productPostUpdate_ProductPostUpdate_data_category | null;
  status: ProductPostStatus;
  itinerary: productPostUpdate_ProductPostUpdate_data_itinerary[];
  inOrNor: any;
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

export interface productPostUpdate_ProductPostUpdate {
  __typename: "ProductPostUpdateResponse";
  ok: boolean;
  error: string | null;
  data: productPostUpdate_ProductPostUpdate_data | null;
}

export interface productPostUpdate {
  ProductPostUpdate: productPostUpdate_ProductPostUpdate;
}

export interface productPostUpdateVariables {
  params: ProductPostUpdateInput;
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productPostDelete
// ====================================================

export interface productPostDelete_ProductPostDelete_data_author {
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

export interface productPostDelete_ProductPostDelete_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productPostDelete_ProductPostDelete_data_itinerary_images {
  __typename: "File";
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

export interface productPostDelete_ProductPostDelete_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  productPostId: string;
  title: string;
  contents: string[];
  images: productPostDelete_ProductPostDelete_data_itinerary_images[];
  date: any;
}

export interface productPostDelete_ProductPostDelete_data {
  __typename: "ProductPost";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: any;
  author: productPostDelete_ProductPostDelete_data_author;
  category: productPostDelete_ProductPostDelete_data_category | null;
  status: ProductPostStatus;
  itinerary: productPostDelete_ProductPostDelete_data_itinerary[];
  inOrNor: any;
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

export interface productPostDelete_ProductPostDelete {
  __typename: "ProductPostDeleteResponse";
  ok: boolean;
  error: string | null;
  data: productPostDelete_ProductPostDelete_data | null;
}

export interface productPostDelete {
  ProductPostDelete: productPostDelete_ProductPostDelete;
}

export interface productPostDeleteVariables {
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
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productPostList
// ====================================================

export interface productPostList_ProductPostList_page {
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

export interface productPostList_ProductPostList_data_author {
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

export interface productPostList_ProductPostList_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productPostList_ProductPostList_data_itinerary_images {
  __typename: "File";
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

export interface productPostList_ProductPostList_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  productPostId: string;
  title: string;
  contents: string[];
  images: productPostList_ProductPostList_data_itinerary_images[];
  date: any;
}

export interface productPostList_ProductPostList_data {
  __typename: "ProductPost";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: any;
  author: productPostList_ProductPostList_data_author;
  category: productPostList_ProductPostList_data_category | null;
  status: ProductPostStatus;
  itinerary: productPostList_ProductPostList_data_itinerary[];
  inOrNor: any;
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

export interface productPostList_ProductPostList {
  __typename: "ProductPostListResponse";
  ok: boolean;
  error: string | null;
  page: productPostList_ProductPostList_page;
  data: productPostList_ProductPostList_data[];
}

export interface productPostList {
  ProductPostList: productPostList_ProductPostList;
}

export interface productPostListVariables {
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
// GraphQL query operation: productPostFindById
// ====================================================

export interface productPostFindById_ProductPostFindById_data_author {
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

export interface productPostFindById_ProductPostFindById_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productPostFindById_ProductPostFindById_data_itinerary_images {
  __typename: "File";
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

export interface productPostFindById_ProductPostFindById_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  productPostId: string;
  title: string;
  contents: string[];
  images: productPostFindById_ProductPostFindById_data_itinerary_images[];
  date: any;
}

export interface productPostFindById_ProductPostFindById_data {
  __typename: "ProductPost";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: any;
  author: productPostFindById_ProductPostFindById_data_author;
  category: productPostFindById_ProductPostFindById_data_category | null;
  status: ProductPostStatus;
  itinerary: productPostFindById_ProductPostFindById_data_itinerary[];
  inOrNor: any;
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

export interface productPostFindById_ProductPostFindById {
  __typename: "ProductPostFindByIdResponse";
  ok: boolean;
  error: string | null;
  data: productPostFindById_ProductPostFindById_data | null;
}

export interface productPostFindById {
  ProductPostFindById: productPostFindById_ProductPostFindById;
}

export interface productPostFindByIdVariables {
  _id: string;
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
// GraphQL fragment: Ffile
// ====================================================

export interface Ffile {
  __typename: "File";
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

// ====================================================
// GraphQL fragment: Fitinerary
// ====================================================

export interface Fitinerary_images {
  __typename: "File";
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

export interface Fitinerary {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  productPostId: string;
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
// GraphQL fragment: FproductPost
// ====================================================

export interface FproductPost_author {
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

export interface FproductPost_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface FproductPost_itinerary_images {
  __typename: "File";
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

export interface FproductPost_itinerary {
  __typename: "Itinerary";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  productPostId: string;
  title: string;
  contents: string[];
  images: FproductPost_itinerary_images[];
  date: any;
}

export interface FproductPost {
  __typename: "ProductPost";
  _id: string;
  cratedAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  content: any;
  author: FproductPost_author;
  category: FproductPost_category | null;
  status: ProductPostStatus;
  itinerary: FproductPost_itinerary[];
  inOrNor: any;
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
export enum ProductPostStatus {
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
export enum ProductPostType {
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

export interface FileCreateInput {
  name?: string | null;
  description?: string | null;
  extension?: string | null;
  fileType?: string | null;
  uri: string;
  owner?: string | null;
  isDelete?: boolean | null;
}

export interface FileUpdateInput {
  name?: string | null;
  description?: string | null;
  extension?: string | null;
  fileType?: string | null;
  uri: string;
  owner?: string | null;
  isDelete?: boolean | null;
}

export interface ItineryCreateInput {
  title: string;
  contents?: string[] | null;
  images?: FileCreateInput[] | null;
  date?: any | null;
}

export interface ItineryUpdateInput {
  title: string;
  contents?: string[] | null;
  images?: FileUpdateInput[] | null;
  date?: any | null;
}

export interface ProductPostCreateInput {
  title: string;
  content?: any | null;
  productId?: string | null;
  categoryId?: string | null;
  status?: ProductPostStatus | null;
  itinerary: ItineryCreateInput[];
  inOrNor?: any | null;
  info?: string | null;
  caution?: string | null;
  keyWards?: string[] | null;
  images?: FileCreateInput[] | null;
  address?: string | null;
  startPoint?: string | null;
  maxMember?: number | null;
  minMember?: number | null;
  subTitle?: string | null;
  adult_price?: number | null;
  kids_price?: number | null;
  baby_price?: number | null;
  type?: ProductPostType | null;
}

export interface ProductPostUpdateInput {
  title?: string | null;
  content?: any | null;
  productId?: string | null;
  categoryId?: string | null;
  status?: ProductPostStatus | null;
  itinerary: ItineryUpdateInput[];
  inOrNor: any;
  info?: string | null;
  caution?: string | null;
  keyWards?: string[] | null;
  images?: FileUpdateInput[] | null;
  address?: string | null;
  startPoint?: string | null;
  maxMember?: number | null;
  minMember?: number | null;
  subTitle?: string | null;
  adult_price?: number | null;
  kids_price?: number | null;
  baby_price?: number | null;
  type?: ProductPostType | null;
}

export interface pageInput {
  page: number;
  cntPerPage: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

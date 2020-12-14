/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardFindByEmail
// ====================================================

export interface boardFindByEmail_BoardFindByEmail_data_thumb {
  __typename: "File";
  uri: string;
}

export interface boardFindByEmail_BoardFindByEmail_data {
  __typename: "IntegratedBoard";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  thumb: boardFindByEmail_BoardFindByEmail_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  questionStatus: string | null;
  boardType: BoardType;
}

export interface boardFindByEmail_BoardFindByEmail {
  __typename: "IntegratedBoardResponse";
  ok: boolean;
  error: string | null;
  data: boardFindByEmail_BoardFindByEmail_data[] | null;
}

export interface boardFindByEmail {
  BoardFindByEmail: boardFindByEmail_BoardFindByEmail;
}

export interface boardFindByEmailVariables {
  email: string;
  filter?: _BoardFilter | null;
  sort?: _BoardSort[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bookingList
// ====================================================

export interface bookingList_BookingList_page {
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
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface bookingList_BookingList_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
}

export interface bookingList_BookingList_data_payment {
  __typename: "Payment";
  Amt: number | null;
  PayMethod: string | null;
  CardNo: string | null;
  AuthDate: string | null;
}

export interface bookingList_BookingList_data {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  adultCount: number;
  kidCount: number;
  babyCount: number;
  totalCount: number;
  message: string | null;
  status: string | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: bookingList_BookingList_data_product;
  payment: bookingList_BookingList_data_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  isPaid: boolean | null;
}

export interface bookingList_BookingList {
  __typename: "BookingListResponse";
  ok: boolean;
  error: string | null;
  page: bookingList_BookingList_page;
  data: bookingList_BookingList_data[];
}

export interface bookingList {
  BookingList: bookingList_BookingList;
}

export interface bookingListVariables {
  sort?: _BookingSort[] | null;
  filter?: _BookingFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bookingCount
// ====================================================

export interface bookingCount_BookingList_data {
  __typename: "Booking";
  _id: string;
}

export interface bookingCount_BookingList {
  __typename: "BookingListResponse";
  ok: boolean;
  error: string | null;
  data: bookingCount_BookingList_data[];
}

export interface bookingCount {
  BookingList: bookingCount_BookingList;
}

export interface bookingCountVariables {
  filter?: _BookingFilter | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingsCreate
// ====================================================

export interface bookingsCreate_BookingsCreate_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
}

export interface bookingsCreate_BookingsCreate_data_payment {
  __typename: "Payment";
  Amt: number | null;
  PayMethod: string | null;
  CardNo: string | null;
  AuthDate: string | null;
}

export interface bookingsCreate_BookingsCreate_data {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  adultCount: number;
  kidCount: number;
  babyCount: number;
  totalCount: number;
  message: string | null;
  status: string | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: bookingsCreate_BookingsCreate_data_product;
  payment: bookingsCreate_BookingsCreate_data_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  isPaid: boolean | null;
}

export interface bookingsCreate_BookingsCreate {
  __typename: "BookingsCreateResponse";
  ok: boolean;
  error: string | null;
  data: bookingsCreate_BookingsCreate_data[] | null;
}

export interface bookingsCreate {
  BookingsCreate: bookingsCreate_BookingsCreate;
}

export interface bookingsCreateVariables {
  params: BookingsCreateInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingDelete
// ====================================================

export interface bookingDelete_BookingDelete {
  __typename: "BookingDeleteResponse";
  ok: boolean;
  error: string | null;
}

export interface bookingDelete {
  BookingDelete: bookingDelete_BookingDelete;
}

export interface bookingDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingUpdate
// ====================================================

export interface bookingUpdate_BookingUpdate_data {
  __typename: "Booking";
  _id: string;
}

export interface bookingUpdate_BookingUpdate {
  __typename: "BookingUpdateResponse";
  ok: boolean;
  error: string | null;
  data: bookingUpdate_BookingUpdate_data | null;
}

export interface bookingUpdate {
  BookingUpdate: bookingUpdate_BookingUpdate;
}

export interface bookingUpdateVariables {
  params: BookingUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bookingFindByCode
// ====================================================

export interface bookingFindByCode_BookingFindByCode_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
}

export interface bookingFindByCode_BookingFindByCode_data_payment {
  __typename: "Payment";
  Amt: number | null;
  PayMethod: string | null;
  CardNo: string | null;
  AuthDate: string | null;
}

export interface bookingFindByCode_BookingFindByCode_data {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  adultCount: number;
  kidCount: number;
  babyCount: number;
  totalCount: number;
  message: string | null;
  status: string | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: bookingFindByCode_BookingFindByCode_data_product;
  payment: bookingFindByCode_BookingFindByCode_data_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  isPaid: boolean | null;
}

export interface bookingFindByCode_BookingFindByCode {
  __typename: "BookingFindByCodeResponse";
  ok: boolean;
  error: string | null;
  data: bookingFindByCode_BookingFindByCode_data | null;
}

export interface bookingFindByCode {
  BookingFindByCode: bookingFindByCode_BookingFindByCode;
}

export interface bookingFindByCodeVariables {
  code: string;
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
  data: categoryList_CategoryList_data[] | null;
}

export interface categoryList {
  CategoryList: categoryList_CategoryList;
}

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
// GraphQL mutation operation: categoryUpdate
// ====================================================

export interface categoryUpdate_CategoryUpdate_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  label: string;
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
  params: CategoryUpdateInput;
  id: string;
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
  data: multiUpload_MultiUpload_data[] | null;
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
  params: AddUserInput;
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

export interface newsFindById_NewsFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsFindById_NewsFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: newsFindById_NewsFindById_data_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface newsList_NewsList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsList_NewsList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: newsList_NewsList_data_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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
// GraphQL query operation: paymentList
// ====================================================

export interface paymentList_PaymentList_page {
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
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface paymentList_PaymentList_data {
  __typename: "Payment";
  ResultCode: string | null;
  ResultMsg: string | null;
  Amt: number | null;
  MID: string | null;
  Moid: string | null;
  BuyerEmail: string | null;
  BuyerTel: string | null;
  BuyerName: string | null;
  GoodsName: string | null;
  TID: string | null;
  AuthCode: string | null;
  AuthDate: string | null;
  PayMethod: string | null;
  CartData: string | null;
  Signature: string | null;
  MallReserved: string | null;
  CardCode: string | null;
  CardName: string | null;
  CardNo: string | null;
  CardQuota: string | null;
  CardInterest: string | null;
  AcquCardCode: string | null;
  AcquCardName: string | null;
  CardCl: string | null;
  CcPartCl: string | null;
  CouponAmt: string | null;
  CouponMinAmt: string | null;
  PointAppAmt: string | null;
  ClickpayCl: string | null;
  MultiCl: string | null;
  MultiCardAcquAmt: string | null;
  MultiPointAmt: string | null;
  MultiCouponAmt: string | null;
  RcptType: string | null;
  RcptTID: string | null;
  RcptAuthCode: string | null;
}

export interface paymentList_PaymentList {
  __typename: "PaymentListResponse";
  ok: boolean;
  error: string | null;
  page: paymentList_PaymentList_page;
  data: paymentList_PaymentList_data[];
}

export interface paymentList {
  PaymentList: paymentList_PaymentList;
}

export interface paymentListVariables {
  sort?: _PaymentSort[] | null;
  filter?: _PaymentFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: settlementCal
// ====================================================

export interface settlementCal_SettlementCal {
  __typename: "SettlementCalResponse";
  ok: boolean;
  error: string | null;
  amt: number;
}

export interface settlementCal {
  /**
   * 판매자가 얼마 받을 수 있는지 계산함
   */
  SettlementCal: settlementCal_SettlementCal;
}

export interface settlementCalVariables {
  filter: _PaymentFilter;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: portfolioFindById
// ====================================================

export interface portfolioFindById_PortfolioFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioFindById_PortfolioFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: portfolioFindById_PortfolioFindById_data_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface portfolioList_PortfolioList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioList_PortfolioList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: portfolioList_PortfolioList_data_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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
// GraphQL mutation operation: ProductCreate
// ====================================================

export interface ProductCreate_ProductCreate_data {
  __typename: "Product";
  _id: string;
}

export interface ProductCreate_ProductCreate {
  __typename: "ProductCreateResponse";
  ok: boolean;
  error: string | null;
  data: ProductCreate_ProductCreate_data | null;
}

export interface ProductCreate {
  ProductCreate: ProductCreate_ProductCreate;
}

export interface ProductCreateVariables {
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

export interface productDelete_ProductDelete_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productDelete_ProductDelete_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productDelete_ProductDelete_data_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
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
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface productList_ProductList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productList_ProductList_data_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
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

export interface productFindById_ProductFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productFindById_ProductFindById_data_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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

export interface productFindById_ProductFindById_data_questions_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  email: string;
}

export interface productFindById_ProductFindById_data_questions_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_questions_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_questions {
  __typename: "Question";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: productFindById_ProductFindById_data_questions_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: productFindById_ProductFindById_data_questions_attachFiles[] | null;
  thumb: productFindById_ProductFindById_data_questions_thumb | null;
  viewCount: number;
  likeCount: number;
  status: QuestionStatus;
  no: number;
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
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  questions: productFindById_ProductFindById_data_questions[] | null;
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
  data: pcategoryList_pCategoryList_data[] | null;
}

export interface pcategoryList {
  pCategoryList: pcategoryList_pCategoryList;
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

export interface getContext_GetProfile_data_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_GetProfile_data_bookings_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
}

export interface getContext_GetProfile_data_bookings_payment {
  __typename: "Payment";
  Amt: number | null;
  PayMethod: string | null;
  CardNo: string | null;
  AuthDate: string | null;
}

export interface getContext_GetProfile_data_bookings_seller {
  __typename: "User";
  _id: string;
  name: string;
}

export interface getContext_GetProfile_data_bookings {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  adultCount: number;
  kidCount: number;
  babyCount: number;
  totalCount: number;
  message: string | null;
  status: string | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: getContext_GetProfile_data_bookings_product;
  payment: getContext_GetProfile_data_bookings_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  isPaid: boolean | null;
  seller: getContext_GetProfile_data_bookings_seller;
}

export interface getContext_GetProfile_data_products_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_GetProfile_data_products_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: getContext_GetProfile_data_products_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
}

export interface getContext_GetProfile_data_products_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface getContext_GetProfile_data_products_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_GetProfile_data_products_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: getContext_GetProfile_data_products_itinerary_images[];
  date: any;
}

export interface getContext_GetProfile_data_products_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_GetProfile_data_products_bookings {
  __typename: "Booking";
  _id: string;
  name: string;
}

export interface getContext_GetProfile_data_products {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  code: string;
  contents: string;
  author: getContext_GetProfile_data_products_author | null;
  category: getContext_GetProfile_data_products_category | null;
  status: ProductStatus;
  itinerary: getContext_GetProfile_data_products_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: getContext_GetProfile_data_products_images[];
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  bookings: getContext_GetProfile_data_products_bookings[];
}

export interface getContext_GetProfile_data {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: getContext_GetProfile_data_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
  bookings: getContext_GetProfile_data_bookings[];
  products: getContext_GetProfile_data_products[];
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
  data: getContext_CategoryList_data[] | null;
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
// GraphQL query operation: questionList
// ====================================================

export interface questionList_QuestionList_page {
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
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface questionList_QuestionList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  email: string;
}

export interface questionList_QuestionList_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionList_QuestionList_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionList_QuestionList_data {
  __typename: "Question";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: questionList_QuestionList_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: questionList_QuestionList_data_attachFiles[] | null;
  thumb: questionList_QuestionList_data_thumb | null;
  viewCount: number;
  likeCount: number;
  status: QuestionStatus;
  no: number;
}

export interface questionList_QuestionList {
  __typename: "QuestionListResponse";
  ok: boolean;
  error: string | null;
  page: questionList_QuestionList_page;
  data: questionList_QuestionList_data[];
}

export interface questionList {
  QuestionList: questionList_QuestionList;
}

export interface questionListVariables {
  sort?: _QuestionSort[] | null;
  filter?: _QuestionFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: questionCreate
// ====================================================

export interface questionCreate_QuestionCreate_data {
  __typename: "Question";
  _id: string;
}

export interface questionCreate_QuestionCreate {
  __typename: "QuestionCreateResponse";
  ok: boolean;
  error: string | null;
  data: questionCreate_QuestionCreate_data | null;
}

export interface questionCreate {
  QuestionCreate: questionCreate_QuestionCreate;
}

export interface questionCreateVariables {
  params: QuestionCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: questionDelete
// ====================================================

export interface questionDelete_QuestionDelete {
  __typename: "QuestionDeleteResponse";
  ok: boolean;
  error: string | null;
}

export interface questionDelete {
  QuestionDelete: questionDelete_QuestionDelete;
}

export interface questionDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: questionUpdate
// ====================================================

export interface questionUpdate_QuestionUpdate_data {
  __typename: "Question";
  _id: string;
}

export interface questionUpdate_QuestionUpdate {
  __typename: "QuestionUpdateResponse";
  ok: boolean;
  error: string | null;
  data: questionUpdate_QuestionUpdate_data | null;
}

export interface questionUpdate {
  QuestionUpdate: questionUpdate_QuestionUpdate;
}

export interface questionUpdateVariables {
  params: QuestionUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: questionFindById
// ====================================================

export interface questionFindById_QuestionFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  email: string;
}

export interface questionFindById_QuestionFindById_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionFindById_QuestionFindById_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionFindById_QuestionFindById_data {
  __typename: "Question";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: questionFindById_QuestionFindById_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: questionFindById_QuestionFindById_data_attachFiles[] | null;
  thumb: questionFindById_QuestionFindById_data_thumb | null;
  viewCount: number;
  likeCount: number;
  status: QuestionStatus;
  no: number;
}

export interface questionFindById_QuestionFindById {
  __typename: "QuestionFindByIdResponse";
  ok: boolean;
  error: string | null;
  data: questionFindById_QuestionFindById_data | null;
}

export interface questionFindById {
  QuestionFindById: questionFindById_QuestionFindById;
}

export interface questionFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userResign
// ====================================================

export interface userResign_UserResign {
  __typename: "UserResignResponse";
  ok: boolean;
  error: string | null;
}

export interface userResign {
  UserResign: userResign_UserResign;
}

export interface userResignVariables {
  _id: string;
  pw: string;
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
// GraphQL mutation operation: userUpdate
// ====================================================

export interface userUpdate_UserUpdate_data {
  __typename: "User";
  _id: string;
  createdAt: any;
}

export interface userUpdate_UserUpdate {
  __typename: "UserUpdateResponse";
  ok: boolean;
  error: string | null;
  data: userUpdate_UserUpdate_data | null;
}

export interface userUpdate {
  UserUpdate: userUpdate_UserUpdate;
}

export interface userUpdateVariables {
  params: UserUpdateInput;
  _id: string;
  pw?: string | null;
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
// GraphQL mutation operation: verificationStart
// ====================================================

export interface verificationStart_VerificationStart_data {
  __typename: "Verification";
  _id: string;
  isVerified: boolean;
}

export interface verificationStart_VerificationStart {
  __typename: "VerificationResponse";
  ok: boolean;
  error: string | null;
  data: verificationStart_VerificationStart_data | null;
}

export interface verificationStart {
  VerificationStart: verificationStart_VerificationStart;
}

export interface verificationStartVariables {
  target: VerificationTarget;
  payload: string;
  event: VerificationEvent;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verificationComplete
// ====================================================

export interface verificationComplete_VerificationComplete_data {
  __typename: "Verification";
  _id: string;
  createdAt: any;
  updatedAt: any;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시 
   *             	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeCode: string | null;
  expiresAt: any;
  isExpire: boolean;
}

export interface verificationComplete_VerificationComplete {
  __typename: "VerificationResponse";
  ok: boolean;
  error: string | null;
  data: verificationComplete_VerificationComplete_data | null;
}

export interface verificationComplete {
  VerificationComplete: verificationComplete_VerificationComplete;
}

export interface verificationCompleteVariables {
  verificationId: string;
  target: VerificationTarget;
  code: string;
  payload: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userList
// ====================================================

export interface userList_UserList_page {
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
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface userList_UserList_data_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userList_UserList_data {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: userList_UserList_data_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
}

export interface userList_UserList {
  __typename: "UserListResponse";
  ok: boolean;
  error: string | null;
  page: userList_UserList_page;
  data: userList_UserList_data[];
}

export interface userList {
  UserList: userList_UserList[];
}

export interface userListVariables {
  sort?: _UserSort[] | null;
  filter?: _UserFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userFindById
// ====================================================

export interface userFindById_UserFindById_data_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: userFindById_UserFindById_data_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
}

export interface userFindById_UserFindById {
  __typename: "UserFindByIdResponse";
  ok: boolean;
  error: string | null;
  data: userFindById_UserFindById_data | null;
}

export interface userFindById {
  UserFindById: userFindById_UserFindById;
}

export interface userFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FbookingByCode
// ====================================================

export interface FbookingByCode_product_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface FbookingByCode_product_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: FbookingByCode_product_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
}

export interface FbookingByCode_product_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface FbookingByCode_product_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface FbookingByCode_product_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: FbookingByCode_product_itinerary_images[];
  date: any;
}

export interface FbookingByCode_product_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface FbookingByCode_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  contents: string;
  author: FbookingByCode_product_author | null;
  category: FbookingByCode_product_category | null;
  status: ProductStatus;
  itinerary: FbookingByCode_product_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: FbookingByCode_product_images[];
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
}

export interface FbookingByCode_payment {
  __typename: "Payment";
  Amt: number | null;
  PayMethod: string | null;
  CardNo: string | null;
  AuthDate: string | null;
  ResultCode: string | null;
  ResultMsg: string | null;
  MID: string | null;
  Moid: string | null;
  BuyerEmail: string | null;
  BuyerTel: string | null;
  BuyerName: string | null;
  GoodsName: string | null;
  TID: string | null;
  AuthCode: string | null;
  CartData: string | null;
  Signature: string | null;
  MallReserved: string | null;
  CardCode: string | null;
  CardName: string | null;
  CardQuota: string | null;
  CardInterest: string | null;
  AcquCardCode: string | null;
  AcquCardName: string | null;
  CardCl: string | null;
  CcPartCl: string | null;
  CouponAmt: string | null;
  CouponMinAmt: string | null;
  PointAppAmt: string | null;
  ClickpayCl: string | null;
  MultiCl: string | null;
  MultiCardAcquAmt: string | null;
  MultiPointAmt: string | null;
  MultiCouponAmt: string | null;
  RcptType: string | null;
  RcptTID: string | null;
  RcptAuthCode: string | null;
}

export interface FbookingByCode {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  adultCount: number;
  kidCount: number;
  babyCount: number;
  totalCount: number;
  message: string | null;
  status: string | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: FbookingByCode_product;
  payment: FbookingByCode_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  isPaid: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpayment
// ====================================================

export interface Fpayment {
  __typename: "Payment";
  ResultCode: string | null;
  ResultMsg: string | null;
  Amt: number | null;
  MID: string | null;
  Moid: string | null;
  BuyerEmail: string | null;
  BuyerTel: string | null;
  BuyerName: string | null;
  GoodsName: string | null;
  TID: string | null;
  AuthCode: string | null;
  AuthDate: string | null;
  PayMethod: string | null;
  CartData: string | null;
  Signature: string | null;
  MallReserved: string | null;
  CardCode: string | null;
  CardName: string | null;
  CardNo: string | null;
  CardQuota: string | null;
  CardInterest: string | null;
  AcquCardCode: string | null;
  AcquCardName: string | null;
  CardCl: string | null;
  CcPartCl: string | null;
  CouponAmt: string | null;
  CouponMinAmt: string | null;
  PointAppAmt: string | null;
  ClickpayCl: string | null;
  MultiCl: string | null;
  MultiCardAcquAmt: string | null;
  MultiPointAmt: string | null;
  MultiCouponAmt: string | null;
  RcptType: string | null;
  RcptTID: string | null;
  RcptAuthCode: string | null;
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
// GraphQL fragment: Fbooking
// ====================================================

export interface Fbooking_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
}

export interface Fbooking_payment {
  __typename: "Payment";
  Amt: number | null;
  PayMethod: string | null;
  CardNo: string | null;
  AuthDate: string | null;
}

export interface Fbooking {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  adultCount: number;
  kidCount: number;
  babyCount: number;
  totalCount: number;
  message: string | null;
  status: string | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: Fbooking_product;
  payment: Fbooking_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  isPaid: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fuser {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fuser_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fportfolio
// ====================================================

export interface Fportfolio_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fportfolio_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fportfolio_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
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

export interface Fproduct_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fproduct_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fproduct_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fquestion
// ====================================================

export interface Fquestion_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  email: string;
}

export interface Fquestion_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fquestion_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fquestion {
  __typename: "Question";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: Fquestion_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: Fquestion_attachFiles[] | null;
  thumb: Fquestion_thumb | null;
  viewCount: number;
  likeCount: number;
  status: QuestionStatus;
  no: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fnews
// ====================================================

export interface Fnews_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fnews_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  acceptEamil: boolean;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fnews_author_busiRegistration | null;
  /**
   * 개인법인인지 아닌지 체크함
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  phoneNumber: string;
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
 * 보드종류
 */
export enum BoardType {
  PRODUCT = "PRODUCT",
  QUESTION = "QUESTION",
}

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
  CULTURE = "CULTURE",
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
 * 질문 상태
 */
export enum QuestionStatus {
  COMPLETE = "COMPLETE",
  READY = "READY",
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
 * 인증 타겟 Enum
 */
export enum VerificationEvent {
  NotificationSenderAdd = "NotificationSenderAdd",
  SignInWithEmail = "SignInWithEmail",
  SignInWithPhone = "SignInWithPhone",
  UserFindEmail = "UserFindEmail",
  UserResetPassword = "UserResetPassword",
  UserUpdateInfo = "UserUpdateInfo",
  UserVerifyEmail = "UserVerifyEmail",
  UserVerifyPhone = "UserVerifyPhone",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationTarget {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
}

/**
 * Auto generated sort type
 */
export enum _BoardSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
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
export enum _BookingSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _NewsSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
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
export enum _PaymentSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _PortfolioSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
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
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
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
export enum _QuestionSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
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
export enum _UserSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
}

export interface AddUserInput {
  nickName: string;
  address_detail: string;
  name: string;
  phoneNumber: string;
  email: any;
  pw: string;
  role: UserRole;
  brith_date: string;
  address: string;
  acceptSms?: boolean | null;
  acceptEamil?: boolean | null;
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

export interface BookingUpdateInput {
  memo?: string | null;
  message?: string | null;
  babyCount?: number | null;
  kidCount?: number | null;
  adultCount?: number | null;
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
}

export interface BookingsCreateInput {
  product: string;
  message?: string | null;
  babyCount: number;
  kidCount: number;
  adultCount: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface CategoryCreateInput {
  label: string;
}

export interface CategoryUpdateInput {
  label?: string | null;
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

export interface QuestionCreateInput {
  title: string;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  productId: string;
}

export interface QuestionUpdateInput {
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
  status?: QuestionStatus | null;
}

export interface UserUpdateInput {
  busi_department?: string | null;
  nickName?: string | null;
  acceptSms?: boolean | null;
  busiRegistration?: FileCreateInput | null;
  acceptEamil?: boolean | null;
  address_detail?: string | null;
  phoneNumber?: string | null;
  name?: string | null;
  email?: any | null;
  pw?: string | null;
  role?: UserRole | null;
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
  profileImg?: FileCreateInput | null;
}

export interface _BoardFilter {
  AND?: _BoardFilter[] | null;
  OR?: _BoardFilter[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
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
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _BookingFilter {
  AND?: _BookingFilter[] | null;
  OR?: _BookingFilter[] | null;
  status_eq?: string | null;
  status_not_eq?: string | null;
  status_in?: string[] | null;
  settleStatus_eq?: string | null;
  settleStatus_not_eq?: string | null;
  settleStatus_in?: string[] | null;
  groupCode_eq?: string | null;
  groupCode_not_eq?: string | null;
  groupCode_in?: string[] | null;
  product_eq?: string | null;
  product_not_eq?: string | null;
  product_in?: string[] | null;
  seller_eq?: string | null;
  seller_not_eq?: string | null;
  seller_in?: string[] | null;
  booker_eq?: string | null;
  booker_not_eq?: string | null;
  booker_in?: string[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _NewsFilter {
  AND?: _NewsFilter[] | null;
  OR?: _NewsFilter[] | null;
  type_eq?: string | null;
  type_not_eq?: string | null;
  type_in?: string[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
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
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _PaymentFilter {
  AND?: _PaymentFilter[] | null;
  OR?: _PaymentFilter[] | null;
  provider_eq?: string | null;
  provider_not_eq?: string | null;
  provider_in?: string[] | null;
  customer_eq?: string | null;
  customer_not_eq?: string | null;
  customer_in?: string[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
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
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
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
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
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
  categoryId_eq?: string | null;
  categoryId_not_eq?: string | null;
  categoryId_in?: string[] | null;
  settlemtId_eq?: string | null;
  settlemtId_not_eq?: string | null;
  settlemtId_in?: string[] | null;
  address_eq?: string | null;
  address_not_eq?: string | null;
  address_contains?: string | null;
  address_not_contains?: string | null;
  address_in?: string[] | null;
  address_not_in?: string[] | null;
  type_eq?: ProductType | null;
  type_not_eq?: ProductType | null;
  type_in?: ProductType[] | null;
  startDate_eq?: any | null;
  startDate_not_eq?: any | null;
  startDate_lte?: any | null;
  startDate_lt?: any | null;
  startDate_gte?: any | null;
  startDate_gt?: any | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
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
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _QuestionFilter {
  AND?: _QuestionFilter[] | null;
  OR?: _QuestionFilter[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
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
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _UserFilter {
  AND?: _UserFilter[] | null;
  OR?: _UserFilter[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: answerCreate
// ====================================================

export interface answerCreate_AnswerCreate_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface answerCreate_AnswerCreate_data_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  /**
   * 프로필 사진
   */
  profileImg: answerCreate_AnswerCreate_data_author_profileImg | null;
}

export interface answerCreate_AnswerCreate_data {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: answerCreate_AnswerCreate_data_author;
}

export interface answerCreate_AnswerCreate {
  __typename: "AnswerCreateResponse";
  ok: boolean;
  error: string | null;
  data: answerCreate_AnswerCreate_data | null;
}

export interface answerCreate {
  AnswerCreate: answerCreate_AnswerCreate;
}

export interface answerCreateVariables {
  params: AnswerCreateInput;
  questionId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: answerDelete
// ====================================================

export interface answerDelete_AnswerDelete {
  __typename: "AnswerDeleteResponse";
  ok: boolean;
  error: string | null;
}

export interface answerDelete {
  AnswerDelete: answerDelete_AnswerDelete;
}

export interface answerDeleteVariables {
  questionId: string;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: answerUpdate
// ====================================================

export interface answerUpdate_AnswerUpdate_data {
  __typename: "Answer";
  _id: string;
}

export interface answerUpdate_AnswerUpdate {
  __typename: "AnswerUpdateResponse";
  ok: boolean;
  error: string | null;
  data: answerUpdate_AnswerUpdate_data | null;
}

export interface answerUpdate {
  AnswerUpdate: answerUpdate_AnswerUpdate;
}

export interface answerUpdateVariables {
  params: AnswerUpdateInput;
  questionId: string;
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: myBoardList
// ====================================================

export interface myBoardList_MyBoardList_page {
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

export interface myBoardList_MyBoardList_data_thumb {
  __typename: "File";
  uri: string;
}

export interface myBoardList_MyBoardList_data {
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
  thumb: myBoardList_MyBoardList_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  questionStatus: QuestionStatus | null;
  boardType: BoardType;
}

export interface myBoardList_MyBoardList {
  __typename: "IntegratedBoardResponse";
  ok: boolean;
  error: string | null;
  page: myBoardList_MyBoardList_page;
  data: myBoardList_MyBoardList_data[];
}

export interface myBoardList {
  MyBoardList: myBoardList_MyBoardList;
}

export interface myBoardListVariables {
  pageInput: pageInput;
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

export interface bookingList_BookingList_data_product_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface bookingList_BookingList_data_product_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface bookingList_BookingList_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  contents: string;
  category: bookingList_BookingList_data_product_category | null;
  status: ProductStatus;
  inOrNor: string;
  info: string;
  caution: string;
  images: bookingList_BookingList_data_product_images[] | null;
  /**
   * 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  dateRange: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
}

export interface bookingList_BookingList_data_payment {
  __typename: "Payment";
  payMethod: PayMethod;
  status: PaymentStatus;
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
  bookingPrice: number;
  status: BookingStatus | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: bookingList_BookingList_data_product;
  payment: bookingList_BookingList_data_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
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
// GraphQL mutation operation: bookingCancel
// ====================================================

export interface bookingCancel_BookingCancel_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
}

export interface bookingCancel_BookingCancel_data_payment {
  __typename: "Payment";
  payMethod: PayMethod;
}

export interface bookingCancel_BookingCancel_data {
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
  bookingPrice: number;
  status: BookingStatus | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: bookingCancel_BookingCancel_data_product;
  payment: bookingCancel_BookingCancel_data_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
}

export interface bookingCancel_BookingCancel {
  __typename: "BookingCancelResponse";
  ok: boolean;
  error: string | null;
  data: bookingCancel_BookingCancel_data | null;
}

export interface bookingCancel {
  BookingCancel: bookingCancel_BookingCancel;
}

export interface bookingCancelVariables {
  reason: string;
  bookingId: string;
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
  payMethod: PayMethod;
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
  bookingPrice: number;
  status: BookingStatus | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: bookingsCreate_BookingsCreate_data_product;
  payment: bookingsCreate_BookingsCreate_data_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
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
  payMethod: PayMethod;
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
  payMethod: PayMethod;
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
  bookingPrice: number;
  status: BookingStatus | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: bookingFindByCode_BookingFindByCode_data_product;
  payment: bookingFindByCode_BookingFindByCode_data_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
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
  type: CategoryType;
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
  type: CategoryType;
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
  type: CategoryType;
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
  type: CategoryType;
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
  type: CategoryType;
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
// GraphQL query operation: count
// ====================================================

export interface count_Count_data {
  __typename: "Count";
  /**
   * 나의 총 구매갯수
   */
  buyTotalCount: number;
  salesTotalCount: number | null;
  settleUnsolvedRequestCount: number | null;
  productRegistCount: number | null;
  /**
   * 나의 이번달 판매 횟수
   */
  salesOfThisMonth: number;
  /**
   * 나의 저번달 판매 횟수
   */
  salesofLastMonth: number;
  /**
   * 나의 전체 판매 횟수
   */
  totalSalesCount: number;
  /**
   * 나의 현재 받을 수 있는 돈
   */
  settleAvaiableAmount: number;
}

export interface count_Count {
  __typename: "CountResponse";
  ok: boolean;
  error: string | null;
  data: count_Count_data | null;
}

export interface count {
  Count: count_Count;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: countManager
// ====================================================

export interface countManager_Count_data {
  __typename: "Count";
  /**
   * 나의 총 구매갯수
   */
  buyTotalCount: number;
  salesTotalCount: number | null;
  settleUnsolvedRequestCount: number | null;
  productRegistCount: number | null;
  /**
   * 나의 이번달 판매 횟수
   */
  salesOfThisMonth: number;
  /**
   * 나의 저번달 판매 횟수
   */
  salesofLastMonth: number;
  /**
   * 나의 전체 판매 횟수
   */
  totalSalesCount: number;
  /**
   * 나의 현재 받을 수 있는 돈
   */
  settleAvaiableAmount: number;
  /**
   * 전~체 투어수
   */
  totalTourCount: number;
  /**
   * 전~체 체험수
   */
  totalExpCount: number;
  /**
   * 전~체 상품수
   */
  totalProdCount: number;
  /**
   * 마스터용::가입된 총 구매자수
   */
  buyerCount: number;
  /**
   * 판매자(나)의 오늘 총 예약
   */
  todayBookingCount: number;
  /**
   * 마스터용::가입된 비지니스 파트너 인원수
   */
  busiPartnerBCountMaster: number;
  /**
   * 마스터용::가입된 일반 파트너 인원수
   */
  busiPartnerCountMaster: number;
  /**
   * 마스터용::전체 예약수
   */
  totalBookingCountMaster: number;
  /**
   * 마스터용::전체중 대기중인 예약수
   */
  readyBookingCountMaster: number;
  /**
   * 마스터용::전체중 상품중 출발 미정인 수
   */
  determiendProductCountMaster: number;
  /**
   * 마스터용::전체중 상품수
   */
  totalProductCountMaster: number;
  /**
   * 마스터용::전체중 취소한 예약수
   */
  cancelBookingCountMaster: number;
  /**
   * 마스터용::전체중 취소완료한 예약수
   */
  cancelBookingCompleteCount: number;
  /**
   * 마스터용::전체중 완료 예약수
   */
  compeltedBookingCountMaster: number;
  /**
   * 마스터용::전체중 상품중 판매중지수
   */
  cancelProductCountMaster: number;
  /**
   * 마스터용::전체중 상품중 출발 미확정 수
   */
  undeterMinedProductCountMaster: number;
  /**
   * 마스터용::상품 수정 요청수
   */
  cancelRequestCountMaster: number;
  /**
   * 마스터용::상품 생성 요청수
   */
  createRequestCountMaster: number;
  /**
   * 나의 취소 환수금
   */
  cancelReturnPrice: number;
  /**
   * 마스터용::미해결 정산 요청 수
   */
  settlementRequestCountMaster: number;
  /**
   * 마스터용::전체중 상품중 판매완료수
   */
  compeltedProductCountMaster: number;
  /**
   * 마스터용:: 투어 부킹 카운트
   */
  tourBookingCountMaster: number;
  /**
   * 마스터용:: 체험 부킹 카운트
   */
  expBookingCountMaster: number;
  /**
   * 마스터용::멤버 외국인 수
   */
  foreginMemeberCount: number;
  /**
   * 마스터용::내국인 멤버 수
   */
  koreanMemberCount: number;
  /**
   * 마스터용::일반 회원 수
   */
  totalIndiMemeberCount: number;
  /**
   * 마스터용::비지니스 파트너 유저증 승인 유저수
   */
  confimedBusiPartnerCount: number;
  /**
   * 마스터용::비지니스 파트너 유저증 미승인 유저수
   */
  unConfimedBusiPartnerCount: number;
  /**
   * 마스터용::파트너 유저증 확인안된 유저수
   */
  unConfimedPartnerCount: number;
  /**
   * 마스터용::파트너 유저증 확인안된 유저수
   */
  confimedPartnerCount: number;
  /**
   * 마스터용::정산 완료 수
   */
  totalSettlementCount: number;
  /**
   * 마스터용::정산 완료 수
   */
  settlementReadyCountMater: number;
  /**
   * 마스터용::정산 완료 수
   */
  settlementCompleteCountMaster: number;
  /**
   * 마스터용::파트너 회원 수
   */
  totalPartnerMemberCount: number;
  /**
   * 마스터용:: 답변 질문수
   */
  answeredQuestionCount: number;
  /**
   * 마스터용::전체중 판매중 상품수
   */
  openProductCountMaster: number;
  /**
   * 마스터용::미답변 질문수
   */
  unAnsweredQuestionCount: number;
  /**
   * 나의 투어 횟수
   */
  countOfTourBooking: number;
  /**
   * 구매자(나)의 체험 횟수
   */
  countOfExpBooking: number;
}

export interface countManager_Count {
  __typename: "CountResponse";
  ok: boolean;
  error: string | null;
  data: countManager_Count_data | null;
}

export interface countManager {
  Count: countManager_Count;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: feePilicyFindOne
// ====================================================

export interface feePilicyFindOne_FeePolicyFindOne_data_addtionalFees {
  __typename: "AddtionalFees";
  feeName: string;
  type: AddtionalFeesStatus;
  feePercent: number;
  fee: number;
}

export interface feePilicyFindOne_FeePolicyFindOne_data {
  __typename: "FeePolicy";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: FeePolicyStatus;
  niceCardPercent: number;
  jandaCardPercent: number;
  cardPercent: number;
  bankPercent: number;
  storePercent: number;
  addtionalFees: feePilicyFindOne_FeePolicyFindOne_data_addtionalFees[];
}

export interface feePilicyFindOne_FeePolicyFindOne {
  __typename: "FeePolicyFindOneResponse";
  ok: boolean;
  error: string | null;
  data: feePilicyFindOne_FeePolicyFindOne_data | null;
}

export interface feePilicyFindOne {
  FeePolicyFindOne: feePilicyFindOne_FeePolicyFindOne;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: homepage
// ====================================================

export interface homepage_Homepage_data_modal {
  __typename: "Modal";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
}

export interface homepage_Homepage_data {
  __typename: "Homepage";
  logi: string;
  siteDesc: string;
  siteKeyWards: string[];
  siteName: string;
  signUpRedirect: string;
  blacklist: string[];
  loginRedirect: string;
  loginOutRedirect: string;
  PrivacyPolicy: string;
  partnerBpolicy: string;
  usePolicy: string;
  travelerPolicy: string;
  partnerPolicy: string;
  marketingPolic: string;
  thirdPolicy: string;
  modal: homepage_Homepage_data_modal[];
}

export interface homepage_Homepage {
  __typename: "HomepageResponse";
  ok: boolean;
  error: string | null;
  data: homepage_Homepage_data | null;
}

export interface homepage {
  Homepage: homepage_Homepage;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: homepageUpdate
// ====================================================

export interface homepageUpdate_HomepageUpdate_data_modal {
  __typename: "Modal";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
}

export interface homepageUpdate_HomepageUpdate_data {
  __typename: "Homepage";
  logi: string;
  siteDesc: string;
  siteKeyWards: string[];
  siteName: string;
  signUpRedirect: string;
  blacklist: string[];
  loginRedirect: string;
  loginOutRedirect: string;
  PrivacyPolicy: string;
  partnerBpolicy: string;
  usePolicy: string;
  travelerPolicy: string;
  partnerPolicy: string;
  marketingPolic: string;
  thirdPolicy: string;
  modal: homepageUpdate_HomepageUpdate_data_modal[];
}

export interface homepageUpdate_HomepageUpdate {
  __typename: "HomepageUpdateResponse";
  ok: boolean;
  error: string | null;
  data: homepageUpdate_HomepageUpdate_data | null;
}

export interface homepageUpdate {
  HomepageUpdate: homepageUpdate_HomepageUpdate;
}

export interface homepageUpdateVariables {
  params: HomepageUpdateInput;
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

export interface newsFindById_NewsFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: newsFindById_NewsFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: newsFindById_NewsFindById_data_author_profileImg | null;
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

export interface newsList_NewsList_data_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: newsList_NewsList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: newsList_NewsList_data_author_profileImg | null;
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
// GraphQL query operation: notificationHistory
// ====================================================

export interface notificationHistory_NotificationHistory_page {
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

export interface notificationHistory_NotificationHistory_data {
  __typename: "SmsHistoryItem" | "EmailHistoryItem";
  _id: string;
  createdAt: any;
  updatedAt: any;
  method: NotificationMethod;
  sender: string;
  receivers: string[];
  title: string | null;
  /**
   * Template에서 변수가 치환되지 않은 채로 출력 될 수 있음.
   */
  content: string;
  count: number;
  successCount: number;
  errorCount: number;
  /**
   * 전송 후 남은 포인트
   */
  pointRemains: number;
  /**
   * 포인트 소모량
   */
  pointConsumed: number;
}

export interface notificationHistory_NotificationHistory {
  __typename: "INotificationHistoryItemListResponse";
  ok: boolean;
  error: string | null;
  page: notificationHistory_NotificationHistory_page;
  data: notificationHistory_NotificationHistory_data[];
}

export interface notificationHistory {
  NotificationHistory: notificationHistory_NotificationHistory;
}

export interface notificationHistoryVariables {
  sort?: _INotificationHistoryItemSort[] | null;
  filter?: _INotificationHistoryItemFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationSenderPhoneAddStart
// ====================================================

export interface notificationSenderPhoneAddStart_NotificationSenderPhoneAddStart {
  __typename: "VerificationResponse";
  ok: boolean;
  error: string | null;
}

export interface notificationSenderPhoneAddStart {
  NotificationSenderPhoneAddStart: notificationSenderPhoneAddStart_NotificationSenderPhoneAddStart;
}

export interface notificationSenderPhoneAddStartVariables {
  target: VerificationTarget;
  payload: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationSenderAddComplete
// ====================================================

export interface notificationSenderAddComplete_NotificationSenderAddComplete {
  __typename: "VerificationResponse";
  ok: boolean;
  error: string | null;
}

export interface notificationSenderAddComplete {
  NotificationSenderAddComplete: notificationSenderAddComplete_NotificationSenderAddComplete;
}

export interface notificationSenderAddCompleteVariables {
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
// GraphQL mutation operation: smsTemplateUpdate
// ====================================================

export interface smsTemplateUpdate_SmsTemplateUpdate {
  __typename: "SmsTemplateUpdateResponse";
  ok: boolean;
  error: string | null;
}

export interface smsTemplateUpdate {
  SmsTemplateUpdate: smsTemplateUpdate_SmsTemplateUpdate;
}

export interface smsTemplateUpdateVariables {
  input: SmsTemplateUpdateInput;
  templateId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smstemplateCreate
// ====================================================

export interface smstemplateCreate_SmsTemplateCreate {
  __typename: "SmsTemplateCreateResponse";
  ok: boolean;
  error: string | null;
}

export interface smstemplateCreate {
  SmsTemplateCreate: smstemplateCreate_SmsTemplateCreate;
}

export interface smstemplateCreateVariables {
  input: SmsTemplateCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smstemplateDelete
// ====================================================

export interface smstemplateDelete_SmsTemplateDelete {
  __typename: "SmsTemplateDeleteResponse";
  ok: boolean;
  error: string | null;
}

export interface smstemplateDelete {
  SmsTemplateDelete: smstemplateDelete_SmsTemplateDelete;
}

export interface smstemplateDeleteVariables {
  templateId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smsSendSingle
// ====================================================

export interface smsSendSingle_SmsSendSingle {
  __typename: "SmsSingleMessageSendResponse";
  ok: boolean;
  error: string | null;
}

export interface smsSendSingle {
  SmsSendSingle: smsSendSingle_SmsSendSingle;
}

export interface smsSendSingleVariables {
  input: SmsSendInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smsSendWithTemplate
// ====================================================

export interface smsSendWithTemplate_SmsSendWithTemplate {
  __typename: "SmsTemplateMessageSendResponse";
  ok: boolean;
  error: string | null;
}

export interface smsSendWithTemplate {
  SmsSendWithTemplate: smsSendWithTemplate_SmsSendWithTemplate;
}

export interface smsSendWithTemplateVariables {
  input: SmsSendWithTemplateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: templateList
// ====================================================

export interface templateList_TemplateList_page {
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

export interface templateList_TemplateList_data_triggers_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface templateList_TemplateList_data_triggers {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: templateList_TemplateList_data_triggers_tags[];
}

export interface templateList_TemplateList_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface templateList_TemplateList_data {
  __typename: "TemplateSms";
  _id: string;
  createdAt: any;
  name: string;
  description: string | null;
  content: string;
  /**
   * 코드겐용
   */
  _replaceEnum: ReplaceString | null;
  triggers: templateList_TemplateList_data_triggers[];
  tags: templateList_TemplateList_data_tags[];
  replacers: string[];
}

export interface templateList_TemplateList {
  __typename: "TemplateListResponse";
  ok: boolean;
  error: string | null;
  page: templateList_TemplateList_page;
  data: templateList_TemplateList_data[];
}

export interface templateList {
  TemplateList: templateList_TemplateList;
}

export interface templateListVariables {
  sort?: _ITemplateSort[] | null;
  filter?: _ITemplateFilter | null;
  pageInput: pageInput;
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

export interface paymentList_PaymentList_data_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface paymentList_PaymentList_data {
  __typename: "Payment";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  payMethod: PayMethod;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  groupCode: string;
  history: paymentList_PaymentList_data_history[];
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

export interface portfolioFindById_PortfolioFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: portfolioFindById_PortfolioFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: portfolioFindById_PortfolioFindById_data_author_profileImg | null;
}

export interface portfolioFindById_PortfolioFindById_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioFindById_PortfolioFindById_data_category {
  __typename: "Category";
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
  category: portfolioFindById_PortfolioFindById_data_category | null;
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

export interface portfolioList_PortfolioList_data_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: portfolioList_PortfolioList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: portfolioList_PortfolioList_data_author_profileImg | null;
}

export interface portfolioList_PortfolioList_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioList_PortfolioList_data_category {
  __typename: "Category";
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
  category: portfolioList_PortfolioList_data_category | null;
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

export interface productDelete_ProductDelete_data_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completePeople: number;
  readyPoeple: number;
  cancelCompletePeople: number;
  cancelPeople: number;
}

export interface productDelete_ProductDelete_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productDelete_ProductDelete_data_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productDelete_ProductDelete_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: productDelete_ProductDelete_data_author_profileImg | null;
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
  dateRange: number;
  adminMemo: string;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: productDelete_ProductDelete_data_bookerSummary;
  author: productDelete_ProductDelete_data_author | null;
  category: productDelete_ProductDelete_data_category | null;
  status: ProductStatus;
  itinerary: productDelete_ProductDelete_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: productDelete_ProductDelete_data_images[] | null;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
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

export interface productList_ProductList_data_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completePeople: number;
  readyPoeple: number;
  cancelCompletePeople: number;
  cancelPeople: number;
}

export interface productList_ProductList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productList_ProductList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: productList_ProductList_data_author_profileImg | null;
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

export interface productList_ProductList_data_bookings {
  __typename: "Booking";
  _id: string;
  status: BookingStatus | null;
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
  dateRange: number;
  adminMemo: string;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: productList_ProductList_data_bookerSummary;
  author: productList_ProductList_data_author | null;
  category: productList_ProductList_data_category | null;
  status: ProductStatus;
  itinerary: productList_ProductList_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: productList_ProductList_data_images[] | null;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  bookings: productList_ProductList_data_bookings[];
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

export interface productFindById_ProductFindById_data_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completePeople: number;
  readyPoeple: number;
  cancelCompletePeople: number;
  cancelPeople: number;
}

export interface productFindById_ProductFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productFindById_ProductFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: productFindById_ProductFindById_data_author_profileImg | null;
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

export interface productFindById_ProductFindById_data_questions_answers_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindById_ProductFindById_data_questions_answers_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  /**
   * 프로필 사진
   */
  profileImg: productFindById_ProductFindById_data_questions_answers_author_profileImg | null;
}

export interface productFindById_ProductFindById_data_questions_answers {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: productFindById_ProductFindById_data_questions_answers_author;
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

export interface productFindById_ProductFindById_data_questions_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindById_ProductFindById_data_questions_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  email: string;
  /**
   * 프로필 사진
   */
  profileImg: productFindById_ProductFindById_data_questions_author_profileImg | null;
}

export interface productFindById_ProductFindById_data_questions {
  __typename: "Question";
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
  status: QuestionStatus;
  answers: productFindById_ProductFindById_data_questions_answers[] | null;
  keyWards: string[] | null;
  attachFiles: productFindById_ProductFindById_data_questions_attachFiles[] | null;
  thumb: productFindById_ProductFindById_data_questions_thumb | null;
  viewCount: number;
  likeCount: number;
  no: number;
  author: productFindById_ProductFindById_data_questions_author | null;
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
  dateRange: number;
  adminMemo: string;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: productFindById_ProductFindById_data_bookerSummary;
  author: productFindById_ProductFindById_data_author | null;
  category: productFindById_ProductFindById_data_category | null;
  status: ProductStatus;
  itinerary: productFindById_ProductFindById_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: productFindById_ProductFindById_data_images[] | null;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
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
// GraphQL query operation: productFindByIdForSeller
// ====================================================

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completePeople: number;
  readyPoeple: number;
  cancelCompletePeople: number;
  cancelPeople: number;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_author {
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productFindByIdForSeller_ProductFindByIdForSeller_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: productFindByIdForSeller_ProductFindByIdForSeller_data_author_profileImg | null;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: productFindByIdForSeller_ProductFindByIdForSeller_data_itinerary_images[];
  date: any;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker {
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_profileImg | null;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_payment_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_payment {
  __typename: "Payment";
  payMethod: PayMethod;
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  groupCode: string;
  history: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_payment_history[];
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings {
  __typename: "Booking";
  booker: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker | null;
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  adultCount: number;
  kidCount: number;
  babyCount: number;
  totalCount: number;
  message: string | null;
  bookingPrice: number;
  status: BookingStatus | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_product;
  payment: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  code: string;
  contents: string;
  dateRange: number;
  adminMemo: string;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: productFindByIdForSeller_ProductFindByIdForSeller_data_bookerSummary;
  author: productFindByIdForSeller_ProductFindByIdForSeller_data_author | null;
  category: productFindByIdForSeller_ProductFindByIdForSeller_data_category | null;
  status: ProductStatus;
  itinerary: productFindByIdForSeller_ProductFindByIdForSeller_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: productFindByIdForSeller_ProductFindByIdForSeller_data_images[] | null;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  /**
   * 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  bookings: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings[];
}

export interface productFindByIdForSeller_ProductFindByIdForSeller {
  __typename: "ProductFindByIdForSellerResponse";
  ok: boolean;
  error: string | null;
  data: productFindByIdForSeller_ProductFindByIdForSeller_data | null;
}

export interface productFindByIdForSeller {
  ProductFindByIdForSeller: productFindByIdForSeller_ProductFindByIdForSeller;
}

export interface productFindByIdForSellerVariables {
  _id: string;
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

export interface getContext_GetProfile_data_profileImg {
  __typename: "File";
  uri: string;
}

export interface getContext_GetProfile_data_unReadNoties {
  __typename: "SystemNoti";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

export interface getContext_GetProfile_data_bookings_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
}

export interface getContext_GetProfile_data_bookings_payment {
  __typename: "Payment";
  payMethod: PayMethod;
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
  bookingPrice: number;
  status: BookingStatus | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: getContext_GetProfile_data_bookings_product;
  payment: getContext_GetProfile_data_bookings_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
  seller: getContext_GetProfile_data_bookings_seller;
}

export interface getContext_GetProfile_data_products_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completePeople: number;
  readyPoeple: number;
  cancelCompletePeople: number;
  cancelPeople: number;
}

export interface getContext_GetProfile_data_products_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_GetProfile_data_products_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: getContext_GetProfile_data_products_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: getContext_GetProfile_data_products_author_profileImg | null;
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
  dateRange: number;
  adminMemo: string;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: getContext_GetProfile_data_products_bookerSummary;
  author: getContext_GetProfile_data_products_author | null;
  category: getContext_GetProfile_data_products_category | null;
  status: ProductStatus;
  itinerary: getContext_GetProfile_data_products_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: getContext_GetProfile_data_products_images[] | null;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: getContext_GetProfile_data_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: getContext_GetProfile_data_profileImg | null;
  unReadNoties: getContext_GetProfile_data_unReadNoties[] | null;
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
  type: CategoryType;
}

export interface getContext_CategoryList {
  __typename: "CategoryListResponse";
  ok: boolean;
  error: string | null;
  data: getContext_CategoryList_data[] | null;
}

export interface getContext_Homepage_data_modal {
  __typename: "Modal";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
}

export interface getContext_Homepage_data {
  __typename: "Homepage";
  logi: string;
  siteDesc: string;
  siteKeyWards: string[];
  siteName: string;
  signUpRedirect: string;
  blacklist: string[];
  loginRedirect: string;
  loginOutRedirect: string;
  PrivacyPolicy: string;
  partnerBpolicy: string;
  usePolicy: string;
  travelerPolicy: string;
  partnerPolicy: string;
  marketingPolic: string;
  thirdPolicy: string;
  modal: getContext_Homepage_data_modal[];
}

export interface getContext_Homepage {
  __typename: "HomepageResponse";
  ok: boolean;
  error: string | null;
  data: getContext_Homepage_data | null;
}

export interface getContext {
  GetProfile: getContext_GetProfile;
  CategoryList: getContext_CategoryList;
  Homepage: getContext_Homepage;
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

export interface questionList_QuestionList_data_answers_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface questionList_QuestionList_data_answers_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  /**
   * 프로필 사진
   */
  profileImg: questionList_QuestionList_data_answers_author_profileImg | null;
}

export interface questionList_QuestionList_data_answers {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: questionList_QuestionList_data_answers_author;
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

export interface questionList_QuestionList_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface questionList_QuestionList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  email: string;
  /**
   * 프로필 사진
   */
  profileImg: questionList_QuestionList_data_author_profileImg | null;
}

export interface questionList_QuestionList_data_product_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
}

export interface questionList_QuestionList_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  author: questionList_QuestionList_data_product_author | null;
}

export interface questionList_QuestionList_data {
  __typename: "Question";
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
  status: QuestionStatus;
  answers: questionList_QuestionList_data_answers[] | null;
  keyWards: string[] | null;
  attachFiles: questionList_QuestionList_data_attachFiles[] | null;
  thumb: questionList_QuestionList_data_thumb | null;
  viewCount: number;
  likeCount: number;
  no: number;
  author: questionList_QuestionList_data_author | null;
  product: questionList_QuestionList_data_product;
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

export interface questionFindById_QuestionFindById_data_answers_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface questionFindById_QuestionFindById_data_answers_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  /**
   * 프로필 사진
   */
  profileImg: questionFindById_QuestionFindById_data_answers_author_profileImg | null;
}

export interface questionFindById_QuestionFindById_data_answers {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: questionFindById_QuestionFindById_data_answers_author;
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

export interface questionFindById_QuestionFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface questionFindById_QuestionFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  email: string;
  /**
   * 프로필 사진
   */
  profileImg: questionFindById_QuestionFindById_data_author_profileImg | null;
}

export interface questionFindById_QuestionFindById_data_product_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
}

export interface questionFindById_QuestionFindById_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  author: questionFindById_QuestionFindById_data_product_author | null;
}

export interface questionFindById_QuestionFindById_data {
  __typename: "Question";
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
  status: QuestionStatus;
  answers: questionFindById_QuestionFindById_data_answers[] | null;
  keyWards: string[] | null;
  attachFiles: questionFindById_QuestionFindById_data_attachFiles[] | null;
  thumb: questionFindById_QuestionFindById_data_thumb | null;
  viewCount: number;
  likeCount: number;
  no: number;
  author: questionFindById_QuestionFindById_data_author | null;
  product: questionFindById_QuestionFindById_data_product;
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
// GraphQL query operation: settlementFindById
// ====================================================

export interface settlementFindById_SettlementFindById_data_product_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completePeople: number;
  readyPoeple: number;
  cancelCompletePeople: number;
  cancelPeople: number;
}

export interface settlementFindById_SettlementFindById_data_product_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementFindById_SettlementFindById_data_product_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface settlementFindById_SettlementFindById_data_product_author {
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: settlementFindById_SettlementFindById_data_product_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: settlementFindById_SettlementFindById_data_product_author_profileImg | null;
}

export interface settlementFindById_SettlementFindById_data_product_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface settlementFindById_SettlementFindById_data_product_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementFindById_SettlementFindById_data_product_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: settlementFindById_SettlementFindById_data_product_itinerary_images[];
  date: any;
}

export interface settlementFindById_SettlementFindById_data_product_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementFindById_SettlementFindById_data_product_bookings_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
}

export interface settlementFindById_SettlementFindById_data_product_bookings_payment_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface settlementFindById_SettlementFindById_data_product_bookings_payment {
  __typename: "Payment";
  payMethod: PayMethod;
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  groupCode: string;
  history: settlementFindById_SettlementFindById_data_product_bookings_payment_history[];
}

export interface settlementFindById_SettlementFindById_data_product_bookings {
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
  bookingPrice: number;
  status: BookingStatus | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: settlementFindById_SettlementFindById_data_product_bookings_product;
  payment: settlementFindById_SettlementFindById_data_product_bookings_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
}

export interface settlementFindById_SettlementFindById_data_product {
  __typename: "Product";
  _id: string;
  code: string;
  title: string;
  status: ProductStatus;
  adult_price: number;
  kids_price: number;
  baby_price: number;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  contents: string;
  dateRange: number;
  adminMemo: string;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: settlementFindById_SettlementFindById_data_product_bookerSummary;
  author: settlementFindById_SettlementFindById_data_product_author | null;
  category: settlementFindById_SettlementFindById_data_product_category | null;
  itinerary: settlementFindById_SettlementFindById_data_product_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: settlementFindById_SettlementFindById_data_product_images[] | null;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  bookingCount: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  bookings: settlementFindById_SettlementFindById_data_product_bookings[];
}

export interface settlementFindById_SettlementFindById_data {
  __typename: "Settlement";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: SettlementStatus;
  totalPrice: number;
  cardPrice: number;
  bankPrice: number;
  settlementPrice: number;
  totalFee: number;
  cardFee: number;
  niceCardFee: number;
  jandaCardFee: number;
  bankFee: number;
  storeFee: number;
  additionFeeSum: number;
  jandaFee: number;
  cancelReturnPriceTotal: number;
  cancelReturnPrice: number;
  reserveDiffPrice: number[];
  reserveDiffPriceTotal: number;
  payReqPrice: number;
  requestDate: any | null;
  acceptDate: any | null;
  completeDate: any | null;
  cancelDate: any | null;
  product: settlementFindById_SettlementFindById_data_product;
}

export interface settlementFindById_SettlementFindById {
  __typename: "SettlementFindByIdResponse";
  ok: boolean;
  error: string | null;
  data: settlementFindById_SettlementFindById_data | null;
}

export interface settlementFindById {
  SettlementFindById: settlementFindById_SettlementFindById;
}

export interface settlementFindByIdVariables {
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: settlementList
// ====================================================

export interface settlementList_SettlementList_page {
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

export interface settlementList_SettlementList_data_product_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completePeople: number;
  readyPoeple: number;
  cancelCompletePeople: number;
  cancelPeople: number;
}

export interface settlementList_SettlementList_data_product_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_product_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface settlementList_SettlementList_data_product_author {
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: settlementList_SettlementList_data_product_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: settlementList_SettlementList_data_product_author_profileImg | null;
}

export interface settlementList_SettlementList_data_product_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface settlementList_SettlementList_data_product_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_product_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: settlementList_SettlementList_data_product_itinerary_images[];
  date: any;
}

export interface settlementList_SettlementList_data_product_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_product {
  __typename: "Product";
  _id: string;
  code: string;
  title: string;
  status: ProductStatus;
  adult_price: number;
  kids_price: number;
  baby_price: number;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: settlementList_SettlementList_data_product_bookerSummary;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  contents: string;
  dateRange: number;
  adminMemo: string;
  author: settlementList_SettlementList_data_product_author | null;
  category: settlementList_SettlementList_data_product_category | null;
  itinerary: settlementList_SettlementList_data_product_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: settlementList_SettlementList_data_product_images[] | null;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  bookingCount: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
}

export interface settlementList_SettlementList_data_seller_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_seller_profileImg {
  __typename: "File";
  uri: string;
}

export interface settlementList_SettlementList_data_seller {
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: settlementList_SettlementList_data_seller_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: settlementList_SettlementList_data_seller_profileImg | null;
}

export interface settlementList_SettlementList_data {
  __typename: "Settlement";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: SettlementStatus;
  totalPrice: number;
  cardPrice: number;
  bankPrice: number;
  settlementPrice: number;
  totalFee: number;
  cardFee: number;
  niceCardFee: number;
  jandaCardFee: number;
  bankFee: number;
  storeFee: number;
  additionFeeSum: number;
  jandaFee: number;
  cancelReturnPriceTotal: number;
  cancelReturnPrice: number;
  reserveDiffPrice: number[];
  reserveDiffPriceTotal: number;
  payReqPrice: number;
  requestDate: any | null;
  acceptDate: any | null;
  completeDate: any | null;
  cancelDate: any | null;
  product: settlementList_SettlementList_data_product;
  seller: settlementList_SettlementList_data_seller;
}

export interface settlementList_SettlementList {
  __typename: "SettlementListResponse";
  ok: boolean;
  error: string | null;
  page: settlementList_SettlementList_page;
  data: settlementList_SettlementList_data[];
}

export interface settlementList {
  SettlementList: settlementList_SettlementList;
}

export interface settlementListVariables {
  sort?: _SettlementSort[] | null;
  filter?: _SettlementFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementRequest
// ====================================================

export interface settlementRequest_SettlementRequest {
  __typename: "SettlementRequestResponse";
  ok: boolean;
  error: string | null;
}

export interface settlementRequest {
  SettlementRequest: settlementRequest_SettlementRequest;
}

export interface settlementRequestVariables {
  params: ReturnTargetInput[];
  settlementId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementAccept
// ====================================================

export interface settlementAccept_SettlementAccept {
  __typename: "SettlementAcceptResponse";
  ok: boolean;
  error: string | null;
}

export interface settlementAccept {
  SettlementAccept: settlementAccept_SettlementAccept;
}

export interface settlementAcceptVariables {
  settlementId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementComplete
// ====================================================

export interface settlementComplete_SettlementComplete {
  __typename: "SettlementCompleteResponse";
  ok: boolean;
  error: string | null;
}

export interface settlementComplete {
  SettlementComplete: settlementComplete_SettlementComplete;
}

export interface settlementCompleteVariables {
  settlementId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: unReadSystemNotiFind
// ====================================================

export interface unReadSystemNotiFind_UnReadSystemNotiFind_data {
  __typename: "SystemNoti";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

export interface unReadSystemNotiFind_UnReadSystemNotiFind {
  __typename: "UnReadSystemNotiFindResponse";
  ok: boolean;
  error: string | null;
  data: unReadSystemNotiFind_UnReadSystemNotiFind_data[] | null;
}

export interface unReadSystemNotiFind {
  UnReadSystemNotiFind: unReadSystemNotiFind_UnReadSystemNotiFind;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: systemNotiList
// ====================================================

export interface systemNotiList_SystemNotiList_page {
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

export interface systemNotiList_SystemNotiList_data {
  __typename: "SystemNoti";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

export interface systemNotiList_SystemNotiList {
  __typename: "SystemNotiListResponse";
  ok: boolean;
  error: string | null;
  page: systemNotiList_SystemNotiList_page;
  data: systemNotiList_SystemNotiList_data[];
}

export interface systemNotiList {
  SystemNotiList: systemNotiList_SystemNotiList;
}

export interface systemNotiListVariables {
  sort?: _SystemNotiSort[] | null;
  filter?: _SystemNotiFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: systemNotiRead
// ====================================================

export interface systemNotiRead_SystemNotiRead {
  __typename: "SystemNotiReadResponse";
  ok: boolean;
  error: string | null;
}

export interface systemNotiRead {
  SystemNotiRead: systemNotiRead_SystemNotiRead;
}

export interface systemNotiReadVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: systemNotiHide
// ====================================================

export interface systemNotiHide_SystemNotiHide {
  __typename: "SystemNotiHideResponse";
  ok: boolean;
  error: string | null;
}

export interface systemNotiHide {
  SystemNotiHide: systemNotiHide_SystemNotiHide;
}

export interface systemNotiHideVariables {
  ids: string[];
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
  verificationId: string;
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
  hopeRole?: UserRole | null;
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
// GraphQL mutation operation: verificationStart
// ====================================================

export interface verificationStart_VerificationStart_data {
  __typename: "Verification";
  _id: string;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
}

export interface verificationStart_VerificationStart {
  __typename: "VerificationResponse";
  ok: boolean;
  error: string | null;
  data: verificationStart_VerificationStart_data | null;
}

export interface verificationStart {
  /**
   * 인증 요청을 하는 함수, 이메일 또는 핸드폰으로 인증번호를 발신하고 인증 테이블에 요청 추가함
   */
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

export interface userList_UserList_data_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: userList_UserList_data_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: userList_UserList_data_profileImg | null;
}

export interface userList_UserList {
  __typename: "UserListResponse";
  ok: boolean;
  error: string | null;
  page: userList_UserList_page;
  data: userList_UserList_data[];
}

export interface userList {
  UserList: userList_UserList;
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

export interface userFindById_UserFindById_data_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: userFindById_UserFindById_data_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: userFindById_UserFindById_data_profileImg | null;
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
// GraphQL fragment: Fanswer
// ====================================================

export interface Fanswer_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fanswer_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  /**
   * 프로필 사진
   */
  profileImg: Fanswer_author_profileImg | null;
}

export interface Fanswer {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: Fanswer_author;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FbookingByCode
// ====================================================

export interface FbookingByCode_product_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completePeople: number;
  readyPoeple: number;
  cancelCompletePeople: number;
  cancelPeople: number;
}

export interface FbookingByCode_product_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface FbookingByCode_product_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: FbookingByCode_product_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: FbookingByCode_product_author_profileImg | null;
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
  dateRange: number;
  adminMemo: string;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: FbookingByCode_product_bookerSummary;
  author: FbookingByCode_product_author | null;
  category: FbookingByCode_product_category | null;
  status: ProductStatus;
  itinerary: FbookingByCode_product_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: FbookingByCode_product_images[] | null;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
}

export interface FbookingByCode_payment_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface FbookingByCode_payment {
  __typename: "Payment";
  payMethod: PayMethod;
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  groupCode: string;
  history: FbookingByCode_payment_history[];
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
  bookingPrice: number;
  status: BookingStatus | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: FbookingByCode_product;
  payment: FbookingByCode_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FfeePolicy
// ====================================================

export interface FfeePolicy_addtionalFees {
  __typename: "AddtionalFees";
  feeName: string;
  type: AddtionalFeesStatus;
  feePercent: number;
  fee: number;
}

export interface FfeePolicy {
  __typename: "FeePolicy";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: FeePolicyStatus;
  niceCardPercent: number;
  jandaCardPercent: number;
  cardPercent: number;
  bankPercent: number;
  storePercent: number;
  addtionalFees: FfeePolicy_addtionalFees[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpayment
// ====================================================

export interface Fpayment_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface Fpayment {
  __typename: "Payment";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  payMethod: PayMethod;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  groupCode: string;
  history: Fpayment_history[];
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
  type: CategoryType;
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

export interface Fuser_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fuser_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fuser_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: Fuser_profileImg | null;
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
  payMethod: PayMethod;
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
  bookingPrice: number;
  status: BookingStatus | null;
  memo: string | null;
  code: string;
  groupCode: string;
  product: Fbooking_product;
  payment: Fbooking_payment | null;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
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

export interface Fproduct_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completePeople: number;
  readyPoeple: number;
  cancelCompletePeople: number;
  cancelPeople: number;
}

export interface Fproduct_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fproduct_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fproduct_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: Fproduct_author_profileImg | null;
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
  dateRange: number;
  adminMemo: string;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: Fproduct_bookerSummary;
  author: Fproduct_author | null;
  category: Fproduct_category | null;
  status: ProductStatus;
  itinerary: Fproduct_itinerary[];
  inOrNor: string;
  info: string;
  caution: string;
  images: Fproduct_images[] | null;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
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
// GraphQL fragment: Fmodal
// ====================================================

export interface Fmodal {
  __typename: "Modal";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fhomepage
// ====================================================

export interface Fhomepage_modal {
  __typename: "Modal";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
}

export interface Fhomepage {
  __typename: "Homepage";
  logi: string;
  siteDesc: string;
  siteKeyWards: string[];
  siteName: string;
  signUpRedirect: string;
  blacklist: string[];
  loginRedirect: string;
  loginOutRedirect: string;
  PrivacyPolicy: string;
  partnerBpolicy: string;
  usePolicy: string;
  travelerPolicy: string;
  partnerPolicy: string;
  marketingPolic: string;
  thirdPolicy: string;
  modal: Fhomepage_modal[];
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

export interface Fnews_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fnews_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: Fnews_author_profileImg | null;
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

// ====================================================
// GraphQL fragment: FnotificationTrigger
// ====================================================

export interface FnotificationTrigger_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationTrigger {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: FnotificationTrigger_tags[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsmsTemplate
// ====================================================

export interface FsmsTemplate_triggers_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FsmsTemplate_triggers {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: FsmsTemplate_triggers_tags[];
}

export interface FsmsTemplate_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FsmsTemplate {
  __typename: "TemplateSms";
  _id: string;
  createdAt: any;
  name: string;
  description: string | null;
  content: string;
  /**
   * 코드겐용
   */
  _replaceEnum: ReplaceString | null;
  triggers: FsmsTemplate_triggers[];
  tags: FsmsTemplate_tags[];
  replacers: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationManager
// ====================================================

export interface FnotificationManager_smsPricingTable {
  __typename: "SMSPricingTable";
  SMS: number;
  LMS: number;
  MMS: number;
}

export interface FnotificationManager_templates_triggers_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationManager_templates_triggers {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: FnotificationManager_templates_triggers_tags[];
}

export interface FnotificationManager_templates_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationManager_templates {
  __typename: "TemplateSms";
  _id: string;
  createdAt: any;
  name: string;
  description: string | null;
  content: string;
  /**
   * 코드겐용
   */
  _replaceEnum: ReplaceString | null;
  triggers: FnotificationManager_templates_triggers[];
  tags: FnotificationManager_templates_tags[];
  replacers: string[];
}

export interface FnotificationManager {
  __typename: "NotificationManager";
  smsPricingTable: FnotificationManager_smsPricingTable;
  /**
   * 건당 비용. 단위는 KRW
   */
  emailPricing: number;
  currency: Currency;
  /**
   * Email, SMS 뭘로 보내든 포인트 차감
   */
  pointRemains: number;
  templates: FnotificationManager_templates[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationHistoryItem
// ====================================================

export interface FnotificationHistoryItem {
  __typename: "SmsHistoryItem" | "EmailHistoryItem";
  _id: string;
  createdAt: any;
  updatedAt: any;
  method: NotificationMethod;
  sender: string;
  receivers: string[];
  title: string | null;
  /**
   * Template에서 변수가 치환되지 않은 채로 출력 될 수 있음.
   */
  content: string;
  count: number;
  successCount: number;
  errorCount: number;
  /**
   * 전송 후 남은 포인트
   */
  pointRemains: number;
  /**
   * 포인트 소모량
   */
  pointConsumed: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationSender
// ====================================================

export interface FnotificationSender {
  __typename: "NotificationSender";
  type: NotificationMethod;
  sender: string;
  isVerified: boolean;
  isRegisteredToAligo: boolean;
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

export interface Fportfolio_author_profileImg {
  __typename: "File";
  uri: string;
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
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
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
  /**
   * 담당자 연락처
   */
  manageContact: string;
  gender: GENDER;
  busi_num: string;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fportfolio_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
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
  /**
   * 프로필 사진
   */
  profileImg: Fportfolio_author_profileImg | null;
}

export interface Fportfolio_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fportfolio_category {
  __typename: "Category";
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
  category: Fportfolio_category | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fquestion
// ====================================================

export interface Fquestion_answers_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fquestion_answers_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  /**
   * 프로필 사진
   */
  profileImg: Fquestion_answers_author_profileImg | null;
}

export interface Fquestion_answers {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: Fquestion_answers_author;
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

export interface Fquestion_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fquestion_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  email: string;
  /**
   * 프로필 사진
   */
  profileImg: Fquestion_author_profileImg | null;
}

export interface Fquestion {
  __typename: "Question";
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
  status: QuestionStatus;
  answers: Fquestion_answers[] | null;
  keyWards: string[] | null;
  attachFiles: Fquestion_attachFiles[] | null;
  thumb: Fquestion_thumb | null;
  viewCount: number;
  likeCount: number;
  no: number;
  author: Fquestion_author | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffeepolicy
// ====================================================

export interface Ffeepolicy {
  __typename: "FeePolicy";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: FeePolicyStatus;
  niceCardPercent: number;
  jandaCardPercent: number;
  cardPercent: number;
  bankPercent: number;
  storePercent: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fsettlement
// ====================================================

export interface Fsettlement_product {
  __typename: "Product";
  _id: string;
  code: string;
  title: string;
  status: ProductStatus;
  adult_price: number;
  kids_price: number;
  baby_price: number;
}

export interface Fsettlement {
  __typename: "Settlement";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: SettlementStatus;
  totalPrice: number;
  cardPrice: number;
  bankPrice: number;
  settlementPrice: number;
  totalFee: number;
  cardFee: number;
  niceCardFee: number;
  jandaCardFee: number;
  bankFee: number;
  storeFee: number;
  additionFeeSum: number;
  jandaFee: number;
  cancelReturnPriceTotal: number;
  cancelReturnPrice: number;
  reserveDiffPrice: number[];
  reserveDiffPriceTotal: number;
  payReqPrice: number;
  requestDate: any | null;
  acceptDate: any | null;
  completeDate: any | null;
  cancelDate: any | null;
  product: Fsettlement_product;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsystemNoti
// ====================================================

export interface FsystemNoti {
  __typename: "SystemNoti";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 질문 상태
 */
export enum AddtionalFeesStatus {
  DEFAULT = "DEFAULT",
  PERCNET = "PERCNET",
}

/**
 * 보드종류
 */
export enum BoardType {
  PRODUCT = "PRODUCT",
  QUESTION = "QUESTION",
}

/**
 * 예약상태
 */
export enum BookingStatus {
  CANCEL = "CANCEL",
  CANCEL_COMPLETED = "CANCEL_COMPLETED",
  COMPLETE = "COMPLETE",
  READY = "READY",
}

/**
 * 카테고리 타입
 */
export enum CategoryType {
  CUSTOMER_QNA = "CUSTOMER_QNA",
  EXPERIENCE = "EXPERIENCE",
  PORTPOLIO = "PORTPOLIO",
  QNA = "QNA",
  TOUR = "TOUR",
}

/**
 * 통화
 */
export enum Currency {
  JPY = "JPY",
  KRW = "KRW",
  USD = "USD",
}

/**
 * 질문 상태
 */
export enum FeePolicyStatus {
  APPLY = "APPLY",
  WAIT = "WAIT",
}

/**
 * 성별
 */
export enum GENDER {
  FEMALE = "FEMALE",
  MAIL = "MAIL",
}

/**
 * 링크 행동설정
 */
export enum LinkBehavior {
  blank = "blank",
  individual = "individual",
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
 * 노티 수단...
 */
export enum NotificationMethod {
  EMAIL = "EMAIL",
  SMS = "SMS",
}

export enum NotificationTriggerEvent {
  BANK_TRANSFER_BOOKER = "BANK_TRANSFER_BOOKER",
  BANK_TRANSFER_SELLER = "BANK_TRANSFER_SELLER",
  CANCEL_BOOKING_BOOKER = "CANCEL_BOOKING_BOOKER",
  CANCEL_BOOKING_SELLER = "CANCEL_BOOKING_SELLER",
  COMPLETE_BOOKING_BOOKER = "COMPLETE_BOOKING_BOOKER",
  COMPLETE_BOOKING_SELLER = "COMPLETE_BOOKING_SELLER",
  PRODUCT_CONFIRM_REQUEST = "PRODUCT_CONFIRM_REQUEST",
  SETTLEMENT_REQUEST = "SETTLEMENT_REQUEST",
  SIGNUP_INDI_USER = "SIGNUP_INDI_USER",
  SIGNUP_PARNTER_B_USER = "SIGNUP_PARNTER_B_USER",
  SIGNUP_PARTNER_USER = "SIGNUP_PARTNER_USER",
  TRAVEL_CANCELED_BOOKER = "TRAVEL_CANCELED_BOOKER",
  TRAVEL_CANCELED_SELLER = "TRAVEL_CANCELED_SELLER",
  TRAVEL_CONFIRMED_BOOKER = "TRAVEL_CONFIRMED_BOOKER",
  TRAVEL_CONFIRMED_SELLER = "TRAVEL_CONFIRMED_SELLER",
  TRAVEL_WITDRWAL_BOOKER = "TRAVEL_WITDRWAL_BOOKER",
  TRAVEL_WITDRWAL_SELLER = "TRAVEL_WITDRWAL_SELLER",
  WHEN_D_DAY1_BOOKER = "WHEN_D_DAY1_BOOKER",
}

/**
 * 결제 방식
 */
export enum PayMethod {
  BANK = "BANK",
  NICEPAY_CARD = "NICEPAY_CARD",
}

/**
 * 결제 상태
 */
export enum PaymentStatus {
  CANCEL = "CANCEL",
  COMPLETE = "COMPLETE",
  READY = "READY",
}

/**
 * 상품 상태
 */
export enum ProductStatus {
  CANCELD = "CANCELD",
  EXPIRED = "EXPIRED",
  OPEN = "OPEN",
  READY = "READY",
  REFUSED = "REFUSED",
  SOLD = "SOLD",
  UPDATE_REQ = "UPDATE_REQ",
  UPDATE_REQ_REFUSED = "UPDATE_REQ_REFUSED",
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

export enum ReplaceString {
  BOOKERNMAE = "BOOKERNMAE",
  BOOKING_STATUS = "BOOKING_STATUS",
  BOOK_DAY = "BOOK_DAY",
  CANCEL_REASON = "CANCEL_REASON",
  CONFRIM_MESSAGE = "CONFRIM_MESSAGE",
  D_DAY = "D_DAY",
  INTERGRATED_PRODUCT_INFO = "INTERGRATED_PRODUCT_INFO",
  PARTNERNAME = "PARTNERNAME",
  PEOPLE = "PEOPLE",
  PRICE = "PRICE",
  PROD_NAME = "PROD_NAME",
  REFUND_AMT = "REFUND_AMT",
  REQUEST_DATE = "REQUEST_DATE",
  TRAVEL_CONFIRMED = "TRAVEL_CONFIRMED",
  TRAVEL_DATE_YMD = "TRAVEL_DATE_YMD",
  USERNAME = "USERNAME",
}

/**
 * 질문 상태
 */
export enum SettlementStatus {
  ACCEPT = "ACCEPT",
  CANCELED = "CANCELED",
  COMPLETE = "COMPLETE",
  READY = "READY",
  REQUEST = "REQUEST",
}

/**
 * 시스템 노티피케이션 타입
 */
export enum SystemNotiType {
  booking = "booking",
  cancel = "cancel",
  memeber = "memeber",
  system = "system",
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
  SignInWtihGoogle = "SignInWtihGoogle",
  SignInWtihKakao = "SignInWtihKakao",
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
export enum _INotificationHistoryItemSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  sender_asc = "sender_asc",
  sender_desc = "sender_desc",
  successCount_asc = "successCount_asc",
  successCount_desc = "successCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _ITemplateSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
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
export enum _SettlementSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _SystemNotiSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
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
  busiRegistration?: FileCreateInput | null;
  address_detail: string;
  name: string;
  phoneNumber: string;
  email: any;
  pw: string;
  role: UserRole;
  brith_date?: string | null;
  address: string;
  acceptSms?: boolean | null;
  acceptEamil?: boolean | null;
  is_froreginer?: boolean | null;
  gender?: GENDER | null;
  busi_contact?: string | null;
  busi_num?: string | null;
  is_priv_corper?: boolean | null;
  busi_name?: string | null;
  busi_address?: string | null;
  busi_address_detail?: string | null;
  account_number?: string | null;
  busi_department?: string | null;
  bank_name?: string | null;
  partnerName?: string | null;
  manageContact?: string | null;
  manageName?: string | null;
}

export interface AnswerCreateInput {
  content: string;
}

export interface AnswerUpdateInput {
  content?: string | null;
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
  payMethod: PayMethod;
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
  type: CategoryType;
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

export interface GqlTagInput {
  key: string;
  value: string;
}

export interface HomepageUpdateInput {
  logi?: string | null;
  siteDesc?: string | null;
  siteKeyWards?: string[] | null;
  siteName?: string | null;
  signUpRedirect?: string | null;
  blacklist?: string[] | null;
  loginRedirect?: string | null;
  loginOutRedirect?: string | null;
  PrivacyPolicy?: string | null;
  usePolicy?: string | null;
  partnerBpolicy?: string | null;
  travelerPolicy?: string | null;
  partnerPolicy?: string | null;
  marketingPolic?: string | null;
  thirdPolicy?: string | null;
  modal?: ModalInput[] | null;
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

export interface ModalInput {
  link?: string | null;
  startDate: any;
  endDate: any;
  content?: string | null;
  linkBehavior?: LinkBehavior | null;
  style: any;
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

export interface NotificationTriggerCreateInput {
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: GqlTagInput[];
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
  categoryId: string;
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
  categoryId?: string | null;
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
  itinerary: ItineraryCreateInput[];
  inOrNor: string;
  info: string;
  caution: string;
  images?: FileCreateInput[] | null;
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
  categoryId?: string | null;
  status?: ProductStatus | null;
  itinerary?: ItineraryUpdateInput[] | null;
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
  adminMemo?: string | null;
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

/**
 * 수신자번호 + 치환문자열 객체 INPUT
 */
export interface ReceiverWithReplacementSetsInput {
  receivers: string[];
  replacementSets: ReplacementSetInput[];
}

export interface ReplacementSetInput {
  key: string;
  value: string;
}

export interface ReturnTargetInput {
  returnTargetId: string;
  price: number;
}

export interface SmsSendInput {
  sender: string;
  title?: string | null;
  content: string;
  receivers: string[];
  tempalteId?: string | null;
  replacements?: ReplacementSetInput | null;
}

export interface SmsSendWithTemplateInput {
  templateId?: string | null;
  content?: string | null;
  sender: string;
  replacements: ReceiverWithReplacementSetsInput[];
}

export interface SmsTemplateCreateInput {
  name: string;
  content: string;
  description?: string | null;
  triggers?: NotificationTriggerCreateInput[] | null;
  tags?: GqlTagInput[] | null;
}

export interface SmsTemplateUpdateInput {
  content?: string | null;
  name?: string | null;
  description?: string | null;
  triggers?: NotificationTriggerCreateInput[] | null;
  tags?: GqlTagInput[] | null;
}

export interface UserUpdateInput {
  busi_department?: string | null;
  nickName?: string | null;
  acceptSms?: boolean | null;
  busiRegistration?: FileCreateInput | null;
  busi_address_detail?: string | null;
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
  busi_address?: string | null;
  account_number?: string | null;
  bank_name?: string | null;
  profileImg?: FileCreateInput | null;
  partnerName?: string | null;
  manageContact?: string | null;
  isVerifiedManager?: boolean | null;
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
  porductName_eq?: string | null;
  porductName_not_eq?: string | null;
  porductName_in?: string[] | null;
  porductName_contains?: string | null;
  porductKeywards_eq?: string | null;
  porductKeywards_not_eq?: string | null;
  porductKeywards_in?: string[] | null;
  status_eq?: string | null;
  status_not_eq?: string | null;
  status_in?: string[] | null;
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

export interface _INotificationHistoryItemFilter {
  AND?: _INotificationHistoryItemFilter[] | null;
  OR?: _INotificationHistoryItemFilter[] | null;
  method_eq?: NotificationMethod | null;
  method_not_eq?: NotificationMethod | null;
  method_in?: NotificationMethod[] | null;
  method_not_in?: NotificationMethod[] | null;
  sender_eq?: string | null;
  sender_not_eq?: string | null;
  sender_in?: string[] | null;
  sender_not_in?: string[] | null;
  sender_contains?: string | null;
  sender_not_contains?: string | null;
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

export interface _ITemplateFilter {
  AND?: _ITemplateFilter[] | null;
  OR?: _ITemplateFilter[] | null;
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
  products_eq?: string | null;
  products_not_eq?: string | null;
  products_in?: string[] | null;
  bookings_eq?: string | null;
  bookings_not_eq?: string | null;
  bookings_in?: string[] | null;
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
  categoryId_eq?: string | null;
  categoryId_not_eq?: string | null;
  categoryId_in?: string[] | null;
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
  determined_eq?: boolean | null;
  determined_not_eq?: boolean | null;
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
  status_eq?: string | null;
  status_not_eq?: string | null;
  status_in?: string[] | null;
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

export interface _SettlementFilter {
  AND?: _SettlementFilter[] | null;
  OR?: _SettlementFilter[] | null;
  productName_eq?: string | null;
  productName_not_eq?: string | null;
  productName_in?: string[] | null;
  productName_contains?: string | null;
  productCode_eq?: string | null;
  productCode_not_eq?: string | null;
  productCode_in?: string[] | null;
  sellerName_eq?: string | null;
  sellerName_not_eq?: string | null;
  sellerName_contains?: string | null;
  status_eq?: string | null;
  status_not_eq?: string | null;
  status_in?: string[] | null;
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

export interface _SystemNotiFilter {
  AND?: _SystemNotiFilter[] | null;
  OR?: _SystemNotiFilter[] | null;
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
  role_eq?: string | null;
  role_not_eq?: string | null;
  keywards_eq?: string | null;
  keywards_not_eq?: string | null;
  keywards_in?: string[] | null;
  keywards_contains?: string | null;
  keywards_not_in?: string[] | null;
  keywards_not_contains?: string | null;
  keywards_all?: string | null;
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

export interface pageInput {
  page: number;
  cntPerPage: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

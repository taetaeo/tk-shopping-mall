import React from "react";
import {
  SIDE_CATEGORY_MEN,
  SIDE_CATEGORY_WOMEN,
  ROUTE_PATH,
} from "../../../utils/constants";

// 남자페이지 카테고리
const { M_TITLE, M_ALL, M_NEW, M_TOP, M_BOTTOM, M_OUTER, M_SETUP, M_INNER } =
  SIDE_CATEGORY_MEN;
// 여자페이지 카테고리
const {
  W_TITLE,
  W_ALL,
  W_NEW,
  W_TOP,
  W_BOTTOM,
  W_OUTER,
  W_ONE_PIECE,
  W_KNIT_INNER,
  W_SKIRT,
  W_SETUP,
  W_INNER,
} = SIDE_CATEGORY_WOMEN;
// 라우트 경로
const {
  ROUTE_PATH_LIST,
  ROUTE_PATH_CATEGORY_LARGE_CODE,
  ROUTE_PATH_MY_PAGE,
  ROUTE_PATH_MYPAGE_LIKES,
  ROUTE_PATH_MYPAGE_ORDERS,
} = ROUTE_PATH;

export const menItems = [
  {
    name: M_ALL,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=m_all`,
    get: "m_all",
  },
  {
    name: M_NEW,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=m_new`,
    get: "m_new",
  },
  {
    name: M_TOP,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=m_top`,
    get: "m_top",
  },
  {
    name: M_BOTTOM,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=m_bottom`,
    get: "m_bottom",
  },
  {
    name: M_OUTER,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=m_outer`,
    get: "m_outer",
  },
  {
    name: M_SETUP,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=m_setup`,
    get: "m_setup",
  },
  {
    name: M_INNER,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=m_inner`,
    get: "m_inner",
  },
];
export const womenItems = [
  {
    name: W_ALL,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_all`,
    get: "w_all",
  },
  {
    name: W_NEW,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_new`,
    get: "w_new",
  },
  {
    name: W_TOP,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_top`,
    get: "w_top",
  },
  {
    name: W_BOTTOM,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_bottom`,
    get: "w_bottom",
  },
  {
    name: W_OUTER,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_outer`,
    get: "w_outer",
  },
  {
    name: W_ONE_PIECE,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_one_piece`,
    get: "w_one_piece",
  },
  {
    name: W_KNIT_INNER,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_knit_inner`,
    get: "w_knit_inner",
  },
  {
    name: W_SKIRT,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_skirt`,
    get: "w_skirt",
  },
  {
    name: W_SETUP,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_setup`,
    get: "w_setup",
  },
  {
    name: W_INNER,
    route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_inner`,
    get: "w_inner",
  },
];
export const myPageItems = [
  {
    name: "주문 조회 배송",
    route: ROUTE_PATH_MYPAGE_ORDERS,
  },
  {
    name: "취소/교환/반품",
    route: ROUTE_PATH_MYPAGE_ORDERS,
  },
  {
    name: "상품 리뷰",
    route: ROUTE_PATH_MYPAGE_ORDERS,
  },
  {
    name: "나의 드레스룸",
    route: ROUTE_PATH_MYPAGE_ORDERS,
  },
  {
    name: "나의 좋아요",
    route: ROUTE_PATH_MYPAGE_LIKES,
  },
  {
    name: "회원정보수정",
    route: ROUTE_PATH_MYPAGE_ORDERS,
  },
  {
    name: "1:1 문의내역",
    route: ROUTE_PATH_MYPAGE_ORDERS,
  },
];

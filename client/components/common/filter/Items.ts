import { ROUTE_PATH } from "../../../utils/constants";

export const FILTER_MEN = {
  M_ALL: "m_all",
  M_NEW: "m_new",
  M_TOP: "m_top",
  M_BOTTOM: "m_bottom",
  M_OUTER: "m_outer",
  M_SETUP: "m_setup",
  M_INNER: "m_inner",
} as const;

export const FILTER_WOMEN = {
  W_ALL: "w_all",
  W_NEW: "w_new",
  W_TOP: "w_top",
  W_BOTTOM: "w_bottom",
  W_OUTER: "w_outer",
  W_ONE_PIECE: "w_one_piece",
  W_KNIT_INNER: "w_knit_inner",
  W_SKIRT: "w_skirt",
  W_SETUP: "w_setup",
  W_INNER: "w_inner",
} as const;

export type SELECT_FILTER_TYPE = { name: string; value: string };
export type SELECT_FILTER_LIST_TYPE = SELECT_FILTER_TYPE[];
export const SELECT_LIST: SELECT_FILTER_LIST_TYPE = [
  { name: "lowSales", value: "높은 판매순" },
  { name: "hightSales", value: "낮은 판매순" },
  { name: "hightRating", value: "높은 평점순" },
  { name: "lowRating", value: "낮은 평점순" },
];
const {
  ROUTE_PATH_LIST,
  ROUTE_PATH_CATEGORY_LARGE_CODE,
  ROUTE_PATH_CATEGORY_MEDIUM_CODE,
} = ROUTE_PATH;
const { M_ALL, M_NEW, M_TOP, M_BOTTOM, M_INNER, M_OUTER, M_SETUP } = FILTER_MEN;
const {
  W_ALL,
  W_BOTTOM,
  W_INNER,
  W_KNIT_INNER,
  W_NEW,
  W_ONE_PIECE,
  W_OUTER,
  W_SETUP,
  W_SKIRT,
  W_TOP,
} = FILTER_WOMEN;

type item = {
  url: string;
  name: string;
};
export type FilterItemType = {
  name: string;
  item: item[];
};
// 남자
const MTCD_URL = `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=${M_TOP}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const MBCD_URL = `${ROUTE_PATH_LIST}?&${ROUTE_PATH_CATEGORY_LARGE_CODE}=${M_BOTTOM}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const MICD_URL = `${ROUTE_PATH_LIST}?&${ROUTE_PATH_CATEGORY_LARGE_CODE}=${M_INNER}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const MOCD_URL = `${ROUTE_PATH_LIST}?&${ROUTE_PATH_CATEGORY_LARGE_CODE}=${M_OUTER}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const MSUCD_URL = `${ROUTE_PATH_LIST}?&${ROUTE_PATH_CATEGORY_LARGE_CODE}=${M_SETUP}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
// 여자
const WTCD_URL = `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=${W_TOP}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const WBCD_URL = `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=${W_BOTTOM}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const WICD_URL = `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=${W_INNER}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const WOPCD_URL = `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=${W_ONE_PIECE}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const WKICD_URL = `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=${W_KNIT_INNER}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const WOCD_URL = `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=${W_OUTER}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const WSUCD_URL = `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=${W_SETUP}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;
const WSKCD_URL = `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=${W_SKIRT}&${ROUTE_PATH_CATEGORY_MEDIUM_CODE}=`;

export const MEN_FILTER: FilterItemType[] = [
  {
    name: M_ALL,
    item: [],
  },
  {
    name: M_NEW,
    item: [],
  },
  {
    name: M_TOP,
    item: [
      { url: `${MTCD_URL}m_top_all`, name: "전체" },
      { url: `${MTCD_URL}m_top_sweat`, name: "스웨트" },
      { url: `${MTCD_URL}m_top_long`, name: "긴팔티" },
      { url: `${MTCD_URL}m_top_short`, name: "반팔티" },
      { url: `${MTCD_URL}m_top_shirt`, name: "셔츠" },
      { url: `${MTCD_URL}m_top_knit`, name: "니트" },
      { url: `${MTCD_URL}m_top_hoody`, name: "후디" },
      { url: `${MTCD_URL}m_top_zip-up`, name: "집업" },
      { url: `${MTCD_URL}m_top_sleeve`, name: "슬리브리스" },
    ],
  },
  {
    name: M_BOTTOM,
    item: [
      { url: `${MBCD_URL}m_bottom_all`, name: "전체" },
      { url: `${MBCD_URL}m_bottom_denim`, name: "데님" },
      { url: `${MBCD_URL}m_bottom_width`, name: "와이드" },
      { url: `${MBCD_URL}m_bottom_cotton`, name: "코튼" },
      { url: `${MBCD_URL}m_bottom_slacks`, name: "슬랙스" },
      { url: `${MBCD_URL}m_bottom_training`, name: "트레이닝" },
      { url: `${MBCD_URL}m_bottom_straight`, name: "스트레이트" },
      { url: `${MBCD_URL}m_bottom_short`, name: "쇼트" },
      { url: `${MBCD_URL}m_bottom_slim`, name: "슬림" },
    ],
  },
  {
    name: M_INNER,
    item: [
      { url: `${MICD_URL}m_inner_all`, name: "전체" },
      { url: `${MICD_URL}m_inner_underwear`, name: "언더웨어" },
      { url: `${MICD_URL}m_inner_pajamas`, name: "파자마" },
      { url: `${MICD_URL}m_inner_undershirt`, name: "언더셔츠" },
    ],
  },
  {
    name: M_OUTER,
    item: [
      { url: `${MOCD_URL}m_outer_all`, name: "전체" },
      { url: `${MOCD_URL}m_outer_coach`, name: "코치자켓" },
      { url: `${MOCD_URL}m_outer_cardigan`, name: "가디건" },
      { url: `${MOCD_URL}m_outer_winter-coat`, name: "겨울코트" },
      { url: `${MOCD_URL}m_outer_trench`, name: "트렌치코트" },
      { url: `${MOCD_URL}m_outer_leather-jacket`, name: "레더자켓" },
      { url: `${MOCD_URL}m_outer_blazer`, name: "블레이저" },
      { url: `${MOCD_URL}m_outer_McCort`, name: "맥코트" },
      { url: `${MOCD_URL}m_outer_short-padding`, name: "숏패딩" },
      { url: `${MOCD_URL}m_outer_hood-zip-up`, name: "후드집업" },
      { url: `${MOCD_URL}m_outer_mustang`, name: "무스탕" },
      { url: `${MOCD_URL}m_outer_lightweight-padding`, name: "경량패딩" },
      { url: `${MOCD_URL}m_outer_long-padding`, name: "롱패딩" },
    ],
  },
  {
    name: M_SETUP,
    item: [
      { url: `${MSUCD_URL}m_setup_all`, name: "전체" },
      { url: `${MSUCD_URL}m_setup_classic`, name: "클래식" },
      { url: `${MSUCD_URL}m_setup_casual`, name: "캐쥬얼" },
    ],
  },
];

export const WOMEN_FILTER: FilterItemType[] = [
  {
    name: W_ALL,
    item: [],
  },
  {
    name: W_NEW,
    item: [],
  },
  {
    name: W_TOP,
    item: [
      { url: `${WTCD_URL}w_top_all`, name: "전체" },
      { url: `${WTCD_URL}w_top_sweat`, name: "스웨트" },
      { url: `${WTCD_URL}w_top_long`, name: "긴팔티" },
      { url: `${WTCD_URL}w_top_short`, name: "반팔티" },
      { url: `${WTCD_URL}w_top_shirt`, name: "셔츠" },
      { url: `${WTCD_URL}w_top_knit`, name: "니트" },
      { url: `${WTCD_URL}w_top_hoody`, name: "후디" },
      { url: `${WTCD_URL}w_top_zip-up`, name: "집업" },
      { url: `${WTCD_URL}w_top_sleeve`, name: "슬리브리스" },
    ],
  },
  {
    name: W_BOTTOM,
    item: [
      { url: `${WBCD_URL}w_bottom_all`, name: "전체" },
      { url: `${WBCD_URL}w_bottom_denim`, name: "데님" },
      { url: `${WBCD_URL}w_bottom_width`, name: "와이드" },
      { url: `${WBCD_URL}w_bottom_cotton`, name: "코튼" },
      { url: `${WBCD_URL}w_bottom_slacks`, name: "슬랙스" },
      { url: `${WBCD_URL}w_bottom_training`, name: "트레이닝" },
      { url: `${WBCD_URL}w_bottom_straight`, name: "스트레이트" },
      { url: `${WBCD_URL}w_bottom_short`, name: "쇼트" },
      { url: `${WBCD_URL}w_bottom_slim`, name: "슬림" },
      { url: `${WBCD_URL}w_bottom_leggings`, name: "레깅스" },
    ],
  },
  {
    name: W_INNER,
    item: [
      { url: `${WICD_URL}w_inner_all`, name: "전체" },
      { url: `${WICD_URL}w_inner_set`, name: "세트" },
      { url: `${WICD_URL}w_inner_underwear`, name: "팬티" },
      { url: `${WICD_URL}w_inner_bra`, name: "브라" },
    ],
  },
  {
    name: W_ONE_PIECE,
    item: [
      { url: `${WOPCD_URL}w_one_piece_all`, name: "전체" },
      { url: `${WOPCD_URL}w_one_piece_long`, name: "롱" },
      { url: `${WOPCD_URL}w_one_piece_mini`, name: "미니" },
      { url: `${WOPCD_URL}w_one_piece_denim`, name: "데님" },
      { url: `${WOPCD_URL}w_one_piece_jumpsuit`, name: "점프수트" },
    ],
  },
  {
    name: W_KNIT_INNER,
    item: [
      { url: `${WKICD_URL}w_knit_inner_all`, name: "전체" },
      { url: `${WKICD_URL}w_knit_inner_cardigan`, name: "가디건" },
      { url: `${WKICD_URL}w_knit_inner_Crew-Neck`, name: "크루넥" },
      { url: `${WKICD_URL}w_knit_inner_v-neck`, name: "브이넥" },
      { url: `${WKICD_URL}w_knit_inner_turtleneck`, name: "테틀넥" },
      { url: `${WKICD_URL}w_knit_inner_cashmere`, name: "캐시미어" },
    ],
  },
  {
    name: W_SETUP,
    item: [
      { url: `${WSUCD_URL}w_setup_all`, name: "전체" },
      { url: `${WSUCD_URL}w_setup_classic`, name: "클래식" },
      { url: `${WSUCD_URL}W_setup_casual`, name: "캐쥬얼" },
    ],
  },
  {
    name: W_OUTER,
    item: [
      { url: `${WOCD_URL}w_outer_all`, name: "전체" },
      { url: `${WOCD_URL}w_outer_coach`, name: "코치자켓" },
      { url: `${WOCD_URL}w_outer_cardigan`, name: "가디건" },
      { url: `${WOCD_URL}w_outer_winter-coat`, name: "겨울코트" },
      { url: `${WOCD_URL}w_outer_trench`, name: "트렌치코트" },
      { url: `${WOCD_URL}w_outer_leather-jacket`, name: "레더자켓" },
      { url: `${WOCD_URL}w_outer_blaze`, name: "블레이저" },
      { url: `${WOCD_URL}w_outer_McCort`, name: "맥코트" },
      { url: `${WOCD_URL}w_outer_short-padding`, name: "숏패딩" },
      { url: `${WOCD_URL}w_outer_hood-zip-up`, name: "후드집업" },
      { url: `${WOCD_URL}w_outer_mustang`, name: "무스탕" },
      { url: `${WOCD_URL}w_outer_lightweight-padding`, name: "경량패딩" },
      { url: `${WOCD_URL}w_outer_long-padding`, name: "롱패딩" },
    ],
  },
  {
    name: W_SKIRT,
    item: [
      { url: `${WSKCD_URL}w_skirt_all`, name: "전체" },
      { url: `${WSKCD_URL}w_skirt_mini`, name: "롱" },
      { url: `${WSKCD_URL}w_skirt_long`, name: "롱" },
      { url: `${WSKCD_URL}w_skirt_denim`, name: "데님" },
      { url: `${WSKCD_URL}w_skirt_jumpsuit`, name: "점프수트" },
    ],
  },
];

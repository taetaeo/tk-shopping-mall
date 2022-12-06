# :shirt: 온라인 의류 쇼핑몰 프로젝트

## 📌 Summary

**온라인 의류 쇼핑몰 웹사이트입니다.** 평소 이커머스와 프론트엔드에 관심이 많았고, 저와 같은 관심사를 가진 사람들에게 도움이 되었으면 하는 마음으로 개발하였습니다.

혼자서 구현했기에, 부족한 BackEnd를 Firebase 서비스를 통해서 프로토타입으로서 보완하였습니다. Firebase를 처음 사용하면서, Storeage, Firebase Auth 등의 개념을 깊게 다질수 있었고 NoSQL를 실제로 사용하면서 초기에 빠르게 FE만으로 프로토타입을 만드는게 더욱 의미가 있었습니다.

최근에 RestApi에서 GraphQL을 사용이 점점 늘어나면서, 처음으로 사용해보며 Rest api를 하는것과는 다르게, URL을 통해 요청하는 방식이 아닌, 하나의 엔드포인트에 요청하는 쿼리에 따라 다른 응답을 받으면서 원하는 응답값만 받을 수 있다는 장점을 알게 되었습니다. HTTP 요청 횟수를 줄이고, 응답사이즈를 줄이면서 보다 유용성을 느낄 수 있었습니다.

#### \* 주요 기능

- :white_check_mark: 원하는 카테고리에 따라, 쿼리 요청
- :white_check_mark: 상품 데이터 추가 / 업데이트 / 삭제 기능
- :white_check_mark: 장바구니 추가 / 업데이트 / 삭제 기능
- :white_check_mark: 상품 데이터 검색 기능
- :white_check_mark: 무한 스크롤 기능
- :white_check_mark: Firebase Auth를 통한 로그인 기능

<br/>

## 🤔 Background

평소 `29cm` 라는 의류쇼핑몰을 즐겨 찾아봅니다. 다른 의류 쇼핑몰과 비교했을 때, 상품 품목들의 카테고리를 구분하는 것에 신기하게 느꼈고, 무수히 많은 카테고리를 구분하여 상품을 요청 쿼리를 다루고 큰 기능이라 할 수 없지만, 유저마다 장바구니 기능을 구현할 수 있다면 BE에 대한 기본적인 이해도 될 수 있다고 생각하여 이 프로젝트를 구상하게 되었습니다. 이것이 바로 이 프로젝트를 개발하게 된 배경입니다.

<br/>

## 🔍 What I Learned

프론트엔드만 프로젝트를 수행하며 서비스를 구현해보기에는 백엔드에 대한 공부가 부담이었고, 이번에 Firebase를 공부하면서, 프론트엔드 개발자에게는 정말 필요한 서비스겠다는 생각을 하였습니다.

- 개인 프로젝트를 위해 서버가 필요할 때, Firebase를 사용하면 초기에 빠르게 프로토타입을 만들기에 유용합니다.
- 하지만, Firebase에는 스키마가 없기 때문에, 데이터 관리가 쉽지 않습니다. 따라서, 데이터 스키마를 정의할 수 있는 GraphQL을 활용하면 이를 해결할 수 있었습니다.
- 또한, Next.JS로 된 프로젝트를 처음 진행해보면서 CSR과 SSR의 차이와 목적에 맞게 적절한 라이브러리나 프레임워크를 사용하는 것이 중요하다는 것을 알게 되었습니다.
- 단순히 React로 된 CSR의 경우 첫 페이지의 로딩시간이 SSR로 구현한 Next보다는 느렸지만, CSR은 이미 나머지 코드를 받아왔기 때문에 다른 페이지 이동시 빠르게 느꼈지만, SSR를 사용하면서 첫 페이지를 로딩한 과정을 다시 실행하면서 조금 더 느린것을 알게 되었습니다.
- 하지만, SEO(검색최적화)를 위해서는 SSR을 사용하는 것이 유리하고, 정확히 어떤 사용 목적에 따라 CSR과 SSR을 나눠서 사용하는 것이 좋다고 생각하였습니다.
- 예를 들어, 상품 페이지 같은 경우 사용자들을 위한 SEO를 고려해야하지만, 어드민 페이지 같은 경우는 반드시 SEO를 고려할 필요가 없다고 생각하였습니다.
- React-Query에 onMutate를 더 깊이 배워보면서 낙관적 업데이트에 대해서 배울 수 있었습니다.

<br/>

## :hammer_and_pick: 구현 결과

### 1. Home 페이지

[](https://user-images.githubusercontent.com/75871005/205482297-436cb3a8-c303-4915-916b-c0a6956da5db.mp4)

### 2. 로그인

[](https://user-images.githubusercontent.com/75871005/205482288-7f937f47-5d40-47f7-b76a-9c485ea9bd11.mp4)

### 3. 장바구니 추가

[](https://user-images.githubusercontent.com/75871005/205481937-5f1e103c-93f9-4b01-8c66-bcccb3103b16.mp4)

### 4. 검색 페이지

[](https://user-images.githubusercontent.com/75871005/205482282-88ed9545-f1e0-4835-9443-c8b286612998.mp4)

<br/>

---

<br/>

## :diamond_shape_with_a_dot_inside: 프로젝트 소개

### INTRO

> 개요 : 개인 프로젝트
>
> 주제 : 온라인 의류 쇼핑몰 프로젝트
>
> 참여 : 2022.11.21 ~ 진행중

<br/>

## 1. 컨벤션 규칙

### 1.1. 커밋 컨벤션

```
feat: 파일, 폴더, 새로운 기능 추가
fix:  버그 수정
style:  코드 스타일 변경
docs: 문서 생성, 추가, 수정(README.md)
refactor: 코드 리팩토링
chore: 코드 수정 (JSON 데이터 포맷 변경 / scss 변경 등)
```

### 1.2. 브랜치 컨벤션

```
신규: new-something-you-made
수정: fix-something-you-fixed
개선: improve-something-you-made-better
```

### 1.3. 폴더 구조 및 파일명 규칙

#### 1) client

```
base : 프로젝트에서 제공하는 기본이 되는 UI를 담당.
common : 프로젝트의 바탕이 되는 공통으로 사용하는 컴포넌트를 담당.
layouts : 프로젝트에서 공통으로 사용하는 레이아웃을 담당.
sections : 페이지를 구성하는 컨텐츠단위 컴포넌트를 담당.(페이지에서는 단순 라우팅만 역할하기 위함)
hooks : 공통으로 사용하는 hook을 담당.
pages : 사이트의 페이지 라우팅을 담당.
graphql : graphql 스키마 담당
service : query관련 라이브러리 (react-query/graphql-request)
recoil : 전역상태 관리를 위한 폴더 (recoil-atom/selector)
style : 전역으로 사용하는 GlobalStyles와 theme를 담당
types : 프로젝트의 전반적인 타입들을 담당.
utils : 프로젝트에서 사용하는 상수(constants)나 필요한 함수(helpers)를 담당.
```

#### 2) server

```
schema : graphql typeDefs를 위한 스키마
resolvers : graphql resolver 담당
```

- [리액트 컴포넌트명 파일 규칙](https://ko.reactjs.org/docs/jsx-in-depth.html)

<br/>

## 2. 프로젝트 소개

### 2.1. 프로젝트 WBS

- [바로가기](https://docs.google.com/spreadsheets/d/1XaWRekIx5GMchi2f3PrSywzf7jBCQiZEsGKb7RUZp00/edit#gid=1644897215)

### 2.2. 프로젝트 설계

- 화면 설계도 : [바로가기](https://drive.google.com/drive/folders/1w4hMgzquPP3F-zXKSzbkaD0Ty4e6EFIv)

### 2.3. 프로젝트 요약

#### 2.3.1. 기술 스택

- Language : React.js, Typescript
- FrameWork : Next.js
- Server-state : React-Query(CRUD), GraphQL
- Database : Firebase
- style : CSS in JS (styled-components)

#### 2.3.2. 프로젝트 흐름도

![](https://user-images.githubusercontent.com/75871005/205483544-119d090f-368b-45f2-a1be-3989bbc8d639.png)

#### 2.3.3. 페이지 구성

```
홈 : '/'
마이페이지 : '/mypage',
로그인페이지 : '/signin',
회원가입페이지 : '/signup',
남자 상품 전체 페이지 : 'shop/category?list=men&category_code=m_all'
여자 상품 전체 페이지 : 'shop/category?list=women&category_code=w_all'
장바구니 페이지 : '/cart',
주문조회 페이지 : '/mypage/orders',
좋아요 페이지 :'/mypage/likes',
이벤트 페이지 : '/event'
상세 페이지 : '/detail/:id'
검색 페이지 : '/search'
검색 결과 페이지 : '/search/keyword'
1:1 문의 페이지 : '/qna/
```

### 2.4 데이터 스키마

#### 2.4.1. server

##### 1) Product Schema

```typescript
  type Category {
    category_lg: String!
    category_md: String!
    category_sm: String!
  }
  type Product {
    id: ID!
    brand: String!
    name: String!
    image_url: String!
    origin_price: Int!
    discount: Int!
    category: Category!
    createdAt: Float!
  }
```

_**카테고리**_

1. `category_lg` : men / women 대분류

2. `category_md` : top / bottom / outer 등 중분류

3. `category_sm` : long / short / hoody 등 소분류

##### 2) cart Schema

```typescript
  type CartItem {
    id: ID!
    amount: Int!
    uid: String!
    createdAt: Float!
    product: Product!
  }
```

1. `uid` : firebase Authentication에서 제공하는 고유의 `uid`
2. `product` : 상품 스키마의 타입

#### 3) search Schema

```typescript
  type Search {
    id: ID!
    product: Product!
  }

  extend type Query {
    searchItems(keyword: String!, cursor: ID): [Product!]
    searchBrand(keyword: String!): [String]
  }
```

1. ` searchItems` : 검색 keyword를 기준으로 product를 내보내주도록 구현
2. `searchBrand` : 검색 키워드 변경시에, 추천 브랜드를 나타내주기 위한, 추천 Brand가 보여지도록 구현

#### 4) Event Schema

```typescript
  type Event {
    id: ID!
    image_main: String
    image_lg: String
    image_md: String
    image_thumb: String
    createdAt: Float!
  }

  extend type Query {
    events: [Event!]
    event(id: ID!): Event!
  }
```

1. `image_main` : `/` 경로의 슬라이드에 들어갈 이미지 URL
2. `image_lg` : `/` 경로에 들어갈 Event 데이터
3. `image_thumb` : `/event` 페이지에 들어갈 썸네일 이미지 URL
4. `image_lg` : `/evnet:id` 페이지에 들어갈 이미지 URL

<br/>

#### 2.4.2. client

##### 1) Product Schema

```typescript
query GET_PRODUCTS {
    products {
      id
      brand
      name
      image_url
      origin_price
      discount
      createdAt
      category {
        category_lg
        category_md
        category_sm
      }
    }
  }
```

- 상품 전체 데이터를 호출

```typescript
  query GET_PRODUCT($id: ID!) {
    product(id: $id) {
      id
      brand
      name
      image_url
      origin_price
      discount
      createdAt
      category {
        category_lg
        category_md
        category_sm
      }
    }
  }
```

- `id` 값 arg에 따른 id값에 해당하는 데이터만 호출

```typescript
  query GET_SELECTED_PRODUCT(
    $category_lg: String!
    $category_md: String
    $category_sm: String
    $cursor: ID
  ) {
    selectedProducts(
      category_lg: $category_lg
      category_md: $category_md
      category_sm: $category_sm
      cursor: $cursor
    ) {
      id
      brand
      name
      image_url
      origin_price
      discount
      createdAt
      category {
        category_lg
        category_md
        category_sm
      }
    }
  }
```

- `category_lg(대분류) / category_md(중분류) / category_sm(소분류)` arg에 따른, 특정 카테고리를 불러오도록 호출
- `cursor` : 호출된 마지막 상품의 `id`값을 기준으로 다음 데이터를 호출하기 위한, 페이지네이션

```javascript
 mutation ADD_PRODUCT(
    $brand: String!
    $name: String!
    $image_url: String!
    $origin_price: Int!
    $discount: Int!
    $category_lg: String!
    $category_md: String!
    $category_sm: String!
  ) {
    addProduct(
      brand: $brand
      name: $name
      image_url: $image_url
      origin_price: $origin_price
      discount: $discount
      category_lg: $category_lg
      category_md: $category_md
      category_sm: $category_sm
    ) {
      brand
      name
      image_url
      origin_price
      discount
      category_lg
      category_md
      category_sm
    }
  }
```

- 상품 데이터 추가 요청을 위한 mutation graphql
- `Product` 스키마에 들어갈 데이터를 전해준다.

##### 2) Cart Schema

```ty
  mutation ADD_CART($id: ID!, $count: Int, $uid: String!) {
    addCart(productId: $id, count: $count, uid: $uid) {
      id
      amount
      uid
      createdAt
      product {
        id
        brand
        name
        image_url
        origin_price
        discount
        createdAt
        category {
          category_lg
          category_md
          category_sm
        }
      }
    }
  }
```

- Firebase Auth에서 제공하는 user의 data에 있는 고유의 `uid` 값을 전달하여, 장바구니 페이지에서 cart 데이터를 호출할 시, `uid`에 맞는 데이터를 불러오기 위함이다

##### 3) Search Schema

```typescript
  query GET_SEARCH_ITEMS($keyword: String!, $cursor: ID) {
    searchItems(keyword: $keyword, cursor: $cursor) {
      id
      brand
      name
      image_url
      origin_price
      discount
      createdAt
      category {
        category_lg
        category_md
        category_sm
      }
    }
  }
```

- `keyword`를 받게 되면, `Product` 데이터를 호출한다.
- `cursor` : 검색 결과 페이지 `/search/:id` 에 무한 스크롤을 적용하도록 하기 위한 아규먼트이다.

<br/>

## 3. 개발 하이라이트

- 폴더 구조 세분화
- 리팩토링을 염두하면서, 클린 코딩을 초점으로 둔다.
- 재사용성을 고려하여 자주 쓰이는 기능들은 커스텀 또는 따로 폴더 구조를 만들어서 관리에 용이하도록 한다. - [바로가기](https://github.com/ohtaekwon/shoppingmall/issues/1)
- 상품페이지 카테고리를 대분류, 중분류, 소분류로 나누어 동적라우팅 구성한 상품 데이터 패칭 - [코드보기](https://github.com/ohtaekwon/shoppingmall/blob/main/client/pages/shop/category/list/index.tsx)
- 무한스크롤 훅을 통한 상품페이지 / 검색 결과 페이지에서 상품 적용 - [코드보기](https://github.com/ohtaekwon/shoppingmall/blob/main/client/hook/useInterSection.ts)
- react-query 낙관적업데이트를 적용한 장바구니 추가 및 수량 업데이트 - [코드 보기](https://github.com/ohtaekwon/shoppingmall/blob/main/client/components/sections/cart/item.tsx)

### 3.1. 미구현 사항

#### 1) Firebase-Admin

- 로그인 아이디에 따라서, admin과 client를 구분하기 위해, firebase-admin으로 admin에 맞는 페이지 구현

<br/>

## 4. 개발 회고 및 정리

|     |                                                          |                                                                                                                                                                                                                                                                               |
| --- | -------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | React의 **SSR** 프레임워크인 Next.js 를 선택하게 된 이유 | 1) [베로그 바로가기](https://velog.io/@taetae-5/%EB%82%98%EC%9D%98-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-ch1.-Next.js-%EC%84%A0%ED%83%9D)                                                                                                                                      |
| 2.  | Next.js의 데이터 패칭 방식                               | 1) [벨로그 바로가기](https://velog.io/@taetae-5/%EB%82%98%EC%9D%98-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-2.-Next.js%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%8C%A8%EC%B9%AD-%EB%B0%A9%EC%8B%9D)<br />2) [이슈 바로가기](https://github.com/shop-caffeine/caffeine_fo/issues/29) |
| 3.  | graphql & firebase 연동                                  | 1) [벨로그 바로가기](https://velog.io/@taetae-5/%EC%87%BC%ED%95%91%EB%AA%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-1-graphql-firebase)                                                                                                                                          |
| 4   | 무한 스크롤                                              | 업로드 예정                                                                                                                                                                                                                                                                   |
| 5   | Firebase Auth                                            | 업로드 예정                                                                                                                                                                                                                                                                   |
| 6   | 장바구니 추가                                            | 업로드 예정                                                                                                                                                                                                                                                                   |

<br/>

## 5. 실행 방법

#### 1) 설치

```bash
npm i 또는 npm install
yarn
```

#### 2) 실행

```bash
# 1. client
cd client
yarn
yarn run dev

# 2. server
cd server
yarn
yarn run dev
```

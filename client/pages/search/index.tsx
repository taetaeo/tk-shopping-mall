import React, { SyntheticEvent, useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { graphQLFetcher } from "../../service";
import { GET_SEARCH_BRAND } from "../../graphql";
import { useRouter } from "next/router";
import Link from "next/link";
import { Head } from "../../components/base";

const DEFAULT_STRING = "";
const SearchPage: NextPage = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [relationKeyword, setRelationKeyword] = useState<{
    searchBrand: string[] | undefined;
  }>();

  const handleOnChange = async (e: SyntheticEvent) => {
    const newKeyword = (e.target as HTMLInputElement)?.value;
    const data = await graphQLFetcher(GET_SEARCH_BRAND, {
      keyword: newKeyword,
    });
    await setRelationKeyword(data);
    relationKeyword?.searchBrand.map((item) =>
      item.includes(keyword) ? setKeyword(item) : setKeyword(newKeyword)
    );
  };
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(keyword);
    router.push({
      pathname: `/search/${keyword}`,
      query: {
        search_keyword: keyword,
        result: keyword,
      },
    });
    setKeyword(DEFAULT_STRING);
  };
  return (
    <>
      <Head title={"브랜드를 검색해주세요"} />
      <Main>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              onChange={handleOnChange}
              placeholder="찾으시는 브랜드명을 입력하세요."
            />
          </Form>
          <SearchResultList>
            {relationKeyword?.searchBrand.map((searchItem, index) => (
              <Link key={index} href={`/search/${searchItem}`} legacyBehavior>
                <a>
                  <SearchResultListItem>{searchItem}</SearchResultListItem>
                </a>
              </Link>
            ))}
          </SearchResultList>
        </Container>
      </Main>
    </>
  );
};
export default SearchPage;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  padding: 0.5rem 0;
  margin-top: 10rem;
`;
const Form = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const Input = styled.input`
  width: 100%;
  height: 100px;
  border: 5px solid #000;
  font-size: 5rem;
  padding: 1.5rem;
  color: rgb(212, 212, 212);
  text-align: center;
  :focus {
    color: #000;
    background-color: none;
    text-decoration: none;
  }
`;
const SearchResultListItem = styled.li`
  padding: 2rem;
  box-sizing: border-box;
  color: #222;
  font-size: 3rem;
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    background-color: #eee;
  }
`;

const SearchResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

import type {
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
  GetServerSidePropsContext,
} from "next";
import { useRouter } from "next/router";
import { Head } from "../../components/base";
import { DetailSection, SearchResult } from "../../components/sections";
import { GET_PRODUCT, GET_SEARCH_ITEMS } from "../../graphql";
import { graphQLFetcher } from "../../service";

const SearchResultPage: NextPage = ({
  product,
  title,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const {
    query: { search_keyword },
  } = router;
  const {
    id,
    brand,
    name,
    image_url,
    origin_price,
    discount,
    createdAt,
    category,
  } = product.searchItems;
  if (!title) return <div>상품이 없습니다.</div>;
  return (
    <>
      <Head title={title} />
      <SearchResult
        products={product.searchItems}
        title={title}
        searchKeyword={search_keyword}
      />
    </>
  );
};
export default SearchResultPage;

export const getServerSideProps: GetStaticProps = async (
  context: GetServerSidePropsContext
) => {
  const {
    params: { id },
  } = context;
  const product = await graphQLFetcher(GET_SEARCH_ITEMS, { keyword: id });
  return {
    props: {
      product,
      title: id,
    },
  };
};

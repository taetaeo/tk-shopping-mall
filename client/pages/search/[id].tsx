import type {
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
  GetServerSidePropsContext,
} from "next";
import { Head } from "../../components/base";
import { DetailSection } from "../../components/sections";
import { GET_PRODUCT, GET_SEARCH_ITEMS } from "../../graphql";
import { graphQLFetcher } from "../../service";

const SearchResultPage: NextPage = ({
  product,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
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

  console.log(product);
  return (
    <>
      <div>여기는 검새 결곽</div>
    </>
  );
};
export default SearchResultPage;

export const getServerSideProps: GetStaticProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params.id;
  const product = await graphQLFetcher(GET_SEARCH_ITEMS, { keyword: id });
  return {
    props: {
      product,
    },
  };
};

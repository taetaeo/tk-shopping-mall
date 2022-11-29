import type {
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
  GetServerSidePropsContext,
} from "next";
import { Head } from "../../components/base";
import { DetailSection } from "../../components/sections";
import { GET_PRODUCT } from "../../graphql";
import { graphQLFetcher } from "../../service";

const Detail: NextPage = ({
  product,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const {
    product: {
      id,
      brand,
      name,
      image_url,
      origin_price,
      discount,
      createdAt,
      category,
    },
  } = product;

  return (
    <>
      <Head title={brand} />
      <DetailSection
        id={id}
        brand={brand}
        name={name}
        image_url={image_url}
        discount={discount}
        origin_price={origin_price}
        category={category}
      />
    </>
  );
};
export default Detail;

export const getServerSideProps: GetStaticProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params.id;
  const product = await graphQLFetcher(GET_PRODUCT, {
    id,
  });
  return {
    props: {
      product,
    },
  };
};

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { DetailSection } from "../../components/sections";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const URL =
    "https://img.29cm.co.kr/next-product/2022/09/20/951c7e7f1eba4b07827b19e868c617f6_20220920113201.jpg?width=500";
  const TITLE = `임시 상품 - ${id}`;
  const PRICE = 50000;
  const DISCOUNT = 8;
  const ORDER = 2500;

  return (
    <DetailSection
      id={id!}
      title={TITLE}
      image_url={URL}
      discount={DISCOUNT}
      price={PRICE}
      order={ORDER}
    />
  );
};
export default Detail;

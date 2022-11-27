import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";

import NotFound from "../../../404";

const List: NextPage = (props): JSX.Element => {
  const router = useRouter();
  console.log("list", router);
  return (
    <>
      <div>asdasdasd</div>
    </>
  );
};

export default List;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const {
//     query: { category_large_code, category_medium_code },
//   } = context;
//   const [genderCode, productsCode] = String(category_large_code).split("_");
//   const codeOptions = genderCode === "m" ? "men" : "women";

//   const allCondition = productsCode === "all";
//   const newCondition = productsCode === "new";
//   const elseCondition = !allCondition && !newCondition;

//   return {};
// };

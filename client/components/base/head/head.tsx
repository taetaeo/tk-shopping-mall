import React from "react";
import Seo from "../seo";

const Head = ({ title }) => {
  const SHOP_NAME = "2YEARS";
  const newTitle = title
    ? `${title} | 감성적인 의류 쇼핑몰 - ${SHOP_NAME}`
    : `감성적인 의류 쇼핑몰 - ${SHOP_NAME}`;
  return (
    <Seo>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="description" content={`${SHOP_NAME} Project`} />
      <link rel="icon" href="/images/favicon.ico" />
      <title>{newTitle}</title>
    </Seo>
  );
};

export default Head;

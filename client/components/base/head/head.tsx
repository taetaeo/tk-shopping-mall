import React from "react";
import Seo from "../seo";

const Head = ({ title }) => {
  return (
    <Seo>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="description" content="보일러 프로젝트" />
      <link rel="icon" href="/images/favicon.ico" />
      <title>{title}</title>
    </Seo>
  );
};

export default Head;

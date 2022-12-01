import { useRouter } from "next/router";
import React, { FC } from "react";
import styled from "styled-components";
import Button from "../button";
const IMAGE_URL = "/images/logo.png";
const ALT_TEXT = "2YEARS LOGO";

const Logo: FC = (): JSX.Element => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };
  return (
    <Button
      disabled={false}
      size={undefined}
      variant={"default"}
      onClick={handleGoHome}
    >
      <Images src={IMAGE_URL} alt={ALT_TEXT} />
    </Button>
  );
};
export default Logo;

const Images = styled.img`
  width: 250px;
  height: 50px;
`;

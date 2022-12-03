import Link from "next/link";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type section = "left" | "right" | "middle";
type Props = {
  id: string;
  image_main: string;
  image_lg: string;
  image_md: string;
  image_thumb: string;
  section: section | any;
};
const Item = (props: Props): JSX.Element => {
  const { id, image_lg, image_main, image_md, image_thumb, section } = props;

  return (
    <>
      <Section section={section}>
        <Link href={`/event/${id}`}>
          <Image src={image_lg} />
        </Link>
      </Section>
    </>
  );
};

export default Item;

const Section = styled.section<{ section: "left" | "right" | "middle" }>`
  grid-area: var(--grid-section);
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 1rem;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

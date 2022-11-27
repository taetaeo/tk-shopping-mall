import Link from "next/link";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type section = "left" | "right" | "middle";
type ItemType = {
  id: number;
  brand: string;
  name: string;
  image_url_lg: string;
  image_url_thumb: string;
  section: section | any;
};
const Item: FC<ItemType> = (props: ItemType): JSX.Element => {
  const { id, brand, name, image_url_lg, section, image_url_thumb } = props;

  return (
    <>
      <Section section={section}>
        <Link href={`/event/${id}`}>
          <Image src={image_url_lg} />
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
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

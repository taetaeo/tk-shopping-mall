import React, { FC } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";

type Props = {
  sizeStyle: FlattenSimpleInterpolation;
  image_url: string;
};
const CardBody: FC<Props> = (props: Props): JSX.Element => {
  const { sizeStyle, image_url } = props;

  return (
    <StyledBody sizeStyle={sizeStyle}>
      <Image src={image_url} alt={`상품의 이미지`} />
    </StyledBody>
  );
};
export default CardBody;
const StyledBody = styled.div<{ sizeStyle: FlattenSimpleInterpolation }>`
  ${(p) => p.sizeStyle}
  width: var(--card-width, 180px);
`;
const Image = styled.img`
  width: 100%;
  height: 385px;
  object-fit: cover;
  border-radius: 4px;
`;

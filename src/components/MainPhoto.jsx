import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  line-height: 0;
`;

const Image = styled.img`
  width: 100%;
`;

export default function MainPhoto({ src }) {
  return (
    <Wrapper>
      <Image src={src} />
    </Wrapper>
  );
}

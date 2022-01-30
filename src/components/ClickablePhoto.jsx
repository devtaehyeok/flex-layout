import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

const Button = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  /* Get rid of "magic space" */
  line-height: 0;
  border: ${(p) => (p?.selected ? "6px solid hotpink" : "none")};
`;
export default function ClickablePhoto({ selected, src, onClick }) {
  return (
    <>
      <Button {...{ selected, onClick }}>
        <Image src={src} />
      </Button>
    </>
  );
}

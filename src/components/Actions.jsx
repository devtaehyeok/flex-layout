import styled from "styled-components";
import React from "react";
const Wrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

function Actions({ onPrevClick, onNextClick }) {
  return (
    <Wrapper>
      <button onClick={onPrevClick}>Previous</button>
      <button onClick={onNextClick}>Next</button>
    </Wrapper>
  );
}
export default React.memo(Actions);

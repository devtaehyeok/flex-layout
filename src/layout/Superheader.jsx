import styled from "styled-components";
const Wrapper = styled.header`
  display: flex;
  gap: 8px;
  padding: 8px;
  border: 1px solid skyblue;
  box-shadow: 0px 2px 20px hsl(0deg 0% 0% / 0.35);
`;

const Label = styled.a`
  margin-left: auto;
`;
const Spacer = styled.div`
  min-width: ${(p) => p?.size || 0}px;
`;

const Span = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default function SuperHeader() {
  return (
    <Wrapper>
      Free shipping over $50!
      <Label>
        <Span>Search</Span>
        <input type="text" placeholder="Search…" />
      </Label>
      <button>
        <Span>Current language:</Span>
        English
      </button>
    </Wrapper>
  );
}

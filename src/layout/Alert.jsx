import { Check } from "react-feather";
import styled from "styled-components";

export function Alert({ children }) {
  return (
    <Wrapper>
      <IconWrapper>
        <Check />
      </IconWrapper>
      <Heading contentEditable>{children}</Heading>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 20px hsl(0deg 0% 0% / 0.35);
  border-radius: 4px;
  padding: 8px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: forestgreen;
  color: white;
  border-radius: 50%;
  margin-right: 8px;
  align-self: flex-start;
  flex-shrink: 0;
`;

const Heading = styled.div`
  flex-grow: 1;
`;

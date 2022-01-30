import styled from "styled-components";
const Wrapper = styled.header`
  display: flex;
  gap: 8px;
  border: 1px solid deeppink;
  padding: 8px;
  box-shadow: 0px 2px 20px hsl(0deg 0% 0% / 0.35);
`;

const Logo = styled.a`
  font-size: 1.5rem;
  margin-right: auto;
`;
const Spacer = styled.div`
  min-width: ${(p) => p?.size || 0}px;
`;

const AuthButton = styled.button``;
export default function Logo1() {
  return (
    <Wrapper>
      <Logo>MY Logo</Logo>
      <AuthButton>Log in</AuthButton>
      <Spacer />
      <AuthButton>Sign up</AuthButton>
    </Wrapper>
  );
}

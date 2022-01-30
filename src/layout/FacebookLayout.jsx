import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  box-shadow: 0px 2px 20px hsl(0deg 0% 0% / 0.35);
`;

const Nav = styled.nav`
  border: 3px solid;
  border-color: hsl(0deg 100% 50%);
  background: hsl(0deg 100% 50% / 0.2);
  margin: 0;
  min-width: 150px;
  max-width: 250px;
  flex: 0 999999 250px;
  height: 250px;
  padding: 0;
  @media (max-width: 700px) {
    & {
      display: none;
      height: 250px;
    }
  }
`;

const Aside = styled.aside`
  border: 3px solid;
  border-color: hsl(125deg 75% 45%);
  background: hsl(125deg 75% 45% / 0.2);
  margin: 0;
  min-width: 150px;
  max-width: 250px;
  height: 250px;
  flex: 0 999999 250px;
`;

const Main = styled.div`
  margin: 0;
  border: 3px solid;
  border-color: hsl(300deg 75% 60%);
  background: hsl(300deg 75% 60% / 0.2);
  height: 250px;
  flex: 1 1 500px;
`;

export default function FacebookLayout() {
  return (
    <Wrapper>
      <Nav />
      <Main />
      <Aside />
    </Wrapper>
  );
}

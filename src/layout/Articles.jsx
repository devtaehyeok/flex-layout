import styled from "styled-components";
import Article from "../components/Article";
const Wrapper = styled.section`
  display: flex;
  flex-wrap: ${(p) => (p?.wrap === "true" ? "wrap" : "nowrap")};
  box-shadow: 0px 2px 20px hsl(0deg 0% 0% / 0.35);
`;

export default function Articles({ articles, wrap = "true" }) {
  return (
    <Wrapper wrap={wrap}>
      {articles.map(
        (article) => (
          <Article {...article} wrap={wrap} key={article.src} />
        )
        // console.log(article)
      )}
    </Wrapper>
  );
}

import styled from "styled-components";

const Wrapper = styled.article`
  margin: 8px;
  border-radius: 16px;
  box-shadow: 0px 2px 24px hsl(0deg 0% 0% / 0.2);
  flex: 1 1 150px;
  max-width: ${(p) => (p?.wrap === "true" ? "250px" : "0px")};
`;

const Img = styled.img`
  border-radius: 12px 12px 0px 0px;
  width: 100%;
`;

const Section = styled.section`
  padding: 8px 16px 16px;
`;

const Heading = styled.section`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Paragraph = styled.section`
  font-weight: 300;
`;

export default function Article({ src, paragraph, heading, wrap = "true" }) {
  return (
    <Wrapper wrap={wrap}>
      <Img src={src} />
      <Section>
        <Heading contentEditable>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
      </Section>
    </Wrapper>
  );
}

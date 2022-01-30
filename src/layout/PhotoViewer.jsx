import styled from "styled-components";
import dog from "../img/dog-one-300px.jpeg";
import cat from "../img/cat-300px.jpeg";
import ClickablePhoto from "../components/ClickablePhoto";
import { useState } from "react";
import MainPhoto from "../components/MainPhoto";
import Actions from "../components/Actions";
const Wrapper = styled.section`
  display: flex;
  gap: 16px;
  box-shadow: 0px 2px 20px hsl(0deg 0% 0% / 0.35);
  padding: 8px;
`;

const Selection = styled.div`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const _datas = [
  { src: dog, selected: true },
  { src: cat, selected: false }
];
export function PhotoViewer() {
  const [datas, setDatas] = useState(_datas);

  return (
    <Wrapper>
      <Selection>
        {datas.map(({ src, selected }) => (
          <ClickablePhoto
            key={src}
            src={src}
            selected={selected}
            onClick={() =>
              setDatas(
                datas.map((data) =>
                  data.src === src
                    ? { ...data, selected: true }
                    : { ...data, selected: false }
                )
              )
            }
          />
        ))}
        <Actions
          onPrevClick={() =>
            setDatas(
              datas.map((data, idx) =>
                idx === (selectedIndex() + datas.length - 1) % datas.length
                  ? { ...data, selected: true }
                  : { ...data, selected: false }
              )
            )
          }
          onNextClick={() =>
            setDatas(
              datas.map((data, idx) =>
                idx === (selectedIndex() + datas.length + 1) % datas.length
                  ? { ...data, selected: true }
                  : { ...data, selected: false }
              )
            )
          }
        />
      </Selection>
      {datas
        .filter(({ selected }) => selected)
        .map((data) => (
          <MainPhoto src={data?.src} key={data?.src} />
        ))}
    </Wrapper>
  );
  function selectedIndex() {
    return datas.findIndex((data) => data.selected);
  }
}

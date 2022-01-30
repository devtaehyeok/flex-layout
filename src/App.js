import { Alert } from "./layout/Alert";
import FacebookLayout from "./layout/FacebookLayout";
import "./styles.css";
import dogone from "./img/dog-one-300px.jpeg";
import dogtwo from "./img/dog-two-300px.jpeg";
import dogthree from "./img/dog-three-300px.jpeg";
import Articles from "./layout/Articles";
import Logo1 from "./layout/Logo1";
import SuperHeader from "./layout/Superheader";
import { PhotoViewer } from "./layout/PhotoViewer";
import Ordering from "./layout/Ordering";
const articles = [
  {
    src: dogone,
    heading: "The One Weird Trick to get tasty dinner scraps",
    paragraph:
      "Step one: Find the friendliest human at the dinner table. Step two: Give them sad pupper eyes. Step 3: Get slid human food on the sly."
  },
  {
    src: dogtwo,
    heading: "How to show them you mean business",
    paragraph:
      "Every dog park has their own scene. Different cliques. If you want to make a name for yourself, you'll need to make a good first impression…"
  },
  {
    src: dogthree,
    heading: "Life in the outdoors",
    paragraph:
      "We purchased and tested the 10 best outdoors accessories so you don't have to. Here's what we found…"
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>1. 페이스북 레이아웃</h1>
      <ol>
        <li>
          양쪽 최대 폭에서 수축하면 본문이 줄어들다가, 본문 크기
          500px(flex-basis) 이후로는 네비게이션이 줄어든다.
        </li>
        <li>
          네비게이션이 min-width에 도달하면, 그때부터는 본문이 줄어든다. (to
          min-content)
        </li>
        <li>뷰포트 너비 700px이하에서는 왼쪽 네비게이션은 숨겨진다.</li>
      </ol>
      <FacebookLayout />
      <h1>2. Alert</h1>
      <ol>
        <li>왼쪽 이미지는 수축되지 않는다.(flex-shrink:0)</li>
        <li>텍스트는 중앙 정렬이다.(align-items:center)</li>
        <li> 이미지는 항상 왼쪽 상단이다. (align-self:flex-start;)</li>
      </ol>
      <Alert>축소해보세요!!!</Alert>
      <h1>3. noWrap</h1>
      <ol>
        <li>flex 1과 하위 요소 width : 100% 이용하기</li>
        <li>
          flex 요소들은 minimum content size를 갖고 있어, 버그 요소가 될 수
          있다.
        </li>
        <li>min-width를 0 으로 초기화하는 트릭을 종종 사용한다</li>
      </ol>
      <Articles articles={articles} />
      <h1>4. Wrapping</h1>
      <ol>
        <li>flex-wrap : wrap</li>
        <li>min-width를 설정해서 한 줄을 꽉채우는 것보단 약간 남기는걸 선택</li>
      </ol>
      <Articles articles={articles} />
      <h1>5. Logo1</h1>
      <ul>
        <li>gap 속성 - flex 요소 사이 간격만 적용</li>
      </ul>
      <Logo1 />
      <h1>6. SuperHeader</h1>
      <ul>
        <li>gap 속성 - flex 요소 사이 간격만 적용</li>
        <li>Logo에 margin-left : auto</li>
      </ul>
      <SuperHeader />
      <h1>7. PhotoViewer</h1>
      <ul>
        <li>중첩 flexbox</li>
        <li>wrapper에 flex-basis 설정, image에 width 100%</li>
        <li>gap을 잘 사용하기</li>
        <li>버튼 wrapper에 margin-top하면 마진을 다 먹어버린다.</li>
      </ul>
      <PhotoViewer />
      <h1>8. flex-direction</h1>
      <p>
        flex-direction 바꾸면 쌓이는 순서도 바뀜. 원복방법{" "}
        {`.row {
  flex-direction: row-reverse;
  justify-content: flex-end;
}`}
      </p>
      <ul>
        <li>row-reverse를 이용하면 tapindex를 사용하지 않을 수 있음</li>
        <li
          style={{
            color: "limegreen"
          }}
        >
          여기를 클릭한 뒤, tab 눌러보자
        </li>
      </ul>
      <Ordering />
    </div>
  );
}

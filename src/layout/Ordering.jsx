import { css } from "styled-components";
import style from "./Ordering.module.css";
export default function Ordering() {
  return (
    <>
      <div className={style.wrapper}>
        <aside>
          <nav>
            <h2>Table of Contents</h2>
            <ul>
              <li>
                <a href="#heading-one">Heading One</a>
              </li>
              <li>
                <a href="#heading-two">Heading Two</a>
              </li>
              <li>
                <a href="#heading-three">Heading Three</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <h2 id="heading-one">Heading One</h2>
          <p>
            Imagine if this was a<a href="">real blog post</a>, and this was
            <a href="">real content</a>!
          </p>
          <h2 id="heading-two">Heading Two</h2>
          <p>
            In order to keep this playground manageable, the content is going to
            be much shorter than it would be in a real-world scenario.
          </p>
          <h2 id="heading-three">Heading Three</h2>
          <p>I hope that makes sense!</p>
          <form>
            <h2>Join the newsletter!</h2>
            <label>
              Email:
              <input />
            </label>
            <button>Subscribe</button>
          </form>
        </main>
      </div>
    </>
  );
}

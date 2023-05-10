import { useState } from "react";
import clsx from "clsx";
import Layout from "../../components/layout";

export default function Home() {
  const [buttonSize, setButtonSize] = useState<boolean>(true);

  return (
    <Layout home>
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">Hello World</h1>
            <p className="subtitle">
              My first website 2 with <strong>Bulma</strong>!
            </p>
            <button
              className={clsx("button", buttonSize ? "is-small" : "is-large")}
              onClick={() => {
                setButtonSize(!buttonSize);
              }}
            >
              Button
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
}

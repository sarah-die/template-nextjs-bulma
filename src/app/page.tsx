"use client";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [buttonSize, setButtonSize] = useState<boolean>(true);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
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
  );
}

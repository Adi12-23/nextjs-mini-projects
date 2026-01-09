"use client";
import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollToSection() {
    if (!ref.current) return;

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div
          key={dataItem.label}
          ref={index === 2 ? ref : null}
          style={dataItem.style}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}

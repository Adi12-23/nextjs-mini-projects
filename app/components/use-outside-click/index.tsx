"use client";

import { useState, useRef } from "react";
import useOutsideClick from "./useOutsideClick";

export default function UseOutsideClickComponent() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a Random Content</h1>
          <p>Please Click outside of this to close else it won't close </p>
        </div>
      ) : (
        <button
          style={{
            padding: "10px 16px",
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#2563eb", // blue-600
            color: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.2s ease, transform 0.1s ease",
          }}
          onClick={() => setShowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
}

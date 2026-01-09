"use client";
import useFetch from "../use-fetch/useFetch";
import { useRef } from "react";
interface Product {
  id: number;
  title: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
const buttonStyle: React.CSSProperties = {
  padding: "10px 18px",
  margin: "10px 0",
  fontSize: "15px",
  fontWeight: 600,
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#4f46e5", // indigo
  color: "#ffffff",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  transition: "transform 0.1s ease, background-color 0.2s ease",
};
export default function ScrollToTopAndBottom() {
  const { data, error, loading } = useFetch<ProductsResponse>({
    url: "https://dummyjson.com/products?limit=100",
  });
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const topRef = useRef<null | HTMLDivElement>(null);

  function handleScrollToTop() {
    if (topRef.current) topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToBottom() {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <h1>Scroll to Top and Bottom</h1>
      <div ref={topRef}>Top</div>
      <button onClick={handleScrollToBottom} style={buttonStyle}>
        Scroll to Bottom
      </button>
      {loading && <h3>Loading! </h3>}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
      {error && <h3>{error}</h3>}
      <div style={{ margin: "20px 0" }}>
        <button style={buttonStyle} onClick={handleScrollToTop}>
          Scroll to Top
        </button>
      </div>
      <div ref={bottomRef}>Bottom</div>
    </div>
  );
}

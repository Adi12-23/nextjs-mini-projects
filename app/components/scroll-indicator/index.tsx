"use client";
import { useEffect, useState } from "react";
import "./scroll.css"
interface ScrollProps {
  url: string;
}
interface Product {
  id: number;
  title: string;
}

export default function ScrollIndicator({ url }: ScrollProps) {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  async function fetchData(getUrl: string) {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
    } catch (e: any) {
      console.log(e);
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  console.log(scrollPercentage);
  if(loading){
    return <div>Loading Data</div>;
  }
  if(errorMsg){
    return <div>Error:{errorMsg}</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-container">
          <div
            className="current-container"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}

"use client";

import useFetch from "./useFetch";

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

export default function UseFetchHookComponent() {
  const { data, error, loading } = useFetch<ProductsResponse>({
    url: "https://dummyjson.com/products?limit=100",
  });
  return (
    <div>
      <h1>Use fetch hook</h1>
      {loading && <h3>Loading! </h3>}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
        {
            error && <h3>{error}</h3>
        }
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import "./App.css";

import products from "./data/products";

export default function App() {
  const [allProducts, setAllProducts] = useState(products);

  return (
    <div>
      <Navbar />

      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title">All Products</h1>
          {allProducts.map((product) => (
            <ProductsSection {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}

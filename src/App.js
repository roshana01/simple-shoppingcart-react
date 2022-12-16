import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import "./App.css"


export default function App() {

  return (
    <div>
      <Navbar />

      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title">All Products</h1>
          <ProductsSection title="Phones" />
          <ProductsSection title="Laptops" />
          <ProductsSection title="Monitors" />
          <ProductsSection title="Coolpads" />
        </div>
      </main>
    </div>
  );
}


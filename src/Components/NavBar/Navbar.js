import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import produtsContext from "../../Context/ProductsContext";
import "./Navbar.css";

export default function Navbar() {
  const contextData = useContext(produtsContext)
  return (
    <nav class="navbar navbar-expand-sm py-3 d-flex">
      <div class="container">
        <a href="#" className="navbar-brand" >
          Shop
        </a>

        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <div className="bag-box">
          <a href="javascript:void(0)" className="bag" onClick={() =>{
            contextData.setIsShowCart(true)
          }}>
            <BsBag className="text-white" />
            <span className="bag-products-counter">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

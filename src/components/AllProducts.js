import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function AllProducts() {
  return (
    <div className="allproducts-container">
      <div className="allproducts-wrapper">
        <div className="allproducts-one">
          <div className="allproducts-box">
            <p>TODO EN TRAJES DE BAÑO</p>
            <Link to="/" className="allproducts-link">
              AQUÍ
            </Link>
          </div>
        </div>
        <div className="allproducts-two">
          <img src="Arapo-Azul-trasera-II-peq.jpg" alt="tobago" width="100%" />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav className="page-nav">
        <Link to="/" className="nav-link">
          NOVEDADES
        </Link>
        <Link to="/" className="nav-link">
          TIENDA
        </Link>
        <Link to="/" className="nav-link">
          LA MARCA
        </Link>
        <Link to="/" className="nav-link">
          CONTACTO
        </Link>
      </nav>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function NavBar() {
  return (
    <div className="utilities-container">
      <nav className="page-utilities">
        <Link to="/" className="utilities-link">
          BUSCAR
        </Link>
        <Link to="/" className="utilities-link">
          FAVS
        </Link>
        <Link to="/" className="utilities-link">
          BOLSA
        </Link>
        <Link to="/" className="utilities-link">
          LOGIN
        </Link>
      </nav>
    </div>
  );
}

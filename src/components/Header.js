import React, { useState } from "react";
import NavBar from "./NavBar";
import Utilities from "./Utilities";
import "./components.css";

export default function Header() {
  return (
    <header>
      <div className="header-grid">
        <NavBar />
        <div className="logo-container">
          <img src="Logo-Mochima-Texto-peq.png" alt="logo" width="150px" />
        </div>
        <Utilities />
      </div>
      <img
        src="Modelo-en-la-playa-II-peq.jpg"
        alt="modelo en la playa"
        width="100%"
      />
    </header>
  );
}

import React from "react";
import Navbar from "./Navbar.js";

const Header = () => {
  return (
    <header>
      <h1>
        <span className="rubik-glitch">e</span> Gaming News Hub
      </h1>
      <hr className="divider-row" />
      <Navbar />
      <hr className="divider-row" />
    </header>
  );
};

export default Header;

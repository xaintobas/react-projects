import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <Link key="logo" to="/">
          <h1 className="logo">⚛️ React Projects</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link key="logo" to="/">
            <h1 className="logo">⚛️ React Projects</h1>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

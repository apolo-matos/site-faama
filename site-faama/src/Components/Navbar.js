import React from 'react';
import "../styles/Navbar.css";
import logo from "../Assets/Group 6.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

      <div className="navbar-logo">
        <img src={logo} alt="Logo FAAMA" />
      </div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/noticias">Notícias</a></li>
          <li><a href="/graduacao">Graduação</a></li>
          <li><a href="/colegio">Colégio</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
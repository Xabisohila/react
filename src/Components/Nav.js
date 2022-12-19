import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "./Logo";

function Nav() {
  return (
    <div>
      <nav className="Nav">
        <ul className="List">
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          x
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <button>
              <Link to="/contact">Hala at me</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

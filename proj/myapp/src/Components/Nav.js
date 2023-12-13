import React from "react";
import '../assets/css/nav.css'
import Img from "../assets/image/Moon_rotating_full_220px.gif";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="header-area">
      <ul className="nav-links">
        <li className="center">
          <Link to="/">
            <p><img src={Img} classNmae="srl" alt="img"></img>
                SPACEC</p>
          </Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

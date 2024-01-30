import React from "react";
import "./Header.scss";
import logoBlack from "../../assets/logo-black.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navElements = ["About", "Features", "User Cases", "Compare Platforms"];

  return (
    <header>
      <div className="header-content">
        <Link  to="/">
          <img src={logoBlack} alt="logo" />
        </Link>
        <nav className="header-nav">
          {navElements.map((e) => (
            <p key={e} className="header-link">
              <a href={`#${e}`}>{e}</a>
            </p>
          ))}
        </nav>
        <button className="get-started-btn">
          <a href="#Hero">Get Started for Free</a>
        </button>
      </div>
    </header>
  );
};

export default Header;

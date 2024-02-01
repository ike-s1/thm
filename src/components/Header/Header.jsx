import React from "react";
import "./Header.scss";
import logoBlack from "../../assets/logo-black.svg";
import { Link,useLocation } from "react-router-dom";

const Header = () => {
  const navElements = ["About", "Features", "User Cases", "Compare Platforms"];
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header>
      <div className="header-content">
        <Link  to="/">
          <img src={logoBlack} alt="logo" />
        </Link>
        <nav className="header-nav">
          {navElements.map((e) => (
            <p key={e} className="header-link">
              <a href={`#${e}`}><span>{e}</span><span className="hover-item">{e}</span></a>
            </p>
          ))}
        </nav>
        <button className={`get-started-btn ${isHomePage? '' : 'hidden'}`}>
          <a href="#Book">Get Started for Free</a>
        </button>
      </div>
    </header>
  );
};

export default Header;

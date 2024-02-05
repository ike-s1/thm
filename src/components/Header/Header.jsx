import React, { useState } from "react";
import "./Header.scss";
import logoBlack from "../../assets/logo-black.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/menu-icon.svg";
import { CustomButton } from "../Shared/CustomBtn/CustomBtn";

const Header = () => {
  const navElements = ["About", "Features", "User Cases", "Compare Platforms"];
  const [activeMenu, setActiveMenu] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleMenuClick = () => {
    setActiveMenu((prev) => !prev);
    if (!activeMenu) {
      document.querySelector('header').classList.add('closed');
    } else {
      document.querySelector('header').classList.remove('closed');
    }
  };

  const handleJoinClick = () => {
    setActiveMenu(false);
    window.location.href = "#Book"
  }

  return (
    <header className={activeMenu ? "active" : ""}>
      <div className="header-content">
        <Link to="/">
          <img src={logoBlack} className="header-logo" alt="logo" />
        </Link>
        <nav className={activeMenu ? "header-nav active" : "header-nav closed"}>
          {navElements.map((e) => (
            <p key={e} className="header-link">
              <a href={`#${e}`}>
                <span>{e}</span>
                <span className="hover-item">{e}</span>
              </a>
            </p>
          ))}
        <CustomButton text="Join Waitlist" className="join-btn" onClick={handleJoinClick}/>
        </nav>
        <button className={`get-started-btn ${isHomePage ? "" : "hidden"}`}>
          <a href="#Book">Get Started for Free</a>
        </button>
        <img
          src={menuIcon}
          onClick={handleMenuClick}
          className={`menu-icon ${activeMenu ? "active" : ""}`}
          alt="menu-icon"
        />
      </div>
      <p className="all-rights-header">©2024 All rights reserved.</p>
    </header>
  );
};

export default Header;

import React from "react";
import "./Footer.scss";
import bigLogo from "../../assets/footer-logo-big.png";
import logoWhite from "../../assets/logo-white.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="allRights-column">
          <img className="footer-logo" src={logoWhite} alt="logo" />
          <p className="column-title">©2024 All rights reserved.</p>
        </div>
        <div className="right-column">
          <nav className="nav-column">
            <p className="column-title">Navigation</p>
            <ul>
              <li className="column-item"><a href="#About">About</a></li>
              <li className="column-item"><a href="#Features">Features</a></li>
              <li className="column-item"><a href="#User Cases">Usercases</a></li>
              <li className="column-item"><a href="#Compare Platforms">Compare platforms</a></li>
              <li className="column-item"><a href="">Privacy Policy</a></li>
              <li className="column-item"><a href="">Terms of Service</a></li>
              <li className="column-item"><a href="">Cookies Settings</a></li>
            </ul>
          </nav>
          <div className="contact-us-column">
            <p className="column-title">Contact Us</p>
            <p className="column-item"><a href="mailto:email@gmail.com">email@gmail.com</a></p>
          </div>
        </div>
      </div>
      <img className="footer-logo-big" src={bigLogo} about="bigLogo" />
    </footer>
  );
};

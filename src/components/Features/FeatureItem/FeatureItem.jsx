import React from "react";
import "./FeatureItem.scss";

export const FeatureItem = ({ number, text, title }) => {
  return (
    <li className="feature-item-block">
      <div className="feature-item-content">
        <span className="item-number">{number}</span>
        <div>
          <span className="item-title">{title}</span>
          <p className="item-text">{text}</p>
        </div>
      </div>
    </li>
  );
};

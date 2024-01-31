import React, { useState } from "react";
import "./CheckboxItem.scss";
import checkboxIconChecked  from "../../../assets/checkbox_icon-checked.svg";
import checkboxIconDefault from "../../../assets/checkbox-icon.svg";
import checkboxIconHover from "../../../assets/checkbox-icon-hovered.svg";

export const CheckboxItem = ({ onClick, checked, number, text, done }) => {
 
  const [isBlockHovered, setIsBlockHovered] = useState(false);

  const checkboxIcon = checked
  ? checkboxIconChecked
  : isBlockHovered && (!done)
  ? checkboxIconHover
  : checkboxIconDefault;
    const containerClassName = `ckeckbox-container ${checked ? "checked" : ""} ${
      done ? "done" : ""
    }`;

    const handleMouseEnter = () => {
      setIsBlockHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsBlockHovered(false);
    };

  return (
    <div
    className={containerClassName}
    onClick={onClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <img src={checkboxIcon} className="checkbox-label" alt="checkbox-icon"/>
      <div className="checkbox-number">{number}.</div>
      <div className="checkbox-text">{text}</div>
    </div>
  );
};

import React from "react";
import "./CheckboxItem.scss";
import checkboxIconChecked  from "../../../assets/checkbox_icon-checked.svg";
import checkboxIconDefault from "../../../assets/checkbox-icon.svg";

export const CheckboxItem = ({ onClick, checked, number, text }) => {

    const checkboxIcon = checked ? checkboxIconChecked : checkboxIconDefault;

  return (
    <div
      className={checked ? "ckeckbox-container checked" : "ckeckbox-container "}
      onClick={onClick}
    >
      <img src={checkboxIcon} className="checkbox-label" alt="checkbox-icon"/>
      <div className="checkbox-number">{number}.</div>
      <div className="checkbox-text">{text}</div>
    </div>
  );
};

import React from "react";
import "./CustomBtn.scss";
import { BTN_TYPES } from "../../../constants/BtnTypes";


export const CustomButton = ({
  onClick,
  text,
  styleType = BTN_TYPES.PRIMARY_MAIN,
  disabled = false,
  className = "",
  ...props
}) => {
  const buttonClassName = `custom-button ${styleType} ${className}`;

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

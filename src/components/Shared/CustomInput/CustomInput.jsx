import React, { forwardRef } from "react";
import "./CustomInput.scss";

export const CustomInput = forwardRef(
  ({ type, placeholder = "", label = "", value, onChange, name, autoFocus }, ref) => {
    return (
      <div className="custom-input">
        {label.length > 0 && <label className="input-label">{label}</label>}
        <input
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
        />
      </div>
    );
  }
);

export default CustomInput;

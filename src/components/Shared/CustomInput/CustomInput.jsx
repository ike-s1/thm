import React, { forwardRef } from "react";
import "./CustomInput.scss";

export const CustomInput = forwardRef(
  ({ type, placeholder = "", label = "", value, onChange, name, autoFocus, errorMessage="" }, ref) => {
    return (
      <div className={`custom-input ${errorMessage.length > 0 ? 'error' : ''}`}>
        {label.length > 0 && <label className={`${value.length > 0 ? ' input-label filled' : 'input-label'}`}>{label}</label>}
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

import React, { useState } from "react";
import "./JoinForm.scss";
import { BTN_TYPES } from "../../../constants/BtnTypes";
import { CustomButton } from "../CustomBtn/CustomBtn";
import { CustomInput } from "../CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";

export const JoinForm = ({ formId }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    telegram: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    company: "",
    telegram: "",
    email: "",
  });

  const navigate = useNavigate();

  const { name, company, telegram, email } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!telegram.trim()) {
      newErrors.telegram = "Telegram is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInputs();
    if (isValid) {
   
      navigate("/step-two");
    }
  };

  const handleLearnMoreClick = () => {
    window.location.href = "#About";
  };

  return (
    <div className="join-form-container">
      <h2 className="join-form-title">Join early acess</h2>
      <p className="join-form-subtitle">*limited seats</p>
      <form id={formId} onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          label="Your Name"
          placeholder="Your Name"
          value={name}
          name="name"
          onChange={handleChange}
          errorMessage={errors.name}
        />
        <CustomInput
          type="text"
          label="Company Name"
          placeholder="Company Name"
          name="company"
          value={company}
          onChange={handleChange}
          errorMessage={errors.company}
        />
        <CustomInput
          type="text"
          label="Your Telegram"
          value={telegram}
          placeholder="Your Telegram"
          name="telegram"
          onChange={handleChange}
          errorMessage={errors.telegram}
        />
        <CustomInput
          type="text"
          label="Your email"
          value={email}
          placeholder="Your email"
          name="email"
          onChange={handleChange}
          errorMessage={errors.email}
        />
        <div className="form-btns-block">
          <CustomButton text="Submit" type="submit" />
          <CustomButton
            text="Learn More"
            styleType={BTN_TYPES.SECONDARY_MAIN}
            type="button"
            onClick={handleLearnMoreClick}
          />
        </div>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import "./JoinForm.scss";
import { BTN_TYPES } from "../../../constants/BtnTypes";
import { CustomButton } from "../CustomBtn/CustomBtn";
import { CustomInput } from "../CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";
import Airtable from 'airtable';

const airtableApiKey = "patInCOT36GKWxABG.fd3cc6b8d3e7480db6d6f244979895b7c138a2bb443ed66a418f625dcbaa76b6";
const airtableBaseId = "appwOe1JDCSHXMVux";
const airTableName = "form";


const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);

export const JoinForm = ({ formId, showLearnBtn=true }) => {
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
      base(airTableName).create(
        [
          {
            fields: {
              name: name,
              company: company,
              telegram: telegram,
              email: email,
            },
          },
        ],
        (err, records) => {
          if (err) {
            console.error("Error creating record:", err);
          } else {
            navigate("/step-two");
          }
        }
      );
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
          {showLearnBtn && <CustomButton
            text="Learn More"
            styleType={BTN_TYPES.SECONDARY_MAIN}
            type="button"
            onClick={handleLearnMoreClick}
          />}
        </div>
      </form>
    </div>
  );
};

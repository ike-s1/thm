import React, { useEffect, useState } from "react";
import "./JoinForm.scss";
import { BTN_TYPES } from "../../../constants/BtnTypes";
import { CustomButton } from "../CustomBtn/CustomBtn";
import { CustomInput } from "../CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";
import Airtable from "airtable";

const airtableApiKey =
  "patInCOT36GKWxABG.fd3cc6b8d3e7480db6d6f244979895b7c138a2bb443ed66a418f625dcbaa76b6";
const airtableBaseId = "appwOe1JDCSHXMVux";
const airTableName = "form";

const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);

export const JoinForm = ({ formId, showLearnBtn = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    telegram: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    telegram: "",
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
    if (!(telegram.trim() || email.trim())) {
      newErrors.telegram = "Telegram or Email is required";
      newErrors.email = "Telegram or Email is required";
    }

    if (email.trim().length > 0) {
      if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveData = async () => {
    const isValid = validateInputs();

    if (isValid) {
      return new Promise((resolve, reject) => {
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
              reject(err);
            } else {
              navigate("/step-two");
              resolve(records);
            }
          }
        );
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateInputs();

    if (isValid) {
      return new Promise((resolve, reject) => {
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
              reject(err);
            } else {
              navigate("/step-two");
              resolve(records);
            }
          }
        );
      });
    }
  };

  const handleLearnMoreClick = () => {
    window.location.href = "#About";
  };

  useEffect(() => {
    const handleBeforeUnload = async (e) => {
      e.preventDefault()

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
                reject(err);
              } else {
                console.log(records)
              }
            }
          );
        }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formData]);

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
          {showLearnBtn && (
            <CustomButton
              text="Learn More"
              styleType={BTN_TYPES.SECONDARY_MAIN}
              type="button"
              onClick={handleLearnMoreClick}
            />
          )}
        </div>
      </form>
    </div>
  );
};

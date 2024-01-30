import React, {  useState } from "react";
import "./JoinForm.scss";
import { BTN_TYPES } from "../../../constants/BtnTypes";
import { CustomButton } from "../CustomBtn/CustomBtn";
import { CustomInput } from "../CustomInput/CustomInput";
import cursor from "../../../assets/cursor-icon.svg";
import { useNavigate } from "react-router-dom";

export const JoinForm = ({formId}) => {
  const [formData, setFormData] = useState({
    name: "Name Namovich",
    company: "Company",
    telegram: "Your Telegram",
    email: "Your email",
  });
  const [showActiveInput, setShowActiveInput] = useState(true);

  const navigate = useNavigate();

  const { name, company, telegram, email } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step-two');
  };
  const handleFormClick = () => {
    setShowActiveInput(false);
  }

  return (
    <div className={`join-form-container ${showActiveInput ? '' : 'hide-active'}`}>
      <h2 className="join-form-title">Join early acess</h2>
      <p className="join-form-subtitle">*limited seats</p>
      { formId === "1" && showActiveInput && <img src={cursor} className="cursor" alt='cursor-icon'/>}
      <form  id={formId} onSubmit={handleSubmit} onClick={handleFormClick}  >
        <CustomInput
          type="text"
          label="Your Name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          label="Company Name"
          value={company}
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          value={telegram}
          name="telegram"
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <div className="form-btns-block">
          <CustomButton text="Submit" type="submit" />
          <CustomButton
            text="Learn More"
            styleType={BTN_TYPES.SECONDARY_MAIN}
          />
        </div>
      </form>
    </div>
  );
};

import React, {  useLayoutEffect,  useState } from "react";
import "./StepTwo.scss";
import { CheckboxItem } from "./CheckboxItem/CheckboxItem";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/Shared/CustomBtn/CustomBtn";

const checkboxArray = [
  "Detailed blockchain analytics of users who have completed the survey",
  "Restricting the survey to owners of specific NFT collections",
  "AI summary and in-depth analysis of survey results",
  "AI assistant for creating surveys in several clicks",
  `Ability to mint NFT "rewards" for completing surveys`,
  "Single-page form, like Google Forms",
  "One-question-per-screen format, like Typeform",
  "Option to skip questions answerable by blockchain (fewer questions for higher user enthusiasm)",
  "Ready-made survey templates",
  "Adding of Facebook, Google Pixels",
  "Access to the results without login (results are not searchable but accessible via link for review without login)",
  "Fetching additional user data (GEO, IP, OS, browser, etc.)",
  "Integration with Google Sheets and CRM",
];

export const StepTwo = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxClick = (index) => {
    if (selectedCheckboxes.includes(index)) {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((item) => item !== index)
      );
    } else {
      if (selectedCheckboxes.length < 3) {
        setSelectedCheckboxes((prevSelected) => [...prevSelected, index]);
      }
    }
  };

  const handleConfirmClick = () => {
    navigate('/step-three')
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="step-two-container">
      <h2 className="step-two-title">Thank you!</h2>
      <p className="step-two-text">
        Please help us to understand the features you would like to prioritize
        so that we can add them to the first release of our forms and start
        solving your needs.
        <br />
        <span>You can choose up to 3 options.</span>
      </p>
      <div className="checkbox-list">
        {checkboxArray.map((c, index) => (
          <CheckboxItem
            key={index}
            text={c}
            number={index + 1}
            onClick={() => handleCheckboxClick(index)}
            checked={selectedCheckboxes.includes(index)}
          />
        ))}
      </div>
      <CustomButton text="Confirm" disabled={!(selectedCheckboxes.length === 3)} onClick={handleConfirmClick} />
    </div>
  );
};

import React, { useLayoutEffect} from "react";
import "./StepThree.scss";

import { useNavigate } from "react-router-dom";
import titleDecour from "../../assets/step-three-decour.svg";
import { CustomButton } from "../../components/Shared/CustomBtn/CustomBtn";

export const StepThree = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  useLayoutEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="step-three-container">
      <div className="step-title-box">
        <img src={titleDecour} alt="decour" />
        <h2 className="step-three-title">You have joined the waitlist! </h2>
      </div>
      <p className="step-three-text">
        As soon as our service is ready for use, we will notify you via email or
        telegram. This will happen soon.<br/>Thank you!
      </p>
      <CustomButton text="Back" onClick={handleBackClick} />
    </div>
  );
};

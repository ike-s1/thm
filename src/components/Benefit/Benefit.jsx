import React from "react";
import "./Benefit.scss";
import { BenefitOne } from "./BenefitOne/BenefitOne";
import { BenefitTwo } from "./BenefitTwo/BenefitTwo";
import { BenefitThree } from "./BenefitThree/BenefitThree";
import StyledComponent from "../Shared/StyledComponent/StyledComponent";

export const Benefit = () => {
  return (
    <div  className="benefit-container" id="About">
      <StyledComponent backgroundColor="#FFFFFF">
        <BenefitOne />
      </StyledComponent>
      <StyledComponent backgroundColor="#FAFAF5">
        <BenefitTwo />
      </StyledComponent>
      <StyledComponent backgroundColor="#DBFF3F">
        <BenefitThree />
      </StyledComponent>
    </div>
  );
};

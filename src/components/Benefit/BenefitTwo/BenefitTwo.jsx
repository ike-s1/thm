import React from "react";
import "./BenefitTwo.scss";
import { UserCaseCard } from "../../Shared/UserCaseCard/UserCaseCard";
import { TextBlock } from "../../Shared/TextBlock/TextBlock";
import arrowMedium from "../../../assets/arraw-medium.svg";
import { CustomButton } from "../../Shared/CustomBtn/CustomBtn";

const userCaseData = {
  name: "Ryan Taylor",
  title: "P2E Game Founder",
  text: `I decided to survey *only players of my Web3 game* to understand their satisfaction with the current game mechanics and upcoming changes. At the end of the survey, I chose to reward my players for their participation by minting special valuable NFT items directly in the form, underscoring the importance of their opinions. *Forms helped me strengthen my connection with the community even more*`,
};

const textBlockData = {
  title: "Reward your audience for their opinion",
  text: `Customize surveys *for specific NFT collection owners* to gather only their opinions. Reward participants by offering unique NFT items, bonus codes, NFT passes in exchange for their survey participation`,
  btnText: "Use for Your Project",
};

export const BenefitTwo = () => {
  return (
    <section className="benefit-section two">
      <div className="benefit-content">
        <img src={arrowMedium} className=" arrow arrow-medium" alt="arrow" />
        <TextBlock textBlockData={textBlockData} />
        <UserCaseCard userCaseData={userCaseData} />
        <CustomButton text={textBlockData.btnText} className="adaptive-btn" />
      </div>
    </section>
  );
};

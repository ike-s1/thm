import React from "react";
import "./BenefitThree.scss";
import { UserCaseCard } from "../../Shared/UserCaseCard/UserCaseCard";
import { TextBlock } from "../../Shared/TextBlock/TextBlock";
import arrowSmall from "../../../assets/arrow-small.svg";
import { BTN_TYPES } from "../../../constants/BtnTypes";
import { CustomButton } from "../../Shared/CustomBtn/CustomBtn";

const userCaseData = {
  name: "Oliver Harrison",
  title: "Crypto OG",
  text: `*The THM AI helped me create a survey based on my hypotheses in several minutes.* Later AI reviewed the results and helped identify patterns among participants that were not immediately apparent. *It saved me a lot of time, and I didn't have to do anything manually*`,
};

const textBlockData = {
  title: "AI-Assisted surveys",
  text: `Add AI in survey management. Our smart *AI will help create surveys based on your needs* or plans and provide an overview of the results, including insights to share with colleagues`,
  btnText: "Add to Your Surveys",
};

export const BenefitThree = () => {
  return (
    <section className="benefit-section three">
      <div className="benefit-content">
        <CustomButton text={textBlockData.btnText} className="adaptive-btn" />
        <img src={arrowSmall} className=" arrow arrow-small" alt="arrow" />
        <UserCaseCard userCaseData={userCaseData} />
        <TextBlock
          textBlockData={textBlockData}
          btnType={BTN_TYPES.PRIMARY_ACCENT}
        />
      </div>
    </section>
  );
};

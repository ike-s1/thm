import React from "react";
import "./BenefitOne.scss";
import { UserCaseCard } from "../../Shared/UserCaseCard/UserCaseCard";
import { TextBlock } from "../../Shared/TextBlock/TextBlock";
import  arrowBig   from "../../../assets/arrow-big.svg";
import { CustomButton } from "../../Shared/CustomBtn/CustomBtn";

const userCaseData = {
  name: "Jakub Kowalski",
  title: "Web3 Startuper",
  text: `While conducting user interviews for my Web3 startup idea,
  I gained valuable insights into the behavior of potential early users.
  *THM helped me to collect and analyze blockchain data*, including transaction history, balance, NFT operations, and other criteria, and provided me with a deeper understanding of my clients' profiles`,
};

const textBlockData = {
  title: "Add blockchain to your surveys",
  text: `*We automatically gather info from the blockchain*, letting you learn more about survey participants. This helps you better understand them and their interests based on data like NFT ownership, recent transactions, balance and more`,
  btnText: "Join Waitlist",
};

export const BenefitOne = () => {
  return (
        <section className="benefit-section">
          <div className="benefit-content">
            <CustomButton text={textBlockData.btnText}  className="adaptive-btn"/>
            <img src={arrowBig} className=" arrow arrow-big" alt="arrow"/>
            <UserCaseCard userCaseData={userCaseData} />
            <TextBlock  textBlockData={textBlockData} />
          </div>
        </section>
  );
};

import React from "react";
import "./Features.scss";
import { FeatureItem } from "./FeatureItem/FeatureItem";
import { CustomButton } from "../Shared/CustomBtn/CustomBtn";

const featuresData = [
  {
    title: "Less Questions, More Answers.",
    text: "No need to ask blockchain-related questions; we automatically aggregate data from the blockchain for each respondent.",
  },
  {
    title: "Flexible Settings.",
    text: "Organize surveys exclusively for owners of a specific NFT collection or a particular cryptocurrency.",
  },
  {
    title: "Share with Colleagues.",
    text: "Make survey results accessible through a shareable link.",
  },
  {
    title: "Turn Respondents into Followers of Your Idea.",
    text: " Organize minting of your digital art, NFT passes or certificates in forms.",
  },
  {
    title: "Save Time.",
    text: "Our AI will help you with survey creation and analysis.",
  },
  {
    title: "Different Formats.",
    text: "Make all questions available on one page or place each question of your survey on a separate screen",
  },
];

export const Features = () => {
  return (
    <section className="features-section" id='Features'>
      <h2 className="features-title title"> Key features</h2>
      <ul className="features-list">
      {featuresData.map(({title, text}, index) => <FeatureItem key={title} title={title} number={index + 1} text={text} />)}
      </ul>
      <CustomButton text='Use for Your Project'/>
    </section>
  );
};

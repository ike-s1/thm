import React from "react";
import "./FormSection.scss";
import { TextBlock } from "../Shared/TextBlock/TextBlock";
import { JoinForm } from "../Shared/JoinForm/JoinForm";

const formTextData = {
  title: "Book your seat now",
  text: "Customize surveys *for specific NFT collection owners* to gather only their opinions. Reward participants by offering unique NFT items, bonus codes, NFT passes in exchange for their survey participation",
};
export const FormSection = () => {
  return (
    <section className="form-section">
      <div className="form-text-block">
        <TextBlock textBlockData={formTextData} displayBtn={false} />
      </div>
      <div className="form-body-block">
        <JoinForm formId="2"/>
      </div>
    </section>
  );
};

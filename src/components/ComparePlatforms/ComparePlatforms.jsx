import React from "react";
import "./ComparePlatforms.scss";
import { ComparePlatformsTable } from "./СomparePlatformsTable/СomparePlatformsTable";
import { CustomButton } from "../Shared/CustomBtn/CustomBtn";

export const ComparePlatforms = () => {
  return (
    <section className="compare-platforms-section" id="Compare Platforms">
      <h2 className="compare-platforms-title title">Compare platforms</h2>
      <div className="compare-table-wrapper">
        <ComparePlatformsTable/>
      </div>
      <CustomButton text="Get Started for Free"/>
    </section>
  );
};

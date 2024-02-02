import React from "react";
import "./Hero.scss";
import Header from "../Header/Header";
import Typewriter from "typewriter-effect";
import { JoinForm } from "../Shared/JoinForm/JoinForm";

const Hero = () => {
  const typewriterStrings = ["Founders", "Organizations", "Media"];
  return (
    <section className="hero-section" id="Hero">
      <Header />
      <div className="hero-content">
        <div className="hero-intro">
          <h1>
            Ideal forms for
            <p className="typewriter-container">
              WEB 3{" "}
              <Typewriter
                options={{
                  strings: typewriterStrings,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 0,
                  delay: 75,
                  pauseFor: 2000,
                }}
              />
            </p>
          </h1>
          <div className="intro-desc">
            <span>
              Add blockchain to your surveys with our platform and save time on
              form creation using our AI assistant.{" "}
            </span>
            Learn more about your web3 respondents without asking questions with
            our blockchain data aggregation tools
          </div>
        </div>
        <div className="hero-early-acess">
          <JoinForm formId="1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

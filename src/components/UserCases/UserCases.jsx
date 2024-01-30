import React, { useRef, useState } from "react";
import "./UserCases.scss";
import { UserCaseCard } from "../Shared/UserCaseCard/UserCaseCard";
import cursorIcon from "../../assets/cursor-icon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Autoplay } from 'swiper/modules';

const SwiperSlidesArray = [
  {
    name: "Jakub Kowalski",
    title: "Web3 Startuper",
    text: `While conducting user interviews for my Web3 startup idea, I gained valuable insights  into the behavior of potential early users. *THM helped me to collect and analyze blockchain data*, including transaction history, balance, NFT operations, and other criteria, and provided me with a deeper understanding of my clients' profiles`,
  },
  {
    name: "Ryan Taylor",
    title: "P2E Game Founder",
    text: `I decided to survey *only players of my Web3 game* to understand their satisfaction with the current game mechanics and upcoming changes. At the end of the survey, I chose to reward my players for their participation by minting special valuable NFT items directly in the form, underscoring the importance of their opinions. *Forms helped me strengthen my connection with the community even more*`,
  },
  {
    name: "Jakub Kowalski",
    title: "Web3 Startuper",
    text: `While conducting user interviews for my Web3 startup idea, I gained valuable insights  into the behavior of potential early users. *THM helped me to collect and analyze blockchain data*, including transaction history, balance, NFT operations, and other criteria, and provided me with a deeper understanding of my clients' profiles`,
  },
  {
    name: "Ryan Taylor",
    title: "P2E Game Founder",
    text: `I decided to survey *only players of my Web3 game* to understand their satisfaction with the current game mechanics and upcoming changes. At the end of the survey, I chose to reward my players for their participation by minting special valuable NFT items directly in the form, underscoring the importance of their opinions. *Forms helped me strengthen my connection with the community even more*`,
  },
  {
    name: "Jakub Kowalski",
    title: "Web3 Startuper",
    text: `While conducting user interviews for my Web3 startup idea, I gained valuable insights  into the behavior of potential early users. *THM helped me to collect and analyze blockchain data*, including transaction history, balance, NFT operations, and other criteria, and provided me with a deeper understanding of my clients' profiles`,
  },
];

export const UserCases = () => {
  const swiperRef = useRef(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const handleSwiperClick = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (autoplayEnabled) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setAutoplayEnabled(!autoplayEnabled);
    }
  };

  return (
    <section className={"user-cases-section"} id='User Cases'>
      <h2 className="cases-title title">User Cases</h2>
      <img src={cursorIcon} className="cursor-icon" alt="cursor-icon" />
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        centeredSlides={false}
         autoplay={{
           delay: 3000,
           disableOnInteraction: true,
         }}
        loop={true}
        onClick={handleSwiperClick}
        className="user-cases-swiper"
      >
        {SwiperSlidesArray.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <UserCaseCard userCaseData={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

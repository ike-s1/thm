import React, { useState } from "react";
import "./UserCases.scss";
import { UserCaseCard } from "../Shared/UserCaseCard/UserCaseCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

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
    name: "Jakub Kowalski 1",
    title: "Web3 Startuper",
    text: `While conducting user interviews for my Web3 startup idea, I gained valuable insights  into the behavior of potential early users. *THM helped me to collect and analyze blockchain data*, including transaction history, balance, NFT operations, and other criteria, and provided me with a deeper understanding of my clients' profiles`,
  },
  {
    name: "Ryan Taylor 2",
    title: "P2E Game Founder",
    text: `I decided to survey *only players of my Web3 game* to understand their satisfaction with the current game mechanics and upcoming changes. At the end of the survey, I chose to reward my players for their participation by minting special valuable NFT items directly in the form, underscoring the importance of their opinions. *Forms helped me strengthen my connection with the community even more*`,
  },
  {
    name: "Jakub Kowalski 2",
    title: "Web3 Startuper",
    text: `While conducting user interviews for my Web3 startup idea, I gained valuable insights  into the behavior of potential early users. *THM helped me to collect and analyze blockchain data*, including transaction history, balance, NFT operations, and other criteria, and provided me with a deeper understanding of my clients' profiles`,
  },
];

export const UserCases = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSwiperInit = (swiper) => {
    if (swiper) {
      setSwiperInstance(swiper);
    }
  };

  const handleSlideChange = () => {
    if (swiperInstance) {
        setActiveIndex(swiperInstance.activeIndex)
    }
  };

  console.log(swiperInstance?.activeIndex)

  return (
    <section className={"user-cases-section"} id="User Cases">
      <div className="user-cases-content">
        <h2 className="cases-title title">User Cases</h2>
        <Swiper
          modules={[Pagination]}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          slidesPerView={2.95}
          onSwiper={handleSwiperInit}
          loop={activeIndex > 0}
          onSlideChange={handleSlideChange}
        >
          {SwiperSlidesArray.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <UserCaseCard userCaseData={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

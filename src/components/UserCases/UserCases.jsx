import React, { useState } from "react";
import "./UserCases.scss";
import { UserCaseCard } from "../Shared/UserCaseCard/UserCaseCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
    name: "P.Ranksy",
    title: "NFT enthusiast",
    text: `I decided to survey my NFT collectors about past and future projects. At the end of the survey, I rewarded them with unique NFTs.`,
  },
  {
    name: "Mr.B",
    title: "Famous blogger",
    text: `I asked the community about my own NFT collection launch and rewarded them with NFT passes at the end of the survey, which they can exchange for NFTs from my main project.`,
  },
  {
    name: "D. Crypt",
    title: "Crypto expert",
    text: `We conducted a survey on crypto industry trends, and wallet analysis showed that participants with less than $10 tended to respond negatively.`,
  },
];

export const UserCases = () => {
  const [hidePrevSlide, setHidePrevSlide] = useState(true);
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = (curSwiper) => {
    if (swiper?.activeIndex - 1 < curSwiper.activeIndex) {
      setHidePrevSlide(false);
    }
  };

  const handleSwiperInit = (swiper) => {
    setSwiper(swiper);
  };

  return (
    <section className="user-cases-section" id="User Cases">
      <div className="user-cases-content">
        <h2 className="cases-title title">User Cases</h2>
        <Swiper
          modules={[Pagination]}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1281: {
              slidesPerView: 2.95,
              spaceBetween: 20,
            },
            961: {
              slidesPerView: 1.45,
              spaceBetween: 20,
            },
            769: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            361: {
              slidesPerView: 1,
              spaceBetween: 20,
            }
          }}
          loop={true}
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiperInit}
        >
          {SwiperSlidesArray.map((data, index) => {
            return (
              <SwiperSlide key={index} className={hidePrevSlide ? "hide" : ""}>
                <UserCaseCard userCaseData={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import screen1 from "../assests/images/Rectangle 272.png";
import screen2 from "../assests/images/Rectangle 273.png";
import screen3 from "../assests/images/Rectangle 271.png";
import screen4 from "../assests/images/Rectangle 270.png";
import phone from "../assests/images/Rectangle 64.png";
import phonemockup from "../assests/images/image 31.png";
import { EffectCoverflow, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { SectionHeader } from "./sectionHeader";

export const ScreenShootPage = () => {
  return (
    <div className="max-w-7xl py-20 mx-auto my-10 px-10">
      <SectionHeader subtitle="ScreenShots" title="App screenshots" />

      <div className="screen_shoot_mockup mt-10  max-w-4xl relative    mx-auto flex gap-10 justify-between">
        <Swiper
          initialSlide={2}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={screen1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={screen2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={1000} src={phone} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={screen3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={screen4} />
          </SwiperSlide>
        </Swiper>
        <div className="absolute screenshot_phone -top-8 left-1/2 -translate-x-1/2">
          <Image width={250} src={phonemockup} />
        </div>
      </div>
    </div>
  );
};

"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import client from "../assests/images/client-1.png";
import group567 from "../assests/images/Group 568.png";
// Import Swiper styles

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { SectionHeader } from "./sectionHeader";

export const Testimonies = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="max-w-7xl   py-10  my-20 px-10 mx-auto p-5">
      <SectionHeader subtitle="reviews" title="clientc reviews" />

      <div className="">
        <Swiper
          spaceBetween={50}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper max-w-4xl   m-20 mx-auto "
        >
          <SwiperSlide className="  w-0 boder mx-auto   test_swiper-slide ">
            <div className="row flex p-10 gap-16 justify-between items-center">
              <div>
                <div className="text max-w-3xl text-gray-300">
                  Love the app!! I'm looking forward for them to add more of my
                  favorite stores so i can use them more offen. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </div>
                <div className="test-profile mt-5 flex items-center gap-3">
                  <div className="prof_img max-w-10 border-orange-500 border-2 rounded-full">
                    <Image src={client} />
                  </div>
                  <div className="prof_text">
                    <p className="text-orange-500 text-sm font-bold">
                      Okosun Micheal
                    </p>
                    <p className="text-sm text-gray-400">
                      Finally a great app with variety
                    </p>
                  </div>
                </div>
              </div>
              <div className="col2 hidden md:block">
                <Image src={group567} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-full boder mx-auto   test_swiper-slide ">
            <div className="row flex p-10 gap-16  justify-between items-center">
              <div>
                <div className="text max-w-3xl text-gray-300">
                  Love the app!! I'm looking forward for them to add more of my
                  favorite stores so i can use them more offen. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </div>
                <div className="test-profile mt-5 flex items-center gap-3">
                  <div className="prof_img max-w-10 border-orange-500 border-2 rounded-full">
                    <Image src={client} />
                  </div>
                  <div className="prof_text">
                    <p className="text-orange-500 text-sm font-bold">
                      Allhalal
                    </p>
                    <p className="text-sm text-gray-400">
                      The app is very performat
                    </p>
                  </div>
                </div>
              </div>
              <div className="col2 hidden md:block">
                <Image src={group567} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-full boder mx-auto   test_swiper-slide ">
            <div className="row flex p-10  gap-16 justify-between items-center">
              <div>
                <div className="text max-w-3xl text-gray-300">
                  Love the app!! I'm looking forward for them to add more of my
                  favorite stores so i can use them more offen. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </div>
                <div className="test-profile mt-5 flex items-center gap-3">
                  <div className="prof_img max-w-10 border-orange-500 border-2 rounded-full">
                    <Image src={client} />
                  </div>
                  <div className="prof_text">
                    <p className="text-orange-500 text-sm font-bold">
                      Smith Jones
                    </p>
                    <p className="text-sm text-gray-400">
                      A UI is so intriging
                    </p>
                  </div>
                </div>
              </div>
              <div className="col2 hidden md:block">
                <Image src={group567} />
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

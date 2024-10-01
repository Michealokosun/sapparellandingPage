"use client";

import Image from "next/image";
import React from "react";
import phone from "../assests/images/hero-img.png";
import floatingcomp from "../assests/images/Group 578.png";
import { motion } from "framer-motion";
const cartvariant = {
  offscreen: {
    x: 300,
  },
  onscreen: {
    x: -50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2.5,
    },
  },
};
export const HeroComponent = () => {
  return (
    <div>
      <div
        id="home"
        className="relative h-screen max-w-7xl flex-wrap mx-auto isolate px-6  lg:px-8"
      >
        {/* <div className="wavelines absolute bottom-0">
          <Image src={wave} />
        </div> */}
        <div className="  flex flex-wrap flex-col md:flex-row justify-between items-center">
          {/* ----------column 1 ------------- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.17, 0.67, 0.83, 0.67] }}
            className="mx-auto  max-w-2xl py-36 lg:w-10/12  sm:py-48 lg:py-56"
          >
            <div className="mb-4 sm:mb-8 sm:flex sm:justify-center">
              <div className="relative border border-gray-700 rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding
                <a href="#" className="font-semibold ms-2 text-[#bd4c0a]">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Data to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#bd4c0a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#f48f0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Get started
                </a>
                <a
                  href="#"
                  className=" rounded-md border-2 border-[#ee8040] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#f48f0c] focus-visible:outline  leading-6 "
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </motion.div>
          {/* -----------------column 2 ------------ */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cartvariant}
            className="phone_mockup  hidden xl:block lg:w-4/12 relative p-10 "
          >
            <div className="  flex justify-center ">
              <Image width={300} alt="hero img" src={phone} />
            </div>
            <div className="floating-items absolute left-0 top-28 items-center rounded-md bg-white px-3 py-2 text-black flex gap-3">
              <p className="flex items-center pe-3 py-2  leading-3 text-xs border border-gray-500 rounded-full  font-thin capitalize">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-orange-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                swipe right to accept order
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </p>
            </div>
            <div className="floating absolute bottom-10 right-0 bg-white p-3 rounded-md items">
              <Image width={200} src={floatingcomp} />
            </div>
          </motion.div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

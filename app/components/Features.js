"use client";
import React from "react";

import fearuresmockup from "../assests/images/features-hero-img.png";
import backgrounoverlay from "../assests/images/hero-right-bg.png";
import Image from "next/image";

import lindedot from "../assests/images/Group 570.png";
import { motion } from "framer-motion";
const cardVariants1 = {
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
const cardVariants2 = {
  offscreen: {
    x: -300,
  },
  onscreen: {
    x: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2.5,
    },
  },
};
export const Features = () => {
  return (
    <div className=" max-w-7xl py-10  my-20 px-10 mx-auto p-5">
      <div className="app_title text-center">
        <span className="uppercase text-xs">features</span>
        <h1 className="text-3xl capitalize ">Awosome features</h1>
      </div>
      <div className="row flex gap-10 md:gap-0 flex-col md:flex-row mt-10 justify-evenly">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants1}
          className="col1   md:gap-0 relative flex flex-col  justify-evenly  gap-5 ps-7  border-e-2 pe-7"
        >
          <div className="text-right max-w-lg">
            <h1 className="font-bold">Near by stores</h1>
            <p className="text-right text-sm">
              Discover Local Stores based on your GPS location
            </p>
          </div>
          <div className="text-right ">
            <h1 className="font-bold ">Near by stores</h1>
            <p className="text-sm">
              Discover Local Stores based on your GPS location
            </p>
          </div>
          <div className="text-right">
            <h1 className="font-bold">Near by stores</h1>
            <p className="text-sm">
              Discover Local Stores based on your GPS location
            </p>
          </div>

          <div className="absolute line-top -right-2">
            <Image width={13} src={lindedot} />
          </div>
          <div className="absolute -right-2">
            <Image width={13} src={lindedot} />
          </div>
          <div className="absolute line-bottom -right-2">
            <Image width={13} src={lindedot} />
          </div>
        </motion.div>

        <div className="col1    relative ">
          <Image className="opacity-20" src={backgrounoverlay} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 ">
            <Image width={300} src={fearuresmockup} />
          </div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants2}
          className="col1  gap-5 relative flex flex-col justify-evenly border-s-2 ps-7"
        >
          <div className=" max-w-lg">
            <h1 className="font-bold">Near by stores</h1>
            <p className="text-left text-sm">
              Discover Local Stores based on your GPS location
            </p>
          </div>
          <div className="">
            <h1 className="font-bold ">Near by stores</h1>
            <p className="text-sm">
              Discover Local Stores based on your GPS location
            </p>
          </div>
          <div className="">
            <h1 className="font-bold">Near by stores</h1>
            <p className="text-sm">
              Discover Local Stores based on your GPS location
            </p>
          </div>

          <div className="absolute line-top -left-2">
            <Image width={13} src={lindedot} />
          </div>
          <div className="absolute -left-2">
            <Image width={13} src={lindedot} />
          </div>
          <div className="absolute line-bottom -left-2">
            <Image width={13} src={lindedot} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

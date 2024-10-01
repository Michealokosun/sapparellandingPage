"use client";

import React from "react";
import playstore from "../assests/images/Group 46.png";
import applestore from "../assests/images/Vector.png";
import phonemockup from "../assests/images/hero-img-shop.png";
import burger from "../assests/images/burger.png";
import backgrounoverlay from "../assests/images/hero-right-bg.png";
import Image from "next/image";
import { motion } from "framer-motion";

const cardvariant = {
  offscreen: {
    x: 50,
  },
  onscreen: {
    x: -100,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2.5,
    },
  },
};

export const InnovativeSection = () => {
  return (
    <div id="features" className="max-w-7xl py-20 mx-auto my-20 px-10">
      <div className="downlaod_row gap-10 flex flex-col-reverse md:flex-row justify-around items-center">
        <div className="col1 text-center max-w-xl">
          <h1 className="text-2xl capitalize">the innovative way to shop </h1>
          <p className="text-gray-400 mt-2">
            When you join DeliverZe you will enjoy our new and improved way of
            shopping through our virtual mall experience
          </p>
          <div className="download_buttons justify-center mt-7 flex gap-10">
            <button className="bg-orange-500 p-3 rounded-lg">
              <Image src={playstore} />
            </button>
            <button className="bg-white p-3 rounded-lg">
              <Image src={applestore} />
            </button>
          </div>
        </div>
        <div className="col1 relative">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 4, repeat: Infinity }}
            whileInView={{ opacity: 1 }}
          >
            <Image className="blur-m" src={backgrounoverlay} />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardvariant}
            className="absolute top-3 left-1/2 -translate-x-1/2"
          >
            <Image src={phonemockup} />
          </motion.div>
          <motion.div className="absolute bottom-10 left-1/4 -translate-x-1/2">
            <Image width={200} src={burger} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

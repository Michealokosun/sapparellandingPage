"use client";

import { motion, useScroll } from "framer-motion";

import React from "react";

export const Scrollanimation = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="top-progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

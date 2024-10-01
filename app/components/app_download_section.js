"use client";
import React from "react";
import { motion } from "framer-motion";

export const AppDownlaodSection = () => {
  return (
    <div className="downalod_details flex-wrap mt-16 gap-10 justify-around items-center flex">
      <div className="box1 w-full relative   bg-white px-5 text-black pe-28 py-2 ">
        {/* <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 1200 }}
          transition={{ duration: 3 }}
          className="progressbar  absolute left-0   h-full top-0 bg-orange-500 flex"
        /> */}
        <div className="sticky">
          <h1 className="font-extrabold  ">1000</h1>
          <p className="text-xs uppercase tet-white ">App download</p>
          <div className="icon bg-orange-600 p-2 absolute -top-5 -right-20 rounded-full inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="box2 w-full relative bg-white px-5 py-2 text-black ">
        {/* <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 1 }}
          className="progressbar  absolute left-0   h-full top-0 bg-orange-500 flex"
        /> */}
        <div className="sticky">
          <h1 className="font-extrabold ">2000</h1>
          <p className="text-xs tet-white uppercase">Happy client</p>
          <div className="icon bg-orange-600 p-2 absolute -top-5 right-3 rounded-full inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="box3 relative w-full bg-white px-5 py-2 text-black ">
        {/* <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 1200 }}
          transition={{ duration: 1 }}
          className="progressbar  absolute left-0   h-full top-0 bg-orange-500 flex"
        /> */}
        <div className="sticky">
          <h1 className="font-extrabold text-hite ">4000</h1>
          <p className="uppercase text-xs text-hite ">Active Account</p>
          <div className="icon bg-orange-600 p-2 absolute -top-5 right-3 rounded-full inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="box4 w-full relative bg-white py-2 px-5 text-black ">
        {/* <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 1200 }}
          transition={{ duration: 2 }}
          className="progressbar  absolute left-0   h-full top-0 bg-orange-500 flex"
        /> */}
        <div className="sticky">
          <h1 className="font-extrabold text-wite ">2000</h1>
          <p className="text-xs uppercase text-hite"> total App rates </p>
          <div className="icon bg-orange-600 p-2 absolute -top-5 right-3 rounded-full inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

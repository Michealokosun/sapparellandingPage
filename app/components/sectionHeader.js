import React from "react";

export const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className=" max-w-7xl py-10  my-20 px-10 mx-auto p-5">
      <div className="app_title text-center">
        <span className="uppercase text-xs text-orange-500 ">{subtitle}</span>
        <h1 className="text-3xl mt-3 capitalize ">{title}</h1>
      </div>
    </div>
  );
};

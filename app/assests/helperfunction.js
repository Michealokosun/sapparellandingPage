"use client";

import React from "react";

import { useDispatch } from "react-redux";
import { singninuser } from "../store/userslice";
export const helperfunction = (user) => {
  const dispach = useDispatch();

  dispach(singninuser(user));
};

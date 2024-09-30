"use client";

import { signUpWiithGooglePopUp } from "@/app/firbase/firebase";
import { singninuser } from "@/app/store/userslice";
import { useDispatch } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const handleclick = async () => {
    const user = await signUpWiithGooglePopUp();
    dispatch(singninuser(user));
  };
  return (
    <>
      <h1>login</h1>
      <button
        onClick={handleclick}
        className="border
       p-3 px-10"
      >
        Login
      </button>
    </>
  );
}

import Link from "next/link";
import React from "react";
import facbook from "../assests/images/fb-ic.svg";
import insta from "../assests/images/insta-ic.svg";
import twiter from "../assests/images/tweet-ic.svg";
import google from "../assests/images/google-ic.svg";
import Image from "next/image";

export const Footer = () => {
  const date = new Date();
  return (
    <>
      <div className="max-w-7xl flex flex-col gap-3 md:flex-row items-center justify-between text-sm mx-auto p-6">
        <div>
          <span>S~Apparel</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link href="#about">About</Link>
          <Link href="#">Terms and condition</Link>
          <Link href="#">Privacy and policy</Link>
          <Link href="#contactus">Contact</Link>
        </div>
        <div className="socials  flex gap-3">
          <Image width={14} src={facbook} />
          <Image width={14} src={twiter} />
          <Image width={14} src={insta} />
          <Image width={14} src={google} />
        </div>
      </div>
      <div className="text-center text-xs pb-3">
        <p>Copyright &copy;{date.getFullYear()} s~apparels</p>
      </div>
    </>
  );
};

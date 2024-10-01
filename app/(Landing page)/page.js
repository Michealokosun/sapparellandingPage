import Image from "next/image";
import Navbar from "../components/navbar";
import { HeroComponent } from "../components/hero-.component";
import handicon from "../assests/images/carry-ic.png";
import location from "../assests/images/location-ic.png";
import storeicon from "../assests/images/store-ic.png";
import playstore from "../assests/images/Group 46.png";
import applestore from "../assests/images/Vector.png";
import phonemockup from "../assests/images/hero-img-shop.png";
import burger from "../assests/images/burger.png";
import backgrounoverlay from "../assests/images/hero-right-bg.png";
import fearuresmockup from "../assests/images/features-hero-img.png";

import lindedot from "../assests/images/Group 570.png";
import { ScreenShootPage } from "../components/screenshot.component";
import { Testimonies } from "../components/testimonial_section";
import { SectionHeader } from "../components/sectionHeader";
import countactusImage from "../assests/images/image 295.png";
import Link from "next/link";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="">
      {/* ------------ navigation section  */}
      <nav>
        <Navbar />
      </nav>
      {/* ----------- hero section  */}
      <header>
        <HeroComponent />
      </header>
      {/* -------who we are  */}
      <section>
        <div className="max-w-7xl md:py-10 px-5 mx-auto">
          <div id="about" className="who_title mb-14 text-center">
            <span className="text-orange-500 ">lorem ipsum</span>
            <h1 className="text-3xl">Why are we unique?</h1>
          </div>

          <div className="who_row flex gap-10  flex-col md:flex-row">
            <div className="col1 text-center">
              <div className="icon mb-2 ">
                <Image
                  width={50}
                  className="bg-white  rounded-full p-3 mx-auto"
                  src={handicon}
                />
              </div>
              <div className="who_text max-w-lg mx-auto">
                <h4 className="mb-2">We’ve upped the game.</h4>
                <p className="text-gray-400  text-sm leading-5">
                  We carry a variety of products through our unique vendors that
                  you can’t typically get delivered.
                </p>
              </div>
            </div>
            <div className="col1">
              <div className="icon mb-2">
                <Image
                  width={50}
                  className="mx-auto bg-white rounded-full p-3"
                  src={storeicon}
                />
              </div>
              <div className="who_text text-center  max-w-lg mx-auto">
                <h4>Order From our virtual mall of Local Stores</h4>
                <p className="text-gray-400 text-sm leading-5">
                  Order from a large variety of local stores you like and trust
                  for years you can’t typically get delivered.
                </p>
              </div>
            </div>
            <div className="col1">
              <div className="icon mb-2">
                <Image
                  width={50}
                  className="mx-auto rounded-full px-4 py-3 bg-white"
                  src={location}
                />
              </div>
              <div className="who_text text-center max-w-lg mx-auto">
                <h4>Easy Access to local services</h4>
                <p className="text-gray-400 text-sm leading-5">
                  Easy access to local services such as dry cleaning, we can
                  pick it up and drop it off to make your
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------app download section */}
      <section>
        <div id="features" className="max-w-7xl py-20 mx-auto my-20 px-10">
          <div className="downlaod_row gap-10 flex flex-col-reverse md:flex-row justify-around items-center">
            <div className="col1 text-center max-w-xl">
              <h1 className="text-2xl capitalize">
                the innovative way to shop{" "}
              </h1>
              <p className="text-gray-400 mt-2">
                When you join DeliverZe you will enjoy our new and improved way
                of shopping through our virtual mall experience
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
              <Image className="blur-m" src={backgrounoverlay} />
              <div className="absolute top-3 left-1/2 -translate-x-1/2">
                <Image src={phonemockup} />
              </div>
              <div className="absolute bottom-10 left-1/4 -translate-x-1/2">
                <Image width={200} src={burger} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------app festure section */}
      <section className="app_features">
        <div className=" max-w-7xl py-10  my-20 px-10 mx-auto p-5">
          <div className="app_title text-center">
            <span className="uppercase text-xs">features</span>
            <h1 className="text-3xl capitalize ">Awosome features</h1>
          </div>
          <div className="row flex gap-10 md:gap-0 flex-col md:flex-row mt-10 justify-evenly">
            <div className="col1  md:gap-0 relative flex flex-col  justify-evenly  gap-5 ps-7  border-e-2 pe-7">
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
            </div>

            <div className="col1 relative ">
              <Image className="opacity-20" src={backgrounoverlay} />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 ">
                <Image width={300} src={fearuresmockup} />
              </div>
            </div>
            <div className="col1 gap-5 relative flex flex-col justify-evenly border-s-2 ps-7">
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
            </div>
          </div>
        </div>
      </section>
      {/* --------- app download section */}
      <section>
        <div className="max-w-7xl  py-10  my-20 px-10 mx-auto p-5">
          <SectionHeader subtitle="Downloads" title="app download" />

          <div className="downalod_details flex-wrap mt-16 gap-10 justify-around items-center flex">
            <div className="box1 w-full relative  bg-white px-5 text-black pe-28 py-2 ">
              <h1 className="font-extrabold ">1000</h1>
              <p className="text-xs uppercase ">App download</p>
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
                    d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>
              </div>
            </div>
            <div className="box2 w-full relative bg-white px-5 py-2 text-black ">
              <h1 className="font-extrabold ">2000</h1>
              <p className="text-xs uppercase">Happy client</p>
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
            <div className="box3 relative w-full bg-white px-5 py-2 text-black ">
              <h1 className="font-extrabold ">4000</h1>
              <p className="uppercase text-xs ">Active Account</p>
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
            <div className="box4 w-full relative bg-white py-2 px-5 text-black ">
              <h1 className="font-extrabold ">2000</h1>
              <p className="text-xs uppercase"> total App rates </p>
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
      </section>
      {/* ---------app screenshot section */}
      <section className="relative">
        <div className="wave">
          <svg
            id="wave"
            // style="transform:rotate(0deg); transition: 0.3s"
            viewBox="0 0 1440 210"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(10, 10, 10, 1)" offset="0%"></stop>
                <stop
                  stop-color="rgba(32.245, 32.245, 32.245, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              // style="transform:translate(0, 0px); opacity:1"
              fill="url(#sw-gradient-0)"
              d="M0,147L16,147C32,147,64,147,96,140C128,133,160,119,192,108.5C224,98,256,91,288,80.5C320,70,352,56,384,52.5C416,49,448,56,480,52.5C512,49,544,35,576,56C608,77,640,133,672,150.5C704,168,736,147,768,143.5C800,140,832,154,864,150.5C896,147,928,126,960,129.5C992,133,1024,161,1056,143.5C1088,126,1120,63,1152,56C1184,49,1216,98,1248,119C1280,140,1312,133,1344,133C1376,133,1408,140,1440,122.5C1472,105,1504,63,1536,63C1568,63,1600,105,1632,108.5C1664,112,1696,77,1728,80.5C1760,84,1792,126,1824,143.5C1856,161,1888,154,1920,126C1952,98,1984,49,2016,38.5C2048,28,2080,56,2112,73.5C2144,91,2176,98,2208,87.5C2240,77,2272,49,2288,35L2304,21L2304,210L2288,210C2272,210,2240,210,2208,210C2176,210,2144,210,2112,210C2080,210,2048,210,2016,210C1984,210,1952,210,1920,210C1888,210,1856,210,1824,210C1792,210,1760,210,1728,210C1696,210,1664,210,1632,210C1600,210,1568,210,1536,210C1504,210,1472,210,1440,210C1408,210,1376,210,1344,210C1312,210,1280,210,1248,210C1216,210,1184,210,1152,210C1120,210,1088,210,1056,210C1024,210,992,210,960,210C928,210,896,210,864,210C832,210,800,210,768,210C736,210,704,210,672,210C640,210,608,210,576,210C544,210,512,210,480,210C448,210,416,210,384,210C352,210,320,210,288,210C256,210,224,210,192,210C160,210,128,210,96,210C64,210,32,210,16,210L0,210Z"
            ></path>
          </svg>
        </div>
        <ScreenShootPage />
        <div className="wave">
          <svg
            id="wave"
            // style="transform:rotate(0deg); transition: 0.3s"
            viewBox="0 0 1440 210"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(10, 10, 10, 1)" offset="0%"></stop>
                <stop
                  stop-color="rgba(32.245, 32.245, 32.245, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              // style="transform:translate(0, 0px); opacity:1"
              fill="url(#sw-gradient-0)"
              d="M0,147L16,147C32,147,64,147,96,140C128,133,160,119,192,108.5C224,98,256,91,288,80.5C320,70,352,56,384,52.5C416,49,448,56,480,52.5C512,49,544,35,576,56C608,77,640,133,672,150.5C704,168,736,147,768,143.5C800,140,832,154,864,150.5C896,147,928,126,960,129.5C992,133,1024,161,1056,143.5C1088,126,1120,63,1152,56C1184,49,1216,98,1248,119C1280,140,1312,133,1344,133C1376,133,1408,140,1440,122.5C1472,105,1504,63,1536,63C1568,63,1600,105,1632,108.5C1664,112,1696,77,1728,80.5C1760,84,1792,126,1824,143.5C1856,161,1888,154,1920,126C1952,98,1984,49,2016,38.5C2048,28,2080,56,2112,73.5C2144,91,2176,98,2208,87.5C2240,77,2272,49,2288,35L2304,21L2304,210L2288,210C2272,210,2240,210,2208,210C2176,210,2144,210,2112,210C2080,210,2048,210,2016,210C1984,210,1952,210,1920,210C1888,210,1856,210,1824,210C1792,210,1760,210,1728,210C1696,210,1664,210,1632,210C1600,210,1568,210,1536,210C1504,210,1472,210,1440,210C1408,210,1376,210,1344,210C1312,210,1280,210,1248,210C1216,210,1184,210,1152,210C1120,210,1088,210,1056,210C1024,210,992,210,960,210C928,210,896,210,864,210C832,210,800,210,768,210C736,210,704,210,672,210C640,210,608,210,576,210C544,210,512,210,480,210C448,210,416,210,384,210C352,210,320,210,288,210C256,210,224,210,192,210C160,210,128,210,96,210C64,210,32,210,16,210L0,210Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* -------- client review section */}
      <section>
        <Testimonies />
      </section>
      {/* --------contact us section */}
      <section className="contacus relative">
        <div className="absolute top-1/4  -z-10">
          <Image
            className=" w-80 object-contain hidden md:block"
            src={countactusImage}
          />
        </div>
        <div className="max-w-7xl mx-auto p-10">
          <SectionHeader subtitle="Contact us" title="get in touch with us!" />

          <form
            className="flex justify-center gap-4    items-center flex-col"
            action=""
          >
            <div className="name max-w-2xl w-full md:w-1/2">
              <input
                className="p-2 rounded-md placeholder:text-sm border-none outline-none text-gray-400 w-full"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="email max-w-2xl w-full md:w-1/2">
              <input
                className="p-2 text-gray-400 placeholder:text-sm  rounded-md border-none outline-none w-full"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="textarea  max-w-2xl w-full md:w-1/2">
              <textarea
                rows={8}
                placeholder="Your Message"
                className="p-2 text-gray-400 placeholder:text-sm rounded-md border-none outline-none w-full"
                name="message"
              ></textarea>
            </div>
            <div className="  max-w-2xl text-center w-full md:w-1/2">
              <button
                className=" flex-1  py-2 px-5 rounded-full bg-orange-500"
                type="submit"
              >
                send now
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* ----------footer section */}
      <footer className="bg-zinc-900">
        <Footer />
      </footer>
    </div>
  );
}

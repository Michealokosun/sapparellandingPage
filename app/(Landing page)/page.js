import Image from "next/image";
import Navbar from "../components/navbar";
import { HeroComponent } from "../components/hero-.component";
import handicon from "../assests/images/carry-ic.png";
import location from "../assests/images/location-ic.png";
import storeicon from "../assests/images/store-ic.png";
import "animate.css";
import { ScreenShootPage } from "../components/screenshot.component";
import { Testimonies } from "../components/testimonial_section";
import { SectionHeader } from "../components/sectionHeader";
import countactusImage from "../assests/images/image 295.png";
import { Footer } from "../components/footer";
import { Scrollanimation } from "../components/Scrollanimation";
import { AppDownlaodSection } from "../components/app_download_section";
import { Features } from "../components/Features";
import { InnovativeSection } from "../components/innovative.section";

export default function Home() {
  return (
    <div className="">
      <Scrollanimation />
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
        <InnovativeSection />
      </section>
      {/* ---------app festure section */}
      <section className="app_features">
        <Features />
      </section>
      {/* --------- app download section */}
      <section>
        <div className="max-w-7xl  py-10  my-20 px-10 mx-auto p-5">
          <SectionHeader subtitle="Downloads" title="app download" />
          <AppDownlaodSection />
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

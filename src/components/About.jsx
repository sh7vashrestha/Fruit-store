import React from "react";
import about from "../assets/aboutUs.jpg";

function About() {
  return (
    <div
      id="about"
      className="w-full sm:h-[100vh] min-h-[100vh] bg-[#eee] text-[#444] top-[-20]">
      <div className="max-w-[1000px] mx-auto px-5 pt-36 justify-center items-center h-full">
        <p className="text-[#978300ee] text-3xl sm:text-6xl md:text-8xl inline text-right relative sm:left-[40%] md:left-[35%] top-[5%] z-[0] font-medium font-sans">
          ABOUT US
        </p>
        <div className="flex sm:flex-row flex-col w-auto min-h-auto">
          <div className="hidden sm:flex pr-8 min-h-auto w-auto">
            <img className="rounded-xl shadow-slate-600 shadow-md " src={about} alt="sagarmatha fruit center" />
          </div>
          <div className="sm:max-w-[40%] md:max-w-[50%]">
            <p className="pt-2 sm:pt-14 md:pt-24 text-pretty font-light text-justify text-[13px] md:text-[15px] pr-5">
            For four decades, our revered Sagarmatha fruit center has stood as a cornerstone in Narayangarh, Chitwan, Nepal, a testament to a timeless commitment to excellence. Since our inception 40 years ago, we've curated an unparalleled selection of premium, handpicked fruits, becoming synonymous with freshness and quality. Our legacy spans generations, fostering a deep-rooted connection with our community and an unwavering dedication to providing the finest fruits. As pioneers in the community, we've dedicated ourselves to curating a stunning array of fresh, handpicked fruits that evoke both nostalgia and discovery.
            </p>
          </div>
          <div className="sm:hidden flex justify-center w-auto">
            <img className=" rounded-xl md:h-[100%]" src={about} alt="SFS" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

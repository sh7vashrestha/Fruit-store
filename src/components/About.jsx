import React from "react";
import about from "../assets/aboutUs.jpg";

function About() {
  return (
    <div
      id="about"
      className="w-full sm:h-[100vh] min-h-[100vh] bg-[#eee] text-[#444]">
      <div className="max-w-[1000px] mx-auto px-5 pt-36 justify-center items-center h-full">
        <p className="text-[#978300ee] text-3xl sm:text-6xl md:text-8xl inline text-right relative sm:left-[40%] md:left-[35%] top-[5%] z-[0] font-medium font-sans">
          ABOUT US
        </p>
        <div className="flex sm:flex-row flex-col">
          <div className="pr-8 sm:h-[500px]">
            <img
              className="hidden sm:flex rounded-xl h-auto max-h-[90%]"
              src={about}
              alt="SFS"
            />
          </div>
          <div className="sm:max-w-[50%]">
            <p className="pt-2 sm:pt-28 md:pt-40 text-pretty font-light text-justify text-[15px]">
              Sagarmatha Fruit store started as a small shop in Narayangarh,
              Chitwan. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minima nemo vel expedita laudantium? Esse enim adipisci a sequi!
              Voluptate ut quam excepturi magnam, eligendi, laudantium vitae,
              deserunt autem voluptatem repudiandae perspiciatis ullam et vero
              velit minima sit eveniet labore qui aspernatur aperiam ad quod
              accusamus incidunt praesentium. Doloremque, expedita aut!
            </p>
          </div>
          <div className="flex justify-center w-auto max-h-[40vh]">
            <img
              className="sm:hidden rounded-xl h-[300px] md:h-[100%]"
              src={about}
              alt="SFS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

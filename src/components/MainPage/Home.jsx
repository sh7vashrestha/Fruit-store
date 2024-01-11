import React from "react";
import fruits from "../../assets/home.png";

function Home() {
  return (
    <div
      id="home"
      className="w-full sm:h-[100vh] min-h-[100vh] bg-[#eee] text-[#444]">
      <div className="max-w-[1000px] mx-auto px-5 pt-36 sm:pt-5 flex flex-col justify-center items-center h-full md:flex-row">
        <div className="flex flex-col flex-1 justify-center">
          <p className="text-lg">Welcome to</p>
          <h2 className="text-4xl inline sm:text-5xl font-bold text-[#978300ee]">
            Sagarmatha Fruits Center
          </h2>
          <p className="text-[#222] text-sm font-light sm:text-base text-justify py-3 max-w-[700px]">
            We are a family owned business that has been operating for over four
            decades. We are located in the heart of Narayanghat, Chitwan, Nepal.
            We specialize in providing the freshest fruits to our customers.
          </p>
        </div>
        <div className="flex flex-col flex-1 justify-center max-h-[30%]">
          <img src={fruits} alt="Fruits" className="h-auto w-[80%] md:w-[80%] mx-auto shadow-[#fefefe] dark:shadow-gray-800" />
        </div>
      </div>
    </div>
  );
}

export default Home;

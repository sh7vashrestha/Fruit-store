import React from "react";
import { IoMdClose } from "react-icons/io";

function PopUp(props) {
  return props.trigger ? (
    <div
      className="fixed top-0 left-0 w-[100%]
   min-h-[100vh] bg-[#000000b6] flex justify-center items-center">
      <div className="relative p-[32px] w-[100%] max-w-[400px] sm:max-w-[640px] rounded-xl bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 text-[#fff]">
        <div className="absolute top-[16px] right-[16px]">
          <button
            onClick={() => {
              props.setTrigger(false);
            }}>
            <IoMdClose size={25} />{" "}
          </button>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;

import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div
      name="footer"
      className="footer text-xs sm:text-base bg-[#eee] py-5 flex group justify-center items-center min-w-full cursor-pointer">
      <div className="m-auto">
        &copy;{currentYear} Shiva Shrestha. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;

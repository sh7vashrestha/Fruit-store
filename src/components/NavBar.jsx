import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaHome, FaPhoneSquare } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { GiFruitBowl } from "react-icons/gi";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const handelClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[85px] flex justify-between items-center px-4 bg-[#e6c67c] text-[#f4f4f4] opacity-100 z-[1]">
      <div>
        <span>
          <Link to="home" smooth={true} duration={500}>
            <img
              className="hover:animate-[pulse_2snponop_ease-in-out_infinite]  cursor-pointer"
              src={logo}
              alt="Logo"
              style={{ width: "60px", zIndex: "12", position: "relative" }}
            />
          </Link>
        </span>
      </div>
      <ul className="text-[#444] hidden md:flex justify-between">
        <li className="sm:px-4 md:px-6 cursor-pointer text-lg ">
          <Link
            activeClass="active"
            offset={-50}
            to="home"
            smooth={true}
            duration={500}
            spy={true}>
            Home
          </Link>
        </li>
        <li className="sm:px-4 md:px-6 cursor-pointer text-lg ">
          <Link
          isDynamic={true}
            activeClass="active"
            to="about"
            smooth={true}
            spy={true}
            duration={500}>
            About Us
          </Link>
        </li>
        <li className="sm:px-4 md:px-6 cursor-pointer text-lg ">
          <Link
          isDynamic={true}
            activeClass="active"
            to="products"
            smooth={true}
            spy={true}
            duration={500}>
            Products
          </Link>
        </li>
        <li className="sm:px-4 md:px-6 cursor-pointer text-lg ">
          <Link
            activeClass="active"
            to="contact"
            offset={50}
            smooth={true}
            spy={true}
            duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div onClick={handelClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-[#444]" size={30} />
        ) : (
          <FaTimes className="text-[#444]" size={30} />
        )}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#e6c67cea] flex flex-col justify-center items-center z-5 text-[#444]"
        }>
        <li className="py-6 text-4xl cursor-pointer">
          <Link
            activeClass="active"
            spy={true}
            onClick={handelClick}
            to="home"
            smooth={true}
            duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link
            activeClass="active"
            spy={true}
            onClick={handelClick}
            to="about"
            smooth={true}
            duration={500}>
            About Us
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link
            activeClass="active"
            spy={true}
            onClick={handelClick}
            isDynamic
            to="products"
            offset={50}
            smooth={true}
            duration={500}>
            Products
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link
            activeClass="active"
            spy={true}
            onClick={handelClick}
            to="contact"
            smooth={true}
            duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex fixed flex-col top-[35%] md:left-[5%] z-2">
        <ul>
          <li className="w-auto text-[#444] flex flex-col justify-center min-h-[50px] ">
            <Link
              to="home"
              activeClass="homeIcon"
              duration={500}
              smooth={true}
              spy={true}>
              <FaHome />
            </Link>
          </li>
          <li className="w-auto text-[#444] flex flex-col justify-center min-h-[50px] ">
            <Link
              to="about"
              activeClass="homeIcon"
              duration={500}
              smooth={true}
              spy={true}>
              <CiShop />
            </Link>
          </li>
          <li className="w-auto text-[#444] flex flex-col justify-center min-h-[50px] ">
            <Link
              to="products"
              activeClass="homeIcon"
              duration={500}
              smooth={true}
              spy={true}>
              <GiFruitBowl />
            </Link>
          </li>
          <li className="w-auto text-[#444] flex flex-col justify-center min-h-[50px] ">
            <Link
              to="contact"
              activeClass="homeIcon"
              duration={500}
              smooth={true}
              spy={true}>
              <FaPhoneSquare />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

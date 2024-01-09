import React from "react";
import Map from "./Map";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div name="contact" className="w-full md:pt-60 bg-[#eee] text-[#333]">
      <div className="max-w-[1300px] h-auto m-auto flex justify-center align-middle flex-col sm:flex-row p-2">
        <div className="sm:w-[60%] mx-2 pb-4 sm:pb-0 my-auto">
          <p className="text-3xl sm:text-4xl pb-3 text-[#978300ee]">
            Our Location
          </p>
          <Map />
          <p className="font-light text-[12px] sm:text-[14px]">
            Ksetrapur, Bharatpur-2, Chitwan
          </p>
        </div>
        <div className="sm:w-[40%] ml-3 px-2 sm:px-4 pt-10 sm:pt-0 bg-[#f1f1f1] my-auto rounded-xl shadow-md duration-500 hover:shadow-lg hover:shadow-black">
          <h3 className="text-3xl md:text-4xl text-[#978300ee] w-[100%] mx-auto py-5">
            Get in Touch
          </h3>
          <form
            method="POST"
            action="https://getform.io/f/e66ea990-73c2-4c10-b482-4741961b7ae0"
            className="flex flex-col w-[100%] max-w-[1000px]">
            <div className="block">
              <div>
                <input
                  className="bg-[#ddd] p-2 w-full rounded- focus:outline-[#978300ee]"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div>
                <input
                  className="my-4 p-2 bg-[#ddd] w-full rounded- focus:outline-[#978300ee] "
                  type="text"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div>
                <textarea
                  className="bg-[#ddd] p-2 w-full rounded- focus:outline-[#978300ee] "
                  name="message"
                  rows="5"
                  placeholder="Message"></textarea>
              </div>
              <div>
                <button className="text-[#333] border-2 hover:bg-[#978300ee] hover:text-[#eee] hover:border-[#978300ee] shadow-lg shadow-[#040c16] duration-500 rounded-xl px-8 py-3 my-4 w mx-auto flex items-center">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-[1300px] h-auto m-auto flex justify-around align-middle flex-row p-3">
        <div>
          <MdAttachEmail className="inline-block" size={20} />{" "}
          contact@sagarmathafruitcenter.com.np
        </div>
        <div className="hover:text-[#978300ee] duration-500">
          <a href="https://www.instagram.com/sagarmathafruit/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="inline-block" size={20} />
            /sagarmathafruit
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

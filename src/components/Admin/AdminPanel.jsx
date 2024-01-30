import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaLockOpen } from "react-icons/fa";
import Cookies from "universal-cookie";
import axios from "../../api/axios";
import { axiosWithAuth } from "../../api/axios";
const Fruits_URL = "/fruits";

function AdminPanel() {
  const cookie = new Cookies();
  const refresh = useRef(true);
  const navigate = useNavigate();
  const [res, setRes] = useState([
    {
      _id: "",
      name: "",
      price: 0,
      imageUrl: "",
      __v: 0,
    },
  ]);
  const fetchfruits = async () => {
    try {
      const response = await axios.get(Fruits_URL);
      console.log(response);
      const data = await response.data.data;
      setRes(data);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    if (refresh.current) {
      refresh.current = false;
      fetchfruits();
    }
  }, []);
  return (
    <div className="bg-[#ddd]">
      <div className="min-h-[100vh] max-w-[1300px] mx-auto ">
        <div className="flex justify-end py-3">
          <Link
            className="flex flex-row align-middle justify-between rounded-xl bg-[#bbb] hover:bg-yellow-600 bg-opacity-90 px-10 py-2 text-[#333] hover:text-[#eee] shadow-xl backdrop-blur-md hover:scale-105 duration-500 sm:text-xl mr-2"
            to={"/"}>
            <div className="w-auto text-[#333] pr-4 flex flex-col justify-center">
              <FaHome />
            </div>
            Home
          </Link>
          <button
            onClick={() => {
              cookie.remove("auth", { path: "/admin" });
              cookie.remove("auth", { path: "/adminpanel" });
              navigate("/admin");
            }}>
            <div className="flex flex-row align-middle justify-between rounded-xl bg-[#bbb] text-[#333] hover:text-[#eee] bg-opacity-90 px-10 py-2 shadow-xl backdrop-blur-md hover:scale-105 duration-500 hover:bg-yellow-600 sm:text-xl">
              <div className="w-auto text-[#333] pr-4 flex flex-col justify-center">
                <FaLockOpen />
              </div>
              Logout
            </div>
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center rtl:text-right text-gray-50">
            <thead className="sm:text-xl uppercase bg-yellow-600 text-[#ddd]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {res?.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-[#ccc]  even:bg-[#bbb] text-[#333] border-gray-700 text-base font-bold">
                  <th
                    scope="row"
                    className="px-6 py-4">
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">{item.imageUrl}</td>
                  <td className="px-6 py-4 flex flex-row justify-around">
                    <a
                      href="/adminpanel"
                      className="font-medium text-yellow-800 hover:scale-105 hover:underline duration-500">
                      Edit
                    </a>
                    <div
                      className="font-medium text-yellow-800 cursor-pointer hover:scale-105 hover:underline duration-500"
                      onClick={() =>{
                        axiosWithAuth.delete(Fruits_URL + "/" + item.id);
                      }}>
                      Delete
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;

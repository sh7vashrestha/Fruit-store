import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaLockOpen } from "react-icons/fa";
import Cookies from "universal-cookie";
import axios from "../../api/axios";
import { axiosWithAuthPost, axiosWithAuth } from "../../api/axios";
import { IoAddCircleSharp } from "react-icons/io5";
import PopUp from "./PopUp";
import { Alert } from "bootstrap";
const Fruits_URL = "/fruits";

function AdminPanel() {
  const cookie = new Cookies();
  const refresh = useRef(true);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editWindow, setEditWindow] = useState(false);
  const [fruitsId, setFruitsId] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
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
      const data = await response.data.data;
      setRes(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    axiosWithAuthPost
      .post(Fruits_URL, {
        name: name,
        price: parseInt(price),
        image: file,
      })
      .then((res) => {
        setMsg("Fruits Added Successfully");
        setName();
        setPrice();
        setFile();
        alert("Fruit Added Successfully-Refresh to check the updated list");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
    setButtonPopup(false);
  };

  useEffect(() => {
    if (refresh.current) {
      refresh.current = false;
      fetchfruits();
    }
  }, [msg, setMsg, name, price, file]);
  return (
    <div className="bg-[#ddd]">
      <div className="min-h-[100vh] max-w-[1300px] mx-auto ">
        <div className="flex justify-end py-3">
          <Link
            className="flex flex-row align-middle justify-between rounded-xl bg-[#bbb] hover:bg-yellow-600 bg-opacity-90 px-10 py-2 text-[#333] hover:text-[#eee] shadow-xl backdrop-blur-md hover:scale-105 duration-500 sm:text-xl mr-2 "
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
                  <th scope="row" className="px-6 py-4">
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4 w-[20%]">
                    <img src={item.imageUrl} alt="Fruits" />{" "}
                  </td>
                  <td className="px-6 py-4 flex flex-row justify-around">
                    <div>
                      <button
                        className="font-medium text-yellow-800 cursor-pointer hover:scale-105 hover:underline duration-500"
                        onClick={() => {
                          setEditWindow(true);
                          setFruitsId(item._id);
                          setName(item.name); 
                          setPrice(item.price); 
                          setFile(item.imageUrl)
                        }}>
                        Edit
                      </button>
                    </div>
                    <div
                      className="font-medium text-yellow-800 cursor-pointer hover:scale-105 hover:underline duration-500"
                      onClick={(e) => {
                        axiosWithAuth
                          .delete(`${Fruits_URL}/${item._id}`)
                          .then((res) => {
                            setMsg("Fruits Deleted Successfully");
                            alert(
                              "Fruit deleted Successfully-Refresh to check the updated list"
                            );
                            window.location.reload();
                          })
                          .catch((error) => {
                            console.error(error);
                          });
                      }}>
                      Delete
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="max-w-full fixed top-[80%] left-[90%] text-yellow-600 hover:scale-110 duration-500 cursor-pointer">
          <button
            onClick={() => {
              setButtonPopup(true);
              setName();
              setPrice();
              setFile();
            }}>
            <IoAddCircleSharp size={60} />
          </button>
        </div>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form
            onSubmit={(e) => {
              handleAdd(e);
            }}
            className="p-2 m-2 flex flex-col justify-center items-center max-w-[100%]">
            <div className="pb-5 m-2">
              <label
                className="mr-5 sm:text-xl text-lg font-semibold "
                htmlFor="name">
                Name
              </label>
              <input
                className="p-2 max-w-full rounded-md text-base text-center text-[#333] placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="pb-5">
              <label
                className="mr-5 sm:text-xl text-lg font-semibold "
                htmlFor="price">
                Price
              </label>
              <input
                className="p-2 max-w-full rounded-md text-base text-center text-[#333] placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="number"
                value={price}
                placeholder="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                required
              />
            </div>
            <div className="pb-5">
              <label
                className="mr-5 sm:text-xl text-lg font-semibold "
                htmlFor="imageUrl">
                Image
              </label>
              <input
                className="p-2 max-w-full rounded-md text-base text-center text-[#333] placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="file"
                accept="image/*"
                placeholder="ImageURL"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                required
              />
            </div>
            <input
              type="submit"
              className="rounded-xl cursor-pointer bg-[#bbb] hover:bg-yellow-600 bg-opacity-90 px-10 py-2 text-[#333] hover:text-[#eee] shadow-xl backdrop-blur-md hover:scale-105 duration-500 sm:text-xl mr-2"
            />
          </form>
        </PopUp>
        <PopUp trigger={editWindow} setTrigger={setEditWindow}>
          <form
            onSubmit={(e) => {
              handleAdd(e);
            }}
            className="p-2 m-2 flex flex-col justify-center items-center max-w-[100%]">
            <div className="pb-5 m-2">
              <label
                className="mr-5 sm:text-xl text-lg font-semibold "
                htmlFor="name">
                Name
              </label>
              <input
                className="p-2 max-w-full rounded-md text-base text-center text-[#333] placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="pb-5">
              <label
                className="mr-5 sm:text-xl text-lg font-semibold "
                htmlFor="price">
                Price
              </label>
              <input
                className="p-2 max-w-full rounded-md text-base text-center text-[#333] placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="number"
                value={price}
                placeholder="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                required
              />
            </div>
            <div className="pb-5">
              <label
                className="mr-5 sm:text-xl text-lg font-semibold "
                htmlFor="imageUrl">
                Image
              </label>
              <input
                className="p-2 max-w-full rounded-md text-base text-center text-[#333] placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="file"
                accept="image/*"
                placeholder="ImageURL"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                required
              />
            </div>
            <input
              type="submit"
              className="rounded-xl cursor-pointer bg-[#bbb] hover:bg-yellow-600 bg-opacity-90 px-10 py-2 text-[#333] hover:text-[#eee] shadow-xl backdrop-blur-md hover:scale-105 duration-500 sm:text-xl mr-2"
            />
          </form>
        </PopUp>
      </div>
    </div>
  );
}

export default AdminPanel;

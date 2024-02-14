import axios from "axios";
import Cookies from "universal-cookie";

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const cookies = new Cookies();

export const axiosWithAuth = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: cookies.get("auth"),
  },
  withCredentials: true,
});


export const axiosWithAuthPost = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Authorization": cookies.get("auth"),
  },
  withCredentials: true,
});

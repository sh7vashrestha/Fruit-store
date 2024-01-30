import axios from "../../api/axios";

const Fruits_URL = "/fruits";

export const fetchFruits = async (e) => {
  let res;
  try {
    res = await axios.get(Fruits_URL);
    const data = await res.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const deleteFruit = () => {
  // 
};

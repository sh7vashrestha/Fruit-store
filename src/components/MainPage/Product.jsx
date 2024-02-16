import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "../../api/axios";

const Fruits_URL = "/fruits";

const Product = () => {
  const shouldLog = useRef(true);
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
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      fetchfruits();
    }
  }, []);
  return (
    <div
      name="products"
      className="w-full min-h-[100vh] bg-[#eee] text-[#333] md:py-36">
      <div className="max-w-[1000px] mx-auto">
        <div className="pb-8">
          <p className="text-4xl sm:text-5xl font-semibold inline text-[#978300ee]">
            Products
          </p>
          <p className="py-4">Some of the products we sell:</p>
        </div>
        <div>
          <Carousel
            responsive={responsive}
            containerClass="p-3"
            infinite={true}
            autoPlaySpeed={5000}
            customTransition="transform  500ms ease-in-out"
            swipeable={true}
            draggable={true}
            focusOnSelect={true}
            autoPlay={true}>
            {res?.map((item, index) => (
              <div
                key={index}
                className="flex group hover:scale-105 hover:shadow-2xl hover:shadow-[#978300ee] duration-700 flex-col justify-center align-middle border-2 border-[#978300ee] rounded-lg p-3">
                <img className="p-2 m-auto" src={item.imageUrl} alt="fruit" />
                <p className="mx-auto text-3xl p-2">{item.Name}</p>
                <p className="bg-[#2eaa2e] text-sm py-2 px-5  text-[#eee] mx-auto">
                  &#8360;. {item.price}
                </p>
              </div>
            ))}
          </Carousel>
          <p className="font-light text-base mx-auto"><strong>Note*:</strong> Prices are subjectable to negotiation.</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

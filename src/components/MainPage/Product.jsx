import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fruit0 from "../../assets/Products/Mango.png"
import fruit1 from "../../assets/Products/Banana.png"
import fruit2 from "../../assets/Products/Apple.png"
import fruit3 from "../../assets/Products/Orange.png"
import fruit4 from "../../assets/Products/Grapes.png"

const Product = () => {
  const shouldLog = useRef(true);
  const [data, setData] = useState([{
    Name: "",
    Price: ""
  }]);
  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/70b5d4b9-288f-405c-8958-8fa05fb9a3c2"
      );
      const data1 = await res.json();
      setData(data1);
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
  const image = [fruit0, fruit1, fruit2, fruit3, fruit4]
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      getData();
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
            {data?.map((item, index) => (
              <div
                key={index}
                className="flex group hover:scale-105 hover:shadow-2xl hover:shadow-[#978300ee] duration-700 flex-col justify-center align-middle border-2 border-[#978300ee] rounded-lg p-3">
                <img className="p-2 m-auto" src={image[index]} alt="fruit" />
                <p className="mx-auto text-3xl p-2">{item.Name}</p>
                <p className="bg-[#2eaa2e] text-sm py-2 px-5  text-[#eee] mx-auto">
                  &#8360;{item.Price}
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

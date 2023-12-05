import React, { useState } from "react";
import Slider from "react-slick";
import banner from "../assets/banner.png";
import Img from "./layouts/Img";
const Banner = () => {
  const [activeDot, setActiveDot] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setActiveDot(next);
    },
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            top: "50%",
            transform: "translate(-50%,-50%)",
            left: "200px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          activeDot == i
            ? {
                width: "40px",
                color: "#262626",
                fontSize: "24px",
                // fontFamily: "DM Sans",
                borderRight: "2px #262626 solid",
              }
            : {
                width: "40px",
                color: "transparent",
                fontSize: "24px",
                // fontFamily: "DM Sans",
                borderRight: "2px white solid",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <Img src={banner} />
      </div>
      <div>
        <Img src={banner} />
      </div>
      <div>
        <Img src={banner} />
      </div>
      <div>
        <Img src={banner} />
      </div>
    </Slider>
  );
};

export default Banner;

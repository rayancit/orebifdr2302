import React from "react";
import Title from "./layouts/Title";
import Container from "./layouts/Container";
import Product from "./layouts/Product";
import product1 from "../assets/product.png";
import dipjol from "../assets/dipjol.jpg";
import Slider from "react-slick";
import {
  HiOutlineArrowSmallRight,
  HiOutlineArrowSmallLeft,
} from "react-icons/hi2";
const NewArrivals = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "py-[26px] px-[26px] bg-[#C2C2C2] absolute z-10 rounded-full text-white text-2xl top-[35%] right-10 "
        }
        style={{ ...style }}
        onClick={onClick}
      >
        <HiOutlineArrowSmallRight />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "py-[26px] px-[26px] bg-[#C2C2C2] absolute z-10 rounded-full text-white text-2xl top-[35%] "
        }
        style={{ ...style }}
        onClick={onClick}
      >
        <HiOutlineArrowSmallLeft />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        },
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:false
        },
      },
    ],
  };
  return (
    <section className="pt-32 pb-[213px] px-2">
      <Container>
        <Title title={"New Arrivals"} />
        <Slider {...settings}>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5 "}
              showBadge={true}
              showCategory={true}
              productImg={product1}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"new"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5 "}
              showBadge={true}
              showCategory={true}
              productImg={dipjol}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"99%"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5 "}
              showBadge={true}
              showCategory={true}
              productImg={product1}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"new"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5 "}
              showBadge={true}
              showCategory={true}
              productImg={dipjol}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"99%"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5 "}
              showBadge={true}
              showCategory={true}
              productImg={product1}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"new"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5 "}
              showBadge={true}
              showCategory={true}
              productImg={dipjol}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"99%"}
              color={"Black"}
            />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default NewArrivals;

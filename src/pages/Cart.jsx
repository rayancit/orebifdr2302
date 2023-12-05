import React from "react";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/layouts/Breadcrumb";
import Flex from "../components/layouts/Flex";
import { ImCross } from "react-icons/im";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Img from "../components/layouts/Img";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, updateCart } from "../app/slices/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  let [total, setTotal] = useState(0);
  const handleRemove = (index) => {
    dispatch(removeCart(index));
  };

  useEffect(() => {
    let temTotal = 0;
    cartData.map((product) => {
      temTotal +=
        product.qun *
        Math.ceil(
          product.price - (product.price * product.discountPercentage) / 100
        );
    });
    setTotal(temTotal);
  }, [cartData]);
  return (
    <section>
      <Container>
        <Breadcrumb
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <Flex className={"flex-col mt-32"}>
          <Flex className={" py-8 px-5 bg-[#F5F5F3] font-bold  items-center"}>
            <div className="w-[40%] ">Product</div>
            <div className="w-[20%]">Price</div>
            <div className="w-[20%]">Quantity</div>
            <div className="w-[20%]">Total</div>
          </Flex>
          {cartData.map((product, index) => (
            <Flex className={"flex-col border border-[#F0F0F0]"}>
              <Flex className={"py-8 px-5 items-center "}>
                <Flex className="w-[40%] gap-x-5 items-center ">
                  <ImCross
                    className="mr-5"
                    // remove element form cart
                    onClick={() => handleRemove(index)}
                  />
                  <Img
                    src={product.thumbnail}
                    className={"w-[100px] h-[100px]"}
                    imgClassName={"w-full h-full"}
                  />
                  <h6>{product.title}</h6>
                </Flex>
                <h6 className="w-[20%]">
                  $
                  {Math.ceil(
                    product.price -
                      (product.price * product.discountPercentage) / 100
                  )}
                </h6>
                <div className="w-[20%]">
                  <Flex
                    className={"w-[139px] border border-[#F0F0F0] px-5  py-3"}
                  >
                    <button
                      className="pr-5"
                      onClick={() => dispatch(updateCart({ id: product.id }))}
                      disabled={product.qun === 1 && true}
                    >
                      <AiOutlineMinus />
                    </button>
                    <input
                      type="text"
                      value={product.qun}
                      className="w-[20px] outline-transparent"
                    />
                    <button
                      className="pl-5"
                      onClick={() =>
                        dispatch(updateCart({ id: product.id, type: "plus" }))
                      }
                    >
                      <AiOutlinePlus />
                    </button>
                  </Flex>
                </div>
                <h6 className="w-[20%]">
                  $
                  {product.qun *
                    Math.ceil(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    )}
                </h6>
              </Flex>
              <Flex
                className={"py-8 px-5 items-center border-t border-[#F0F0F0]"}
              >
                <select
                  name=""
                  id=""
                  className="w-[255px] border border-[#F0F0F0] px-5 py-3 outline-transparent"
                >
                  <option value="">SIZE</option>
                </select>
                <form action="" className="ml-6">
                  <input
                    type="text"
                    className="w-[255px] border border-[#F0F0F0] px-5 py-3 outline-[#F0F0F0]"
                  />
                  <button className="font-bold ml-6">Apply coupon</button>
                </form>
              </Flex>
            </Flex>
          ))}
          <div className="text-end mt-14">
            <h6>Cart totals</h6>
            <Flex
              className={
                "w-[644px] border border-[#F0F0F0] ml-auto text-start flex-wrap"
              }
            >
              <div className="w-1/2 px-5 py-3 border-r border-[#F0F0F0]">
                Subtotal
              </div>
              <div className="w-1/2 px-5 py-3">{total} $</div>
              <div className="w-1/2 px-5 py-3 border-r border-t border-[#F0F0F0]">
                Total
              </div>
              <div className="w-1/2 px-5 py-3  border-t border-[#F0F0F0]">
                {total} $
              </div>
            </Flex>
            <Link
              to={"/checkout"}
              className="bg-black text-white py-4 px-6 inline-block mt-12"
            >
              Proceed to Checkout
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Cart;

import React from "react";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/layouts/Breadcrumb";
import { useState } from "react";
import Flex from "../components/layouts/Flex";
import Input from "../components/layouts/Input";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Checkout = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  let [total, setTotal] = useState(0);
  let [subTotal, setSubTotal] = useState(0);
  const [couponShow, setCouponShow] = useState(false);

  const [fName, setFName] = useState("");
  const [error, setError] = useState("");

  const handleFName = (e) => {
    setFName(e.target.value);
  };
  const handleSubmit = () => {
    if (!fName) {
      setError("nam daw nai")
    }
  };

  useEffect(() => {
    let temTotal = 0;
    let temSubTotal = 0;
    cartData.map((product) => {
      temSubTotal += Math.ceil(product.qun * product.price);
      temTotal +=
        product.qun *
        Math.ceil(
          product.price - (product.price * product.discountPercentage) / 100
        );
    });
    setTotal(temTotal);
    setSubTotal(temSubTotal);
  }, [cartData]);

  return (
    <section>
      <Container>
        <Breadcrumb
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <div>
          Have a coupon?{" "}
          <span
            className="font-bold"
            onClick={() => setCouponShow(!couponShow)}
          >
            Click here to enter your code
          </span>
          {couponShow && (
            <form action="" className="mt-3">
              <input
                type="text"
                className="w-[255px] border border-[#F0F0F0] px-5 py-3 outline-[#F0F0F0]"
              />
              <button className="font-bold ml-6">Apply coupon</button>
            </form>
          )}
        </div>
        <h2 className="font-semibold text-2xl">Billing Details</h2>
        <Flex className={"flex-col w-[1055px] gap-y-6"}>
          <Flex className={"justify-between"}>
           <div>
           <Input
              placeholder={"First Name"}
              label={"First Name *"}
              className={"w-[508px] mt-6 "}
              inputClassName={
                "w-full outline-transparent  border-b border-[#F0F0F0] py-4"
              }
              isRequired={true}
              type={"text"}
              value={fName}
              onChange={handleFName}
            />
            <p className="text-red-500">{error}</p>
           </div>
            <Input
              placeholder={"last Name"}
              label={"last Name *"}
              className={"w-[508px] mt-6 "}
              inputClassName={
                "w-full outline-transparent  border-b border-[#F0F0F0] py-4"
              }
              isRequired={true}
              type={"text"}
            />
          </Flex>
          <div>
            <label htmlFor="" className="block">
              Country *
            </label>
            <select
              name=""
              id=""
              className="w-full outline-transparent  border-b border-[#F0F0F0] py-4"
            >
              <option value="">Please select</option>
            </select>
          </div>
          <Input
            placeholder={"company Name (optional)"}
            label={"company Name *"}
            className={"  "}
            inputClassName={
              "w-full outline-transparent  border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
          />
          <Input
            placeholder={"House number and street name "}
            label={"Street Address *"}
            className={"  "}
            inputClassName={
              "w-full outline-transparent  border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
          />
          <Input
            placeholder={"Apartment, suite, unit etc. (optional) "}
            label={""}
            className={"  "}
            inputClassName={
              "w-full outline-transparent  border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
          />
          <Input
            placeholder={"Town/City "}
            label={"Town/City *"}
            className={"  "}
            inputClassName={
              "w-full outline-transparent  border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
          />
          <Input
            placeholder={"Post Code "}
            label={"Post Code *"}
            className={"  "}
            inputClassName={
              "w-full outline-transparent  border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
          />
          <Input
            placeholder={"Phone "}
            label={"Phone *"}
            className={"  "}
            inputClassName={
              "w-full outline-transparent  border-b border-[#F0F0F0] py-4"
            }
            type={"tel"}
          />
          <Input
            placeholder={"Email Address "}
            label={"Email Address *"}
            className={"  "}
            inputClassName={
              "w-full outline-transparent  border-b border-[#F0F0F0] py-4"
            }
            type={"email"}
          />
          <h2 className="text-4xl">Additional Information</h2>
          <textarea
            name=""
            id=""
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="w-full h-[138px] resize-none border-b border-[#F0F0F0]"
          ></textarea>

          <h2 className="text-4xl mt-[129px]">Your Order</h2>
          <Flex
            className={
              "w-[644px] border border-[#F0F0F0]  text-start flex-wrap"
            }
          >
            <div className="w-1/2 px-5 py-3 border-r border-[#F0F0F0]">
              Product
            </div>
            <div className="w-1/2 px-5 py-3"> Total</div>
            {cartData.map((product) => (
              <>
                <div className="w-1/2 px-5 py-3 border-r border-t border-[#F0F0F0]">
                  {product.title} x {product.qun}
                </div>
                <div className="w-1/2 px-5 py-3  border-t border-[#F0F0F0]">
                  {Math.ceil(product.qun * product.price)} $
                </div>
              </>
            ))}
            <div className="w-1/2 px-5 py-3 border-r border-t border-[#F0F0F0]">
              Subtotal
            </div>
            <div className="w-1/2 px-5 py-3  border-t border-[#F0F0F0]">
              {subTotal} $
            </div>
            <div className="w-1/2 px-5 py-3 border-r border-t border-[#F0F0F0]">
              Total
            </div>
            <div className="w-1/2 px-5 py-3  border-t border-[#F0F0F0]">
              {total} $
            </div>
          </Flex>
          <div>
            <input type="radio" className="mr-2" name="payment" />
            <label htmlFor="">Bank</label>
            <p>
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </p>
          </div>
          <div>
            <input type="radio" className="mr-2" name="payment" checked />
            <label htmlFor="">Bank 2</label>
            <p>
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </p>
          </div>
          <h6>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </h6>
        </Flex>
        <button
          className="bg-black text-white py-4 px-6 inline-block mt-12"
          onClick={handleSubmit}
        >
          Proceed to Bank
        </button>
      </Container>
    </section>
  );
};

export default Checkout;

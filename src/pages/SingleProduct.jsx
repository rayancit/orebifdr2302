import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/layouts/Breadcrumb";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/slices/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  let { productId } = useParams();
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let productData = async () => {
      await fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .finally(() => setLoading(false));
    };
    productData();
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qun: 1 }));
  };

  return (
    <section>
      <Container>
        <Breadcrumb
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        {loading ? (
          <Flex className={"justify-center items-center "}>
            <iframe
              src="https://giphy.com/embed/l3nWhI38IWDofyDrW"
              width="150"
              height="150"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </Flex>
        ) : (
          <Flex className={"flex-wrap gap-y-5"}>
            {product.images.map((img) => (
              <Img
                src={img}
                className={"w-[48%] "}
                imgClassName={"w-full h-full object-cover"}
              />
            ))}
          </Flex>
        )}
        <h2>{product.title}</h2>
        <Flex className={"gap-x-2"}>
          <strike>
            <h6>{`$${product.price}`}</h6>
          </strike>
          <h6>
            {Math.ceil(product.price - (product.price * product.discountPercentage) / 100)}
          </h6>
        </Flex>
        <h6>{product.stock != 0 ? "in stock" : "out of stock"}</h6>
        <button>add to wishlist</button>
        <button
          className="bg-black py-4 px-5 text-white"
          onClick={handleAddToCart}
        >
          add to cart
        </button>
      </Container>
    </section>
  );
};

export default SingleProduct;

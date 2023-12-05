import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/layouts/Breadcrumb";
import Flex from "../components/layouts/Flex";
import SideBar from "../components/layouts/SideBar";
import Pagination from "../components/layouts/Pagination";
import Filter from "../components/layouts/Filter";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let getAllProducts = async () => {
      await fetch("https://dummyjson.com/products?limit=100")
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    };
    getAllProducts();
  }, []);
  return (
    <section className="pt-[124px] pb-[140px]">
      <Container>
        <Breadcrumb
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <Flex className={"gap-x-8"}>
          <SideBar></SideBar>
          <Flex className={"flex-col  w-[1190px] "}>
            <Flex className={"gap-x-10 justify-end mb-10"}>
              <Filter title={"Sort by:"}>
                <option value="" >Featured</option>
                <option value="" >Featured</option>
                <option value="" >Featured</option>
                <option value="" >Featured</option>
              </Filter>
              <Filter title={"Show:"}>
                <option value="" >24</option>
                <option value="" >36</option>
                <option value="" >48</option>
              </Filter>
            </Flex>
            <Pagination itemsPerPage={12} data={products}  />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;

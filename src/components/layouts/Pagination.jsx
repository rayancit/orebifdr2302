import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import Flex from "./Flex";
const Pagination = ({ itemsPerPage, data }) => {
  const items = data;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((product) => (
            <Product
              link={product.id}
              className={"w-[370px]"}
              showBadge={true}
              showCategory={true}
              productImg={product.thumbnail}
              productName={product.title}
              price={`$ ${product.price}`}
              badgeTitle={product.brand}
              color={product.category}
            />
          ))}
      </>
    );
  }
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //     `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    setLastPage(event.selected === pageCount - 1);
  };
  return (
    <>
      <Flex className={"flex-wrap gap-x-[34px] justify-center   gap-y-[50px]"}>
        <Items currentItems={currentItems} />
      </Flex>
      <ReactPaginate
        className="flex gap-x-4 mt-10 items-center relative"
        pageLinkClassName="py-2 px-4 inline-block "
        pageClassName="border border-[#F0F0F0]"
        activeClassName="bg-black text-white "
        breakLabel="..."
        breakClassName="self-end"
        nextLabel={`Products from ${itemOffset === 0 ? 1 : itemOffset} to ${
          lastPage ? items.length : endOffset
        } of ${items.length}`}
        nextClassName="absolute right-0"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;

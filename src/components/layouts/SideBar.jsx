import React from "react";
import SideBarHeading from "./SideBarHeading";
import { brands, category, colors, price } from "../../fakedata/data";

const SideBar = () => {
  return (
    <div className="w-[372px] ">
      <SideBarHeading
        title={"Shop by Category"}
        showDrop={false}
        data={category}
      />
      <SideBarHeading title={"Shop by Color"} showDrop={true} data={colors} />
      <SideBarHeading title={"Shop by Brand"} showDrop={true} data={brands} />
      <SideBarHeading title={"Shop by Price"} showDrop={false} data={price} />
    </div>
  );
};

export default SideBar;

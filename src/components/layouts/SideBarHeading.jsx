import React from "react";
import Flex from "../layouts/Flex";
import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";
import { useState } from "react";
import SideBarData from "./SideBarData";
const SideBarHeading = ({ title, showDrop, data }) => {
  const [showSubDrop, setShowSubdrop] = useState(true);
  return (
    <>
      {showDrop ? (
        <div onClick={() => setShowSubdrop(!showSubDrop)}>
          <Flex className={"items-center justify-between"}>
            <h4>{title}</h4>
            {showSubDrop ? <RxTriangleUp /> : <RxTriangleDown />}
          </Flex>
          {showSubDrop &&
            data.map((value) => (
              <SideBarData
                title={value.name}
                showDataDrop={false}
                color={
                  value.hasOwnProperty("colorCode") ? value.colorCode : false
                }
              />
            ))}
        </div>
      ) : (
        <div className={"items-center justify-between"}>
          <h4>{title}</h4>
          {data.map((value) => (
            <SideBarData
              title={value.name}
              showDataDrop={value.hasOwnProperty("subCategory") ? true : false}
            >
              {value.hasOwnProperty("subCategory") &&
                value.subCategory.map((item) => <h4>{item.name}</h4>)}
            </SideBarData>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarHeading;

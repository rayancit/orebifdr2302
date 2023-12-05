import React from "react";
import { BsPlus } from "react-icons/bs";
import { HiMiniMinusSmall } from "react-icons/hi2";
import Flex from "../layouts/Flex";
import { useState } from "react";
const SideBarData = ({ title, showDataDrop, color, children }) => {
  const [showSubDataDrop, setShowSubDataDrop] = useState(true);
  const [colorActive,setActive] = useState("");
  const handleColor = (color)=>{
    setActive(color);
  }
  return (
    <section>
      {showDataDrop ? (
        <div onClick={() => setShowSubDataDrop(!showSubDataDrop)}>
          <Flex className={"items-center justify-between"}>
            <h4>{title}</h4>
            {showSubDataDrop ? <BsPlus /> : <HiMiniMinusSmall />}
          </Flex>
        </div>
      ) : (
        <div>
          {color ? (
            <Flex className={"items-center"}>
              <span
                style={{ background: color }}
                className={`mr-2  rounded-full ${colorActive === color ? "w-5 h-5" :"w-3 h-3"} `}
                onClick={()=>handleColor(color)}
              ></span>{" "}
              <h4>{title}</h4>
            </Flex>
          ) : (
            <h4>{title}</h4>
          )}
        </div>
      )}
      {showSubDataDrop && children}
    </section>
  );
};

export default SideBarData;

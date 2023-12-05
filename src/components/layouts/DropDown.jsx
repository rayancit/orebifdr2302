import React from "react";

const DropDown = ({ children, className, ref2 }) => {
  return (
    <div className={className} ref={ref2}>
      {children}
    </div>
  );
};

export default DropDown;

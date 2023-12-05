import React from "react";

const Img = ({ className, imgClassName, src, alt }) => {
  return (
    <div className={className}>
      <picture>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={imgClassName}
        />
      </picture>
    </div>
  );
};

export default Img;

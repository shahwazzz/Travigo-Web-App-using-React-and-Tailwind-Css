import React from "react";

const Advertise = ({ brands }) => {
  return (
    <>
      <div className=" my-16 lg:m-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden">
        {brands.map((val, i) => (
          <img
            src={val.iconSrc}
            alt="brands/icons"
            key={i}
            className=" w-44 h-auto object-fill cursor-pointer xl:38 lg:w-32 hover:scale-105 transition-all"
          />
        ))}
      </div>
    </>
  );
};

export default Advertise;

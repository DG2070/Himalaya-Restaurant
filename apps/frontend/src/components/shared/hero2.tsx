import React from "react";
import MyButton from "./my-button";
import Image from "next/image";

const Hero2 = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className=" py-12  relative w-full  text-center px-4">
      <Image alt="hero 2 image" src={"/hero2bg.png"} layout="fill" />
      <div className="z-10 relative">{title && (
        <h1 className="text-3xl xs:text-4xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-[62px] font-medium text-heading font-playfair mb-2 sm:mb-3 md:mb-4">
          {title}
        </h1>
      )}

      {description && (
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-body max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed">
          {description}
        </p>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
        <MyButton className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4">
          <span className="text-sm sm:text-base md:text-lg font-semibold text-[#1C1C1C]">
            MAKE RESERVATION
          </span>
        </MyButton>
        <MyButton
          rounded
          active
          className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4"
        >
          <span className="text-sm sm:text-base md:text-lg font-semibold text-heading">
            ORDER NOW
          </span>
        </MyButton>
      </div></div>
      
    </div>
  );
};

export default Hero2;

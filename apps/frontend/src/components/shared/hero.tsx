import Image from "next/image";
import React from "react";
import MyButton from "./my-button";

const Hero = ({
  title,
  subtitle1,
  subtitle2,
  description,
  buttons,
  image
}: {
  title?: string;
  description: string;
  subtitle1?: string;
  subtitle2: string;
  buttons: boolean;
  image: string;
}) => {
  return (
    <div className="w-full h-[796px] relative grid place-items-center">
      <Image
        alt="hero img"
        src={image}
        layout="fill"
        className="object-cover z-0"
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(74.22% 60.15% at 50% 39.85%, rgba(0, 0, 0, 0.60) 0%, rgba(30, 30, 30, 0.80) 47.76%, rgba(30, 30, 30, 0.98) 99.79%)",
        }}
      />
      <div className="text-heading playfair-medium-62 z-20 relative text-center">
        <div>{title}</div>
        <div className="pb-5">
          {subtitle1}{" "}
          <span className="text-primary playfair-extrabold-62">
            {subtitle2}
          </span>
        </div>

        <div className="pb-12 lato-regular-26 text-body max-w-5xl">
          {description}
        </div>
        <div className="grid place-items-center"> {buttons && (
          <div className="flex gap-6 lato-semibold-16">
            <MyButton>
              <div className=" text-[#1C1C1C]">MAKE RESERVATION</div>
            </MyButton>
            <MyButton rounded active>
              <div className="text-heading" >EXPLORE MENU</div>
            </MyButton>
          </div>
        )}</div>
       
      </div>
    </div>
  );
};

export default Hero;

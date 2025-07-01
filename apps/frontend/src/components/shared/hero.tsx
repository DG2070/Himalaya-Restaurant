import Image from "next/image";
import React from "react";

const Hero = ({
  title,
  subtitle1,
  subtitle2,
  description,
  buttons,
}: {
  title?: string;
  description: string;
  subtitle1: string;
  subtitle2: string;
  buttons: boolean;
}) => {
  return (
    <div className="w-screen h-[796px] grid place-items-center bg-red">
      <Image  alt="hero img" src="/f1462484db0e5beea3a4aea23510e1e64061fdba.png" />
      <div className="text-heading">
        <div>{title}</div>
        <div>{subtitle1}</div>
        <div>{subtitle2}</div>
        <div>{description}</div>
        {buttons && <div></div>}
      </div>
    </div>
  );
};

export default Hero;

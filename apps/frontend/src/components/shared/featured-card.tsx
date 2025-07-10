import Image from "next/image";
import React from "react";

const FeaturedCard = ({
  text1,
  text2,
  image,
  featured,
}: {
  text1: string;
  text2: string;
  image: string;
  featured: boolean;
}) => {
  return (
    <div
      className="flex flex-col pb-[10px] gap-4 max-w-[364px] relative rounded-[12px] bg-linear"
      style={{
        backgroundImage: "linear-gradient(90deg, #0F0F0F 100%, #1A1A1A 0%)",
      }}
    >
      <Image
        alt="card image"
        className="relative rounded-[12px]"
        src={image}
        height={273}
        width={364}
      />
      {featured && (
        <div
          className="absolute top-2 left-2 px-4 py-[6px] rounded-[10px] lato-semibold-16 text-white"
          style={{
            backgroundImage: "linear-gradient(90deg, #FF7E5F 100%, #DD5F34 0%)",
          }}
        >
          Featured
        </div>
      )}
      <div className="flex flex-col gap-3 items-center ">
        <div className="playfair-medium-22 text-heading">{text1}</div>
        <div className="lato-regular-18 text-center text-body">{text2}</div>
      </div>
    </div>
  );
};

export default FeaturedCard;

import Image from "next/image";
import React from "react";

const DiscoverText = ({image,title,description}:{image:string,title:string,description:string}) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <div className="flex gap-2 sm:gap-3 items-start">
        <div className="relative w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-8 flex-shrink-0 mt-1">
          <Image 
            src={image} 
            alt="" 
            fill 
            className="object-contain"
            sizes="(max-width: 640px) 16px, (max-width: 768px) 20px, 24px"
          />
        </div>
        <h3 className="text-[#F2F2F2] text-lg sm:text-xl md:text-2xl lg:text-[22px] font-medium leading-tight playfair-display">
          {title}
        </h3>
      </div>
      <p className="text-[#E0E0E0] text-sm sm:text-base lg:text-lg leading-relaxed lato">
        {description}
      </p>
    </div>
  );
};

export default DiscoverText;

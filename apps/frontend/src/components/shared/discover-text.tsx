import Image from "next/image";
import React from "react";

const DiscoverText = ({image,title,description}:{image:string,title:string,description:string}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Image src={image} alt="svgs" width={22} height={30} />
        <div className="text-[#F2F2F2] playfair-medium-22">
          {title}
        </div>
      </div>
      <div className="text-[#E0E0E0] lato-regular-18">
     {description}
      </div>
    </div>
  );
};

export default DiscoverText;

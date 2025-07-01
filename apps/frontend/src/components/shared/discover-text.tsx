import Image from "next/image";
import React from "react";

const DiscoverText = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Image src={"/fire.svg"} alt="svgs" width={22} height={30} />
        <div className="text-[#F2F2F2] playfair-medium-22">
          Michelin-inspired cuisine with a modern twist:
        </div>
      </div>
      <div className="text-[#E0E0E0] lato-regular-18">
        Think of a classic beef wellington reimagined with Japanese Wagyu,
        truffle foam, and microgreens on a slate plate—familiar yet refreshingly
        inventive.
      </div>
    </div>
  );
};

export default DiscoverText;

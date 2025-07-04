import Image from "next/image";
import React from "react";
import DiscoverText from "./discover-text";
const DiscoverData = [
  {
    image: "fire.svg",
    description:
      "Think of a classic beef wellington reimagined with Japanese Wagyu, truffle foam, and microgreens on a slate plate—familiar yet refreshingly inventive.",
    title: "Michelin-inspired cuisine with a modern twist:",
  },
  {
    image: "leaf.svg",
    description:
      "Our spring vegetable risotto features produce picked within 24 hours from nearby organic farms, preserving both nutrition and taste.",
    title: "Fresh, locally sourced ingredients:",
  },
  {
    image: "yellow-lines.svg",
    description:
      "Imagine soft jazz playing in the background, candlelit tables, and an unobtrusive, calming environment where every detail is curated for a memorable evening.",
    title: "A Serene, Luxurious Dining Atmosphere",
  },
];
const Discover = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
      <div className="h-[498px]  w-full relative">
        <Image alt="discover image" src={"/Subtract.png"} layout="fill" />
      </div>
      <div className="flex gap-3 flex-col justify-center">
        <div className="text-[#E0E0E0] lato-regular-22">
          At Luxe Fine Dining, we don&apos;t just serve food we craft
          unforgettable experiences. With an unwavering commitment to quality,
          artistry, and hospitality.
        </div>
        <div className="flex flex-col gap-3 ">
          {DiscoverData?.map((a, index) => (
            <div key={index}>
              <DiscoverText
                image={a.image}
                description={a.description}
                title={a.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;

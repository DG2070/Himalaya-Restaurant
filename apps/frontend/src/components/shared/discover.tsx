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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[498px] relative rounded-lg overflow-hidden">
        <Image 
          alt="discover image" 
          src={"/Subtract.png"} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        <p className="text-[#E0E0E0] text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed lato">
          At Luxe Fine Dining, we don&apos;t just serve food we craft
          unforgettable experiences. With an unwavering commitment to quality,
          artistry, and hospitality.
        </p>
        <div className="flex flex-col gap-4 sm:gap-6">
          {DiscoverData?.map((a, index) => (
            <div key={index} className="w-full">
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

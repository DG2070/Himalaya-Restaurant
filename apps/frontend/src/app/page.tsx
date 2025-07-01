"use client";
import MyButton from "@/components/shared/my-button";
import GradientText from "@/components/shared/gradient-text";
import Navbar from "@/components/shared/navbar";
import PopularItemsCard from "@/components/shared/popular-items-card";
import MenuCard from "@/components/shared/menu-card";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-1">
      <MyButton onClick={() => console.log("clicked")}>click me</MyButton>
      <div className="grid grid-cols-3 gap-4">
        <PopularItemsCard
          title="Food"
          subtitle="flat 20% off"
          price={23}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GNu9Yz19Rb0vc3tIfL-mqpls4wVDGTz5Wg&s"
        />
      </div>
      <MenuCard
        title="Food"
        ingredients="flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off flat 20% off "
        price={23}
        imageAlignment="Left"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GNu9Yz19Rb0vc3tIfL-mqpls4wVDGTz5Wg&s"
      />

      <div className="playfair-semibold-18">
        Playfair SemiBold 18: Hello Playfair SemiBold 18
      </div>
      <div className="playfair-semibold-24">
        Playfair SemiBold 24: Hello Playfair SemiBold 24
      </div>
      <div className="playfair-medium-22">
        Playfair Medium 22: Hello Playfair Medium 22
      </div>
      <div className="playfair-medium-58">
        Playfair Medium 58: Hello Playfair Medium 58
      </div>
      <div className="playfair-medium-62">
        Playfair Medium 62: Hello Playfair Medium 62
      </div>
      <div className="playfair-extrabold-62 bg-linear  hover:bg-black  hover:[background-image:none]">
        Playfair ExtraBold 62: Hello Playfair ExtraBold 62
      </div>
      <div className="playfair-bold-28">
        Playfair Bold 28: Hello Playfair Bold 28
      </div>
      <div className="lato-regular-14  ">
        Lato Regular 14: Hello Lato Regular 14
      </div>
      <div className="lato-regular-16">
        Lato Regular 16: Hello Lato Regular 16
      </div>
      <div className="lato-regular-18">
        Lato Regular 18: Hello Lato Regular 18
      </div>
      <div className="lato-regular-26">
        Lato Regular 26: Hello Lato Regular 26
      </div>
      <div className="lato-regular-22">
        Lato Regular 22: Hello Lato Regular 22
      </div>
      <div className="lato-semibold-16">
        Lato SemiBold 16: Hello Lato SemiBold 16
      </div>
      <div className="great-vibes-regular-26">
        Great Vibes Regular 26: Hello Great Vibes Regular 26
      </div>
      <div className="great-vibes-regular-32">
        Great Vibes Regular 32: Hello Great Vibes Regular 32
      </div>
      <div className="cinzel-bold-34">Cinzel Bold 34: Hello Cinzel Bold 34</div>
      <Navbar />
      <GradientText text="gradient text" className="playfair-extrabold-62" />
    </div>
  );
}

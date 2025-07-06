import HeaderText from "@/components/shared/header-text";
import PopularItemsCard from "@/components/shared/popular-items-card";
import Hero from "@/components/shared/hero";
import MyButton from "@/components/shared/my-button";
import MenuCard from "@/components/shared/menu-card";

const Menu = () => {
  return (
    <div className="bg-black">
      <Hero image="/menu-item-1.png" subtitle2="Menu" subtitle1="Our" description="A curated selection of timeless Indian flavors, thoughtfully crafted with passion, rooted in centuries of tradition, and reimagined with a touch of modern flair." />
      <HeaderText
        cursiveText="Customers Favourite"
        text="Our Popular"
        colorText="Items"
      />
      <div className="grid grid-cols-2 gap-4 mb-8 container mx-auto">
        {[
          {
            title: "Four Cheese Pizza",
            subtitle: "Free delivery for first order",
            imageUrl: "/popular-item-1.png",
            price: 59,
          },
          {
            title: "Delicious Steak with rich flavor ",
            subtitle: "Flat 10% discount on Sunday",
            imageUrl: "/popular-item-2.png",
            price: 65,
          },
          {
            title: "Bread covered in four cheeses",
            subtitle: "Get 20% off on your order",
            imageUrl: "/popular-item-3.png",
            price: 70,
          },
          {
            title: "Burger King",
            subtitle: "Free delivery for first order",
            imageUrl: "/popular-item-4.png",
            price: 0,
          },
        ].map((items, idx) => (
          <PopularItemsCard
            imageUrl={items.imageUrl}
            price={items.price}
            title={items.title}
            subtitle={items.subtitle}
            key={idx}
          />
        ))}
      </div>
    
       <div className="p-8 container mx-auto">
        <HeaderText colorText="Menu" cursiveText="Good Food FOr You" text="Resturant "/>
        <div className="flex pb-8 gap-[22px] w-full items-center justify-center">
          <MyButton active className="lato-semibold-16 text-heading"> Alacarte Menu </MyButton>
          <MyButton className="lato-semibold-16 text-[#1c1c1c]"> Drinks Menu </MyButton>
          <MyButton className="lato-semibold-16 text-[#1c1c1c]"> Set Lunch Menu </MyButton>
          <MyButton className="lato-semibold-16 text-[#1c1c1c]"> All Day Brunch Menu </MyButton>
          <MyButton className="lato-semibold-16 text-[#1c1c1c]"> Set Dinner Menu </MyButton>
        </div>
        <div className="flex flex-col gap-8">
          <MenuCard imageAlignment="Left" imageUrl="/menu-item-1.png" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna." price={50} title="Juicy Steak"  />
          <MenuCard imageAlignment="Right" imageUrl="/menu-item-1.png" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna." price={50} title="Juicy Steak"  />
          <MenuCard imageAlignment="Left" imageUrl="/menu-item-1.png" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna." price={50} title="Juicy Steak"  />
          <MenuCard imageAlignment="Right" imageUrl="/menu-item-1.png" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna." price={50} title="Juicy Steak"  />

        </div>
      </div>
    </div>
  );
};

export default Menu;

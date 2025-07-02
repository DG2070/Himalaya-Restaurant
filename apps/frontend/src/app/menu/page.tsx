import HeaderText from "@/components/shared/header-text";
import PopularItemsCard from "@/components/shared/popular-items-card";

// const MenuItems = [{}];

const Menu = () => {
  return (
    <div className="bg-black">
      <HeaderText
        cursiveText="Customers Favourite"
        text="Our Popular"
        colorText="Items"
      />
      <div className="grid grid-cols-2 gap-4 mb-8">
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
      <HeaderText
        cursiveText="Good Food  For You"
        text="Restaurant"
        colorText="Menu"
      />
      <div></div>
    </div>
  );
};

export default Menu;

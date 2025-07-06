import HeaderText from "@/components/shared/header-text";
import PopularItemsCard from "@/components/shared/popular-items-card";
import Hero from "@/components/shared/hero";
import MyButton from "@/components/shared/my-button";
import MenuCard from "@/components/shared/menu-card";

const Menu = () => {
  const menuCategories = [
    { id: 'alacarte', name: 'À la Carte Menu' },
    { id: 'drinks', name: 'Drinks Menu' },
    { id: 'lunch', name: 'Set Lunch' },
    { id: 'brunch', name: 'All Day Brunch' },
    { id: 'dinner', name: 'Set Dinner' },
  ];

  const popularItems = [
    {
      title: "Four Cheese Pizza",
      subtitle: "Free delivery for first order",
      imageUrl: "/popular-item-1.png",
      price: 59,
    },
    {
      title: "Delicious Steak",
      subtitle: "Flat 10% discount on Sunday",
      imageUrl: "/popular-item-2.png",
      price: 65,
    },
    {
      title: "Gourmet Cheese Platter",
      subtitle: "Get 20% off on your order",
      imageUrl: "/popular-item-3.png",
      price: 70,
    },
    {
      title: "Signature Burger",
      subtitle: "Free delivery for first order",
      imageUrl: "/popular-item-4.png",
      price: 45,
    },
  ];

  const menuItems = [
    {
      title: "Tandoori Special Platter",
      description: "A selection of our finest tandoori delicacies including chicken tikka, seekh kebab, and tandoori jhinga.",
      price: 32,
      imageUrl: "/menu-item-1.png",
    },
    {
      title: "Butter Chicken",
      description: "Tender chicken pieces in a rich, creamy tomato-based sauce, cooked to perfection in a traditional tandoor.",
      price: 28,
      imageUrl: "/menu-item-2.png",
    },
    {
      title: "Vegetable Biryani",
      description: "Fragrant basmati rice cooked with seasonal vegetables, aromatic spices, and saffron.",
      price: 24,
      imageUrl: "/menu-item-3.png",
    },
    {
      title: "Garlic Naan",
      description: "Traditional Indian bread baked in tandoor, topped with fresh garlic and coriander.",
      price: 5,
      imageUrl: "/menu-item-4.png",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <Hero 
        image="/menu-item-1.png" 
        subtitle2="Menu" 
        subtitle1="Our" 
        description="A curated selection of timeless Indian flavors, thoughtfully crafted with passion, rooted in centuries of tradition, and reimagined with a touch of modern flair." 
      />
      
      {/* Popular Items Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <HeaderText
            cursiveText="Customers' Favorites"
            text="Our Popular"
            colorText="Dishes"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {popularItems.map((item, idx) => (
              <div key={idx} className="h-full">
                <PopularItemsCard
                  imageUrl={item.imageUrl}
                  price={item.price}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Menu Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <HeaderText 
            colorText="Menu" 
            cursiveText="Culinary Excellence" 
            text="Explore Our"
          />
          
          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 overflow-x-auto pb-2 -mx-4 px-4">
            {menuCategories.map((category, idx) => (
              <MyButton 
                key={category.id}
                active={idx === 0}
                className={`whitespace-nowrap px-3 sm:px-4 py-2 text-sm sm:text-base ${
                  idx === 0 ? 'bg-primary text-white' : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </MyButton>
            ))}
          </div>
          
          {/* Menu Items */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {menuItems.map((item, idx) => (
              <MenuCard 
                key={idx}
                imageAlignment={idx % 2 === 0 ? "Left" : "Right"}
                imageUrl={item.imageUrl}
                ingredients={item.description}
                price={item.price}
                title={item.title}
              />
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;

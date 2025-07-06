import Contact from "@/components/shared/contact";
import Discover from "@/components/shared/discover";
import HeaderText from "@/components/shared/header-text";
import Hero from "@/components/shared/hero";
import MenuCard from "@/components/shared/menu-card";
import MyButton from "@/components/shared/my-button";
import PopularItemsCard from "@/components/shared/popular-items-card";
import ReviewCard from "@/components/shared/review-card";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero
        buttons={true}
        title="DIVE INTO DELIGHTS OF"
        subtitle2="FOOD"
        subtitle1="DELECTABLE"
        image="/discover.png"
        description="Experience culinary excellence in an atmosphere of refined elegance. Where every dish tells a story and every moment becomes a memory."
      />
      
      {/* About Us Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 container mx-auto">
        <HeaderText
          colorText="Sets Us Apart!"
          cursiveText="about us"
          text="Discover What"
        />
        <div className="mt-8 md:mt-12">
          <Discover />
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 container mx-auto bg-gray-50">
        <HeaderText
          colorText="Items"
          cursiveText="Customers Favourite"
          text="Our Popular"
        />
        <div className="mt-8 md:mt-12 space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <PopularItemsCard
                imageUrl="/popular-item-1.png"
                price={55}
                subtitle="Free delivery for first order"
                title="Four Cheese Pizza"
              />
            </div>
            <div className="lg:col-span-4">
              <PopularItemsCard
                imageUrl="/popular-item-1.png"
                price={55}
                subtitle="Free delivery for first order"
                title="Four Cheese Pizza"
              />
            </div>
          </div>
          
          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-8">
            <div className="lg:col-span-4">
              <PopularItemsCard
                imageUrl="/popular-item-1.png"
                price={55}
                subtitle="Free delivery for first order"
                title="Four Cheese Pizza"
              />
            </div>
            <div className="lg:col-span-3">
              <PopularItemsCard
                imageUrl="/popular-item-1.png"
                price={55}
                subtitle="Free delivery for first order"
                title="Four Cheese Pizza"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 container mx-auto">
        <HeaderText 
          colorText="Menu" 
          cursiveText="Good Food For You" 
          text="Restaurant"
        />
        
        {/* Menu Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 py-6 md:py-8 overflow-x-auto pb-8 -mx-4 px-4">
          {['À la Carte', 'Drinks', 'Set Lunch', 'All Day Brunch', 'Set Dinner'].map((item, index) => (
            <MyButton 
              key={item}
              active={index === 0}
              className="whitespace-nowrap px-3 sm:px-4 py-2 text-sm sm:text-base"
            >
              {item}
            </MyButton>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          {[1, 2, 3, 4].map((_, index) => (
            <MenuCard 
              key={index}
              imageAlignment={index % 2 === 0 ? "Left" : "Right"}
              imageUrl="/menu-item-1.png"
              ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
              price={50}
              title="Juicy Steak"
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 container mx-auto bg-gray-50">
        <HeaderText 
          colorText="Feedback" 
          cursiveText="Testimonial" 
          text="Our Customers'"
        />
        <div className="mt-8 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Samantha H.",
                position: "Food Blogger",
                rating: 5,
                text: "Every dish was a work of art. This is fine dining at its absolute best.",
                image: "/about-1.png"
              },
              {
                name: "Michael T.",
                position: "Regular Customer",
                rating: 5,
                text: "The service, the wine pairings, and the exquisite food - everything was perfect!",
                image: "/about-1.png"
              },
              {
                name: "Jennifer L.",
                position: "Food Critic",
                rating: 5,
                text: "An unforgettable culinary experience. Highly recommended for special occasions.",
                image: "/about-1.png"
              }
            ].map((review, index) => (
              <ReviewCard 
                key={index}
                customerName={review.name}
                customerPosition={review.position}
                reviewInNumber={review.rating}
                reviewText={review.text}
                customerImageUrl={review.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 container mx-auto">
        <Contact />
      </section>
    </div>
  );
}

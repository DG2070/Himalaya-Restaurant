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
    <div>
      <Hero
        buttons={true}
        title="DIVE INTO DELIGHTS OF"
        subtitle2="FOOD"
        subtitle1="DELECTABLE"
        image="/discover.png"
        description="Experience culinary excellence in an atmosphere of refined elegance. Where every dish tells a story and every moment becomes a memory."
      />
      <div className="p-8 container mx-auto">
        {" "}
        <HeaderText
          colorText="Sets Us Apart!"
          cursiveText="about us"
          text="Discover What"
        />
        <Discover />
      </div>
      <div className="p-8 container mx-auto">
        {" "}
        <HeaderText
          colorText="Items"
          cursiveText="Customers Favourite"
          text="Our Popular"
        />
        <div className="flex flex-col gap-[38px]">
          <div className="grid grid-cols-7 gap-12">
            <div className="col-span-3 ">
              {" "}
              <PopularItemsCard
                imageUrl="/popular-item-1.png"
                price={55}
                subtitle="Free delivery for first order"
                title="Four Cheese Pizza"
              />
            </div>

            <div className="col-span-4">
              <PopularItemsCard
                imageUrl="/popular-item-1.png"
                price={55}
                subtitle="Free delivery for first order"
                title="Four Cheese Pizza"
              />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-12">
            <div className="col-span-4 ">
              {" "}
              <PopularItemsCard
                imageUrl="/popular-item-1.png"
                price={55}
                subtitle="Free delivery for first order"
                title="Four Cheese Pizza"
              />
            </div>

            <div className="col-span-3">
              <PopularItemsCard
                imageUrl="/popular-item-1.png"
                price={55}
                subtitle="Free delivery for first order"
                title="Four Cheese Pizza"
              />
            </div>
          </div>
        </div>
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
      <div className="p-8 container mx-auto">
        <HeaderText colorText="Feedback" cursiveText="Testimonial" text="Our Customer's"/>
        <div className="flex gap-[55px]">
          <ReviewCard customerName="Samantha H." customerPosition="Customer" reviewInNumber={5} reviewText="Every dish was a work of art. This is fine dining the service, the wine pairings, and the exquisite food at its absolute best." customerImageUrl="/about-1.png"/>
          <ReviewCard customerName="Samantha H." customerPosition="Customer" reviewInNumber={5} reviewText="Every dish was a work of art. This is fine dining the service, the wine pairings, and the exquisite food at its absolute best." customerImageUrl="/about-1.png"/>
          <ReviewCard customerName="Samantha H." customerPosition="Customer" reviewInNumber={5} reviewText="Every dish was a work of art. This is fine dining the service, the wine pairings, and the exquisite food at its absolute best." customerImageUrl="/about-1.png"/>
        </div>
      </div>
      <div className="p-8 container mx-auto">
        <HeaderText colorText="Orders" cursiveText="Contact" text="Contact Us For"/>
        <Contact />
      </div>
    </div>
  );
}

import GradientText from "@/components/shared/gradient-text";
import HeaderText from "@/components/shared/header-text";
import Hero from "@/components/shared/hero";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-black text-body ">
      <Hero image="/about-1.png" subtitle2="Us" subtitle1="About" description="A 47-year culinary journey blending timeless Indian traditions with global inspiration.At Central Indian Restaurant, every dish is a celebration of flavor, culture, and connection." />
      <HeaderText
        cursiveText="Our Foundation"
        text="The Story Behind"
        colorText="Every Favour"
      />
      <div className="flex items-center justify-between px-16 container mx-auto">
        <div className="relative w-full max-w-xl aspect-[718/499]">
          <Image src="/about-1.png" alt="About Us Image" fill />
        </div>
        <div className="w-[600px] flex flex-col gap-3 text-body text-justify lato-regular-18 leading-[180%] bg-white/5 rounded-[16px] backdrop-blur-[4px] px-8 py-8">
          <div className="playfair-semibold-24 leading-[100%]">
            A 47-Year Culinary Journey Rooted in Tradition and Innovation
          </div>
          <div>
            A journey that began in the heart of India, Central Indian
            Restaurant is the culmination of Mr. Khatri&apos;s 47-year
            dedication to preserving and evolving Indian culinary traditions.
            From the grand kitchens of Hotel Imperial in New Delhi to the
            vibrant food scene of Hong Kong, his mission has always been the
            same: to honor timeless flavors while building bridges between
            cultures through the universal language of exceptional food.
          </div>
        </div>
      </div>
      <HeaderText
        cursiveText="The Scared art"
        text="Traditional"
        colorText="Techniques"
      />
      <div className="flex items-center justify-between container mx-auto px-16 pb-4">
        <div className="w-[600px] flex flex-col gap-3 text-body text-justify lato-regular-16 leading-[180%] bg-white/5 rounded-[16px] backdrop-blur-[4px] px-8 py-8">
          <GradientText
            text="Ancient Methods, Modern Kitchen"
            className=" text-center font-playfair text-[30px] justify-center mx-auto mb-[22px] p-2"
          />
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Tandoor Mastery",
                icon: "🔥",
                description:
                  "Our clay tandoor ovens reach 900°F, creating the perfect char and smoky flavor that defines authentic Himalayan bread and meats.",
              },
              {
                title: "Spice Alchemy",
                icon: "🌿",
                description:
                  "Every morning, we grind whole spices using traditional stone mortars, releasing essential oils that have been locked away for months.",
              },
              {
                title: "Time-Honored Patience",
                icon: "⏰",
                description:
                  "Our signature dal simmers for 6 hours, our yogurt cultures for 12 hours, and our pickles age for months—good things take time.",
              },
            ].map((m, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex items-center justify-center p-[14px] gap-6 w-[48px] h-[48px] bg-primary rounded-full">
                  <div>{m.icon}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="playfair-medium-22">{m.title}</div>
                  <div>{m.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full max-w-xl aspect-[718/499]">
          <Image src="/about-2.png" alt="About Us Image" fill />
        </div>
      </div>
    </div>
  );
};

export default Page;

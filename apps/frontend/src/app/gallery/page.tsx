import FeaturedCard from "@/components/shared/featured-card";
import GradientText from "@/components/shared/gradient-text";
import HeaderText from "@/components/shared/header-text";
import Hero from "@/components/shared/hero";
import Hero2 from "@/components/shared/hero2";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <Hero
        image="/discover.png"
        subtitle1="OUR"
        subtitle2="GALLERY"
        description="Journey through our world of authentic cuisine, where every image captures the essence of tradition, passion, and culinary artistry."
      />
      <HeaderText
        cursiveText="Flavorful Story"
        text="Featured"
        colorText="Moments"
      />
      <div className="container mx-auto gap-8 grid grid-cols-1 md:grid-cols-3">
       <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        />
         <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        /> <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        /> <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        /> <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        /> <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        />
      </div>
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto">
          <HeaderText
            cursiveText="The Sacred Art"
            text="Traditional"
            colorText="Techniques"
          />

          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 xl:gap-12">
            <div className="w-full lg:w-1/2 xl:w-7/12 bg-white/5 rounded-xl md:rounded-2xl backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12">
              <GradientText
                text="Ancient Methods, Modern Kitchen"
                className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center mb-6 md:mb-8"
              />

              <div className="space-y-6 md:space-y-8">
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
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-4 items-start group"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors duration-300">
                      <span className="text-xl sm:text-2xl">{m.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-playfair text-white mb-1">
                        {m.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-5/12 relative aspect-square sm:aspect-video lg:aspect-[718/499] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-2.png"
                alt="Traditional Cooking Techniques"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
         <HeaderText
        cursiveText="Happy Guests Happy Hearts"
        text="Guests, Events & "
        colorText="Celebrations"
      />
      <div className="container mx-auto gap-8 grid grid-cols-1 md:grid-cols-3">
       <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        />
         <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        /> <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        /> <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        /> <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        /> <FeaturedCard
          featured
          image="/about-2.png"
          text1="Tibetan New Year Feast"
          text2="Annual celebration bringing community together"
        />
      </div>
      </section>
      <Hero2 description="Join us for an unforgettable dining experience where every moment becomes a cherished memory worth capturing." title="Create Your Own Story" />
    </div>
  );
};

export default Gallery;

import GradientText from "@/components/shared/gradient-text";
import HeaderText from "@/components/shared/header-text";
import Hero from "@/components/shared/hero";
import Hero2 from "@/components/shared/hero2";
import Image from "next/image";

const Page = () => {
  return (
    <div className=" text-body">
      <Hero
        image="/about-1.png"
        subtitle2="Us"
        subtitle1="About"
        description="A 47-year culinary journey blending timeless Indian traditions with global inspiration. At Central Indian Restaurant, every dish is a celebration of flavor, culture, and connection."
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <HeaderText
            cursiveText="Our Foundation"
            text="The Story Behind"
            colorText="Every Flavor"
          />

          <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
            <div className="w-full lg:w-1/2 xl:w-5/12 relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[718/499] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-1.png"
                alt="About Us - Central Indian Restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="w-full lg:w-1/2 xl:w-7/12 bg-white/5 rounded-xl md:rounded-2xl backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-white">
                A 47-Year Culinary Journey Rooted in Tradition and Innovation
              </h2>
              <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
                <p>
                  A journey that began in the heart of India, Central Indian
                  Restaurant is the culmination of Mr. Khatri&apos;s 47-year
                  dedication to preserving and evolving Indian culinary
                  traditions.
                </p>
                <p>
                  From the grand kitchens of Hotel Imperial in New Delhi to the
                  vibrant food scene of Hong Kong, his mission has always been
                  the same: to honor timeless flavors while building bridges
                  between cultures through the universal language of exceptional
                  food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
        <Hero2
          description="Come and experience it all firsthand, where each piece tells a story and invites you to explore the diverse expressions of art and tradition"
          title="Experience Our Heritage"
        />
      </section>
    </div>
  );
};

export default Page;

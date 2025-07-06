import Image from "next/image";
import Link from "next/link";
import GradientText from "./gradient-text";

const FooterItems = [
  {
    title: "Quick Links",
    menu: [
      {
        title: "About Us",
        link: "",
      },
      {
        title: "Menu",
        link: "",
      },
      {
        title: "Gallery",
        link: "",
      },
      {
        title: "Contact Us",
        link: "",
      },
    ],
  },
  {
    title: "Menu",
    menu: [
      {
        title: "Alacarte Menu",
        link: "",
      },
      {
        title: "Drinks Menu",
        link: "",
      },
      {
        title: "Set Launch Menu",
        link: "",
      },
      {
        title: "All Day Brunch Menu",
        link: "",
      },
      {
        title: "Set Dinner Menu",
        link: "",
      },
    ],
  },
  {
    title: "More Info",
    menu: [
      {
        title: "FAQ",
        link: "",
      },
      {
        title: "Terms of Use",
        link: "",
      },
      {
        title: "Privacy Policy",
        link: "",
      },
      {
        title: "Discount System",
        link: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-black bg-gradient-to-t from-[#5B2E1E80] to-transparent w-full">
      <div className="py-8 sm:py-11 px-4 sm:px-6 lg:px-8 xl:px-10 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          {/* Logo and Description */}
          <div className="space-y-4 sm:space-y-5 max-w-md">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src={"/nav-img.png"}
                  alt="Himalayan Restaurant Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <GradientText
                text="Himalayan Restaurant"
                className="text-2xl sm:text-3xl md:text-4xl great-vibes-regular"
              />
            </div>
            <p className="text-sm sm:text-base text-body lato leading-relaxed">
              More than just a restaurant—an experience crafted with passion,
              precision, and poise.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-full">
            {FooterItems.map((m, index) => (
              <div key={index} className="space-y-4 sm:space-y-5">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-heading font-playfair">
                  {m.title}
                </h3>
                <nav className="space-y-3 sm:space-y-4">
                  {m.menu.map((items, idx) => (
                    <Link
                      key={idx}
                      href={items.link}
                      className="block text-sm sm:text-base text-body hover:text-white transition-colors duration-200 lato"
                    >
                      {items.title}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black py-4 sm:py-5 text-center">
        <p className="text-xs sm:text-sm text-gray-400">
          ©{new Date().getFullYear()} Himalayan Restaurant. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

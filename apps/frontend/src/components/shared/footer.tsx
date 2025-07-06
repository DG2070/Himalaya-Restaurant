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
    <div className="bg-black bg-gradient-to-t from-[#5B2E1E80] to-transparent ">
      <div className=" py-11 px-10 flex items-center justify-between container mx-auto">
        <div className="space-y-[18px]">
          <div className="flex items-center gap-2 sm:gap-4">
            <Image
              src={"/nav-img.png"}
              alt="navigation image"
              width={40}
              height={40}
              className="sm:w-[50px] sm:h-[50px]"
            />
            <GradientText
              text="Himalayan Resturant"
              className="great-vibes-regular-26 "
            />
          </div>
          <div className="text-justify text-body lato-regular-16 w-[268px]">
            More than just a restaurant—an experience crafted with passion,
            precision, and poise.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[148px]">
          {FooterItems.map((m, index) => (
            <div key={index} className="flex flex-col gap-[22px]">
              <div className="playfair-semibold-24 leading-[100%]! text-heading">
                {m.title}
              </div>
              <div className="flex flex-col gap-[18px]">
                {m.menu.map((items, idx) => (
                  <Link
                    key={idx}
                    href={items.link}
                    className="text-body lato-regular-16 leading-[160%]"
                  >
                    {items.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black text-center text-primary">
        ©{new Date().getFullYear()} Himalayan Restaurant. All rights reserved
      </div>
    </div>
  );
};

export default Footer;

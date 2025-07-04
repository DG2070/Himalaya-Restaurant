// import Image from 'next/image'
// import Link from 'next/link'
// import GradientText from './gradient-text'

// const Navbar = () => {
//   return (
//     <header className="w-full px-8 py-3">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//             <Image  src={"/nav-img.png"} alt='naviagation image' width={50} height={50}/>
//         </div>

//         <nav className="flex items-center gap-8 playfair-medium-22">
//           <Link href="/" >
//             <GradientText text='Home' />
//           </Link>
//           <Link href="/about-us" className='text-heading '>
//             About US
//           </Link>
//           <Link href="/menu" className='text-heading'>
//             Menu
//           </Link>
//           <Link href="/gallery" className='text-heading'>
//             Gallery
//           </Link>
//           <Link href="/contact-us" className='text-heading'>
//             Contact Us
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientText from "./gradient-text";

const Navbar = () => {
  // Navigation items array to avoid duplication
  const navItems = [
    { href: "/", label: "Home", isGradient: true },
    { href: "/about-us", label: "About Us", isGradient: false },
    { href: "/menu", label: "Menu", isGradient: false },
    { href: "/gallery", label: "Gallery", isGradient: false },
    { href: "/contact-us", label: "Contact Us", isGradient: false },
  ];

  const NavLink = ({
    item,
  }: {
    item: { href: string; label: string; isGradient: boolean };
  }) => (
    <Link href={item.href} className={`hover:opacity-80 transition-opacity`}>
      {item.isGradient ? (
        <GradientText text={item.label} />
      ) : (
        <span className="text-heading">{item.label}</span>
      )}
    </Link>
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-3 bg-black">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 playfair-medium-22">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        {/* Mobile Menu Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-heading" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <Image
                  src={"/nav-img.png"}
                  alt="navigation image"
                  width={40}
                  height={40}
                />
                <GradientText
                  text="Himalayan Restaurant"
                  className="text-great-vibes-regular-26 text-xl"
                />
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink key={item.href} item={item} />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

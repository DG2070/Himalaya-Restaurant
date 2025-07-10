"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientText from "./gradient-text";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const active = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery"},
    { href: "/contact-us", label: "Contact Us"},
  ];
  const NavLink = ({
    item,
  }: {
    item: { href: string; label: string;  };
  }) => (
    <Link
      href={item.href}
      className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${
        (item.href) === active
          ? "bg-linear bg-clip-text text-transparent hover:opacity-90"
          : "text-heading hover:text-primary"
      }`}
    >
      {item.href === active ? (
        <GradientText text={item.label} className="text-lg sm:text-xl" />
      ) : (
        <span className="text-lg sm:text-xl">{item.label}</span>
      )}
    </Link>
  );

  return (
    <header className="w-full bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={"/nav-img.png"}
                  alt="Himalayan Restaurant Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 48px"
                  priority
                />
              </div>
              <GradientText
                text="Himalayan Restaurant"
                className="text-xl sm:text-2xl md:text-3xl great-vibes-regular"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item, index) => (
              <div key={item.href} className="relative group">
                <NavLink item={item} />
              </div>
            ))}
          </nav>

          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-heading hover:text-primary focus:outline-none transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs sm:max-w-md bg-black/95 border-l border-gray-800 backdrop-blur-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-1 pt-2 pb-3 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10">
                        <Image
                          src={"/nav-img.png"}
                          alt="Himalayan Restaurant Logo"
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <GradientText
                        text="Himalayan Restaurant"
                        className="text-xl font-medium"
                      />
                    </div>
                  </div>
                  <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center px-3 py-3 text-base font-medium rounded-md transition-colors duration-200 hover:bg-gray-800/50"
                      >
                        {item.href === active ? (
                          <GradientText text={item.label} className="text-lg" />
                        ) : (
                          <span className="text-heading group-hover:text-primary transition-colors">
                            {item.label}
                          </span>
                        )}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

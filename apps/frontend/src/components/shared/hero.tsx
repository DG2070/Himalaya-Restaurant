import Image from "next/image";
import React from "react";
import MyButton from "./my-button";

const Hero = ({
  title,
  subtitle1,
  subtitle2,
  description,
  buttons,
  image,
}: {
  title?: string;
  description: string;
  subtitle1?: string;
  subtitle2: string;
  buttons?: boolean;
  image: string;
}) => {
  return (
    <div className="w-full h-[80vh] min-h-[500px] max-h-[1000px] relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          alt="hero img"
          src={image}
          fill
          priority
          className="object-cover z-0"
          sizes="100vw"
        />
        <div 
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(74.22% 60.15% at 50% 39.85%, rgba(0, 0, 0, 0.60) 0%, rgba(30, 30, 30, 0.80) 47.76%, rgba(30, 30, 30, 0.98) 99.79%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="z-20 relative w-full max-w-7xl mx-auto text-center px-4">
        {title && (
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[62px] font-medium text-heading font-playfair mb-2 sm:mb-3 md:mb-4">
            {title}
          </h1>
        )}
        
        {(subtitle1 || subtitle2) && (
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[62px] mb-4 sm:mb-6 md:mb-8">
            {subtitle1 && <span className="font-medium font-playfair">{subtitle1} </span>}
            {subtitle2 && (
              <span className="text-primary font-extrabold font-playfair">
                {subtitle2}
              </span>
            )}
          </div>
        )}

        {description && (
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-body max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed">
            {description}
          </p>
        )}

        {buttons && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            <MyButton className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4">
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[#1C1C1C]">
                MAKE RESERVATION
              </span>
            </MyButton>
            <MyButton rounded active className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4">
              <span className="text-sm sm:text-base md:text-lg font-semibold text-heading">
                EXPLORE MENU
              </span>
            </MyButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

import GradientText from "./gradient-text";

const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center gap-2">
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 gap-2 transition-transform duration-300 group-hover:scale-105">
        <div className="flex items-center gap-2 sm:gap-3 group">
          <img
            src={"/logo.png"}
            alt="Himalayan Restaurant Logo"
            className="object-contain"
            sizes="(max-width: 640px) 40px, 48px"
          />
        </div>
      </div>
      <GradientText
        text="Himalayan Restaurant"
        className="text-xl sm:text-2xl md:text-3xl great-vibes-regular font-bold"
      />
    </div>
  );
};

export default Logo;

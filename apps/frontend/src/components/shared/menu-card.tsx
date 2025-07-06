import Image from "next/image";
import GradientText from "./gradient-text";

interface MenuCardProps {
  title: string;
  ingredients: string;
  price: number;
  imageUrl: string;
  imageAlignment: "Right" | "Left";
}
const MenuCard = ({
  title,
  ingredients,
  price,
  imageUrl,
  imageAlignment,
}: MenuCardProps) => {
  return (
    <div className={`flex flex-col ${imageAlignment === 'Right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12 lg:gap-16 xl:gap-24 w-full`}>
      {/* Image Container - Full width on mobile, fixed width on larger screens */}
      <div className="w-full md:w-1/2 lg:w-[45%] xl:w-[500px] 2xl:w-[582px] h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 relative rounded-xl md:rounded-2xl overflow-hidden">
        <Image
          alt={title}
          src={imageUrl}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="w-full md:w-1/2 lg:w-[55%] xl:w-[calc(100%-524px)] flex flex-col gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-0">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold font-playfair leading-tight">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-body leading-relaxed">
          <span className="font-medium">Ingredients:</span> {ingredients}
        </p>
        
        <div className="mt-2 sm:mt-3 md:mt-4">
          <GradientText 
            text={`$${price.toFixed(2)}`} 
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-cinzel py-1" 
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

import GradientText from "./gradient-text";

interface PopularItemsCardProps {
  title: string;
  subtitle: string | undefined;
  imageUrl: string;
  price: number;
}
const PopularItemsCard = ({
  title,
  subtitle,
  imageUrl,
  price,
}: PopularItemsCardProps) => {
  return (
    <div className="group relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl md:rounded-2xl overflow-hidden bg-black transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 z-10">
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-playfair text-primary">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-light max-w-xs md:max-w-sm lg:max-w-md">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="mt-2 sm:mt-4">
          <GradientText 
            text={`$${price.toFixed(2)}`} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel" 
          />
        </div>
      </div>
    </div>
  );
};

export default PopularItemsCard;

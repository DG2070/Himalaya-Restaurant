import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  customerName: string;
  customerImageUrl?: string;
  customerPosition: string;
  reviewInNumber: number;
  reviewText: string;
}
const ReviewCard = ({
  customerName,
  customerImageUrl,
  customerPosition,
  reviewInNumber,
  reviewText,
}: ReviewCardProps) => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, i) => {
    const starNumber = i + 1;
    const starSize = 'w-4 h-4 sm:w-5 sm:h-5';
    
    if (reviewInNumber >= starNumber) {
      // Full star
      return (
        <Star
          key={i}
          className={`${starSize} text-yellow-400`}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      );
    } else if (reviewInNumber >= starNumber - 0.5) {
      // Half star
      return (
        <span key={i} className={`relative inline-block ${starSize}`}>
          <Star
            className={`absolute left-0 top-0 text-yellow-400`}
            fill="currentColor"
            stroke="currentColor"
            style={{ clipPath: "inset(0 50% 0 0)" }}
            strokeWidth={1.5}
          />
          <Star 
            className="text-gray-200" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={1.5}
          />
        </span>
      );
    } else {
      // Empty star
      return (
        <Star
          key={i}
          className={`${starSize} text-gray-200`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      );
    }
  });
  return (
    <div className="group relative p-6 sm:p-7 md:p-8 rounded-lg border border-primary/20 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/40">
      <div className="flex flex-col h-full">
        {/* Header with Avatar and Customer Info */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <div className="flex-shrink-0">
            <Avatar className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
              <AvatarImage src={customerImageUrl} alt={customerName} className="object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5 text-primary font-medium">
                {customerName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 font-playfair">
              {customerName}
            </h4>
            <p className="text-sm sm:text-base text-red-700/90 font-light">
              {customerPosition}
            </p>
          </div>
        </div>
        
        {/* Star Rating */}
        <div className="flex gap-0.5 mb-4 sm:mb-5">
          {stars.map((star, index) => (
            <div key={index} className="w-4 h-4 sm:w-5 sm:h-5">
              {star}
            </div>
          ))}
        </div>
        
        {/* Review Text */}
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">
          "{reviewText}"
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 text-6xl sm:text-7xl text-primary/5 font-serif select-none">"</div>
      </div>
    </div>
  );
};

export default ReviewCard;

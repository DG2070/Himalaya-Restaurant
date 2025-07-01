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
    if (reviewInNumber >= starNumber) {
      // Full star
      return (
        <Star
          key={i}
          className="text-transparent"
          fill="yellow"
          fillRule="nonzero"
        />
      );
    } else if (reviewInNumber >= starNumber - 0.5) {
      return (
        <span key={i} className="relative inline-block w-5 h-5">
          <Star
            className={cn(" absolute left-0 top-0", "text-gray-300")}
            fill="yellow"
            fillRule="nonzero"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
          <Star className="text-gray-300" fill="none" stroke="currentColor" />
        </span>
      );
    } else {
      return (
        <Star
          key={i}
          className="text-gray-300"
          fill="none"
          stroke="currentColor"
        />
      );
    }
  });
  return (
    <div className="py-8 px-10 rounded-[8px] border-[1px] flex flex-col gap-3 bg-body border-primary ">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={customerImageUrl} />
          <AvatarFallback>{customerName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="playfair-semibold-18">{customerName}</div>
          <div className="text-red-800 lato-regular-14">{customerPosition}</div>
        </div>
      </div>
      <div className="flex gap-1">{stars}</div>
      <div className="text-[#345867] lato-regular-18 leading-[180%]!">
        {reviewText}
      </div>
    </div>
  );
};

export default ReviewCard;

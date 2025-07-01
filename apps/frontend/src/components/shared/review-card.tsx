import ReactStars from "react-stars";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
      <div>
        <ReactStars count={5} value={reviewInNumber} edit={false} />
      </div>
      <div className="text-[#345867] lato-regular-18 leading-[180%]!">
        {reviewText}
      </div>
    </div>
  );
};

export default ReviewCard;

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
    <div className="flex items-center gap-24">
      {imageAlignment === "Left" && (
        <div className="min-w-[582px] min-h-[324px] relative rounded-[20px] ">
          <Image
            alt={title}
            src={imageUrl}
            layout="fill"
            className="rounded-[20px]"
          />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="text-primary playfair-bold-32 leading-[100%]!">
          {title}
        </div>
        <div className="lato-regular-22 text-body leading-[180%]!">
          Ingredients: {ingredients}
        </div>
        <GradientText text={`$${price}`} className="cinzel-bold-34 py-1" />
      </div>
      {imageAlignment === "Right" && (
        <div className="min-w-[582px] min-h-[324px] relative rounded-[20px] ">
          <Image
            alt={title}
            src={imageUrl}
            layout="fill"
            className="rounded-[20px]"
          />
        </div>
      )}
    </div>
  );
};

export default MenuCard;

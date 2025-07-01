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
        <img width={582} height={324} alt={title} src={imageUrl} />
      )}
      <div>
        <div className="">{title}</div>
        <div className="">{ingredients}</div>
        <GradientText text={`$${price}`} className="cinzel-bold-34 py-1" />
      </div>
      {imageAlignment === "Right" && <img alt={title} src={imageUrl} />}
    </div>
  );
};

export default MenuCard;

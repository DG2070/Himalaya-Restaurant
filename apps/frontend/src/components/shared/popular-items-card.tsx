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
    <div className="rounded-[20px] p-5 flex flex-col w-full bg-black  justify-between relative h-[283px]">
      <div className="absolute right-0 top-0 rounded-[20px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          className="h-[283px] rounded-r-[18px]"
          alt={title}
        />
        <div className="absolute bg-gradient-to-r from-black to-transparent from-10% top-0  w-full h-[283px] "></div>
      </div>
      <div className="flex  flex-col gap-3 z-[10]">
        <div className="playfair-semibold-24 text-primary">{title}</div>
        <div className="lato-regular-18 text-white">{subtitle}</div>
      </div>
      <div className="z-[10]">
        <GradientText text={`$${price}`} className="cinzel-bold-34 py-1" />
      </div>
    </div>
  );
};

export default PopularItemsCard;

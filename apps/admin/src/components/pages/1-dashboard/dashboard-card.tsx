interface DashBoardCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

const DashBoardCard = ({
  label,
  value,
  icon,
  description,
}: DashBoardCardProps) => {
  return (
    <div>
      <div className="flex gap-24 items-start bg-card px-6 py-4  border-1 border-gray-300 rounded-md w-fit">
        <div className="">
          <div className="text-gray-500 font-[500]">{label}</div>
          <div className="font-bold text-xl text-primary">{value}</div>
          <div className="text-sm italic">{description}</div>
        </div>
        <div className="bg-primary/50 p-2 rounded-md text-white">{icon}</div>
      </div>
    </div>
  );
};

export default DashBoardCard;

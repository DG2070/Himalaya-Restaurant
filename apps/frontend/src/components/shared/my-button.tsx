"use client";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface MyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  rounded?: boolean;
  active?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  loadingLabel?: string;
}

const MyButton = ({
  children,
  onClick,
  className,
  rounded,
  active,
  disabled,
  isLoading,
  loadingLabel,
}: MyButtonProps) => {
  return (
    <button
      className={cn(
        "w-fit h1 p-3 text-center linear-gradient text-lato-semibold-16",
        rounded && "rounded-[100px]  border-primary ",
        active && "border-[1px] border-primary [background-image:none]!",
        disabled &&
          "text-primary-muted text-body border-1 border-body [background-image:none]! ",
        "hover:cursor-pointer hover:border-[1px] hover:border-primary hover:bg-transparent hover:[background-image:none]",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {isLoading && <Loader className="animate-spin" />}
        {isLoading ? <div>{loadingLabel}</div> : <div>{children}</div>}
      </div>
    </button>
  );
};

export default MyButton;

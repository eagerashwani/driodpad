import { cn } from "@/lib/utils";
import React from "react";
import CartIcon from "../assets/cartIcon.svg";
import { Progress } from "./ui/progress";

interface RevenueCardProps {
  className?: string;
  icon?: string;
  title?: string;
  description?: string;
  usedAmount?: string;
  totalAmount?: string;
  payPercentage?: string;
}

const RevenueCard = ({
  className,
  title,
  description,
  usedAmount,
  totalAmount,
  payPercentage,
}: RevenueCardProps) => {
  return (
    <div
      className={cn(
        "w-[18rem] h-[11rem] px-6 pt-6 rounded-3xl bg-white",
        className
      )}
    >
      <img src={CartIcon} className="h-6 w-6" alt="Cart Icon" />
      <p className="font-semibold">{title}</p>
      <p className="text-xs">{description}</p>
      <p className="text-lg font-medium pb-1">$ {usedAmount}</p>
      <Progress value={53} className="h-2" />
      <div className="flex justify-between pt-3">
        <p>{payPercentage}%</p>
        <p>${totalAmount}M</p>
      </div>
    </div>
  );
};

export default RevenueCard;

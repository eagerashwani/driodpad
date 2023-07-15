import { cn } from "@/lib/utils";
import EllipseDark from "../assets/EllipseDark.svg";
import EllipseHollow from "../assets/EllipseHollow.svg";
interface CreditCardProps {
  className?: string;
  name?: string;
  cardNumber?: string;
  date?: string;
  issuer?: string;
}
const CreditCard = (props: CreditCardProps) => {
  return (
    <div
      className={cn(
        "w-[30rem] h-[17rem] px-6 pt-6 rounded-xl bg-white",
        props.className
      )}
    >
      <p>Card Holder</p>
      <p className="text-lg font-bold">{props.name}</p>
      <p className="text-xl font-normal mt-11">{props.cardNumber}</p>
      <div className="flex justify-between items-end">
        <p className="text-xl">{props.date}</p>
        <div className="px-8  ">
          <div className="flex relative">
            <img
              src={EllipseHollow}
              className="h-14 w-14"
              alt="Ellipse Hollow"
            />
            <img
              src={EllipseDark}
              className="h-14 w-14 absolute left-8"
              alt="Ellipse Dark"
            />
          </div>
          <p className="text-xl pl-5">{props.issuer}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

import Calendarr from "@/app/(components)/calendar";
import { Button } from "@/components/ui/button";
import { AddCircleIcon, HugeiconsProps } from "hugeicons-react";
import { FC, RefAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Header = ({
  title,
  className,
  text2,
  style2,
  btnClass,
  btnText,
  BtnIcon,
  calendar,
  onBtnClick
}: {
  title: string;
  className?: string;
  text2?: string;
  style2?: string;
  BtnIcon?: FC<Omit<HugeiconsProps, "ref"> & RefAttributes<SVGSVGElement>> | undefined;
  btnText?: string;
  btnClass?: string;
  calendar?:boolean
  onBtnClick?(): void
}) => {
  return (
    <div className="flex w-full gap-x-[12px]">
      <h2
        className={twMerge(
          "shrink-0 font-playfair text-[20px] leading-[29px] lg:text-[24px] font-[600] lg:leading-[34.8px] text-blackPrimary",
          className,
        )}
      >
        {title} <span className={style2}>{text2}</span>
      </h2>
      <div className="h-[1px] w-full self-end bg-border"></div>
     {btnText && <Button
     onClick={onBtnClick && onBtnClick}
        className={twMerge(
          "flex gap-x-[12px] bg-greenPrimary px-[40px] py-[12px]",
          btnClass,
        )}
      >
       {BtnIcon && <BtnIcon className="size-[20px] text-white" />}
        <span className="text-[16px] font-[600] leading-[23.6px] text-white">
         {btnText}
        </span>
      </Button>}
      {calendar &&  <Calendarr/>}
    </div>
  );
};

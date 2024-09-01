import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const DeptHeader = ({
  image,
  title,
  description,
  className,
  imageClass
}: {
  image: any;
  title: string;
  description: string;
  className?: string;
  imageClass?:string
}) => {
  return (
    <div className="">
      {/* header */}
      <div
        className={twMerge(
          "flex max-lg:h-[80px] lg:h-[120px] items-center justify-center rounded-[8px] bg-[#F9C74F]",
          className,
        )}
      >
        <Image
          width={381}
          height={254}
          alt="African woman"
          src={image}
          className={twMerge("absolut lg:z-0 max-lg:max-h-full  ", imageClass)
           } />
        <h1 className="font-playfair max-lg:text-[32px] lg:text-[60px] ml-[-4px] font-[700] leading-[87px] ">
          {title}
        </h1>
      </div>
      <p className="mt-[12px] max-lg:hidden font-openSans relative z-20 text-[16px] font-[400] leading-[23.2px] text-black">
        {description}
      </p>
    </div>
  );
};

export default DeptHeader;

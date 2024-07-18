import Image from "next/image";
import React from "react";
import fashion from "@/assets/images/fashion.png";
import food from "@/assets/images/food-groceries.png";
import beauty from "@/assets/images/beauty-health.png";
import kidbabby from "@/assets/images/kid-baby.png";
import art from "@/assets/images/art.png";
import homeDecor from "@/assets/images/home-decor.png";
import { VscArrowSmallRight } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";

const Department = () => {
  const departments = [
    { title: " Fashion", image: fashion, className: "lg:w-[504px]" },
    { title: "Food and Groceries", image: food, className: "w-[347px]" },
    { title: "Beauty & Health", image: beauty, className: "w-[347px]" },
    { title: "Kid & Baby", image: kidbabby, className: "w-[347px]" },
    { title: "Art", image: art, className: "w-[347px]" },
    {
      title: "Home Decor",
      image: homeDecor,
      className: "lg:w-[504px] h-[240px]",
    },
  ];
  return (
    <div className="pt-[16px]">
      <h3 className="font-[700] text-[30px] leading-[43.5px] font-playfair text-blackPrimary">
        Choose Department
      </h3>

      <div className="flex flex-wrap gap-[24px] mt-[32px] ">
        {departments?.map((dept, index) => (
          <div className="relative border" key={index}>
            <Image
              src={dept.image}
              alt=""
              width={504}
              height={240}
              className={twMerge(
                ` rounded-[8px] lg:w-[] lg:h-[240px]`,
                dept?.className
              )}
            />
            <div className="flex w-full justify-between items-center absolute  bottom-[12px] px-[36px]">
              <span className="text-white text-[24px] leading-[34.8px] font-[700] font-openSans">
                {dept.title}
              </span>
              <VscArrowSmallRight className="text-white text-[36px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;

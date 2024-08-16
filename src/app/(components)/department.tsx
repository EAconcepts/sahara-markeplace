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
import Link from "next/link";

const Department = ({categories}:{categories:any}) => {
  const departments = [
    { title: " Fashion", url:"/fashion", image: fashion, className: "lg:w-[504px]" },
    { title: "Food and Groceries", url:"/food-groceries", image: food, className: "w-[347px]" },
    { title: "Beauty & Health", image: beauty, url:"/beauty", className: "w-[347px]" },
    { title: "Kid & Baby", image: kidbabby, className: "w-[347px]", url:"/kids", },
    { title: "Art", image: art, className: "w-[347px]", url:"/art", },
    {
      title: "Home Decor",
      image: homeDecor,
      className: "lg:w-[504px] h-[240px]",
      url: "home-decoration"
    },
  ];
  console.log(categories)
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  // console.log(imageBaseUrl + `${categories[0].image}`)
  return (
    <div className="pt-[16px]">
      <h3 className="font-[700] text-[30px] leading-[43.5px] font-playfair text-blackPrimary">
        Choose Department
      </h3>
      <div className="flex flex-wrap gap-[24px] mt-[32px] ">
        {categories?.slice(0,6).map((dept:any) => (
          <Link href={""} className="relative border" key={dept?.id}>
            <Image
              src={`${imageBaseUrl}/${dept?.image}`}
              alt={dept?.name}
              width={504}
              height={240}
              className={twMerge(
                ` rounded-[8px] lg:w-[504p lg:h-[240px] object-cover`,
                dept?.className
              )}
            />
            <div className="flex w-full justify-between items-center absolute  bottom-[12px] px-[36px]">
              <span className="text-white text-[24px] leading-[34.8px] font-[700] font-openSans">
                {dept?.name}
              </span>
              <VscArrowSmallRight className="text-white text-[36px]" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Department;

'use client'

import Image from "next/image";
import ghana from "@/assets/images/ghana.svg";
import Rating from "@/app/(components)/rating";
import { BsFillPatchCheckFill, BsPlus } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import policy from "@/assets/images/policy.svg"
import plane from "@/assets/images/plane.svg"
import details from "@/assets/images/details.png"
import details1 from "@/assets/images/details1.png"
import details2 from "@/assets/images/details2.png"
import details3 from "@/assets/images/details3.png"
import details4 from "@/assets/images/details4.png"

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Ensemble Veste Pantalon",
    price: 68.99,
    image: details,
    images: [details1, details2, details3, details4],
    description:
      "This unique and eye-catching garment is handcrafted using traditional techniques and boasts a bold aesthetic perfect for the modern wardrobe.",
    category: "Category",
    store: "Afritique-Benin",
    rating: 4,
    reviews: 100,
    stock: 100,
    size: "l",
    inStock: true,
    colors: ["green", "purple", "gray", "yellow", "blue"],
    sizes: ["S","M", "L", "XL", "2XL", "3XL"]
   
  };
  const [chosenColor, setChosenColor] = useState('green')
  const [chosenSize, setChosenSize] = useState('L')
  return (
    <div className="px-[24px] pt-[24px]">
      {/* Breadcrumb */}
      <div className=""></div>
      <div className="flex flex-col">
        {/* Images */}
        <div className="flex flex-col gap-y-[16px]">
          <div className="relative">
          <Image
            src={product.image}
            width={382}
            height={360}
            alt=""
            className="h-[360px] w-full rounded-[8px] object-cover"
          />
          <div className="rounded-[4px] bg-[#A07E53] py-[8px] px-[24px] text-[14px] font-[600] leading-[16.8px] font-openSans text-white absolute left-[24px] top-[40px]">20% Off</div>
          </div>
          <div className="mt[16px] flex justify-center gap-x-[16px]">
            {product.images?.map((image, index: number) => (
              <Image
                key={index}
                src={image}
                width={64}
                height={85}
                alt=""
                className="h-[85px] w-[64px] rounded-[2px]"
              />
            ))}
          </div>
        </div>
        <div className="mt-[24px] flex flex-col gap-y-[32px]">
          <div className="flex flex-col gap-y-[12px]">
            {/* Title & Description */}
            <div className="flex flex-col gap-y-[12px]">
              <h3 className="font-playfair text-[20px] font-[600] leading-[24px] tracking-[2%] text-blackPrimary">
                {product.name}
              </h3>
              <p className="font-openSans font-[400] leading-[17.6px] text-[#787C83] text-[12p]">
                {product.description}
              </p>
            </div>
            {/* Store */}
            <div className="flex items-center gap-x-[12px]">
              <h6>{product.store}</h6>{" "}
              <Image
                src={ghana}
                width={12}
                height={8}
                alt="country 
                            flag"
              />
              <button className="font-openSans text-[12px] font-[600] leading-[17.4px] text-[#787C83]">
                View Store
              </button>
            </div>
            {/* Ratings */}
            <div className="flex items-center gap-x-[12px]">
              <Rating />
              <div className="flex items-center gap-x-[8px] rounded-[16px] bg-[#94E08D33] px-[8px] py-[4px]">
                <HiOutlineBadgeCheck className={"text-[16px] text-[#55C74B]"} />
                <span className="px-[8px] py-[4px] font-openSans text-[12px] leading-[20px] text-[#55C74B]">
                  Trusted Seller
                </span>
              </div>
            </div>
          </div>
          {/* Prices */}
          <div className="flex flex-col gap-y-[4px]">
            <div className="flex items-center gap-x-[8px]">
              <span className="font-openSans text-[12px] font-[600] leading-[14.4px] tracking-[2%] text-[#787C83]">
                $81.99
              </span>
              <span className="font-openSans text-[16px] font-[700] leading-[19.2px] text-blackPrimary">
                $68.99
              </span>
            </div>
            <div className="inline-flex gap-x-[3px] font-openSans text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
              <span className="font-[700]">$64.99 </span>
              <span>for more than 10 pieces</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[16px] divide-y">
          {/* color */}
          <div className="flex flex-col gap-y-[12px]">
            <h5 className="font-[600] text-[14px] leading-[20.3px] text-blackPrimary">Choose a Color</h5>
            <div className="flex items-center gap-x-[16px]">
              {product.colors.map((color, index)=>(
                <div onClick={()=>setChosenColor(color)} key={index} className={`${chosenColor ==color && " size-[36px] rounded-full flex items-center justify-center p-[4px] border border-black/60 "}`}>
                <div  className={`size-[24px]  rounded-full `} style={{background: color}}></div>
                </div>
              ))}
            </div>
          </div>
          {/* Select Size */}
          <div className="flex flex-col">
            <div className="flex justify-between py-[16px]">
              <span className="font-openSans text-[14px] leading-[20.3px] font-[600] text-blackPrimary">Select Size</span>
              <span className="font-[600] text-[12px] leading-[17.4px] text-[#8E97A6] underline ">Size Guide</span>
            </div>
            <div className="flex justify-between">
                {product.sizes?.map((size, index)=>(
                  <div onClick={()=>setChosenSize(size)} key={index} className={`${chosenSize ==size && "border border-[#7D9A37] rounded-full"}`}>
                    <div className="bg-[#7D9A3733] rounded-full size-[32px] text-[#7D9A37] font-[600] text-[12px] font-openSans leading-[17.4px] flex items-center justify-center ">{size}</div>
                  </div>
                ))}
            </div>
          </div>
          {/* Quantity */}
          <div className="flex flex-col  py-[16px]">
            <h4 className="text-blackPrimary font-[600] leading-[20.3px] font-openSans text-[14px]">Quantity</h4>
            <div className="mt-[20px] w-fit border-[1px] rounded-[40px] py-[16px] flex items-center px-[26px] gap-[24px] border-[#E4E7EC]">
              <TbMinus className="text-[#667185] text-[18px]"/>
              <span className="text-[16px] font-[600] leading-[19.2px] text-[#7D9A37] font-openSans tracking-[2%]">1</span>
              <TbPlus className="text-[#F56630] text-[18px]"/>
            </div>
            
          </div>
        </div>
         {/* Description */}
         <div className="flex flex-col mt-[24px] py-[24px]">
          <h2 className="text-[20px] font-[600] leading-[24px] tracking-[2%] font-openSans text-blackPrimary">Product Description</h2>
          <p className="text-[14px] text-[#787C83] mt-[16px] font-[400] leading-[20.3px] font-openSans line-clamp-6">This unique and eye-catching garment is handcrafted using traditional techniques and boasts a bold aesthetic perfect for the modern wardrobe. Mudcloth also known as bògòlanfini is made of pure, organic Malian cotton and natural dyes left to ferment for months. The process of creating mudcloth dates back to the 12th century, each...</p>
          <button className="self-start text-[#787C83] text-[]14px font-[700] font-openSans leading-[20.3px] mt-[8px]">Read More...</button>
         </div>
         {/* Delivery & Return policy */}
         <div className="flex flex-col mt-[32px] gap-y-[16px]">
          {/* Delivery */}
          <div className="flex flex-col p-[24px] gap-y-[12px] border-[1px] border-[#E4E7EC] rounded-[8px]">
            <div className="flex gap-x-[8px]">
              <Image src={plane} width={16} height={16} alt="plane" className="size-[16px]"/>
              <span className="text-[14px] font-[600] leading-[16.8px] tracking-[2%] text-blackPrimary font-openSans">Time of Delivery</span>
            </div>
            <p className="text-[#787C83] text-[14px] font-[400] font-openSans leading-[20.3px] ">To be delivered on June 30, 2024.</p>
          </div>
          {/* Return Policy */}
          <div className="flex flex-col p-[24px] gap-y-[12px] border-[1px] border-[#E4E7EC] rounded-[8px]">
            <div className="flex gap-x-[8px]">
              <Image src={policy} width={16} height={16} alt="plane" className="size-[16px]"/>
              <span className="text-[14px] font-[600] leading-[16.8px] tracking-[2%] text-blackPrimary font-openSans">Return Policy</span>
            </div>
            <p className="text-[#787C83] text-[14px] font-[400] font-openSans leading-[20.3px] ">We offer a flexible 90-day return window. If your purchase isn&apos;t the perfect fit, you can easily return it within 90 days (subject to our return policy details).</p>
            <div className="flex gap-x-[8px] text-blackPrimary font-openSans items-center">
              <span className="text-[14px] font-[400] leading-[20.3px]">Read Return Policy </span>
              <IoIosArrowRoundForward className="text-[18px]" />
            </div>
          </div>
         </div>

      </div>
    </div>
  );
};

export default ProductDetails;

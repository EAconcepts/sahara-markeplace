'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'
import check from "@/assets/images/check.svg"
import { twMerge } from 'tailwind-merge'

const AuthCard = ({image, imgClassName, header}:{image:StaticImageData, imgClassName?:string, header:string}) => {
    const about =["100% African Products", "Delivery in 100+ Countries", "1M+ Happy Customers"]
  return (
    <div className=" w-full relative rounded-[12px] max-lg:py-[32px] max-lg:px-[12px] bg-[#7D9A37] flex lg:justify-between flex-col max-lg:gap-[24px] lg:pr-[16px] lg:pt-[48px]">
    <h2 className="text-center font-playfair text-[38px] lg:text-[64px] font-[600] leading-[56.4px] lg:leading-[76.8px] tracking-[-2%] text-white">
      {header}
    </h2>
    <div className="lg:absolute top-[186px] max-lg:justify-center right-[16px] maxw-[254px] max-lg:gap-y-[16px] lg:gap-y-[24px] flex max-lg:flex-wrap max-lg:gap-x-[12px] lg:flex-col lg:self-end">
      {about?.map((item, index)=>(
        <div className="lg:py-[16px] max-w-fit flex gap-[8px] items-center lg:gap-x-[12px] px-[8px] lg:px-[12px] max-lg:py-[12px] rounded-[8px] border-[1px] border-[#E4E7EC]" key={index}>
          <Image src={check} width={24} height={24} alt="check" className="size-[24px] max-lg:size-[16px] "/>
          <span className="font-[600] max-lg:text-[10px] lg:text-[16px] leading-[19.2px] tracking-[2%] text-white">{item}</span>
        </div>
      ))}
    </div>
    <Image
      src={image}
      width={467}
      height={585}
      alt=""
      className={twMerge("mt-[42px] z-10 h-[585px]",imgClassName)}
    />
  </div>
  )
}

export default AuthCard
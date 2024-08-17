'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'
import check from "@/assets/images/check.svg"
import { twMerge } from 'tailwind-merge'

const AuthCard = ({image, imgClassName, header}:{image:StaticImageData, imgClassName?:string, header:string}) => {
    const about =["100% African Products", "Delivery in 100+ Countries", "1M+ Happy Customers"]
  return (
    <div className=" w-full relative rounded-[12px] bg-[#7D9A37] flex justify-between flex-col pr-[16px] pt-[48px]">
    <h2 className="text-center font-playfair text-[64px] font-[600] leading-[76.8px] tracking-[-2%] text-white">
      {header}
    </h2>
    <div className="absolute top-[186px] right-[16px] maxw-[254px] gap-y-[24px] flex flex-col self-end">
      {about?.map((item, index)=>(
        <div className="py-[16px] max-w-fit flex gap-x-[12px] px-[12px] rounded-[8px] border-[1px] border-[#E4E7EC]" key={index}>
          <Image src={check} width={24} height={24} alt="check" className="size-[24px] "/>
          <span className="font-[600] text-[16px] leading-[19.2px] tracking-[2%] text-white">{item}</span>
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
import Image from 'next/image'
import React from 'react'
import usa from "@/assets/images/usa.svg"
import { Message01Icon } from 'hugeicons-react'

const ReviewCard = ({review, showMsg=false}:{review:any; showMsg?:boolean}) => {
  return (
    <div
    // key={index}
    className="flex items-center gap-x-[24px] border-b pb-[24px]"
  >
    <Image
      src={review.image}
      width={120}
      height={120}
      alt=""
      className="rounded-full lg:size-[120px]"
    />
    <div className="flex flex-col gap-y-[16px]">
      <h6 className="font-openSans text-[18px] font-[600] leading-[21.6px] tracking-[-2%] text-blackPrimary">
        {review.name}
      </h6>
      <div className="flex flex-col gap-y-[8px]">
        <p className="font-openSans text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
          {review.review}
        </p>
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-[16px]">
          <span>Love from </span>
          <Image
            src={usa}
            width={18}
            height={12}
            alt="usa"
            className="h-[12px] w-[18px]"
          />
        </div>
        {showMsg && <Message01Icon className='size-[20px] text-[#8E97A6]'/>}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ReviewCard
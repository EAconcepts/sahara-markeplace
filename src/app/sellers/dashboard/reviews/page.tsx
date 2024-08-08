'use client'

import ReviewCard from "@/app/(components)/review-card"
import { Header } from "@/app/dashboard/(components)/header"
import { reviews } from "@/app/product-details/[id]/page"
import { StarIcon } from "hugeicons-react"
import { useState } from "react"

const Reviews=()=>{
    const [activeRating, setActiveRating] = useState<number>(1)
   
    return(
        <div className="mt-[12px] py-[16px] flex  font-openSans flex-col gap-y-[32px]">
            {/* Heading */}
                <Header title="Reviews"/>
                <div  className="flex gap-x-[12px]">
                    {[12,10,10,10,10].map((rating, index, arr)=>(
                        <div onClick={()=>setActiveRating(index+1)} className={`w-fit text-blackPrimary flex gap-x-[8px] h-[40px] py-[8px] px-[24px] rounded-[8px] border-[1px] ${activeRating == index+1 && 'border-greenPrimary text-white bg-greenPrimary'} `} key={index}>
                            <StarIcon className="size-[20px] fill-[#F9C74F] text-[#F9C74F] "/>
                            <span className="text-[16px]  font-[600] leading-[23.2px]">{arr.length} ({rating}) </span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-y-[32px]">
                    {
                    reviews?.map((review, index)=>(
                            <ReviewCard showMsg={true} key={index} review={review}/>
                        ))
                    }
                </div>
            </div>
    )
}

export default Reviews
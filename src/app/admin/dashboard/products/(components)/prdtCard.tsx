// 'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import prdtImg from "@/assets/images/arrival2.png"

export const PrdtCard=({product}:{product:any})=>{

    return(
        <div className='flex items-center flex-col py-[16px] border-[1px] border-border gap-[16px] px-[12px] rounded-[12px] h-[319px]'>
        <Image src={""} width={215} height={180} alt="prd" className="w-full h-[180px] object-cover"/>
        <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[4px]">
                <p className="text-[14px] font-[600] text-center leading-[20.3px] text-blackPrimary">Sac Apapa Orange</p>
                <h4 className="text-[16px] font-[700] leading-[23.2px] text-center text-blackPrimary">$145.99</h4>
            </div>
            <Button variant={"outline"} className=" rounded-[8px] border-[1px] py-[6px] px-[16px] w-fit font-[600] text-[14px] leading-[20.3px] text-blackPrimary">View Product</Button>
        </div>
</div>
    )
}
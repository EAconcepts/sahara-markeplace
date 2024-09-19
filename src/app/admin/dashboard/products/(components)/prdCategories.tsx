import { ArrowRight01Icon } from "hugeicons-react"
import Image from "next/image"
import dashedLine from "@/assets/images/dashedLine.svg"


export const PrdCatgry=()=>{

    return(
        <div className="w-full rounded-[12px] border-[1px] py-[24px] px-[14px] flex flex-col gap-[24px] border-border">
        <div className="flex justify-between">
            <h4 className="text-[20px] leading-[29px] text-black font-[600]">Product Categories</h4>
            <button className='flex items-center text-[#787C83] gap-x-[4px]'>
                <span className="font-[400] text-[14px] leading-[20.3px] ">View all</span>
                <ArrowRight01Icon className="size-[20px]"/>
            </button>
            </div>
            <div className="w-full flex flex-col gap-[16px]">
                {[0,1,2].map((categ, index)=>(
                    <div key={index} className="flex items-center gap-[8px] justify-between font-[400] text-[16px] leading-[19.2px] tracking-[-2%] text-black">
                        <span className="shrink-0">Fashion</span>
                        <div className="border-b border-[1px] h-[1px] border-dashed w-full"></div>
                       
                        <span className="shrink-0">2880 Items </span>
                    </div>
                ))}
            {/* </div> */}
        </div>
    </div>
    )
}
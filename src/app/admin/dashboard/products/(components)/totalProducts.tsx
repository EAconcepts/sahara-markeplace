import { ChartLineData02Icon } from "hugeicons-react"
import Image from "next/image"
import dollar from "@/assets/images/dollar.svg"


export const TotalProducts=({total, percent, heading}:{total?:number, percent?:number; heading:string})=>{

    return(
        <div className="flex flex-col gap-[24px] rounded-[12px] p-[16px] border-[1px] border-border">
        <div className="flex justify-between">
            <div className="flex flex-col gap-[8px]">
                <p className="text-[16px] font-[600] leading-[23.4px] text-black"> {heading}</p>
                <h3 className="text-[24px] leading-[34.8px] font-[700] text-black">${total?.toLocaleString()}</h3>
            </div>
           <Image src={dollar} width={36} height={36} alt="dollar" className="size-[36px]"/>
        </div>
        <div className="flex gap-[8px] items-center">
            <div className="flex gap-[8px] border-[1px] rounded-[4px] border-success text-success/80 py-[4px] px-[12px]">
            <ChartLineData02Icon className="size-[14px]"/>
            <span className="text-[12px] font-[400] leading-[17.4px] text-center text-success">{percent}%</span>
            </div>
            <span className="font-[400] text-[14px] leading-[20.3px] text-black">From last month</span>
        </div>
    </div>
    )
}
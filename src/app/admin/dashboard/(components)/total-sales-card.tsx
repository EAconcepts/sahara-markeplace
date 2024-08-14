import { ChartLineData02Icon } from 'hugeicons-react'
import Image from 'next/image'
import React from 'react'

const TotalSalesCard = ({stat}:{stat:any}) => {
  return (
    <div  className="flex flex-col gap-y-[16px] p-[16px] rounded-[12px] border-[1px] border-border min-w-[247px] w-full">
    <div className="flex flex-col pr-[8px]">
        <div className="flex justify-between">
            <h6 className="text-[16px] font-[400] text-black leading-[23.2px]">{stat.title}</h6>
            <Image src={stat.icon} width={36} height={36} alt="" className="shrink-0 object-cover size-[36px]"/>
        </div>
        <h2 className="font-[700] text-[24px] leading-[34.8px] text-black">{stat.value}</h2>
    </div>
    <div className="flex gap-x-[8px]">
        {/* percent */}
        <div className={`py-[4px] px-[12px] rounded-[4px] border-[1px] flex gap-x-[2px] items-center ${stat.status =='up' ? 'text-success border-success bg-[#00875133]':'text-failure bg-[#E8112D33]'}`}>
            <ChartLineData02Icon className="size-[14px]"/>
            <span className="font-[400] text-[12px] leading-[17.4px]">{stat.percent}</span>
        </div>
    </div>
</div>
  )
}

export default TotalSalesCard
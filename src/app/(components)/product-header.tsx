import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

const ProductHeader = ({heading, showBtn=true, onClick}:{heading: string; showBtn?: boolean, onClick?:()=>void}) => {
  return (
    <div className="flex gap-x-[12px]  items-baseline">
        <h2 className="font-[700] shrink-0 text-[16px] lg:text-[30px] leading-[29px] lg:leading-[43.5px] font-playfair text-blackPrimary">
          {heading}
        </h2>
        <div className="w-full border-[1px] h-[1px] border-[#E4E7EC] "></div>
      {showBtn &&  <Button onClick={onClick} variant={"outline"} className="flex items-center max-lg:h-fit max-lg:px-[8px] max-lg:py-[4px] max-lg:rounded-[8px] gap-x-[4px]">
          <span className='max-lg:text-[10px] font-[400] leading-[14.5px] max-lg:text-[#8E97A6]'>See all</span>
          <FaGreaterThan className='max-lg:text-[#8E97A6] max-lg:text-[8px]' />
        </Button>}
      </div>
  )
}

export default ProductHeader
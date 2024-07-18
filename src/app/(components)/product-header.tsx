import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

const ProductHeader = ({heading, showBtn=true}:{heading: string; showBtn?: boolean}) => {
  return (
    <div className="flex gap-x-[12px]  items-baseline">
        <h2 className="font-[700] shrink-0 text-[30px] leading-[43.5px] font-playfair text-blackPrimary">
          {heading}
        </h2>
        <div className="w-full  border-[1px] h-[1px] border-[#E4E7EC] "></div>
      {showBtn &&  <Button variant={"outline"} className="flex items-center gap-x-[4px]">
          <span>See All</span>
          <FaGreaterThan />
        </Button>}
      </div>
  )
}

export default ProductHeader
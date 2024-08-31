import Image from 'next/image'
import React from 'react'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

const OrderCard = ({product}:{product:any}) => {
    const imgBaseUrl =process.env.NEXT_PUBLIC_IMAGE_URL
  return (
    <div className='flex justify-between w-full font-openSans items-center'>
        <div className="flex gap-[12px]">
            <Image width={44} height={59} alt={product?.name} src={`${imgBaseUrl}/${product?.image}`}  className='object-cover w-[44px] h-[59px] rounded-[2px] '/>
            <div className='flex gap-[2px] items-center'>
                <div className="text-[#787C83] text-[10px] font-[400] leading-[12px] tracking[-2%] flex gap-y-[4px] flex-col">
                    <label>Product Name:</label>
                    <label>Quantity</label>
                    <label>Date:</label>
                </div>
                <div className='flex gap-[4px] flex-col text-blackPrimary text-[12px] font-[400] leading-[14.4px] tracking-[-2%]'>
                    <span>{product?.name}</span>
                    <span>{product?.quantity}</span>
                    <span>{product?.order_date}</span>
                </div>
            </div>
        </div>
        {/* Options */}
        <div className=''>
            <div className='size-[24px] bg-white rounded-[8px] flex items-center justify-center border-[1px] border-border'>
            <IoEllipsisHorizontalSharp className='text-blackPrimary' />
            </div>
        </div>
    </div>
  )
}

export default OrderCard
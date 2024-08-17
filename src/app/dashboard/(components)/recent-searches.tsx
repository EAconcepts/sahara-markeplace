'use client'

import Image from 'next/image'
import React from 'react'
import { Header } from './header'

const RecentSearches = ({products}:{products:any}) => {
  return (
    <div className="mt-[24px] flex flex-col py-[16px] font-openSans gap-y-[32px] pb-[16px]">
    <Header title={"Recent Searches"}/>
    <div className="flex gap-x-[24px]">
        {products?.slice(0, 6).map((product:any, index:number)=>(
            <div key={index} className="flex flex-col">
                <Image src={product.image} width={152.67} height={187} alt="" className="rounded-[4px] w-[152.67px] h-[185px] object-cover"/>
                <p className="text-[14px] font-[400] mt-[16px] text-center text-blackPrimary">Men</p>
            </div>
        ))}
    </div>
  </div>
  )
}

export default RecentSearches
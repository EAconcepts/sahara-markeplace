import { FavouriteIcon, ShoppingCart01Icon, UserCircleIcon } from 'hugeicons-react'
import React from 'react'

const Topbar = () => {
  return (
    <header className='h-[66px] pt-[8px] w-full flex items-center justify-between pb-[16px] border-b-[1px] border-border'>
        <h2 className='font-playfair font-[600] text-[28px] leading-[40.6px] text-blackPrimary'>Welcome, Juan</h2>
        <div className="flex gap-x-[24px]">
            <FavouriteIcon/>
            <ShoppingCart01Icon/>
            <UserCircleIcon/>
        </div>
    </header>
  )
}

export default Topbar
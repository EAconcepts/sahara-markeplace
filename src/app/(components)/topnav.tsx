import Link from 'next/link'
import React from 'react'

const Topnav = () => {
  return (
    <header className='bg-[#C4D79B] font-openSans lg:px-[96px] lg:py-[12px] lg:h-[62px] w-full flex justify-between'>
        <div className='flex lg:gap-x-[8px] items-center lg:p-[8px] text-[#201812]'>
            <h6 className=' lg:text-[16px] font-[700] lg:leading-[21.79px]'>CALL US NOW:</h6>
            <span className='lg:text-[16px] lg:leading-[21.79px] font-[400]'>+1 234 567-0000</span>
        </div>
        <nav className="flex lg:gap-x-[32px] lg:p-[8px] text-blackPrimary">
            <Link href={'#'} className='lg:text-[16px] font-openSans lg:leading-[21.79px]'>Recipes</Link>
            <Link href={'#'} className='lg:text-[16px] font-openSans lg:leading-[21.79px]'>Blog</Link>
            <Link href={'#'} className='lg:text-[16px] font-openSans lg:leading-[21.79px]'>Become A Seller</Link>
            <Link href={'#'} className='lg:text-[16px] font-openSans lg:leading-[21.79px]'>FAQs</Link>
            <Link href={'#'} className='lg:text-[16px] font-openSans lg:leading-[21.79px]'>Sign in</Link>
        </nav>
    </header>
  )
}

export default Topnav
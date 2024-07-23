import Link from 'next/link'
import React from 'react'
import { CiMail } from 'react-icons/ci'

const Topnav = () => {
  return (
    <header className='bg-[#C4D79B] py-[12px] px-[24px] font-openSans lg:px-[96px] lg:py-[12px] h-[75px] lg:h-[62px] w-full flex max-lg:flex-col justify-between'>
      <div className="lg:hidden flex gap-x-[4px] items-center">
        <CiMail className='text-[12px]'/>
        <span className='text-[12px] font-[400] leading-[16.34px] text-blackPrimary'>info@saharaeagles.com</span>
      </div>
        <div className='hidden lg:flex lg:gap-x-[8px] items-center lg:p-[8px] text-[#201812]'>
            <h6 className=' lg:text-[16px] font-[700] lg:leading-[21.79px]'>CALL US NOW:</h6>
            <span className='lg:text-[16px] lg:leading-[21.79px] font-[400]'>+1 234 567-0000</span>
        </div>
        <nav className="flex gap-x-[20px] max-lg:mt-[12px] lg:gap-x-[32px] lg:p-[8px] max-lg:leading-[19.07px] text-[14px] text-blackPrimary max-lg:font-[600]">
            <Link href={'#'} className='hidden lg:block lg:text-[16px] font-openSans lg:leading-[21.79px]'>Recipes</Link>
            <Link href={'#'} className='max-lg:hidden lg:text-[16px] font-openSans lg:leading-[21.79px]'>Blog</Link>
            <Link href={'#'} className=' lg:text-[16px] font-openSans lg:leading-[21.79px]'>Become A Seller</Link>
            <Link href={'#'} className='lg:text-[16px] font-openSans lg:leading-[21.79px]'>FAQs</Link>
            <Link href={'#'} className='lg:text-[16px] font-openSans lg:leading-[21.79px]'>Sign In</Link>
        </nav>
    </header>
  )
}

export default Topnav
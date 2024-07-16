import Image from 'next/image'
import React from 'react'

const Department = () => {
  return (
    <div>
        <h3 className="font-[700] text-[30px] leading-[43.5px] font-playfair text-blackPrimary" >
            Choose Department
        </h3>
        <div className='relative'>
            <Image src={""} alt='' width={504} height={240} className='rounded-[8px] lg:w-[] '/>
            <div className="bg-gradient-to-t from-[#00000000] to-[#00000033] absolute top-0 bottom-0"></div>
        </div>
    </div>
  )
}

export default Department
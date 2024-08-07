'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineEllipsisVertical } from 'react-icons/hi2'

const Orders = ({orders}:{orders: any}) => {
    const router = useRouter()
  return (
    <table className="mt-[32px] w-full font-openSans">
    <thead className="">
      <tr className="h-[42px] bg-[#E4E7EC] px-[24px] py-[12px] text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
        <th className="">Item</th>
        <th className="px-[24px] text-start">Product Name</th>
        <th className="px[24px]"> Date</th>
        <th className="px[24px]">Customer</th>
        <th className="text-start">Quantity</th>
        <th className="px[24px]">Payment</th>
        <th className="text-start">Status</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border px-[15px]">
      {orders && orders?.slice(0, 3).map((product:any, index:number) => (
        <tr
        onClick={()=>router.push(`/dashboard/my-orders/SE2392922`)}
          key={index}
          className="h-[58px] gap-x-[24px] px-[15px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
        >
            {/* Image */}
          <td className="w-fit pl-[15px] pr-[24px]">
            <Image
              src={product.image}
              width={44}
              height={44}
              alt=""
              className="size-[44px] object-cover"
            />
          </td>
          {/* Priduct name */}
          <td className="w-fit px-[24px] text-[14px] font-[400] leading-[16.8px] text-blackPrimary">
            Ensemble Veste Pantalon
          </td>
          {/* Datae */}
          <td className="px-[24px]">Jun 20, 2024</td>
          {/* Customer */}
          <td className="px-[24px]">Juan Anabel</td>
          {/* quantity */}
          <td className="py-[15px] pl-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
            2
          </td>
          {/* Payment */}
          <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
            Paid
          </td>
          {/* Status */}
          <td className="pr-[15px]">
            <div className="flex items-center gap-x-[32px] align-middle">
              <span className="w-fit shrink-0 rounded-[24px] bg-[#F9E79F66] px-[16px] py-[4px] font-[600]">
                Unfufilled
              </span>
              <div className="flex size-[24px] items-center justify-center rounded-[8px] border-[1px] border-border">
                <HiOutlineEllipsisVertical className="text-[14px] text-blackPrimary" />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Orders
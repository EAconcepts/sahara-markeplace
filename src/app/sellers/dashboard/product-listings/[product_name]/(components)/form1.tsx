import { Input } from '@/components/ui/input'
import { Cancel01Icon, Delete03Icon, PencilEdit01Icon } from 'hugeicons-react'
import Image from 'next/image'
import React from 'react'
import img1 from "@/assets/images/seller-details1.png";
import img2 from "@/assets/images/sellers-details2.png";

const Form1 = () => {
  return (
    <div className="w-full flex flex-col h-full gap-[24px] pb-[24px]">
    <div className="flex flex-col gap-y-[16px] rounded-[12px] border-[1px] border-border p-[16px]">
      <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
        Product Image
      </h5>
      <div className="flex w-full flex-wrap gap-[16px]">
        {[1, 2, 3].map((pic, index) => (
          <div className="relative" key={index}>
            <Image
              src={index == 1 ? img1 : img2}
              width={132}
              height={192}
              alt=""
              className="h-[192px] w-[132px] rounded-[8px] border-[1px] border-dashed border-border"
            />
            <Delete03Icon className="absolute bottom-[8px] right-[8px] size-[16px] text-[#E8112D]" />
          </div>
        ))}
      </div>
    </div>
    {/* Desc */}
    <div className="flex flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
      {/* Title */}
      <div className="flex flex-col gap-y-[24px]">
        <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Product Title
        </h5>
        <Input
          type="text"
          placeholder="Robe Longue Kimono"
          className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
        />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-y-[24px]">
        <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Product Description
        </h5>
        <textarea
          placeholder="C'est une robe kimono coupe chinoise revisitée en soie fluide mix match avec une ceinture. Elle est particulière et unique à cause du mélange parfait des couleurs. Vous ne risquez pas la concurrence. Elle gagne à tous les coups. Disponible en L, XL, XXL et XXXL."
          className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
        />
      </div>
      {/* MAterial  */}
      <div className="flex flex-col gap-y-[24px]">
        <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Material
        </h5>
        <Input
          type="text"
          placeholder="Mousseline, Silk"
          className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
        />
      </div>
      {/* Category & Sub */}
      <div className="w-full flex justify-between gap-[24px]">
        <div className="w-full flex flex-col gap-y-[24px]">
          <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Product Category
          </h5>
          <Input
            type="text"
            placeholder="Fashion"
            className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          />
        </div>
        {/* Sub Category */}
        <div className="w-full flex flex-col gap-y-[24px]">
          <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Sub Category
          </h5>
          <Input
            type="text"
            placeholder="Women's Wear"
            className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          />
        </div>
      </div>
      {/* Tags */}
      <div className="flex flex-col gap-y-[8px]">
        <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Tags
        </h5>
        <div className="flex justify-between gap-x-[12px]">
          {[1, 2, 3].map((tag, index) => (
            <div
              key={index}
              className="min-w-[141.35px] justify-between flex h-[44px] rounded-[6px] border-[1px] p-[12px]"
            >
              <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                Plus-Size
              </span>
              <Cancel01Icon className="size-[20px] text-[#8E97A6]" />
            </div>
          ))}
        </div>
      </div>
      {/* Registry */}
      <div className="flex flex-col gap-y-[8px]">
        <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Registry
        </h5>
        <div className="flex gap-y-[8px] justify-between flex-wrap max-w-full gap-x-[12px]">
          {[1, 2, 3, 4].map((tag, index) => (
            <div
              key={index}
              className="w-[218.35px] justify-between flex h-[44px] shrink-0   rounded-[6px] border-[1px] p-[12px]"
            >
              <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                Wedding Attire
              </span>
              <Cancel01Icon className="size-[20px] text-[#8E97A6]" />
            </div>
          ))}
        </div>
      </div>
      {/* Quantity & Availability */}
      <div className="flex justify-between gap-[24px]">
        <div className="flex w-full flex-col gap-y-[24px]">
          <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Quantity
          </h5>
          <Input
            type="text"
            placeholder="1020"
            className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          />
        </div>
        {/* Availabilty*/}
        <div className="flex w-full flex-col gap-y-[24px]">
          <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Availability
          </h5>
          <div className="relative ">
            <Input
              type="text"
              placeholder="In-Stock"
              className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            />
            <div className="absolute right-[12px] top-[50%] translate-y-[-50%] flex items-center gap-x-[2px]">
              <PencilEdit01Icon className="size-[16px text-greenPrimary" />
              <span className="text-[12px] font-[600] leading-[17.4px] text-greenPrimary">
                Edit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Form1
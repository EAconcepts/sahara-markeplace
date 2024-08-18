import Image from "next/image";
import React, { useState } from "react";
import usa from "@/assets/images/usa.svg";
import { TbMinus, TbPlus } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import details1 from "@/assets/images/details1.png"
import axios from "axios";
import { useAuth } from "@/utils/useAuth";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CartCard = ({product, showQuantity= true, showStore=true, imgClass}:{showQuantity?:boolean; imgClass?:string; showStore?:boolean; product?:any}) => {
  const [quantity, setQuantity] = useState<number>(1)
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  const {token} = useAuth()
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const headers= {
    Authorization : `Bearer ${token}`
  }
  const queryClient = useQueryClient()
  const deleteMutation=useMutation({
    mutationFn:(id:number)=> axios.get(`${baseUrl}/delete-cart-item/${id}`, {headers}),
    onSuccess: ((data:any)=>{
      console.log(data)
      queryClient.invalidateQueries({ queryKey: ['cart']})
      toast.success(data?.data?.message)
    }),
    onError:((error:any)=>{
      console.log(error)
      toast.error(error?.response?.data?.message || error?.message)
    })
  })

  const deleteItem=async(id:number)=>{
  deleteMutation.mutate(id)    
  }

  return (
    <div className="flex w-full gap-x-[12px]">
      <Image
        src={`${imageBaseUrl}/${product?.product?.image}`}
        width={152}
        height={152}
        alt=""
        className={twMerge("size-[152px] rounded-[4px]", imgClass)}
      />
      {/* Details */}
      <div className="flex w-full flex-col gap-y-[16px]">
        <div className="flex flex-col">
       {showStore &&   <div className="flex w-full items-center gap-x-[8px]">
            <span className="font-openSans text-[12px] font-[600] leading-[14.4px] tracking-[-2%] text-blackPrimary">
              Afritique-Benin
            </span>
            <Image
              src={usa}
              width={15}
              height={10}
              className="h-[10px] w-[15px]"
              alt=""
            />
            <span className="font-openSans text-[12px] font-[600] leading-[17.4px] text-[#787C83]">
              View Store
            </span>
          </div>
}
          <div className="flex w-full flex-col gap-y-[8px]">
            <div className="flex w-full justify-between">
              <h4 className="font-openSans text-[16px] font-[600] leading-[19.2px] text-blackPrimary">
                {product?.product?.name}
              </h4>
              <h4 className="font-openSans text-[18px] font-[700] leading-[26.1px] text-blackPrimary">
                ${product?.product?.price}
              </h4>
            </div>
            {/* sizes */}
            <div className="flex flex-col gap-y-[4px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
              <p> Color: N</p>
              <p>Size: L</p>
            </div>
          </div>
        </div>
        {/* Quantity */}
      {showQuantity &&  <div className="flex justify-between">
          {/* quantity */}
          <div className="flex w-fit items-center gap-[24px] rounded-[40px] border-[1px] border-[#E4E7EC] px-[17.5px] py-[12.5px] lg:gap-x-[27.5px]">
            <TbMinus
            onClick={() =>   setQuantity((prev: number) => {
              if (prev == 1) {
                return prev;
              } else return prev -1;
            })}
            className="text-[18px] text-[#8E97A6] lg:text-[24px]" />
            <span className="font-openSans text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-[#7D9A37] lg:text-[20px] lg:leading-[24px]">
              {product?.quantity}
            </span>
            <TbPlus
            onClick={() =>   setQuantity((prev: number) => {
              if (prev == product?.quantity) {
                return prev;
              } else return prev +1;
            })}
             className="text-[18px] text-greenPrimary lg:text-[24px]" />
          </div>
          {/* trash */}
          <svg

          onClick={()=>deleteItem(product?.id)}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 4.58268L15.7333 12.9368C15.6017 15.071 15.5358 16.1385 15 16.906C14.7355 17.2853 14.3949 17.6054 14 17.846C13.2025 18.3327 12.1333 18.3327 9.995 18.3327C7.85333 18.3327 6.7825 18.3327 5.98333 17.8452C5.58824 17.6041 5.24768 17.2834 4.98333 16.9035C4.44833 16.1352 4.38333 15.066 4.255 12.9285L3.75 4.58268M7.5 9.77852H12.5M8.75 13.0443H11.25M2.5 4.58268H17.5M13.3792 4.58268L12.8108 3.40935C12.4325 2.62935 12.2442 2.24018 11.9183 1.99685C11.846 1.94295 11.7693 1.89501 11.6892 1.85352C11.3283 1.66602 10.895 1.66602 10.0283 1.66602C9.14083 1.66602 8.69667 1.66602 8.32917 1.86102C8.24793 1.90452 8.17044 1.9547 8.0975 2.01102C7.7675 2.26352 7.58333 2.66768 7.215 3.47518L6.71083 4.58268"
              stroke="#787C83"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
}
      </div>
    </div>
  );
};

export default CartCard;

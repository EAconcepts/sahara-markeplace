'use client'

import { IoIosArrowRoundBack } from "react-icons/io";
import CartCard from "../cart-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";


export const getTotalPrice=(carts:any)=>{
  let totalPrice = 0
  carts?.forEach((item:any)=>totalPrice+=Number(item?.product?.price)*Number(item?.quantity))
  return totalPrice
}

export const CartModal = ({carts, setShowCart, className}:{carts:any; setShowCart:React.Dispatch<React.SetStateAction<boolean>>; className?:string}) => {
    console.log(carts)
      const router = useRouter()
        

  return (
    <div className="fixed inset-0 z-40 flex w-full flex-col items-end bg-black/80">
      {/* cart */}
      <div className={twMerge("z-20 mt-[143px] flex min-h-[300px] w-[571px] flex-col bg-white p-[40px] overflow-y-scroll", className)}>
        {/* heading */}
        <div>
          <div onClick={()=>setShowCart(false)} className="flex items-center gap-x-[8px]">
            <IoIosArrowRoundBack className="text-[16px] text-[#7D9A37]" />
            <span className="font-openSans text-[14px] font-[600] leading-[20.3px] text-[#7D9A37]">
              Back
            </span>
          </div>
          <div className="mt-[16px] flex gap-x-[12px]">
            <h3 className="font-playfair text-[32px] font-[600] leading-[38.4px] tracking-[-2%] text-blackPrimary">
              My Cart
            </h3>
            <p className="flex size-[38px] items-center justify-center rounded-full bg-greenPrimary px-[12px] py-[6px] font-inter text-[18px] font-[600] leading-[26.1px] text-white">
            {carts?.length}
            </p>
          </div>
        </div> 
        <div className='mt-[16px] flex flex-col gap-y-[28px] border-b-[2px] border-[#E4E7EC] pb-[28px]'>
            {carts?.map((cart:any)=>(
                <CartCard product={cart} key={cart.id}  showQuantity={true} />
            ))}
        </div>
        {/* Sub total */}
        <div className="flex flex-col gap-y-[24px] divide-y-[2px] divide-[#E4E7EC] mt-[16px]">
            <div className="flex justify-between">
                <span className="text-[#787C83] font-[400] font-openSans text-[16px] leading-[23.2px] "> Subtotal:</span>
                <h4 className="text-[18px] font-[700] leading-[26.1px] text-blackPrimary">${getTotalPrice(carts).toLocaleString()}</h4>
            </div>
            <div className="pt-[24px]">
            <Button onClick={()=>{router.push('/checkout')
              setShowCart(false)
            }} className="bg-greenPrimary  py-[16px] w-full h-[55px] rounded-[12px] text-white text-[16px] font-[700] font-openSans leading-[23.2px]">Checkout</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

'use client'

import CartCard from "@/app/(components)/cart-card";
import Loader from "@/app/(components)/loader";
import { getTotalPrice } from "@/app/(components)/modals/cart-modal";
import { Button } from "@/components/ui/button";
import { useGet } from "@/utils/useGet.";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const carts = [1, 2, 3];
  const {data} = useGet("my-cart", 'cart')
  console.log(data)
  const router = useRouter()
  return (
    <div className="flex flex-col px-[24px] font-openSans">
      <div className="flex gap-x-[16px]">
        <h4 className="text-[20px] lg:text-[24px] font-[600] leading-[28.8px] tracking-[-2%] text-blackPrimary">
          Order Summary
        </h4>
        {data?.data?.data?.cart &&
        <p className="flex max-lg:size-[24px] lg:size-[30px] items-center justify-center rounded-full bg-greenPrimary px-[10px] py-[10px] text-[16px] font-[600] leading-[23.2px] text-white">
          {" "}
          {data?.data?.data?.cart?.length}
        </p>
}
      </div>
      { data ?  <> 
      <div className="mt-[32px] flex flex-col gap-y-[16px] border-b-[2px] border-border pb-[28px]">
        {data?.data?.data?.cart?.map((cart:any) => (
          <CartCard
            key={cart?.id}
            showStore={false}
            showQuantity={false}
            imgClass="size-[80px]"
            product={cart}
          />
        ))}
      </div>
      <div className="mt-[16px] flex flex-col gap-y-[24px] divide-y-[2px] divide-border">
        {/* Subtotal */}
        <div className="pb[24px] text-[14px] lg:text-[16px]  flex justify-between">
          <span className="text-[#787C83]  font-[500] leading-[23.2px]">
            Subtotal:{" "}
          </span>
          <h5 className="font-[600] leading-[23.2px] text-blackPrimary">
            ${getTotalPrice(data?.data?.dat?.cart).toLocaleString()}
          </h5>
        </div>
        {/* Tax */}
        <div className="flex justify-between pt-[24px]">
          <span className="text-[#787C83] font-[500] leading-[23.2px]">
            Tax:{" "}
          </span>
          <h5 className=" font-[600] leading-[23.2px] text-blackPrimary">
            $0.00
          </h5>
        </div>
        {/* Total */}
        <div className="flex justify-between pt-[24px]">
          <span className="text-[#787C83] font-[500] leading-[23.2px]">
            Total:
          </span>
          <h5 className=" font-[600] leading-[23.2px] text-blackPrimary">
            ${getTotalPrice(data?.data?.data?.cart).toLocaleString()}
          </h5>
        </div>
        <div className="pt-[24px]">
          <Button onClick={()=>router.push("/checkout/billing-info")} className="h-[44px] lg:h-[55px] w-full rounded-[12px] bg-greenPrimary py-[16px] font-openSans text-[16px] font-[700] leading-[23.2px] text-white">
            Continue to Payment
          </Button>
        </div>
      </div>
      </>
      : <Loader/>
}
    </div>
  );
};

export default OrderSummary;

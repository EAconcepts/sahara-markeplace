'use client'

import { useState } from "react";
import Form from "./(components)/form";
import OrderSummary from "./(components)/summary";
import { useCheckout } from "@/utils/useCheckout";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const {shippingInfo} = useCheckout()
  // console.log(shippingInfo)
  const router = useRouter()
  return (
    <div className="lg:px-[96px] lg:py-[40px]">
      {/* Breadcrumb */}
      <div></div>
      <div className="lg:mt-[40px] max-lg:p-[24px] flex max-lg:flex-col lg:gap-x-[24px]">
        {/* Shipping Info */}
        <div className="flex flex-col">
          <h3 className="font-openSans text-[20px] lg:text-[24px] font-[600] leading-[24px] lg:leading-[28.8px] tracking-[-2%] text-blackPrimary">
            Shipping Information
          </h3>
          <p className="mt-[8px] text-[12px] lg:text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Fill in your billing information below to complete your purchase.
            Creating an account allows for faster checkouts and order tracking
            in the future.
          </p>
          <div className="mt-[32px]">
            <Form />
          </div>
        </div>
        {/* Order Summary */}
        <div className="lg:w-[45%] max-lg:mt-[24px] shrink-0">
          <OrderSummary onClick={()=>router.push("/checkout/billing-info")} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

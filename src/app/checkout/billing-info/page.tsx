import { useState } from "react";
import Form from "../(components)/form";
import OrderSummary from "../(components)/summary";

const BillingInfo = () => {
  // const [shippingInfo, setShippingInfo] = useState({

  // })
  return (
    <div className="px-[96px] py-[40px]">
      {/* Breadcrumb */}
      <div></div>
      <div className="mt-[40px] flex gap-x-[24px]">
        {/* Shipping Info */}
        <div className="flex flex-col">
          <h3 className="font-openSans text-[24px] font-[600] leading-[28.8px] tracking-[-2%] text-blackPrimary">
            Shipping Information
          </h3>
          <p className="mt-[8px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Fill in your billing information below to complete your purchase.
            Creating an account allows for faster checkouts and order tracking
            in the future.
          </p>
          <div className="mt-[32px]">
            <Form />
          </div>
        </div>
        {/* Order Summary */}
        <div className="w-[45%] shrink-0">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;

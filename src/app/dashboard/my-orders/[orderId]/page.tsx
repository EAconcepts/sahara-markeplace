"use client";

import { useParams, useRouter } from "next/navigation";
import { Header } from "../../(components)/header";
import { ArrowRight01Icon, CheckmarkCircle01Icon } from "hugeicons-react";
import Details from "./(components)/details";

const OrderDetails = () => {
  const { orderId } = useParams();
  return (
    <div>
      {/* BreadCrumb */}
      <div></div>
      {/* Heading */}
      <div className="">
        <Header title={`Order`} text2={`#${orderId}`} style2="font-openSans" />
      </div>
      {/* Tracking Order */}
      <div className="mt-[32px] h-[190px] border-[1px] border-border px-[24px] py-[16px]">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <h4 className="text-[20px] font-[600] leading-[24px] tracking-[-2%] text-black">
            Tracking Order
          </h4>
          <div className="flex items-center gap-x-[4px] px-[8px] py-[4px]">
            <span className="font-openSans text-[14px] font-[400] leading-[16.8px] text-[#787C83]">
              See more{" "}
            </span>
            <ArrowRight01Icon className="size-[16px] text-[#8E97A6]" />
          </div>
        </div>
        {/* Order progress */}
        <div className="flex items-center gap-x-[8px] mt-[32px] rounded-[8px]">
          {/* ordered */}
          <div className="relative flex flex-col">
            <CheckmarkCircle01Icon className="text-success size-[38px] shrink-0" />
            <div className="absolute bottom-[-44px] left-0 flex w-max shrink-0 flex-col gap-y-[5px]">
              <h6 className="font-openSans text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-black">
                Ordered
              </h6>
              <span className="shrink-0 text-[14px] font-[400] leading-[16.8px]">
                10th Jun. 2024
              </span>
            </div>
          </div>
          <div className="bg-success h-[1px] w-full"></div>
          {/* Ready */}
          <div className="relative flex flex-col">
            <CheckmarkCircle01Icon className="text-success size-[38px] shrink-0" />
            <div className="absolute bottom-[-44px] w-max  left-0 flex flex-col">
              <h6 className="font-openSans text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-black">
                Ready
              </h6>
              <span className="text-[14px] font-[400] leading-[16.8px]">
                11th Jun. 2024
              </span>
            </div>
          </div>
          {/* Shipped */}
          <div className="bg-success h-[1px] w-full"></div>
          <div className="relative flex flex-col">
            <CheckmarkCircle01Icon className="size-[38px] shrink-0 text-[#F9C74F]" />
            <div className="absolute bottom-[-44px] w-max left-0 flex flex-col">
              <h6 className="font-openSans text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-black">
                Shipped
              </h6>
              <span className="text-[14px] font-[400] leading-[16.8px]">
                .....
              </span>
            </div>
          </div>
          {/* Delivery */}
          <div className="h-[1px] w-full bg-[#8E97A6]"></div>
          <div className="relative flex flex-col">
            <CheckmarkCircle01Icon className="size-[38px] shrink-0 text-[#8E97A6]" />
            <div className="absolute bottom-[-44px] right-0 flex w-max flex-col text-end">
              <h6 className="font-openSans text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-black">
                Estimated Delivery
              </h6>
              <span className="text-[14px] font-[400] leading-[16.8px]">
                21st Jun. 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    {/* Order Details */}
      <div className="mt-[32px]">
        <Details/>
      </div>
    </div>
  );
};

export default OrderDetails;

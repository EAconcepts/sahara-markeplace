import { ArrowRight01Icon, CheckmarkCircle01Icon } from "hugeicons-react";
import React from "react";

const TrackingOrder = ({order}:{order:any}) => {
  return (
    <>
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
      <div className="mt-[32px] flex items-center gap-x-[8px] rounded-[8px]">
        {/* ordered */}
        <div className="relative flex flex-col">
          <CheckmarkCircle01Icon className="fill-success size-[38px] shrink-0 text-white" />
          <div className="absolute bottom-[-44px] left-0 flex w-max shrink-0 flex-col gap-y-[2px] lg:gap-y-[5px]">
            <h6 className="font-openSans text-[12px] lg:text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-black">
              Ordered
            </h6>
            <span className="shrink-0 text-[8px] lg:text-[14px] font-[400] leading-[16.8px]">
              10th Jun. 2024
            </span>
          </div>
        </div>
        <div className="bg-success h-[1px] w-full"></div>
        {/* Ready */}
        <div className="relative flex flex-col">
          <CheckmarkCircle01Icon className="fill-success size-[38px] shrink-0 text-white" />
          <div className="absolute bottom-[-44px] left-0 flex w-max flex-col">
            <h6 className="font-openSans text-[10px] lg:text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-black">
              Ready
            </h6>
            <span className="text-[8px] lg:text-[14px] font-[400] leading-[16.8px]">
              11th Jun. 2024
            </span>
          </div>
        </div>
        {/* Shipped */}
        <div className="bg-success h-[1px] w-full"></div>
        <div className=" relative flex flex-col">
          <CheckmarkCircle01Icon className="size-[38px] shrink-0 fill-[#F9C74F] text-white" />
          <div className="absolute bottom-[-44px] max-lg:left-[-18px] left-0 flex w-max flex-col">
            <h6 className="font-openSans text-[10px] lg:text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-black">
              Shipped
            </h6>
            <span className="text-[8px] text-center lg:text-[14px] font-[400] leading-[16.8px]">
              .....
            </span>
          </div>
        </div>
        {/* Delivery */}
        <div className="h-[1px] w-full bg-[#8E97A6]"></div>
        <div className="relative flex flex-col">
          <CheckmarkCircle01Icon className="size-[38px] shrink-0 fill-[#8E97A6] text-white" />
          <div className="absolute bottom-[-44px] right-0 flex w-max flex-col text-end">
            <h6 className="font-openSans text-[10px] lg:text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-black">
              Estimated Delivery
            </h6>
            <span className="text-[8px] lg:text-[14px] font-[400] leading-[16.8px]">
              21st Jun. 2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingOrder;

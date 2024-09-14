'use client'

import { Header } from "@/app/dashboard/(components)/header";
import LastUpdated from "../(components)/last-updated";
import { Calendar } from "@/components/ui/calendar";
import { ArrowRight01Icon, Calendar03Icon } from "hugeicons-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Orders from "./(components)/orders";
import { newArrivals } from "@/app/(components)/reviews";
import { useGet } from "@/utils/useGet.";
import Loader from "@/app/(components)/loader";
// import { newArrivals } from "@/app/page";

const MyOrders = () => {
  const orderStatus = [{}];
  const {data, isPending} = useGet("vendor/orders", "vendorOrders")
  console.log(data)
  return (
    <div className="font-openSans max-lg:px-[24px]">
      {/* Last updated */}
      <LastUpdated />
      <div className="lg:mt-[32px] flex flex-col gap-y-[32px] py-[16px]">
        {/* Header */}
        <Header title="Orders" />
        <div className="flex flex-col gap-y-[32px] rounded-[10px] border-[1px] border-border p-[16px]">
          {/* Order Details */}
          <div className="flex flex-col gap-y-[12px]">
            {/* Total Orders */}
            <div className="flex items-center justify-between">
              <h4 className="text-[16px] lg:text-[20px] font-[400] leading-[29px] text-blackPrimary">
                Total Order
              </h4>
              {/* Calendar */}
              <div className="flex gap-x-[4px] items-center lg:gap-x-[8px] rounded-[8px] border-[1px] border-border px-[12px] py-[6px] lg:py-[8px]">
                <Calendar03Icon className="size-[14px] lg:size-[16px] text-[#8E97A6]" />
                <div className="flex items-center gap-x-[4px]">
                  <span className="text-[12px] lg:text-[14px] font-[400] leading-[20.3px] text-[#8E97A6]">
                    25 May - 24 Jun.
                  </span>
                  <ArrowRight01Icon className="size-[16px] rotate-[-90deg] text-[#8E97A6]" />
                </div>
                {/* <Calendar /> */}
              </div>
            </div>
            <h1 className="text-[32px] lg:text-[48px] font-[700] leading-[46px] lg:leading-[57.6px] tracking-[-2%] text-[#101928]">
              125
            </h1>
            <div className="flex items-center gap-x-[10px] lg:gap-x-[12px] divide-x-[1px] divide-border">
              {/* New Orders */}
              <div className="flex w-full flex-col gap-y-[10px] lg:gap-y-[12px]">
                <p className="text-[12px] lg:text-[20px] shrink-0 font-[400] leading-[16.8px] lg:leading-[29px] text-[#787C83]">
                  New Orders
                </p>
                {/* Value */}
                <div className="flex items-center lg:items-end gap-x-[4px]">
                  <h2 className="text-[16px] lg:text-[48px] font-[600] leading-[57.6px] tracking-[-2%] text-blackPrimary">
                    16
                  </h2>
                  <p className="lg:pb-[8px] text-[10px] lg:text-[16px] font-[400] leading-[19.36px] text-success">
                    +0.00%
                  </p>
                </div>
              </div>
              {/* Fufilled */}
              <div className="flex w-full flex-col gap-y-[10px] lg:gap-y-[12px] pl-[12px]">
                <p className="text-[12px] lg:text-[20px] font-[400] leading-[29px] text-[#787C83]">
                  Fufilled
                </p>
                {/* Value */}
                <div className="flex items-end gap-x-[4px]">
                  <h2 className="text-[16px] lg:text-[48px] font-[600] leading-[57.6px] tracking-[-2%] text-blackPrimary">
                    75
                  </h2>
                  <p className="pb-[8px] text-[10px] lg:text-[16px] font-[400] leading-[19.36px] text-success">
                    +0.00%
                  </p>
                </div>
              </div>
              {/* Refunded */}
              <div className="flex w-full flex-col gap-y-[12px] pl-[12px]">
                <p className="text-[12px] lg:text-[20px] font-[400] leading-[29px] text-[#787C83]">
                  Refunded
                </p>
                {/* Value */}
                <div className="flex items-end gap-x-[4px]">
                  <h2 className="text-[16px] lg:text-[48px] font-[600] leading-[57.6px] tracking-[-2%] text-blackPrimary">
                    4
                  </h2>
                  <p className="pb-[8px] text-[10px] lg:text-[16px] font-[400] leading-[19.36px] text-success">
                    +0.00%
                  </p>
                </div>
              </div>
              {/* Cancelled */}
              <div className="flex w-full flex-col gap-y-[12px] pl-[12px]">
                <p className="text-[12px] lg:text-[20px] font-[400] leading-[29px] text-[#787C83]">
                  Cancelled
                </p>
                {/* Value */}
                <div className="fw-full lex items-end gap-x-[4px]">
                  <h2 className="text-[16px] lg:text-[48px] font-[600] leading-[57.6px] tracking-[-2%] text-blackPrimary">
                    12
                  </h2> 
                  <p className="pb-[8px] text-[10px] lg:text-[16px] font-[400] leading-[19.36px] text-success">
                    +0.00%
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
         {/* Orders table */}
         <div className="flex flex-col gap-y-[32px]">
            {/* sort by */}
            <Select >
              <SelectTrigger className="hidden h-[36px] w-[181px] self-end rounded-[6px] border-[#8E97A6] px-[8px] py-[12px]">
                <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                  Sort by:
                </span>
                <SelectValue
                  className="text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
                  placeholder={" Latest Added"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* Orders */}
            {isPending ?
            <Loader/>
            : data?.data?.data?.trx.length > 0 ? 
          
            <div className="flex flex-col gap-y-[16px]">
              <Orders orders={data?.data?.data?.trx} />
              {/* Pagination */}
              <div className=""></div>
            </div>
            : <p className="text-[12px] font-[400] leading-[20.3px] text-[#787C83]">No orders found.</p>
}
          </div>
      </div>
    </div>
  );
};

export default MyOrders;

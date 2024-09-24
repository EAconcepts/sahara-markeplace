"use client";

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
import Pagination from "../(components)/pagination";
import Calendarr from "@/app/(components)/calendar";
// import { newArrivals } from "@/app/page";

const MyOrders = () => {
  const orderStatus = [{}];
  const { data, isPending } = useGet("vendor/orders", "vendorOrders");
  console.log(data);
  return (
    <div className="font-openSans max-lg:px-[24px]">
      {/* Last updated */}
      <LastUpdated />
      <div className="flex flex-col gap-y-[32px] py-[16px] lg:mt-[32px]">
        {/* Header */}
        <Header title="Orders" />
        <div className="flex flex-col gap-y-[32px] rounded-[10px] border-[1px] border-border p-[16px]">
          {/* Order Details */}
          <div className="flex flex-col gap-y-[12px]">
            {/* Total Orders */}
            <div className="flex items-center justify-between">
              <h4 className="text-[16px] font-[400] leading-[29px] text-blackPrimary lg:text-[20px]">
                Total Order
              </h4>
              {/* Calendar */}
              <Calendarr />
            </div>
            <h1 className="text-[32px] font-[700] leading-[46px] tracking-[-2%] text-[#101928] lg:text-[48px] lg:leading-[57.6px]">
              {data?.data?.data?.trxx}
            </h1>
            <div className="flex items-center gap-x-[10px] divide-x-[1px] divide-border lg:gap-x-[12px]">
              {/* New Orders */}
              <div className="flex w-full flex-col gap-y-[10px] lg:gap-y-[12px]">
                <p className="shrink-0 text-[12px] font-[400] leading-[16.8px] text-[#787C83] lg:text-[20px] lg:leading-[29px]">
                  New Orders
                </p>
                {/* Value */}
                <div className="flex items-center gap-x-[4px] lg:items-end">
                  <h2 className="text-[16px] font-[600] leading-[57.6px] tracking-[-2%] text-blackPrimary lg:text-[48px]">
                    16
                  </h2>
                  <p className="text-[10px] font-[400] leading-[19.36px] text-success lg:pb-[8px] lg:text-[16px]">
                    +0.00%
                  </p>
                </div>
              </div>
              {/* Fufilled */}
              <div className="flex w-full flex-col gap-y-[10px] pl-[12px] lg:gap-y-[12px]">
                <p className="text-[12px] font-[400] leading-[29px] text-[#787C83] lg:text-[20px]">
                  Fufilled
                </p>
                {/* Value */}
                <div className="flex items-end gap-x-[4px]">
                  <h2 className="text-[16px] font-[600] leading-[57.6px] tracking-[-2%] text-blackPrimary lg:text-[48px]">
                    75
                  </h2>
                  <p className="pb-[8px] text-[10px] font-[400] leading-[19.36px] text-success lg:text-[16px]">
                    +0.00%
                  </p>
                </div>
              </div>
              {/* Refunded */}
              <div className="flex w-full flex-col gap-y-[12px] pl-[12px]">
                <p className="text-[12px] font-[400] leading-[29px] text-[#787C83] lg:text-[20px]">
                  Refunded
                </p>
                {/* Value */}
                <div className="flex items-end gap-x-[4px]">
                  <h2 className="text-[16px] font-[600] leading-[57.6px] tracking-[-2%] text-blackPrimary lg:text-[48px]">
                    4
                  </h2>
                  <p className="pb-[8px] text-[10px] font-[400] leading-[19.36px] text-success lg:text-[16px]">
                    +0.00%
                  </p>
                </div>
              </div>
              {/* Cancelled */}
              <div className="flex w-full flex-col gap-y-[12px] pl-[12px]">
                <p className="text-[12px] font-[400] leading-[29px] text-[#787C83] lg:text-[20px]">
                  Cancelled
                </p>
                {/* Value */}
                <div className="fw-full lex items-end gap-x-[4px]">
                  <h2 className="text-[16px] font-[600] leading-[57.6px] tracking-[-2%] text-blackPrimary lg:text-[48px]">
                    12
                  </h2>
                  <p className="pb-[8px] text-[10px] font-[400] leading-[19.36px] text-success lg:text-[16px]">
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
          <Select>
            <SelectTrigger className="h-[36px] w-[181px] self-end rounded-[6px] border-[#8E97A6] px-[8px] py-[12px]">
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
                <SelectLabel>Sort</SelectLabel>
                <SelectItem value="latest">Latest Added</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Orders */}
          {isPending ? (
            <Loader />
          ) : data?.data?.data?.trx.length > 0 ? (
            <div className="flex flex-col gap-y-[16px]">
              <Orders orders={data?.data?.data?.trx} />
              {/* Pagination */}
              <div className="">
                <Pagination
                  totalPages={Math.ceil(data?.data?.data?.trxx / 10)}
                  currentPage={1}
                  onPageChange={(page) => console.log(page)}
                />
              </div>
            </div>
          ) : (
            <p className="text-[12px] font-[400] leading-[20.3px] text-[#787C83]">
              No orders found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

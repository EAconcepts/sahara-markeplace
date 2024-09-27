"use client";

import Loader from "@/app/(components)/loader";
import { Header } from "@/app/dashboard/(components)/header";
import LastUpdated from "@/app/sellers/dashboard/(components)/last-updated";
import Pagination from "@/app/sellers/dashboard/(components)/pagination";
import Orders from "@/app/sellers/dashboard/my-orders/(components)/orders";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGet } from "@/utils/useGet.";
import { ArrowRight01Icon, Calendar03Icon } from "hugeicons-react";

const OrderList = () => {
  const orderStatus = [{}];
  const { data, isPending } = useGet("admin/orders", "adminOrders");
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
              <div className="flex items-center gap-x-[4px] rounded-[8px] border-[1px] border-border px-[12px] py-[6px] lg:gap-x-[8px] lg:py-[8px]">
                <Calendar03Icon className="size-[14px] text-[#8E97A6] lg:size-[16px]" />
                <div className="flex items-center gap-x-[4px]">
                  <span className="text-[12px] font-[400] leading-[20.3px] text-[#8E97A6] lg:text-[14px]">
                    25 May - 24 Jun.
                  </span>
                  <ArrowRight01Icon className="size-[16px] rotate-[-90deg] text-[#8E97A6]" />
                </div>
                {/* <Calendar /> */}
              </div>
            </div>
            <h1 className="text-[32px] font-[700] leading-[46px] tracking-[-2%] text-[#101928] lg:text-[48px] lg:leading-[57.6px]">
              125
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
                <SelectLabel>Latest Added</SelectLabel>
                <SelectItem value="latest">Latest Added</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Orders */}
          {isPending ? (
            <Loader />
          ) : data?.data?.data?.trx.length > 0 || true ? (
            <div className="flex flex-col gap-y-[16px]">
              <Orders orders={data?.data?.data?.trx || [1, 2, 3]} />
              {/* Pagination */}
              <div className="">
                <Pagination
                  currentPage={1}
                  totalPages={3}
                  onPageChange={() => {}}
                  className="justify-end"
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

export default OrderList;

"use client";

import Calendarr from "@/app/(components)/calendar";
import { Header } from "@/app/dashboard/(components)/header";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartLineData02Icon, Search01Icon } from "hugeicons-react";
import CustomerTable from "./(components)/customer-table";
import { useGet } from "@/utils/useGet.";
import Pagination from "@/app/sellers/dashboard/(components)/pagination";

const CustomerMgt = () => {
  const { data: dashbd } = useGet("admin/dashboard", "adminDshbd");
  console.log("dashboard", dashbd);
  return (
    <div className="flex w-full flex-col gap-[32px] py-[16px] font-openSans">
      <Header title="Customer Management" />
      <div className="flex flex-col gap-y-[32px]">
        {/* Growth Report & Geographical Distribution */}
        <div className="flex w-full gap-[16px]">
          {/* Growth Report */}
          <div className="flex w-full flex-col gap-y-[32px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
            {/* Report */}
            <div className="flex flex-col gap-y-[4px]">
              <div className="flex justify-between">
                <h4 className="text-[20px] font-[600] leading-[29px] text-blackPrimary">
                  Growth Report
                </h4>
                <Calendarr />
              </div>
              {/* figure from Previous intake */}
              <div className="flex flex-col px-[26.5px]">
                <h3 className="text-[32px] font-[600] leading-[46.4px] text-blackPrimary">
                  {dashbd?.data?.data?.users?.length}
                </h3>
                <div className="flex items-center gap-[8px]">
                  <div
                    className={`flex items-center gap-[2px] rounded-[4px] border-[1px] border-failure bg-[#E8112D33] px-[12px] py-[4px] text-failure`}
                  >
                    <ChartLineData02Icon className="size-[14px]" />
                    <span className="text-[12px] font-[400] leading-[17.4px]">
                      0%
                    </span>
                  </div>
                  <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                    From previous intake
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Geographical Distribution */}
          <div className="flex w-[379px] shrink-0 flex-col gap-[24px] rounded-[12px] border-[1px] border-border p-[16px]">
            <h3 className="text-[20px] font-[600] leading-[29px] text-black">
              Geographical Distribution
            </h3>
            {/* Map */}
            <div className=""></div>
          </div>
        </div>
        {/* Total Customers */}
        <div className="flex flex-col gap-y-[24px] rounded-[10px] border-[1px] border-border py-[24px]">
          {/* Heading */}
          <div className="flex flex-col gap-y-[16px]">
            <h3 className="w-full border-b-[1px] border-border px-[12px] pb-[8px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
              Total Customers: {dashbd?.data?.data?.users?.length}
            </h3>
            <div className="flex w-full items-center justify-between px-[12px]">
              <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
                Showing{dashbd?.data?.data?.users?.length}result(s)
              </span>
              <form className="flex h-[36px] w-[363px] gap-x-[12px] rounded-[8px] border-[0.5px] px-[12px] py-[8px]">
                <Search01Icon className="size-[16px] text-[#8E97A6]" />
                <Input
                  className="h-full border-none bg-transparent font-inter text-[14px] font-[400] leading-[20.3px] text-[#8E97A6] placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#8E97A6]"
                  placeholder="Search"
                />
              </form>
              <div className="flex items-center gap-x-[8px]">
                <span className="shrink-0 text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
                  Sort by:
                </span>
                <Select>
                  <SelectTrigger className="border-none text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    <SelectValue placeholder="Newest to Olders" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sort</SelectLabel>
                      <SelectItem value="--">---</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="">
            <CustomerTable users={dashbd?.data?.data?.users} />
            {/* Pagination */}
            <div className="">
              <Pagination
                currentPage={1}
                onPageChange={() => {}}
                totalPages={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerMgt;

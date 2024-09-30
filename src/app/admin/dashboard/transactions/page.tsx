"use client";

import Calendarr from "@/app/(components)/calendar";
import { Header } from "@/app/dashboard/(components)/header";
import LastUpdated from "@/app/sellers/dashboard/(components)/last-updated";
import { MasterCardIcon, Search01Icon } from "hugeicons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import masterCard from "@/assets/images/mastercard.svg";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import Pagination from "@/app/sellers/dashboard/(components)/pagination";
import { useGet } from "@/utils/useGet.";

const Transactions = () => {
  const router = useRouter();
  const { data, isPending } = useGet("admin/vendors-subscription", "vendorSub");
  console.log("subscription", data);
  return (
    <div className="mt-[8px] flex w-full flex-col gap-[24px]">
      <LastUpdated />
      <div className="flex w-full flex-col gap-[32px] py-[16px]">
        <Header title={"Transactions"} />

        <div className="flex justify-between">
          <form className="flex h-[36px] w-[363px] items-center rounded-[8px] border-[0.5px] border-[#8E97A6] bg-white px-[12px] py-[8px]">
            <Search01Icon className="size-[16px] text-[#8E97A6]" />
            <input
              type="text"
              className="h-full w-[50%] border-none font-inter text-[14px] leading-[20.3px] text-[#8E97A6] placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#8E97A6]"
              placeholder="Search"
            />
          </form>
          <Calendarr />
        </div>
        <div className="flex w-full flex-col gap-[16px]">
          <table className="mt-[32px] w-full font-openSans">
            <thead className="">
              <tr className="h-[42px] bg-[#E4E7EC] px-[24px] py-[12px] text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
                <th className="px-[24px] text-start">Tx. ID</th>
                <th className="px-[24px] text-start"> Transactions</th>
                <th className="px-[24px] text-start">Created</th>
                <th className="px-[24px] text-start">Method</th>
                <th className="px-[24px] text-start">Amount</th>
                <th className="px[24px] text-start">Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border px-[15px]">
              {data?.data?.data?.users?.subscriptions?.map(
                (product: any, index: number) => (
                  <tr
                    onClick={() =>
                      router.push(`/dashboard/my-orders/SE2392922`)
                    }
                    key={index}
                    className="h-[73px] gap-x-[24px] px-[15px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
                  >
                    {/* Tx ID */}
                    <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                      #166
                    </td>
                    {/* Transactions */}
                    <td className="w-fit px-[24px] text-[14px] font-[400] leading-[16.8px] text-blackPrimary">
                      <div className="flex flex-col gap-[8px]">
                        <span>Store Subscription</span>
                        <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                          Afritique-Benin
                        </span>
                      </div>
                    </td>
                    {/* Date Created*/}
                    <td className="px-[24px]">Jun 20, 2024</td>

                    {/* Method */}
                    <td className="py-[15px] pl-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                      <div className="flex items-center gap-[6px]">
                        <Image
                          src={masterCard}
                          width={38.88}
                          height={24}
                          alt="mastercard"
                          className="h-[24px] w-[38.88px] object-cover"
                        />
                        <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
                          Mastercard
                        </span>
                      </div>
                    </td>
                    {/* Amount */}
                    <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                      $79.99
                    </td>

                    {/* Status */}
                    <td className="pr-[15px]">
                      <div className="flex items-center gap-x-[32px] align-middle">
                        <span className="w-fit shrink-0 rounded-[24px] bg-[#F9E79F66] px-[16px] py-[4px] font-[600]">
                          Paid
                        </span>
                        <div className="flex size-[24px] items-center justify-center rounded-[8px] border-[1px] border-border">
                          <HiOutlineEllipsisVertical className="text-[14px] text-blackPrimary" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
          {data?.data?.data?.users?.subscriptions?.length > 10 && (
            <Pagination
              className="justify-end"
              onPageChange={() => {}}
              totalPages={3}
              currentPage={1}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;

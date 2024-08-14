"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

const OrderHistory = ({ orders }: { orders: any }) => {
  const router = useRouter();
  return (
    <div className="font-openSans">
      <table className="mt-[32px] w-full font-openSans">
        <thead className="">
          <tr className="h-[42px] bg-[#E4E7EC] px-[24px] py-[12px] text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            <th className="px-[24px] text-start">Product Name</th>
            <th className="px[24px] text-start"> Order ID</th>
            <th className="px[24px]">Quantity</th>
            <th className="text-start">Status</th>
            <th className="text-start">Date</th>
            <th className="px[24px] text-start">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border px-[15px]">
          {orders &&
            orders?.slice(0, 3).map((product: any, index: number) => (
              <tr
                onClick={() => router.push(`/dashboard/my-orders/SE2392922`)}
                key={index}
                className="h-[58px] gap-x-[24px] px-[15px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
              >
                {/* Priduct name */}
                <td className="w-fit px-[24px] text-[14px] font-[400] leading-[16.8px] text-blackPrimary">
                  <div className="flex flex-col">
                    <span>Ensemble Veste Pantalon</span>
                    <span className="text-[#787C83] text-[12px] font-[400] leading-[17.4px]">Women&apos;s Wear - Fashion</span>
                  </div>
                </td>

                {/* Order ID */}
                <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                  #SE2024003
                </td>
                {/* quantity */}
                <td className="py-[15px] pl-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                  2
                </td>
                {/* Status */}
                <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                  Paid
                </td>
                {/* Date */}
                <td className="px-[24px]">Jun 20, 2024</td>
                {/* Status */}
                <td className="pr-[15px]">
                  <div className="flex items-center gap-x-[32px] align-middle">
                    <span className="w-fit shrink-0 rounded-[24px] bg-[#F9E79F66] px-[16px] py-[4px] font-[600]">
                      Unfufilled
                    </span>
                    <div className="flex size-[24px] items-center justify-center rounded-[8px] border-[1px] border-border">
                      <HiOutlineEllipsisVertical className="text-[14px] text-blackPrimary" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;

import { Input } from "@/components/ui/input";
import React from "react";

const OrderUpdates = () => {
  return (
    <div className="flex w-full flex-col gap-[24px] rounded-[10px] border-[1px] border-border py-[16px]">
      <h3 className="px-[12px] text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
        Updates:
      </h3>
      <table className="table">
        <thead>
          <tr className="bg-[#E4E7EC] px-[24px] py-[12px] text-[12px] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            <th>Date</th>
            <th>Location</th>
            <th>Event</th>
            <th></th>
            <th>Reminder</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 4, 3].map((update, index) => (
            <tr key={index} className="h-[100px] border-b-[1px] border-border">
              <td className="px-[24px] items-center self-center">10th Jun. 2024</td>
              <td className="px-[24px] items-center self-center">Georgetown</td>
              <td className="px-[24px] items-center self-center">Ordered</td>
              <td className="px-[24px] items-center self-center">
                <Input type="checkbox" className="size-[40px]" />
              </td>
              <td className="px-[24px] items-center self-center">
                <button className="text-[14px] underline font-[400] leading-[20.3px] text-[#7D9A37]">
                  Send Message
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderUpdates;

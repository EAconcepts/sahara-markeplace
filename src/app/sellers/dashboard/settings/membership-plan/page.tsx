'use client'

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckmarkCircle03Icon } from "hugeicons-react";

const MembershipPlan = () => {
  const benefits = [
    "Access to participate in the Global and Local Selling program for wider reach.",
    "Access to various tools to enhance your brand presence.",
    "Ability to set your own shipping rates based on your shipping policy.",
    "Utilize business reports to track sales, inventory, and orders.",
    "Dedicated seller support.",
  ];
  return (
    <div className="roudned-[10px] flex flex-col gap-[32px] px-[24px] py-[28px] font-openSans">
      {/* Current Plan */}
      <div className="flex flex-col gap-y-[8px]">
        <p className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Current Subscription Plan
        </p>
        <Select>
          <SelectTrigger className="h-[44px] w-full rounded-[6px] border-[1px] border-border">
            <SelectValue placeholder="Individual Selling Plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* Subscription Benefits */}
      <div className="flex flex-col gap-y-[40px]">
        {/* Price */}
        <div className="flex flex-col gap-y-[24px]">
          <div className="flex flex-col gap-y-[8px]">
            <h6 className="text-[16px] font-[600] leading-[23.2px] text-[#101928]">
              Subscription Benefits
            </h6>
            <p className="text-[14px] font-[400] leading-[20.3px] text-[#8E97A6]">
              Express your creativity, Become an Eagle seller and share your
              story. Cancel anytime.
            </p>
          </div>
          Price
          <div className="flex items-baseline">
            <h2 className="text-[36px] font-[700] leading-[52.2px] text-[#000000]">
              $0.85
            </h2>
            <span className="text-[14px] font-[400] leading-[20.3px] text-[#000000]">
              /per sale
            </span>
          </div>
        </div>
        {/* Benefits */}
        <div className="flex flex-col gap-y-[24px]">
          {benefits?.map((benefit, index) => (
            <div className="flex gap-x-[12px]" key={index}>
              <CheckmarkCircle03Icon className="size-[24px] text-greenPrimary" />
              <p className="text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-blackPrimary">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[8px] flex flex-col gap-y-[12px]">
        <Button className="rounded-[8px] bg-[#E4E7EC] px-[24px] py-[8px] text-[14px] w-fit font-[600] leading-[20.3px] text-[#8E97A6]">
          Save Changes
        </Button>
        <Button className="rounded-[8px] bg-[#E8112D33] px-[24px] py-[8px] text-[14px] w-fit font-[600] leading-[20.3px] text-[#E8112D]">
          Cancel Subscription
        </Button>
      </div>
    </div>
  );
};

export default MembershipPlan;

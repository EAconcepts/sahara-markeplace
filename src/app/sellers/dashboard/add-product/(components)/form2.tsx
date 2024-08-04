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
import { AddCircleIcon } from "hugeicons-react";
import React from "react";

const Form2 = () => {
  return (
    <div className="w-full gap-y-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px] font-openSans">
      {/* Variation */}
      <div className="flex w-full flex-col gap-y-[24px]">
        <div className="flex w-full flex-col gap-y-[16px]">
          {/* Variation */}
          <div className="flex flex-col gap-y-[8px]">
            <div className="flex justify-between">
              <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Variation
              </h6>
              <AddCircleIcon className="size-[20px] text-greenPrimary" />
            </div>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="--Select--" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Options / Additional Price /  */}
          <div className="grid w-full grid-cols-3 gap-x-[16px]">
            <div className="flex w-fit flex-col gap-x-[8px]">
              <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Options
              </h6>
              <Input type="text" placeholder="Options" className="w-[127px]" />
            </div>
            {/* Additional price */}
            <div className="flex w-full gap-x-[16px]">
              <div className="flex w-full flex-col gap-x-[8px] ">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Additional Price
                </h6>
                <Input type="text" placeholder="0.00" className="w-full" />
              </div>
            </div>
            {/* USD */}
            <div className="flex w-fit flex-col justify-end gap-x-[8px]">
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* Add Another option */}
        <div className="flex h-[44px] w-full items-center justify-center gap-y-[12px] rounded-[6px] border-[1px] border-dashed border-[#8E97A6] p-[12px]">
          <span className="text-center text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
            Add Another Option
          </span>
        </div>
        {/* Shipping & Delivery */}
        <div className="flex w-full flex-col gap-y-[12px]">
          <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Shipping and Delivery
          </h6>
          <div className="flex w-full gap-[16px]">
            {/* Package & weight */}
            <div className="flex w-full flex-col gap-y-[8px]">
              <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Package Weight
              </h6>
              <Input
                type="text"
                placeholder="package weight"
                className="w-full"
              />
            </div>
            <div className="self-end">
              {/* kg */}
              <Select>
                <SelectTrigger className="h-[44px] w-[120px]">
                  <SelectValue placeholder="kg" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Shipping fee */}
          <div className="flex w-full gap-[16px]">
            {/*Shipping */}
            <div className="flex w-full flex-col gap-y-[8px]">
              <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Shipping Fee
              </h6>
              <Input type="text" placeholder="0.00" className="w-full" />
            </div>
            {/* Currency */}
            <div className="self-end">
              {/* USD */}
              <Select>
                <SelectTrigger className="h-[44px] w-[120px]">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* Price, discount */}
        <div className="grid grid-cols-3 gap-[12px]">
          {/* Price */}
          <div className="flex w-full flex-col gap-y-[8px]">
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Price
            </h6>
            <Input type="text" placeholder="0.00" className="w-full" />
          </div>
          {/* Currency */}
          <div className="self-end">
            {/* USD */}
            <Select>
              <SelectTrigger className="h-[44px] w-[120px]">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Discount */}
          <div className="flex w-full flex-col gap-y-[8px]">
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Discount
            </h6>
            <Select>
              <SelectTrigger className="h-[44px] w-[120px]">
                <SelectValue placeholder="---" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Quantity Discount */}
        <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Quantity Discount
        </h6>
        <div className="flex flex-col gap-y-[16px]">
          {/* Quantity */}
          <div className="flex w-full flex-col gap-y-[8px]">
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Quantity
            </h6>
            <Input type="text" placeholder="quantity" className="w-full" />
          </div>
          {/* Dicount Price */}
          <div className="flex justify-between gap-x-[16px]">
            <div className="flex w-full flex-col gap-y-[8px]">
              <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Discount Price
              </h6>
              <Input type="number" placeholder="0.00" className="w-full" />
            </div>
            {/* Discount */}
            <div className="self-end">
              <Select>
                <SelectTrigger className="h-[44px] w-[120px]">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;

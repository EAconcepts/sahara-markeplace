'use client'


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
import { Cancel01Icon, Delete03Icon } from "hugeicons-react";
import React from "react";

const Form2 = ({product}:{product:any}) => {
  return (
    <div className="flex w-full flex-col gap-y-[24px] h-full rounded-[12px] border-[1px] border-border px-[16px] py-[24px] font-openSans">
      <div className="flex flex-col gap-y-[16px]">
        {/* Variation */}
        <div className="flex flex-col gap-y-[8px]">
          <h6 className="font-openSans text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Variation
          </h6>
          <div className="relative">
            <Input
              type="text"
              className="rounded-[6px] border-border p-[12px]"
              placeholder="Size"
            />
            <Cancel01Icon className="absolute right-[12px] top-[-50%] translate-y-[50%] size-[20px] text-[#8E97A6]" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-[16px]">
            <h6 className="w-[127px] text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Options
            </h6>
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Additional Price
            </h6>
          </div>
          {/* Size */}
          <div className="flex flex-col gap-y-[16px] max-lg:mt-[12px]">
            {["S", "M", "L", "XL", "XXL", "2XL", "3XL"].map((size, index) => (
              <div className="flex max-lg:justify-between gap-x-[16px]" key={index}>
                <p className="h-[44px] lg:w-[127px] rounded-[6px] border-[1px] border-border p-[12px]">
                  {size}
                </p>
                <Input
                  type="number"
                  className="lg:w-[194px] max-lg:w-[80px] border-[1px] border-border p-[12px]"
                  placeholder="8.00"
                />
                <Select>
                  <SelectTrigger className="max-lg:w-[80px] max-lg:text-[12px]">
                    <SelectValue placeholder="USD" className="max-lg:text-[12px]" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Delete03Icon className="lg:h-[32.67px] max-lg:size-[16px] lg:w-[19px] text-[#E8112D]" />
              </div>
            ))}
          </div>
          {/* Color */}
          <div className="flex flex-col gap-y-[16px] max-lg:mt-[12px]">
            <div className="relative h-[44px] max-lg:flex max-lg:justify-between w-full rounded-[6px] p-[12px]">
              <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                Color
              </span>
              <Cancel01Icon className="lg:absolute right-[12px] top-[-12px] size-[20px] text-[#8E97A6]" />
            </div>
            {/* Colors */}
            <div className="grid grid-cols-3 gap-[16px]">
              {/*color Option */}
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Options
                </h6>
                <Input
                  type="text"
                  className="w-[194px] rounded-[6px] border-[1px] p-[12px]"
                  placeholder="Gold"
                />
                <Delete03Icon className="h-[32.67px] w-[19px] text-[#E8112D]" />
              </div>
              {/* price */}
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Options
                </h6>
                <Input
                  type="text"
                  className="w-[194px] rounded-[6px] border-[1px] p-[12px]"
                  placeholder="Red"
                />
                <Delete03Icon className="h-[32.67px] w-[19px] text-[#E8112D]" />
              </div>
            </div>
          </div>
          {/* Shipping & Delivery */}
          <div className="flex flex-col gap-y-[8px]">
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Shipping and Delivery
            </h6>
            <div className="flex flex-col gap-y-[16px]">
              <div className="grid grid-cols-2 gap-x-[16px]">
                <div className="flex flex-col gap-y-[8px]">
                  <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Package Weight
                  </h6>
                  <Input
                    type="number"
                    placeholder="2"
                    className="w-full rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
                  />
                </div>
                <Select>
                  <SelectTrigger className="h-[44px] w-[120px] self-end rounded-[6px] border-[1px] border-border">
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
            <div className="flex flex-col gap-y-[16px]">
              <div className="grid grid-cols-2 gap-x-[16px]">
                <div className="flex flex-col gap-y-[8px]">
                  <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Shipping Fee
                  </h6>
                  <Input
                    type="number"
                    placeholder="9.99"
                    className="w-full rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
                  />
                </div>
                <Select>
                  <SelectTrigger className="h-[44px] w-[120px] self-end rounded-[6px] border-[1px] border-border">
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
          {/* Price & Discount */}
          <div className="flex flex-col gap-y-[12px]">
            {/* price & Discount */}
            <div className="grid grid-cols-3 gap-x-[16px]">
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Price
                </h6>
                <Input
                  type="number"
                  className="rounded-[6px] border-[1px] border-border p-[12px]"
                  placeholder="103.99"
                />
              </div>
              {/* Currency */}
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"></h6>
                <Select>
                  <SelectTrigger className="h-[44px] w-[120px] rounded-[6px] border-[1px] border-border">
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
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Discount
                </h6>
                <Input
                  type="number"
                  className="rounded-[6px] border-[1px] border-border p-[12px]"
                  placeholder="--"
                />
              </div>
            </div>
            {/* Quantity discount price */}
            <div className="grid grid-cols-2 gap-x-[16px]">
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Quantity Discount Price (over 5 items)
                </h6>
                <Input
                  type="number"
                  className="rounded-[6px] border-[1px] border-border p-[12px]"
                  placeholder="95.99"
                />
              </div>
              {/* Currency */}
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"></h6>
                <Select>
                  <SelectTrigger className="h-[44px] w-[120px] rounded-[6px] border-[1px] border-border">
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
    </div>
  );
};

export default Form2;

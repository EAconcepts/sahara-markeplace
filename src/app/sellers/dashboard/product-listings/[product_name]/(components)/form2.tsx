"use client";

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
import React, { ChangeEvent, Dispatch } from "react";

const Form2 = ({
  product,
  setPrdtDetails,
  prdtDetails,
  handleChange,
}: {
  product: any;
  prdtDetails: any;
  setPrdtDetails: Dispatch<any>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex h-full w-full flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px] font-openSans">
      <div className="flex flex-col gap-y-[16px] lg:w-full">
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
            <Cancel01Icon className="absolute right-[12px] top-[14px] size-[20px] text-[#8E97A6] lg:top-[-50%] lg:translate-y-[50%]" />
          </div>
        </div>
        <div className="flex flex-col lg:w-full lg:gap-y-[24px]">
          {/* NOT IMPLEMENTED */}
          <div className="lex hidden gap-x-[16px]">
            <h6 className="w-[127px] text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Options
            </h6>
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Additional Price
            </h6>
          </div>
          {/* Size */}
          {/* YET TO BE IMPLEMENTED */}
          <div className="lex hidden flex-col gap-y-[16px] max-lg:mt-[12px]">
            {["S", "M", "L", "XL", "XXL", "2XL", "3XL"].map((size, index) => (
              <div
                className="flex gap-x-[16px] max-lg:justify-between"
                key={index}
              >
                <p className="h-[44px] rounded-[6px] border-[1px] border-border p-[12px] lg:w-[127px]">
                  {size}
                </p>
                <Input
                  type="number"
                  className="border-[1px] border-border p-[12px] max-lg:w-[80px] lg:w-[194px]"
                  placeholder="8.00"
                />
                <Select>
                  <SelectTrigger className="max-lg:w-[80px] max-lg:text-[12px]">
                    <SelectValue
                      placeholder="USD"
                      className="max-lg:text-[12px]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>---</SelectLabel>
                      <SelectItem value="---">---</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Delete03Icon className="text-[#E8112D] max-lg:size-[16px] lg:h-[32.67px] lg:w-[19px]" />
              </div>
            ))}
          </div>
          {/* YET TO BE IMPLEMENTED */}
          {/* Color */}
          <div className="lex hidden flex-col gap-y-[16px] max-lg:mt-[12px]">
            <div className="relative h-[44px] w-full rounded-[6px] p-[12px] max-lg:flex max-lg:justify-between">
              <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                Color
              </span>
              <Cancel01Icon className="right-[12px] top-[-12px] size-[20px] text-[#8E97A6] lg:absolute" />
            </div>
            {/* Colors */}
            <div className="grid grid-cols-3 gap-[16px] max-lg:hidden">
              {/*color Option */}
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Options
                </h6>
                <Input
                  type="text"
                  className="rounded-[6px] border-[1px] p-[12px] lg:w-[194px]"
                  placeholder="Gold"
                />
                <Delete03Icon className="h-[32.67px] w-[19px] text-[#E8112D]" />
              </div>
              {/* options */}
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Options
                </h6>
                <Input
                  type="text"
                  className="rounded-[6px] border-[1px] p-[12px] lg:w-[194px]"
                  placeholder="Red"
                />
                <Delete03Icon className="h-[32.67px] w-[19px] text-[#E8112D]" />
              </div>
            </div>
          </div>
          {/* Shipping & Delivery */}
          <div className="flex flex-col gap-y-[8px] lg:w-full lg:gap-[16px]">
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Shipping and Delivery
            </h6>
            <div className="flex flex-col gap-y-[16px] lg:w-full">
              <div className="grid grid-cols-2 gap-x-[16px] lg:w-full lg:grid-cols-[calc(70%-16px)_30%]">
                <div className="flex flex-col gap-y-[8px] lg:w-[100%] lg:shrink-0">
                  <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Package Weight
                  </h6>
                  <Input
                    type="number"
                    placeholder="2"
                    className="w-full rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary lg:shrink-0"
                  />
                </div>
                <Select>
                  <SelectTrigger className="border[1px] h-[44px] w-[120px] self-end rounded-[6px] border-border lg:w-full">
                    <SelectValue placeholder="kg" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Weight</SelectLabel>
                      <SelectItem value="kg">KG</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Shipping fee */}
            <div className="flex flex-col gap-y-[16px]">
              <div className="grid grid-cols-2 gap-x-[16px] lg:grid-cols-[calc(70%-16px)_30%]">
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
                  <SelectTrigger className="h-[44px] w-[120px] self-end rounded-[6px] border-[1px] border-border lg:w-full">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Currency</SelectLabel>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="ngn">NGN</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {/* Price & Discount */}
          <div className="flex flex-col gap-y-[12px] lg:w-full lg:gap-[16px]">
            {/* price & Discount */}
            <div className="max-lg grid grid-cols-3 gap-x-[16px] max-lg:mt-[8px]">
              {/* Price */}
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Price
                </h6>
                <Input
                  type="number"
                  name={"price"}
                  value={prdtDetails?.price}
                  onChange={handleChange}
                  className="rounded-[6px] border-[1px] border-border p-[12px]"
                  // placeholder="103.99"
                />
              </div>
              {/* Currency */}
              <div className="flex flex-col gap-y-[8px] self-end lg:w-full">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"></h6>
                <Select>
                  <SelectTrigger className="h-[44px] rounded-[6px] border-[1px] border-border lg:w-full">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>currency</SelectLabel>
                      <SelectItem value="usd">USD</SelectItem>
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
            <div className="grid grid-cols-2 gap-x-[16px] max-lg:hidden lg:w-full lg:grid-cols-[calc(70%-16px)_30%]">
              <div className="flex flex-col gap-y-[8px]">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Quantity Discount Price (over 5 items)
                </h6>
                <Input
                  type="number"
                  className="rounded-[6px] border-[1px] border-border p-[12px] lg:w-full"
                  placeholder="0.00"
                />
              </div>
              {/* Currency */}
              <div className="flex flex-col gap-y-[8px] lg:self-end">
                <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"></h6>
                <Select>
                  <SelectTrigger className="h-[44px] w-[120px] rounded-[6px] border-[1px] border-border lg:w-full">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Currency</SelectLabel>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="ngn">NGN</SelectItem>
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

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
import { CloudUploadIcon } from "hugeicons-react";
import React from "react";

const Form1 = () => {
  return (
    <div className="flex w-full flex-col gap-y-[24px]">
      {/* product Image */}
      <div className="flex flex-col gap-y-[16px] rounded-[12px] border-[1px] border-border p-[16px]">
        <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Product Image
        </h5>
        <div className="flex h-[192px] w-[132px] flex-col items-center justify-center gap-y-[16px] rounded-[8px] border-[1px] border-dashed border-[#8E97A6] bg-[#E4E7EC] px-[8px]">
          <div className="flex flex-col items-center gap-y-[8px]">
            <CloudUploadIcon className="text-[20px] text-[#787C83]" />
            <h4 className="text-center text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
              Upload
            </h4>
            <p className="text-center text-[10px] font-[600] leading-[14.5px] text-[#787C83]">
              png. or jpeg./mp4. or mp3.
            </p>
          </div>
        </div>
      </div>
      <div className="gap-y-[8px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
        <div className="flex flex-col gap-y-[24px]">
          {/* Product Title */}
          <div className="flex flex-col gap-y-[8px]">
            <h3 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Product Title
            </h3>
            <Input
              type="text"
              placeholder="Product title"
              className="rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
            />
          </div>
          {/* Product Description */}
          <div className="flex flex-col gap-y-[8px]">
            <h3 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Product Description
            </h3>
            <textarea
              placeholder="Product Description"
              className="rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
            />
          </div>
          {/* Material */}
          <div className="flex flex-col gap-y-[8px]">
            <h3 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Material
            </h3>
            <Input
              type="text"
              placeholder="Product Material"
              className="rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
            />
          </div>
          {/* Category & Sub-category */}
          <div className="flex justify-between gap-x-[24px]">
            {/* Category */}
            <div className="w-full flex flex-col">
              <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Product Category
              </h4>
              <Select>
                <SelectTrigger className="w-full">
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
            {/* Sub-Category */}
            <div className="w-full flex flex-col">
              <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Product Category
              </h4>
              <Select>
                <SelectTrigger className="w-full">
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
          </div>
          {/* Tags */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Tags
            </h4>
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
          {/* Registry */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Registry
            </h4>
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
          {/* Quantity & Availability */}
          <div className="w-full flex justify-between gap-x-[32px]">
            {/* Quantity */}
            <div className="w-full flex flex-col gap-y-[8px]">
              <h3 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Quantity
              </h3>
              <Input
                type="text"
                placeholder="Product title"
                className="rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
              />
            </div>
            {/* Availability */}
            <div className="w-full flex flex-col gap-y-[8px]">
              <h3 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Availability
              </h3>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="--In-Stock--" />
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

export default Form1;

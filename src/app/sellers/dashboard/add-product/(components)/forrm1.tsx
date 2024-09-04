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
import { CloudUploadIcon } from "hugeicons-react";
import Image from "next/image";
import React, { ChangeEvent, Dispatch, useRef, useState } from "react";

const Form1 = ({
  prdtDetails,
  setPrdtDetails,
  handleChange,
  formdata
}: {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setPrdtDetails?: Dispatch<any>;
  prdtDetails: any;
  formdata?:any
}) => {
  const [image, setImage] = useState<string>("");
  const imageRef = useRef<any>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log(file);
    // const formdata = new FormData();
   setPrdtDetails && setPrdtDetails((prev:any)=>({...prev, image:file}))
    file && formdata.append("image", file);

    const imageUrl = file && URL.createObjectURL(file);
    console.log(imageUrl);
    imageUrl && setImage(imageUrl);
  };
  const handleUpload = () => {
    imageRef && imageRef.current?.click();
  };

  return (
    <div className="flex w-full flex-col gap-y-[24px]">
      {/* product Image */}
      <div className="flex flex-col gap-y-[16px] rounded-[12px] border-[1px] border-border p-[16px]">
        <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Product Image
        </h5>
        {image ? (
          <Image
            onClick={handleUpload}
            src={image}
            width={132}
            height={192}
            alt="product-image"
            className="w-[132px] object-cover max-lg:h-[139px] lg:h-[192px]"
          />
        ) : (
          <div
            onClick={handleUpload}
            className="flex h-[192px] w-[132px] flex-col items-center justify-center gap-y-[16px] rounded-[8px] border-[1px] border-dashed border-[#8E97A6] bg-[#E4E7EC] px-[8px]"
          >
            <div className="flex flex-col items-center gap-y-[8px]">
              <input
                type="file"
                onChange={handleImageUpload}
                hidden
                ref={imageRef}
              />
              <CloudUploadIcon className="max-lg:size-[20px] lg:text-[20px] text-[#787C83]" />
              <h4 className="text-center text-[12px] lg:text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                Upload
              </h4>
              <p className="text-center text-[10px] font-[600] leading-[14.5px] text-[#787C83]">
                png. or jpeg./mp4. or mp3.
              </p>
            </div>
          </div>
        )}
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
              name={"name"}
              value={prdtDetails.name}
              onChange={handleChange}
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
              name={"description"}
              value={prdtDetails.description}
              onChange={(e) =>
                setPrdtDetails &&
                setPrdtDetails((prev: any) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
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
            <div className="flex w-full flex-col">
              <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Product Category
              </h4>
              <Input
                type="text"
                name="category"
                value={prdtDetails.category}
                onChange={handleChange}
                placeholder="Product Material"
                className="rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
              />
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="--Select--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
            </div>
            {/* Sub-Category */}
            <div className="flex w-full flex-col">
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
          <div className="flex w-full justify-between gap-x-[32px]">
            {/* Quantity */}
            <div className="flex w-full flex-col gap-y-[8px]">
              <h3 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Quantity
              </h3>
              <Input
                type="number"
                name="quantity"
                onChange={handleChange}
                value={prdtDetails.quantity}
                placeholder="Product title"
                className="rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
              />
            </div>
            {/* Availability */}
            <div className="flex w-full flex-col gap-y-[8px]">
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

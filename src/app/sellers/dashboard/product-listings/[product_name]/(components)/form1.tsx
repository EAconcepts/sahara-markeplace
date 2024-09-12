"use client";

import { Input } from "@/components/ui/input";
import { Cancel01Icon, CloudUploadIcon, Delete03Icon, PencilEdit01Icon } from "hugeicons-react";
import Image from "next/image";
import React, { ChangeEvent, Dispatch, useRef, useState } from "react";
import img1 from "@/assets/images/seller-details1.png";
import img2 from "@/assets/images/sellers-details2.png";

const Form1 = ({ product,setPrdtDetails, prdtDetails, handleChange }: { prdtDetails:any; product: any;setPrdtDetails: Dispatch<any>; handleChange:(e:ChangeEvent<HTMLInputElement>) => void }) => {
  const [image, setImage] = useState<string>("");
  const imageRef = useRef<any>(null);
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    // console.log(file);
    setPrdtDetails && setPrdtDetails((prev:any)=>({...prev, image:file}))
    const imageUrl = file && URL.createObjectURL(file);
    console.log(imageUrl);
    imageUrl && setImage(imageUrl);
  };
  const handleUpload = () => {
    imageRef && imageRef.current?.click();
  };
  // console.log(imgBaseUrl)
  return (
    <div className="flex h-full w-full flex-col gap-[24px] pb-[24px]">
      {/* Images */}
      <div className="flex flex-col gap-y-[16px] rounded-[12px] border-[1px] border-border p-[16px]">
        <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
          Product Image
        </h5>
        {/* Image */}
        <div className="flex w-full flex-wrap gap-[16px]">
          <div
            className="relative"
          >
            {product?.image ?
              <>
                <Image
                onClick={handleUpload}
                  src={`${imgBaseUrl}/${product?.image} `}
                  width={132}
                  height={192}
                  alt={product?.name || prdtDetails.name}
                  className="h-[192px] w-[132px] object-cover rounded-[8px] border-[1px] border-dashed border-border"
                />
                <Delete03Icon onClick={()=>setImage("")} className="absolute bottom-[8px] right-[8px] size-[16px] text-[#E8112D]" />
              </>
              : image && <>
              <Image
              onClick={handleUpload}
                src={image }
                width={132}
                height={192}
                alt={product?.name || prdtDetails.name}
                className="h-[192px] w-[132px] object-cover rounded-[8px] border-[1px] border-dashed border-border"
              />
              <Delete03Icon onClick={()=>setImage("")} className="absolute bottom-[8px] right-[8px] size-[16px] text-[#E8112D]" />
            </>
             } 
          </div>
          {/* new image */}
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
          {/* ))} */}
        </div>
      </div>
      {/* Desc */}
      <div className="flex flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
        {/* Title */}
        <div className="flex flex-col gap-y-[12px] lg:gap-y-[24px]">
          <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Product Title
          </h5>
          <Input
            type="text"
            name={'name'}
            placeholder={product?.name}
            value={prdtDetails.name || product?.name}
            onChange={handleChange}
            required
            className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          />
        </div>
        {/* Description */}
        <div className="flex flex-col gap-y-[12px] lg:gap-y-[24px]">
          <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Product Description
          </h5>
          <textarea
            placeholder={product?.description}
            name={"description"}
            onChange={(e)=>setPrdtDetails((prev:any)=>({...prev, description: e.target.value}))}
            value={prdtDetails.description || product?.description}
            className="h-[] p-[8px] border-[1px] border-border rounded-[12px] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          />
        </div>
        {/* MAterial  */}
        {product?.material &&
        <div className="flex flex-col gap-y-[12px] lg:gap-y-[24px]">
          <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Material
          </h5>
          <Input
            type="text"
            placeholder="Mousseline, Silk"
            className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          />
        </div>
}
        {/* Category & Sub */}
        <div className="flex w-full items-center justify-between gap-[24px]">
          <div className="flex w-full flex-col gap-y-[12px] lg:gap-y-[24px]">
            <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Product Category
            </h5>
            <Input
              type="text"
              onChange={handleChange}
              name={'category'}
              value={prdtDetails?.category || product?.category}
              placeholder={product?.category}
              className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            />
          </div>
          {/* Sub Category */}
          {/* {product?.sub_category && */}
          <div className="flex w-full flex-col justify-center gap-y-[12px] lg:gap-y-[24px]">
            <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Sub Category
            </h5>
            <Input
              type="text"
              placeholder=""
              className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            />
          </div>
{/* } */}
        </div>
        {/* Tags */}
        {product?.tags &&
        <div className="flex flex-col gap-y-[8px]">
          <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Tags
          </h5>
          <div className="flex gap-x-[12px] max-lg:flex-wrap max-lg:gap-x-[12px] lg:justify-between">
            {[1, 2, 3].map((tag, index) => (
              <div
                key={index}
                className="max-lg-[111.35px] flex h-[44px] justify-between gap-y-[12px] rounded-[6px] border-[1px] p-[12px] lg:min-w-[141.35px]"
              >
                <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                  Plus-Size
                </span>
                <Cancel01Icon className="size-[20px] text-[#8E97A6]" />
              </div>
            ))}
          </div>
        </div>
}
        {/* Registry */}
        {product?.registry &&
        <div className="flex flex-col gap-y-[8px]">
          <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Registry
          </h5>
          <div className="flex max-w-full flex-wrap justify-between gap-x-[12px] gap-y-[8px]">
            {[1, 2, 3, 4].map((tag, index) => (
              <div
                key={index}
                className="flex h-[44px] w-[218.35px] shrink-0 justify-between rounded-[6px] border-[1px] p-[12px]"
              >
                <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                  Wedding Attire
                </span>
                <Cancel01Icon className="size-[20px] text-[#8E97A6]" />
              </div>
            ))}
          </div>
        </div>
}
        {/* Quantity & Availability */}
        <div className="flex it justify-between gap-[24px]">
          {/* {product?.quantity && */}
          <div className="flex w-full flex-col gap-y-[12px] lg:gap-y-[24px]">
            <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Quantity
            </h5>
            <Input
              type="number"
              name={"quantity"}
              placeholder={''}
              onChange={handleChange}
              value={prdtDetails?.quantity || product?.quantity }
              className="h-[] w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            />
          </div>
{/* } */}
          {/* Availabilty*/}
          <div className="flex w-full flex-col gap-y-[12px] lg:gap-y-[24px]">
            <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Availability
            </h5>
            <div className="relative">
              <Input
                type="text"
                placeholder="In-Stock"
                className="h-full w-full text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
              />
              <div className="absolute right-[12px] top-[50%] flex translate-y-[-50%] items-center gap-x-[2px]">
                <PencilEdit01Icon className="size-[16px text-greenPrimary" />
                <span className="text-[12px] font-[600] leading-[17.4px] text-greenPrimary">
                  Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;

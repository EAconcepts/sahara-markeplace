import React from "react";
import ProductHeader from "./product-header";
import Image from "next/image";
import Rating from "./rating";
import testimony from "@/assets/images/testimony.png";
import quote from "@/assets/images/quote.svg";

const Testimonies = () => {
  return (
    <div className="w-full">
      <ProductHeader heading="Testimonies" showBtn={false} />
      <div className="mt-[32px] flex w-full flex-col">
        <div className="h-[4px] w-[40px] rounded-[24px] bg-[#A27A4D]"></div>
        <div className="flex w-full gap-x-[24px]">
          {/* Picture Card */}
          <div className="mt-[12px] flex shrink-0 rounded-[8px] font-openSans">
            <Image
              src={testimony}
              width={270}
              height={180}
              alt=""
              className="rounded-y-[8px] lg:h-[180px] lg:w-[270px]"
            />
            <div className="flex flex-col justify-center bg-[#7D9A37] pl-[24px] pr-[85px]">
              <h6 className="font-openSans text-[18px] font-[600] leading-[26.1px] text-white">
                Chloe Fletcher
              </h6>
              <small className="text-[12px] font-[400] leading-[17.4px] text-white">
                Dallas, Texas
              </small>
              <Rating showRatingValue={false} />
            </div>
          </div>
          {/* Testimony */}
          <div className="flex-col overflow-hidden">
            <div className="flex gap-[12px]">
              <Image
                src={quote}
                width={42}
                height={47}
                alt="quote"
                className="self-start lg:h-[47px] lg:w-[42px]"
              />
              <h6 className="self-end font-playfair text-[24px] font-[600] leading-[34.8px] text-blackPrimary">
                Smooth and Amazing Experience
              </h6>
            </div>
            <div className="mt-[24px] flex flex-col gap-[12px] font-openSans">
              <p className="font-openSans text-[16px] font-[400] leading-[23.2px] text-blackPrimary">
                I&apos;ve had a smooth and amazing experience shopping on Sahara
                Eagles. Delivery is always smooth and I don&apos;t have to worry
                about purchased items getting missing. I get updates as items
                move around.
              </p>
              <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                Jun 17, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

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
        <div className="h-[4px] max-lg:w-[64px] lg:w-[40px] rounded-[24px] bg-[#A27A4D]"></div>
        <div className="flex max-lg:flex-col w-full gap-x-[24px]">
          {/* Picture Card */}
          <div className="mt-[12px] max-lg:w-full  flex shrink-0 rounded-[8px] font-openSans">
            <Image
              src={testimony}
              width={270}
              height={180}
              alt=""
              className="rounded-y-[8px] lg:h-[180px] lg:w-[270px] max-lg:w-[40%]"
            />
            <div className="flex flex-col max-lg:w-full rounded-r-[8px] justify-center bg-[#7D9A37] pl-[24px] lg:pr-[85px]">
              <h6 className="font-openSans max-lg:shrink-0 text-nowrap text-[14px] leading-[20.3px] lg:text-[18px] font-[600] lg:leading-[26.1px] text-white">
                Chloe Fletcher
              </h6>
              <small className="text-[10px] lg:leading-[14.5px] lg:text-[12px] font-[400] leading-[17.4px] text-white">
                Dallas, Texas
              </small>
              <Rating showRatingValue={false} />
            </div>
          </div>
          {/* Testimony */}
          <div className="flex-col overflow-hidden">
            <div className="flex gap-[4px] lg:gap-[12px]">
              <Image
                src={quote}
                width={42}
                height={47}
                alt="quote"
                className="self-start h-[31px] w-[23px] lg:h-[47px] lg:w-[42px]"
              />
              <h6 className="self-end font-playfair text-[16px] leading-[23.2px] lg:text-[24px] font-[600] lg:leading-[34.8px] text-blackPrimary">
                Smooth and Amazing Experience
              </h6>
            </div>
            <div className="mt-[24px] flex flex-col gap-[12px] font-openSans">
              <p className="font-openSans text-[14px] leading-[20.3px] lg:text-[16px] font-[400] lg:leading-[23.2px] text-blackPrimary">
                I&apos;ve had a smooth and amazing experience shopping on Sahara
                Eagles. Delivery is always smooth and I don&apos;t have to worry
                about purchased items getting missing. I get updates as items
                move around.
              </p>
              <p className="text-[10px] leading-[14.5px] lg:text-[14px] font-[400] lg:leading-[20.3px] text-blackPrimary">
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

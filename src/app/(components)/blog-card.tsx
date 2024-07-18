import Image from "next/image";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const BlogCard = ({ story }: any) => {
  return (
    <div className="rounded-[24px] flex flex-col bg-[#F9E79F99] text-blackPrimary font-openSans h-[394px] w-[294px] px-[16px] py-[12px]">
      <Image
        src={story?.image}
        width={270}
        height={180}
        alt={story.title}
        className="lg:w-[270px] h-[180px] rounded-[16px]"
      />
      <div className="pt-[4px] flex flex-col gap-y-[12px] px-[4px]">
        <h3 className="font-[700] text-[20px] leading-[29px] text-blackPrimary">
          {story.title}
        </h3>
        <p className="text-[14px] font-[400] leading-[20.3px]">
          {story.content}
        </p>
        <div className="flex justify-between">
          <button className="text-[16px] font-[600] leading-[23.2px] ">
            Read More...
          </button>
          <IoArrowForwardCircleOutline className="text-[32px] text-blackPrimary" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

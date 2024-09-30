"use client";

import ReviewCard from "@/app/(components)/review-card";
import { reviews } from "@/app/(components)/reviews";
import { Header } from "@/app/dashboard/(components)/header";
import { StarIcon } from "hugeicons-react";
import { useState } from "react";

const Reviews = () => {
  const [activeRating, setActiveRating] = useState<number>(1);

  return (
    <div className="mt-[12px] flex flex-col gap-y-[32px] py-[16px] font-openSans">
      {/* Heading */}
      <Header title="Reviews" />
      <div>
        {[].length > 1 ? (
          <div className="flex flex-col gap-y-[32px]">
            <div className="flex gap-x-[12px]">
              {[12, 10, 10, 10, 10].map((rating, index, arr) => (
                <div
                  onClick={() => setActiveRating(index + 1)}
                  className={`flex h-[40px] w-fit gap-x-[8px] rounded-[8px] border-[1px] px-[24px] py-[8px] text-blackPrimary ${activeRating == index + 1 && "border-greenPrimary bg-greenPrimary text-white"} `}
                  key={index}
                >
                  <StarIcon className="size-[20px] fill-[#F9C74F] text-[#F9C74F]" />
                  <span className="text-[16px] font-[600] leading-[23.2px]">
                    {arr.length} ({rating}){" "}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-[32px]">
              {[]?.map((review, index) => (
                <ReviewCard showMsg={true} key={index} review={review} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-[16px] leading-[] text-blackPrimary">
            No ratings yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Reviews;

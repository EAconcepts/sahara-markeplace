import React from "react";
import ProductHeader from "./product-header";
// import { newArrivals } from "../page";
import ProductCard from "./productCard";
import Banner from "./banner";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Rating from "./rating";
import Image from "next/image";
import usa from "@/assets/images/usa.svg";
import { Input } from "@/components/ui/input";
import review1 from "@/assets/images/review1.png";
import review2 from "@/assets/images/review2.png";
import review3 from "@/assets/images/review3.png";
import arrival1 from "@/assets/images/arrival1.png";
import arrival2 from "@/assets/images/arrival2.png";
import arrival3 from "@/assets/images/arrival3.png";
import arrival4 from "@/assets/images/arrival4.png";
import ghana from "@/assets/images/ghana.svg";

export const reviews = [
  {
    image: review1,
    name: "Natalie Sharon",
    review:
      "Magnificent fabric of great beauty and elegance. All in a beautiful bag that gives the impression of having received a gift ",
  },
  {
    image: review2,
    name: "Natalie Sharon",
    review:
      "Magnificent fabric of great beauty and elegance. All in a beautiful bag that gives the impression of having received a gift ",
  },
  {
    image: review3,
    name: "Natalie Sharon",
    review:
      "Magnificent fabric of great beauty and elegance. All in a beautiful bag that gives the impression of having received a gift ",
  },
];
export  const newArrivals = [
  {
    image: arrival1,
    title: "Handmade Bag",
    country: ghana,
    rating: 10,
    price: 59.99,
  },
  {
    image: arrival2,
    title: "Laboma rings",
    country: ghana,
    rating: 10,
    price: 12.99,
  },
  {
    image: arrival3,
    title: "Maasai sandals",
    country: ghana,
    rating: 10,
    price: 46.99,
  },
  {
    image: arrival4,
    title: "Bogolan Wax Fabrics",
    country: ghana,
    rating: 10,
    price: 23.99,
  },
  {
    image: arrival1,
    title: "Handmade Bag",
    country: ghana,
    rating: 10,
    price: 59.99,
  },
  {
    image: arrival2,
    title: "Laboma rings",
    country: ghana,
    rating: 10,
    price: 12.99,
  },
  {
    image: arrival3,
    title: "Maasai sandals",
    country: ghana,
    rating: 10,
    price: 46.99,
  },
  {
    image: arrival4,
    title: "Bogolan Wax Fabrics",
    country: ghana,
    rating: 10,
    price: 23.99,
  },
];
const Reviews = ({ reviews }: { reviews: any }) => {
  return (
    <div className="mt-[24px] flex flex-col pt-[24px] font-openSans">
      {/* Reviews */}
      <div className="flex flex-col gap-y-[8px]">
        <div className="inline-flex items-center gap-x-[8px]">
          <h5 className="font-openSans text-[20px] font-[600] leading-[24px] text-blackPrimary">
            Reviews
          </h5>
          <MdKeyboardArrowDown className="text-[22px]text-[#7D9A37]" />
        </div>
        <p className="text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
          Read customer reviews to see if this product is right for you!
        </p>
        <div className="max-lg:hidden">
          <div className="flex items-center justify-between border-b pb-[16px]">
            <p>Showing {`1 of 3`}</p>
            <div className="flex items-baseline gap-x-[4px]">
              <span>Ratings: </span>
              <Rating rating={5} showRatingValue={false} stars={5} />
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="mt-[32px] flex flex-col gap-y-[32px]">
            {/* Reviews */}
            {reviews?.map((review: any, index: number) => (
              <div
                key={index}
                className="flex items-center gap-x-[24px] border-b pb-[24px]"
              >
                <Image
                  src={review.image}
                  width={120}
                  height={120}
                  alt=""
                  className="rounded-full lg:size-[120px]"
                />
                <div className="flex flex-col gap-y-[16px]">
                  <h6 className="font-openSans text-[18px] font-[600] leading-[21.6px] tracking-[-2%] text-blackPrimary">
                    {review.name}
                  </h6>
                  <div className="flex flex-col gap-y-[8px]">
                    <p className="font-openSans text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
                      {review.review}
                    </p>
                    <div className="flex items-center gap-x-[16px]">
                      <span>Love from </span>
                      <Image
                        src={usa}
                        width={18}
                        height={12}
                        alt="usa"
                        className="h-[12px] w-[18px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Leave a Review */}
      <div className="mt-[32px] flex flex-col gap-y-[32px]">
        {/* Leave a review */}
        <div className="flex flex-col gap-y-[8px]">
          <div className="inline-flex items-center gap-x-[8px]">
            <h5 className="font-openSans text-[16px] font-[600] leading-[19.2px] text-blackPrimary">
              Leave a Review
            </h5>
            <MdKeyboardArrowUp className="text-[22px]text-[#7D9A37]" />
          </div>
          <p className="text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Share your experience with this products to help customers.
          </p>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-y-[24px]">
          <div className="grid grid-cols-2 gap-x-[24px] font-openSans lg:gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
              Full Name
            </label>
            <label className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
              Email Address
            </label>
            <Input
              type="text"
              placeholder="John Doe"
              className="text-[12px] font-[400] leading-[17.4px] text-[#8E97A6] lg:h-[56px]"
            />
            <Input
              type="text"
              placeholder="john@example.com"
              className="text-[12px] font-[400] leading-[17.4px] text-[#8E97A6] lg:h-[56px]"
            />
          </div>
          {/* Experience */}
          <div className="flex flex-col gap-y-[4px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
              Share Your Experience
            </label>
            <textarea
              className="font h-[80px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-transparent p-[16px] font-inter text-[14px] font-[400] leading-[17.4px] text-[#8E97A6] lg:h-[112px]"
              placeholder="Your experience..."
            />
          </div>
          <Button className="w-fit rounded bg-[#7D9A37] px-[24px] py-[12px] font-openSans text-[14px] font-[700] leading-[20.3px] lg:rounded-[20px] lg:py-[16px] lg:text-[16px] lg:leading-[23.2px]">
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;

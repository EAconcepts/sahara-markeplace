"use client";

import Image from "next/image";
import ghana from "@/assets/images/ghana.svg";
import Rating from "@/app/(components)/rating";
import { BsFillPatchCheckFill, BsPlus } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import policy from "@/assets/images/policy.svg";
import plane from "@/assets/images/plane.svg";
import details from "@/assets/images/details.png";
import details1 from "@/assets/images/details1.png";
import details2 from "@/assets/images/details2.png";
import details3 from "@/assets/images/details3.png";
import details4 from "@/assets/images/details4.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Banner from "@/app/(components)/banner";
import ProductHeader from "@/app/(components)/product-header";
import { newArrivals } from "@/app/page";
import ProductCard from "@/app/(components)/productCard";
import { useAuth } from "@/utils/useAuth";
import review1 from "@/assets/images/review1.png";
import review2 from "@/assets/images/review2.png";
import review3 from "@/assets/images/review3.png";
import usa from "@/assets/images/usa.svg"
import withAuth from "@/app/(components)/authWrapper";

export  const reviews = [
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
const ProductDetails = () => {
  // const { token } = useAuth();
  // console.log(token);
  const product = {
    id: 1,
    name: "Ensemble Veste Pantalon",
    price: 68.99,
    image: details,
    images: [details1, details2, details3, details4],
    description:
      "This unique and eye-catching garment is handcrafted using traditional techniques and boasts a bold aesthetic perfect for the modern wardrobe.",
    category: "Category",
    store: "Afritique-Benin",
    rating: 4,
    reviews: 100,
    stock: 100,
    size: "l",
    inStock: true,
    colors: ["green", "purple", "gray", "yellow", "blue"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  };
  const [chosenColor, setChosenColor] = useState("green");
  const [chosenSize, setChosenSize] = useState("L");
 
  return (
    <div className="pt-[24px] max-lg:px-[24px] lg:px-[96px]">
      {/* Breadcrumb */}
      <div className=""></div>
      <div className="flex flex-col">
        <div className="lg:flex lg:gap-x-[24px]">
          {/* Images */}
          <div className="flex flex-col gap-y-[16px]">
            <div className="relative">
              <Image
                src={product.image}
                width={506}
                height={360}
                alt=""
                className="max-lg::h-[360px] w-full rounded-[8px] object-cover lg:w-[506px]"
              />
              <div className="absolute left-[24px] top-[40px] rounded-[4px] bg-[#A07E53] px-[24px] py-[8px] font-openSans text-[14px] font-[600] leading-[16.8px] text-white">
                20% Off
              </div>
            </div>
            <div className="max-lg:mt[16px] lg:mt-[32px] flex justify-center gap-x-[16px] lg:gap-x-[19px]">
              {product.images?.map((image, index: number) => (
                <Image
                  key={index}
                  src={image}
                  width={64}
                  height={85}
                  alt=""
                  className="h-[85px] lg:size-[92px]  w-[64px] rounded-[2px] lg:rounded-[4px] lg:border-[1px] border-[#E4E7EC]"
                />
              ))}
            </div>
          </div>
          {/* Sub details */}
          <div>
            <div className="max-lg:mt-[24px] flex flex-col gap-y-[32px]">
              <div className="flex flex-col gap-y-[12px]">
                {/* Title & Description */}
                <div className="flex flex-col gap-y-[12px]">
                  <h3 className="font-playfair lg:text-[32px] lg:leading-[38.4px] text-[20px] font-[600] leading-[24px] tracking-[2%] text-blackPrimary">
                    {product.name}
                  </h3>
                  <p className="font-openSans font-[400] leading-[17.6px] text-[#787C83] text-[12px] lg:text-[14px] lg:leading-[20.3px]">
                    {product.description}
                  </p>
                </div>
                {/* Store */}
                <div className="flex items-center gap-x-[12px]">
                  <h6>{product.store}</h6>{" "}
                  <Image
                    src={ghana}
                    width={12}
                    height={8}
                    alt="country 
                            flag"
                  />
                  <button className="font-openSans lg:text-[14px] lg:leading-[20.3px] text-[12px] font-[600] leading-[17.4px] text-[#787C83]">
                    View Store
                  </button>
                </div>
                {/* Ratings */}
                <div className="flex items-center gap-x-[12px]">
                  <Rating />
                  <div className="flex items-center gap-x-[8px] rounded-[16px] bg-[#94E08D33] px-[8px] py-[4px]">
                    <HiOutlineBadgeCheck
                      className={"text-[16px] text-[#55C74B]"}
                    />
                    <span className="px-[8px] py-[4px] font-openSans text-[12px] lg:text-[14px] leading-[20px] text-[#55C74B]">
                      Trusted Seller
                    </span>
                  </div>
                </div>
              </div>
              {/* Prices */}
              <div className="flex flex-col gap-y-[4px]">
                <div className="flex items-center gap-x-[8px]">
                  <span className="font-openSans text-[12px] font-[600] leading-[14.4px] lg:text-[16px] tracking-[2%] text-[#787C83]">
                    $81.99
                  </span>
                  <span className="font-openSans lg:text-[24px] lg:leading-[28.8px] text-[16px] font-[700] leading-[19.2px] text-blackPrimary">
                    $68.99
                  </span>
                </div>
                <div className="inline-flex gap-x-[3px] font-openSans text-[12px] font-[400] lg:leading-[20.3px] lg:text-[14px] leading-[17.4px] text-[#787C83]">
                  <span className="font-[700]">$64.99 </span>
                  <span>for more than 10 pieces</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[16px] lg:gap-y-[32px] divide-y">
              {/* color */}
              <div className="flex flex-col lg:mt-[32px] gap-y-[12px]">
                <h5 className="text-[14px] lg:text-[16px] lg:leading-[23.2px] font-[600] leading-[20.3px] text-blackPrimary">
                  Choose a Color
                </h5>
                <div className="flex items-center gap-x-[16px]">
                  {product.colors.map((color, index) => (
                    <div
                      onClick={() => setChosenColor(color)}
                      key={index}
                      className={`${chosenColor == color && "flex lg:size-[56px] size-[36px] items-center justify-center rounded-full border border-black/60 p-[4px] lg:p-[6px]"}`}
                    >
                      <div
                        className={`size-[24px] lg:size-[44px] rounded-full`}
                        style={{ background: color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Select Size */}
              <div className="flex flex-col lg:w-[526px] ">
                <div className="flex justify-between py-[16px] lg:py-[32px]">
                  <span className="font-openSans text-[14px] lg:text-[16px] lg:leading-[23.2px] font-[600] leading-[20.3px] text-blackPrimary">
                    Select Size
                  </span>
                  <span className="text-[12px] lg:text-[14px] lg:leading-[20.3px] font-[600] leading-[17.4px] text-[#8E97A6] underline">
                    Size Guide
                  </span>
                </div>
                <div className="flex max-lg:justify-between lg:gap-x-[16px]">
                  {product.sizes?.map((size, index) => (
                    <div
                      onClick={() => setChosenSize(size)}
                      key={index}
                      className={`${chosenSize == size && "rounded-full border border-[#7D9A37]"}`}
                    >
                      <div className="flex size-[32px] lg:size-[44px] items-center justify-center rounded-full bg-[#7D9A3733] font-openSans lg:text-[14px] text-[12px] font-[600] leading-[17.4px] text-[#7D9A37]">
                        {size}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Quantity */}
              <div className="flex flex-col py-[16px]">
                <h4 className="font-openSans lg:text-[16px] lg:leading-[23.2px] text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Quantity
                </h4>
                <div className="mt-[20px] flex w-fit items-center gap-[24px] lg:gap-x-[44px] rounded-[40px] border-[1px] border-[#E4E7EC] px-[26px] py-[16px]">
                  <TbMinus className="text-[18px] lg:text-[24px] text-[#667185]" />
                  <span className="font-openSans lg:text-[20px] lg:leading-[24px] text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-[#7D9A37]">
                    1
                  </span>
                  <TbPlus className="text-[18px] lg:text-[24px] text-[#F56630]" />
                </div>
                <div className="max-lg:hidden mt-[32px] flex gap-x-[24px]">
                  <Button className="bg-[#7D9A37] py-[16px] px-[24px] h-[55px] w-[294px] rounded-[12px] text-[16px] text-white font-[600] leading-[23.2px]" variant={"outline"}>Add to Cart</Button>
                  <Button className=" py-[16px] rounded-[12px] px-[24px] h-[55px] w-[294px] text-[16px] text-[#7D9A37] border-[1.5px] border-[#7D9A37] font-[600] leading-[23.2px]" variant={"outline"}>Add to Wishlist</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="mt-[24px] flex flex-col py-[24px]">
          <h2 className="font-openSans text-[20px] font-[600] leading-[24px] tracking-[2%] text-blackPrimary">
            Product Description
          </h2>
          <p className="mt-[16px] line-clamp-6 font-openSans text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            This unique and eye-catching garment is handcrafted using
            traditional techniques and boasts a bold aesthetic perfect for the
            modern wardrobe. Mudcloth also known as bògòlanfini is made of pure,
            organic Malian cotton and natural dyes left to ferment for months.
            The process of creating mudcloth dates back to the 12th century,
            each...
          </p>
          <button className="text-[]14px mt-[8px] self-start font-openSans font-[700] leading-[20.3px] text-[#787C83]">
            Read More...
          </button>
        </div>
        {/* Delivery & Return policy */}
        <div className="mt-[32px] flex gap-y-[16px] max-lg:flex-col lg:gap-x-[24px]">
          {/* Delivery */}
          <div className="flex flex-col gap-y-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] p-[24px] lg:w-full">
            <div className="flex gap-x-[8px]">
              <Image
                src={plane}
                width={16}
                height={16}
                alt="plane"
                className="size-[16px]"
              />
              <span className="font-openSans text-[14px] font-[600] leading-[16.8px] tracking-[2%] text-blackPrimary">
                Time of Delivery
              </span>
            </div>
            <p className="font-openSans text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
              To be delivered on June 30, 2024.
            </p>
          </div>
          {/* Return Policy */}
          <div className="flex flex-col gap-y-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] p-[24px] lg:w-full">
            <div className="flex gap-x-[8px]">
              <Image
                src={policy}
                width={16}
                height={16}
                alt="plane"
                className="size-[16px]"
              />
              <span className="font-openSans text-[14px] font-[600] leading-[16.8px] tracking-[2%] text-blackPrimary">
                Return Policy
              </span>
            </div>
            <p className="font-openSans text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
              We offer a flexible 90-day return window. If your purchase
              isn&apos;t the perfect fit, you can easily return it within 90
              days (subject to our return policy details).
            </p>
            <div className="flex items-center gap-x-[8px] font-openSans text-blackPrimary">
              <span className="text-[14px] font-[400] leading-[20.3px]">
                Read Return Policy{" "}
              </span>
              <IoIosArrowRoundForward className="text-[18px]" />
            </div>
          </div>
        </div>
        {/* Review */}
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
                {reviews?.map((review, index) => (
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
              <div className="grid grid-cols-2 lg:gap-y-[8px] gap-x-[24px] font-openSans">
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
                  className="font h-[80px] lg:h-[112px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-transparent p-[16px] font-inter text-[14px] font-[400] leading-[17.4px] text-[#8E97A6]"
                  placeholder="Your experience..."
                />
              </div>
              <Button className="w-fit rounded bg-[#7D9A37] px-[24px] py-[12px] lg:py-[16px] lg:rounded-[20px] lg:text-[16px] lg:leading-[23.2px] font-openSans text-[14px] font-[700] leading-[20.3px]">
                Submit Review
              </Button>
            </form>
          </div>
          <div className="mt-[24px]">
            <Banner />
          </div>
          {/* Other Items */}
          <div className="flex flex-col gap-y-[16px] py-[24px]">
            <ProductHeader heading="Other Items From Afritique" showBtn />
            <div className="grid grid-cols-2 gap-[16px] lg:grid-cols-4">
              {newArrivals
                ?.slice(0, 4)
                ?.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth( ProductDetails)

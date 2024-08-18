"use client";

import Image from "next/image";
import ghana from "@/assets/images/ghana.svg";
import Rating from "@/app/(components)/rating";
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
// import { newArrivals } from "@/app/page";
import ProductCard from "@/app/(components)/productCard";
import { useAuth } from "@/utils/useAuth";
import usa from "@/assets/images/usa.svg";
import withAuth from "@/app/(components)/authWrapper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { newArrivals, reviews } from "@/app/(components)/reviews";
import { useGet } from "@/utils/useGet.";
import { useParams } from "next/navigation";
import { toast } from "sonner";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { token } = useAuth();
  // console.log(token)
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const { product_url } = useParams();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  // console.log(token);
const [chosenColor, setChosenColor] = useState("green");
  const [chosenSize, setChosenSize] = useState("L");

  const { data } = useGet(`product/${product_url}`, "prd-details");
  let product = data?.data?.product;
  // console.log(product);
 
  const handleWishList = async() => {
    try {
      const response :any = await axios.post(
        `${apiUrl}/add-to-wishlist`,
        { product:product?.id},
        { headers },
      );
      console.log(response);
      toast.success(response?.data?.message)
    } catch (error:any) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const queryClient = useQueryClient()
  const handleAddToCart = async(id: number) => {
    try {
      const response = await axios.post(
        `${apiUrl}/add-to-cart`,
        { product:id, quantity },
        { headers },
      );
      console.log(response)
      queryClient.invalidateQueries({queryKey: ['cart']})
     toast.success(response?.data?.message);
    } catch (error:any) {
      console.log(error)
      toast.error(error?.response.data?.message || error?.message);
    }
  };

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
                src={`${imageBaseUrl}/${product?.image}`}
                width={506}
                height={360}
                alt={product?.name}
                className="max-lg::h-[360px] w-full rounded-[8px] object-cover lg:w-[506px]"
              />
              <div className="absolute left-[24px] top-[40px] rounded-[4px] bg-[#A07E53] px-[24px] py-[8px] font-openSans text-[14px] font-[600] leading-[16.8px] text-white">
                20% Off
              </div>
            </div>
            <div className="max-lg:mt[16px] flex justify-center gap-x-[16px] lg:mt-[32px] lg:gap-x-[19px]">
              {product?.images?.map((image: any, index: number) => (
                <Image
                  key={index}
                  src={image}
                  width={64}
                  height={85}
                  alt=""
                  className="h-[85px] w-[64px] rounded-[2px] border-[#E4E7EC] lg:size-[92px] lg:rounded-[4px] lg:border-[1px]"
                />
              ))}
            </div>
          </div>
          {/* Sub details */}
          <div>
            <div className="flex flex-col gap-y-[32px] max-lg:mt-[24px]">
              <div className="flex flex-col gap-y-[12px]">
                {/* Title & Description */}
                <div className="flex flex-col gap-y-[12px]">
                  <h3 className="font-playfair text-[20px] font-[600] leading-[24px] tracking-[2%] text-blackPrimary lg:text-[32px] lg:leading-[38.4px]">
                    {product?.name}
                  </h3>
                  <p className="font-openSans text-[12px] font-[400] leading-[17.6px] text-[#787C83] lg:text-[14px] lg:leading-[20.3px]">
                    {product?.description}
                  </p>
                </div>
                {/* Store */}
                <div className="flex items-center gap-x-[12px]">
                  <h6>{product?.store}</h6>{" "}
                  <Image
                    src={ghana}
                    width={12}
                    height={8}
                    alt="country 
                            flag"
                  />
                  <button className="font-openSans text-[12px] font-[600] leading-[17.4px] text-[#787C83] lg:text-[14px] lg:leading-[20.3px]">
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
                    <span className="px-[8px] py-[4px] font-openSans text-[12px] leading-[20px] text-[#55C74B] lg:text-[14px]">
                      Trusted Seller
                    </span>
                  </div>
                </div>
              </div>
              {/* Prices */}
              <div className="flex flex-col gap-y-[4px]">
                <div className="flex items-center gap-x-[8px]">
                  <span className="font-openSans text-[12px] font-[600] leading-[14.4px] tracking-[2%] text-[#787C83] lg:text-[16px]">
                    ${product?.price}
                  </span>
                  <span className="font-openSans text-[16px] font-[700] leading-[19.2px] text-blackPrimary lg:text-[24px] lg:leading-[28.8px]">
                  ${product?.price}
                  </span>
                </div>
                <div className="inline-flex gap-x-[3px] font-openSans text-[12px] font-[400] leading-[17.4px] text-[#787C83] lg:text-[14px] lg:leading-[20.3px]">
                  <span className="font-[700]">$64.99 </span>
                  <span>for more than 10 pieces</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[16px] divide-y lg:gap-y-[32px]">
              {/* color */}
              <div className="flex flex-col gap-y-[12px] lg:mt-[32px]">
                <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary lg:text-[16px] lg:leading-[23.2px]">
                  Choose a Color
                </h5>
                <div className="flex items-center gap-x-[16px]">
                  {product?.colors?.map((color: any, index: number) => (
                    <div
                      onClick={() => setChosenColor(color)}
                      key={index}
                      className={`${chosenColor == color && "flex size-[36px] items-center justify-center rounded-full border border-black/60 p-[4px] lg:size-[56px] lg:p-[6px]"}`}
                    >
                      <div
                        className={`size-[24px] rounded-full lg:size-[44px]`}
                        style={{ background: color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Select Size */}
              <div className="flex flex-col lg:w-[526px]">
                <div className="flex justify-between py-[16px] lg:py-[32px]">
                  <span className="font-openSans text-[14px] font-[600] leading-[20.3px] text-blackPrimary lg:text-[16px] lg:leading-[23.2px]">
                    Select Size
                  </span>
                  <span className="text-[12px] font-[600] leading-[17.4px] text-[#8E97A6] underline lg:text-[14px] lg:leading-[20.3px]">
                    Size Guide
                  </span>
                </div>
                <div className="flex max-lg:justify-between lg:gap-x-[16px]">
                  {product?.sizes?.map((size: any, index: any) => (
                    <div
                      onClick={() => setChosenSize(size)}
                      key={index}
                      className={`${chosenSize == size && "rounded-full border border-[#7D9A37]"}`}
                    >
                      <div className="flex size-[32px] items-center justify-center rounded-full bg-[#7D9A3733] font-openSans text-[12px] font-[600] leading-[17.4px] text-[#7D9A37] lg:size-[44px] lg:text-[14px]">
                        {size}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Quantity */}
              <div className="flex flex-col py-[16px]">
                <h4 className="font-openSans text-[14px] font-[600] leading-[20.3px] text-blackPrimary lg:text-[16px] lg:leading-[23.2px]">
                  Quantity
                </h4>
                <div className="mt-[20px] flex w-fit items-center gap-[24px] rounded-[40px] border-[1px] border-[#E4E7EC] px-[26px] py-[16px] lg:gap-x-[44px]">
                  <TbMinus
                    onClick={() =>
                      setQuantity((prev: number) => {
                        if (prev == 1) {
                          return prev;
                        } else return prev - 1;
                      })
                    }
                    className={`text-[18px] text-[#667185] lg:text-[24px] ${quantity ==1 && "opacity-50"} `}
                  />
                  <span className="font-openSans text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-[#7D9A37] lg:text-[20px] lg:leading-[24px]">
                    {quantity || 1}
                  </span>
                  <TbPlus
                    onClick={() =>   setQuantity((prev: number) => {
                      if (prev == product?.quantity) {
                        return prev;
                      } else return prev +1;
                    })}
                    className={`text-[18px] text-[#F56630] lg:text-[24px] ${quantity ==product?.quantity && "opacity-50"}`}
                  />
                </div>
                <div className="mt-[32px] flex gap-x-[24px] max-lg:hidden">
                  <Button
                    onClick={() => handleAddToCart(product?.id)}
                    className="h-[55px] w-[294px] rounded-[12px] bg-[#7D9A37] px-[24px] py-[16px] text-[16px] font-[600] leading-[23.2px] text-white"
                    variant={"outline"}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    onClick={() => handleWishList()}
                    className="h-[55px] w-[294px] rounded-[12px] border-[1.5px] border-[#7D9A37] px-[24px] py-[16px] text-[16px] font-[600] leading-[23.2px] text-[#7D9A37]"
                    variant={"outline"}
                  >
                    Add to Wishlist
                  </Button>
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
           {product?.description}
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

export default withAuth(ProductDetails);

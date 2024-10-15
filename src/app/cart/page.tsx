"use client";

import { IoIosArrowRoundBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import CartCard from "../(components)/cart-card";
import { getTotalPrice } from "../(components)/modals/cart-modal";
import { useGet } from "@/utils/useGet.";
import { DotLoader } from "react-spinners";
import { useAuth } from "@/utils/useAuth";
import { useEffect, useState } from "react";
import { useCheckout } from "@/utils/useCheckout";

const Cart = () => {
  const router = useRouter();
  const { token, userType } = useAuth();
  useEffect(() => {
    if (!token) {
      router.push("/auth/signin");
    }
    if (token && userType != "user") {
      router.replace("/");
    }
  }, []);
  const [total, setTotal] = useState<string>("0");
  const { refetchCart, cartItems } = useCheckout();

  useEffect(() => {
    cartItems && setTotal(getTotalPrice(cartItems).toLocaleString());
  }, [cartItems]);

  return (
    <div className="flex w-full flex-col py-[40px]">
      {/* cart */}
      <div className={"flex flex-col bg-white px-[24px]"}>
        {/* heading */}
        <div>
          <div
            onClick={() => router.back()}
            className="flex items-center gap-x-[8px]"
          >
            <IoIosArrowRoundBack className="text-[16px] text-[#7D9A37]" />
            <span className="font-openSans text-[14px] font-[600] leading-[20.3px] text-[#7D9A37]">
              Back
            </span>
          </div>
          <div className="mt-[16px] flex gap-x-[12px]">
            <h3 className="font-playfair text-[20px] font-[600] leading-[38.4px] tracking-[-2%] text-blackPrimary lg:text-[32px]">
              My Cart
            </h3>
            {cartItems && (
              <p className="flex size-[24px] items-center justify-center rounded-full bg-greenPrimary px-[12px] py-[6px] font-inter text-[18px] font-[600] leading-[26.1px] text-white lg:size-[38px]">
                {cartItems?.length}
              </p>
            )}
          </div>
        </div>
        {cartItems ? (
          <>
            <div className="mt-[16px] flex flex-col gap-y-[28px] border-b-[2px] border-[#E4E7EC] pb-[28px]">
              {cartItems?.map((cart: any) => (
                <CartCard product={cart} key={cart.id} showQuantity={true} />
              ))}
            </div>
            {/* Sub total */}
            <div className="mt-[16px] flex flex-col gap-y-[24px] divide-y-[2px] divide-[#E4E7EC]">
              <div className="flex justify-between">
                <span className="font-openSans text-[16px] font-[400] leading-[23.2px] text-[#787C83]">
                  {" "}
                  Subtotal:
                </span>
                <h4 className="text-[18px] font-[700] leading-[26.1px] text-blackPrimary">
                  ${total}
                </h4>
              </div>
              <div className="pt-[24px]">
                <Button
                  onClick={() => {
                    router.push("/checkout");
                  }}
                  className="h-[55px] w-full rounded-[12px] bg-greenPrimary py-[16px] font-openSans text-[16px] font-[700] leading-[23.2px] text-white"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="my-[64px] flex items-center justify-center">
            {" "}
            <DotLoader color="#7D9A37" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

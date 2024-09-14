"use client";

import { useEffect, useState } from "react";
import Form from "../(components)/form";
import OrderSummary from "../(components)/summary";
import {
  Calendar02Icon,
  MapsLocation01Icon,
  PencilEdit01Icon,
  SquareLockPasswordIcon,
} from "hugeicons-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/utils/useCheckout";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "@/utils/useAuth";

const BillingInfo = () => {
  const { shippingInfo } = useCheckout();
  // console.log(shippingInfo)
  useEffect(() => {
    if (!shippingInfo?.first_name && !shippingInfo?.email) {
      router.push("/checkout");
    }
  }, []);
  const router = useRouter();
  const { token } = useAuth();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const handlePlaceOrder = () => {
    console.log(shippingInfo);
    orderMutation.mutate();
  };
  const orderMutation = useMutation({
    mutationFn: () =>
      axios.post(`${baseUrl}/place-order`, shippingInfo, { headers }),
    onSuccess: (data) => {
      console.log(data);
      window.open(data?.data?.data, "_blank");
      router.push("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <div className="max-lg:p-[24px] lg:px-[96px] lg:py-[40px]">
      {/* Breadcrumb */}
      <div></div>
      <div className="mt-[40px] flex gap-[24px] max-lg:flex-col max-lg:gap-[24px]">
      <div className="flex lg:flex-col gap-[24px] w-full ">
        {/* Delivery Info */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-[16px] rounded-[10px] bg-[#C4D79B33] p-[16px]">
            <div className="flex items-center justify-between">
              <h4 className="text-[20px] leading-[24px] tracking-[-2%] text-blackPrimary">
                Delivery Information
              </h4>
              <div
                onClick={() => router.back()}
                className="flex items-end gap-[8px] text-greenPrimary"
              >
                <PencilEdit01Icon />
                <span className="text-[12px] font-[600] leading-[17.4px]">
                  Edit
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-[8px]">
              <h5 className="text-[16px] font-[600] leading-[23.2px] text-blackPrimary">
                {shippingInfo?.first_name} {shippingInfo?.last_name}
              </h5>
              <div className="flex gap-[4px]">
                <MapsLocation01Icon className="size-[16px]" />
                <span className="font-inter text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                  {shippingInfo?.address} {shippingInfo?.city}{" "}
                  {shippingInfo?.state} {shippingInfo?.country}
                </span>
              </div>
              <div className="flex gap-[8px]">
                <span className="font-inter text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                  {shippingInfo?.phone}
                </span>
              </div>
              <div className="flex gap-[8px]">
                <span className="font-inter text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                  {shippingInfo?.email}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Billing info */}
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
            Billing Information
          </h2>
          <p className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
            We use secure encryption to protect your details. Payment gateway -
            Stripe
          </p>
        </div>
        {/* discount */}
        <form className="flex flex-col gap-[24px]">
          {/* Discount */}
          <div className="flex flex-col gap-[4px]">
            <h5 className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
              Apply Discount
            </h5>
            <div className="flex w-full gap-[4px]">
              <Input
                type="text"
                placeholder="Enter Coupon Code"
                className="h-[48px] w-full rounded-[4px] p-[16px] text-[12px] font-[400] leading-[17.4px] text-[#8E97A6]"
              />
              <Button className="h-full w-fit rounded-[4px] bg-greenPrimary px-[32px] py-[12px] text-center text-[14px] leading-[20.3px] text-white">
                Apply
              </Button>
            </div>
          </div>
          {/* Card Info */}
          <div className="fle hidden flex-col gap-[24px]">
            <h3 className="text-[16px] font-[600] leading-[19.2px] text-blackPrimary">
              Enter Card Information
            </h3>
            <div className="flex flex-col gap-[24px]">
              {/* Card holders name */}
              <div className="flex flex-col gap-[4px]">
                <h5 className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                  Cardholder&apos;s name
                </h5>
                <Input
                  type="text"
                  placeholder=""
                  className="h-[48px] w-full rounded-[4px] p-[16px] text-[12px] font-[400] leading-[17.4px] text-[#8E97A6]"
                />
              </div>
              {/* Card Number */}
              <div className="flex flex-col gap-[4px]">
                <h5 className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                  Cardholder Number
                </h5>
                <Input
                  type="text"
                  placeholder="card number"
                  className="h-[48px] w-full rounded-[4px] p-[16px] text-[12px] font-[400] leading-[17.4px] text-[#8E97A6]"
                />
              </div>
              {/* Expiry & CVV */}
              <div className="flex gap-[16px]">
                {/* Expiry */}
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                    Expiry Data
                  </p>
                  <div className="flex h-[48px] w-full items-center rounded-[4px] border-[1px] border-border pr-[16px]">
                    <input
                      type="text"
                      placeholder="03/24"
                      className="h-full w-full border-none p-[16px] focus-within:outline-none"
                    />
                    <Calendar02Icon className="size-[14px]" />
                  </div>
                </div>
                {/* CVV */}
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                    CVV
                  </p>
                  <div className="flex h-[48px] w-full items-center rounded-[4px] border-[1px] border-border pr-[16px]">
                    <input
                      type="text"
                      placeholder="123"
                      className="h-full w-full border-none p-[16px] focus-within:outline-none"
                    />
                    <SquareLockPasswordIcon className="size-[14px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        </div>
        {/* Order Summary */}
        <div className="shrink-0 lg:w-[45%]">
          <OrderSummary onClick={handlePlaceOrder} />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;

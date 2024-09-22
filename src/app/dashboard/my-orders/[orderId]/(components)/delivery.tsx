"use client";

import { useAuth } from "@/utils/useAuth";
import { CheckmarkBadge01Icon } from "hugeicons-react";
import Image from "next/image";
import React from "react";

const Delivery = ({ order }: { order?: any }) => {
  const { userType } = useAuth();
  return (
    <div className="flex w-[318px] flex-col gap-y-[16px] font-openSans">
      {/* Store Information */}
      {userType == "admin" && (
        <div className="flex flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border py-[24px]">
          <h3 className="px-[12px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
            Store Information
          </h3>
          <div className="flex gap-[12px] px-[12px]">
            <Image
              src={""}
              width={64}
              height={64}
              alt="store-image"
              className="size-[64px] object-cover"
            />
            <div className="flex flex-col gap-y-[12px]">
              <span className="text-[14px] font-[600] leading-[16.8px] tracking-[-2%] text-blackPrimary">
                Afritique-Benin
              </span>
              {/* Email */}
              <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
                <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
                  Email:
                </span>
                <span className="font-[600]">{order?.email}</span>
              </div>
              {/* Phone */}
              <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
                <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
                  Phone number:
                </span>
                <span className="font-[600]">{order?.phone}</span>
              </div>
              {/* Country */}
              <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
                <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
                  Country:
                </span>
                <span className="font-[600]">{order?.country}</span>
              </div>
              {/* Verification */}
              <div className="flex gap-x-[2px] rounded-[24px] bg-[#00875133] px-[10px] py-[4px] text-[10px] leading-[13.62px]">
                <CheckmarkBadge01Icon className="size-[24px] text-success" />
                <span className="font-[600] text-success">
                  Verified Seller
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customer Info */}
      {userType == "admin" && (
        <div className="flex flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border py-[24px]">
          <h3 className="px-[12px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
            Customer Information
          </h3>
          <div className="flex gap-[12px] px-[12px]">
            <Image
              src={""}
              width={64}
              height={64}
              alt="store-image"
              className="size-[64px] object-cover"
            />
            <div className="flex flex-col gap-y-[12px]">
              <span className="text-[14px] font-[600] leading-[16.8px] tracking-[-2%] text-blackPrimary">
                Juan Anabel
              </span>
              {/* Email */}
              <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
                <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
                  Email:
                </span>
                <span className="font-[600]">{order?.email}</span>
              </div>
              {/* Phone */}
              <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
                <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
                  Phone number:
                </span>
                <span className="font-[600]">{order?.phone}</span>
              </div>
              {/* Verification */}
              <div className="flex gap-x-[2px] rounded-[24px] bg-[#00875133] px-[10px] py-[4px] text-[10px] leading-[13.62px]">
                <CheckmarkBadge01Icon className="size-[24px] text-success" />
                <span className="font-[600] text-success">
                  Verified Customer
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delivery Info */}
      <div className="flex flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border py-[24px]">
        <h3 className="px-[12px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
          Delivery Information
        </h3>
        <div className="flex flex-col gap-y-[12px] px-[12px]">
          {/* City */}
          <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
            <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
              City:
            </span>
            <span className="font-[600]">{order?.city}</span>
          </div>
          {/* Street */}
          <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
            <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
              Street:
            </span>
            <span className="font-[600]">{order?.street}</span>
          </div>
          {/* Address */}
          <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
            <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
              Address:
            </span>
            <span className="font-[600]">{order?.address}</span>
          </div>
          {/* Tracking no. */}
          <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
            <span className="text-[12px] font-[400] leading-[14.4px] text-greenPrimary">
              Tracking No.:
            </span>
            <span className="font-[600] text-greenPrimary">
              {order?.trx_id}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Note */}
      <div className="flex flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border py-[24px]">
        <h2 className="px-[12px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
          Additional Note
        </h2>

        <p className="mt-[53px] text-center text-[14px] font-[400] leading-[16.8px] text-[#787C83]">
          {order?.notes ? order?.notes : "There is no additional note"}
        </p>
      </div>
    </div>
  );
};

export default Delivery;

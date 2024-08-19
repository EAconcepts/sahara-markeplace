"use client";

import { Header } from "@/app/dashboard/(components)/header";
import {
  ArrowDown01Icon,
  ArrowRight01Icon,
  ChartLineData02Icon,
  PackageDeliveredIcon,
  RefreshIcon,
} from "hugeicons-react";
import Image from "next/image";
import products from "@/assets/images/products.svg";
import RecentOrders from "./(components)/recent-orders";
import Listings from "./(components)/listings";
import LastUpdated from "./(components)/last-updated";
import { useGet } from "@/utils/useGet.";
import { useAuth } from "@/utils/useAuth";

const SellersDashboard = () => {
  // const recentOrders = [];
  const { data } = useGet("vendor/dashboard", "vendorDashboard");
  const { data:recentOrders } = useGet("vendor/orders", "vendorOrders");
  console.log(data);
  console.log(recentOrders);
  const { user } = useAuth();
  // console.log(user)

  return (
    <div className="font-openSans">
      {/* updated */}
      <LastUpdated />
      <div className="mt-[12px] py-[16px]">
        {/* Header */}
        <div>
          <Header title="Dashboard" />
        </div>
        {/* Total sales, order, all products */}
        <div className="mt-[32px] flex justify-between gap-x-[16px]">
          {/* Total sales */}
          <div className="flex w-full flex-col gap-y-[20px] rounded-[12px] border-[1px] border-border p-[16px]">
            <h4 className="text-[20px] font-[600] leading-[29px] text-black">
              Total Sales
            </h4>
            <div className="flex items-center gap-x-[8px] py-[4px]">
              <h2 className="text-[48px] font-[600] leading-[48px] text-black">
                0
              </h2>
              <div className="flex h-fit gap-x-[2px] rounded-[4px] border-[1px] border-[#1EB53A] bg-[#1EB53A33] px-[12px] py-[4px]">
                <ChartLineData02Icon className="size-[14px] text-[#006600]" />
                <small className="text-[12px] font-[400] leading-[17.4px] text-[#006600]">
                  0%
                </small>
              </div>
            </div>
          </div>
          {/* New orders */}
          <div className="flex w-full items-center justify-between rounded-[12px] border-[1px] border-border p-[16px]">
            <div className="flex w-full flex-col gap-y-[20px]">
              <h4 className="text-[20px] font-[700] leading-[29px] text-black">
                New Orders
              </h4>
              <div className="flex items-center gap-x-[8px] py-[4px]">
                <h2 className="text-[48px] font-[600] leading-[48px] text-black">
                  0
                </h2>
                {/* Percentage */}
                <div className="flex h-fit gap-x-[2px] rounded-[4px] border-[1px] border-[#1EB53A] bg-[#1EB53A33] px-[12px] py-[4px]">
                  <ChartLineData02Icon className="size-[14px] text-[#006600]" />
                  <small className="text-[12px] font-[400] leading-[17.4px] text-[#006600]">
                    0%
                  </small>
                </div>
              </div>
            </div>
            <PackageDeliveredIcon className="size-[72px] text-[#201812]" />
          </div>
          {/* All Products */}
          <div className="flex w-full items-center justify-between rounded-[12px] border-[1px] border-border p-[16px]">
            <div className="flex w-full flex-col gap-y-[20px]">
              <h4 className="text-[20px] font-[700] leading-[29px] text-black">
                All Products
              </h4>
              <div className="flex items-center gap-x-[8px] py-[4px]">
                <h2 className="text-[48px] font-[600] leading-[48px] text-black">
                  0
                </h2>
                {/* Percentage */}
                <div className="flex h-fit gap-x-[2px] rounded-[4px] border-[1px] border-[#1EB53A] bg-[#1EB53A33] px-[12px] py-[4px]">
                  <ChartLineData02Icon className="size-[14px] text-[#006600]" />
                  <small className="text-[12px] font-[400] leading-[17.4px] text-[#006600]">
                    0%
                  </small>
                </div>
              </div>
            </div>
            <Image
              src={products}
              width={96}
              height={96}
              alt="products"
              className="size-[96px]"
            />
          </div>
        </div>
        {/* Recent orders & Ratings */}
        <div className="mt-[32px] flex gap-x-[16px]">
          <div className="flex w-full flex-col gap-y-[32px]">
            {/* Recent Orders */}
            <div className="flex min-h-[187px] flex-col rounded-[10px] border-[1px] border-border py-[16px]">
              <h5 className="px-[12px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
                Recent Orders
              </h5>
              <div className="mt-[24px] w-full">
                <RecentOrders />
              </div>
              <p className="flex hidden h-full w-full items-center justify-center px-[12px] text-center text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                You have no orders yet
              </p>
            </div>
            {/* Product Listings */}
            <div className="flex min-h-[187px] flex-col rounded-[10px] border-[1px] border-border py-[16px]">
              <div className="flex flex-col gap-y-[12px]">
                <h5 className="justify-center px-[12px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
                  Product Listings
                </h5>
                <div className="flex items-center justify-between px-[12px]">
                  <div className="flex items-center gap-x-[2px] text-[10px] font-[400] leading-[14.5px] tracking-[-0.5%] text-black">
                    <span>Sort by:</span>
                    <select className="font-[600] text-black">
                      <option className="font-[600]">Top Selling</option>
                      <option className="font-[600]">Best Selling</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-x-[2px]">
                    <span className="text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-black">
                      See all
                    </span>
                    <ArrowRight01Icon className="size-[16px] text-[#666666]" />
                  </div>
                </div>
              </div>
              <div className="mt-[24px]">
                <Listings />
              </div>
              <p className="flex hidden h-full w-full items-center px-[12px] text-center text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                You have no order yet
              </p>
            </div>
          </div>
          {/* Ratings */}
          <div className="flex min-w-[380px] flex-col gap-y-[16px]">
            {/* Ratings and Reviews */}
            <div className="gapy-[32px] flex h-[187px] flex-col rounded-[10px] border-[1px] border-border py-[16px]">
              <div className="flex flex-col gap-y-[12px]">
                <h5 className="px-[12px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
                  Ratings and Review
                </h5>
              </div>
              <div className="mt-[24px]"></div>
              <p className="flex hidden h-full w-full items-center px-[12px] text-center text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                You have not added a product yet
              </p>
            </div>
            {/* Quotes */}
            <div className="gapy-[32px] flex h-[203px] flex-col rounded-[10px] border-[1px] border-border py-[16px]">
              <h5 className="px-[12px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
                Quotes
              </h5>
              <p className="flex h-full w-full items-center px-[12px] text-center text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                You have not added a post yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersDashboard;

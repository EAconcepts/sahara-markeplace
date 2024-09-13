"use client";

import { Button } from "@/components/ui/button";
import { Header } from "./(components)/header";
import { MapsLocation01Icon } from "hugeicons-react";
import { IoCallOutline } from "react-icons/io5";
// import RecentSearches from "./(components)/recent-searches";
import { useAuth } from "@/utils/useAuth";
// import { newArrivals } from "../(components)/reviews";
import { useGet } from "@/utils/useGet.";
import Link from "next/link";
import OrderCard from "./my-orders/(components)/order-card";
import Loader from "../(components)/loader";

const Dashboard = () => {
  const { user } = useAuth();
  // console.log(user)
  const { data, isPending } = useGet("user/dashboard", "userDashboard");
  console.log(data);
  return (
    <div className="lg:pt-[40px] pt-[16px]">
      <Header title={"Dashboard"} className="max-lg:text-[]" />
      {/* Recent Orders & Default Address */}
      <div className="mt-[32px] flex gap-x-[24px] max-lg:flex-col">
        {/* Recent Orders */}
        <div className="flex w-full flex-col gap-y-[12px]">
          <h4 className="px-[24px] text-[16px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary lg:text-[20px]">
            Recent Orders
          </h4>
          {isPending ? (
            <Loader />
          ) : data?.data?.data?.orders ? (
            <div className="mt[24px] lg:mt-[16px] flex flex-col gap-[16px] lg:gap-y-[24px] idden">
              {data?.data?.data?.orders?.slice(0,3)?.map((order: any) => (
                <OrderCard date={order?.created_at} product={order?.products} key={order?.id} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[187px] flex-col items-center justify-center rounded-[10px] border-[1px] border-border p-[24px]">
              <span className="text-[14px] font-[400] leading-[20.3px]">
                You have place no order yet
              </span>
            </div>
          )}
        </div>
        {/* Default Address */}
        <div className="flex w-full shrink-0 flex-col gap-y-[12px] max-lg:mt-[16px] lg:w-[400px]">
          <h4 className="px-[24px] text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
            Default Address
          </h4>
          <div className="flex min-h-[187px] flex-col items-center justify-center gap-y-[24px] rounded-[10px] border-[1px] border-border p-[24px]">
            <div className="flex flex-col gap-y-[8px] font-[400]">
              <h6 className="text-[14px] font-[600] capitalize leading-[20.3px] text-blackPrimary">
                {user?.first_name} {user?.last_name}
              </h6>
              <div className="flex items-center gap-x-[8px]">
                <MapsLocation01Icon className="size-[20px] text-greenPrimary" />
                <span className="line-clamp-1 font-inter text-[14px] leading-[20.3px] text-[#787C83]">
                  {user?.address} {user?.city}
                </span>
              </div>
              <div className="flex items-center gap-x-[8px]">
                <IoCallOutline className="text-[16px] text-greenPrimary" />
                <span className="font-inter text-[14px] leading-[20.3px] text-[#787C83]">
                  {user?.phone}
                </span>
              </div>
            </div>
            <Link href="/dashboard/settings">
              <Button className="h-[39px] w-full rounded-[8px] bg-greenPrimary py-[8px] text-[16px] font-[600] leading-[23.2px] text-white">
                Add New Address
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Recent Searches */}
      {/* <RecentSearches products={newArrivals}/> */}
    </div>
  );
};

export default Dashboard;

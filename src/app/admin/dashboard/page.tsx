"use client";

import { Header } from "@/app/dashboard/(components)/header";
import LastUpdated from "@/app/sellers/dashboard/(components)/last-updated";
import { ArrowRight01Icon, ChartLineData02Icon } from "hugeicons-react";
import totalSales from "@/assets/images/total-sales.svg";
import totalOrders from "@/assets/images/total-order.svg";
import totalDelivery from "@/assets/images/total-delivery.svg";
import newCustomers from "@/assets/images/new-customers.svg";
import Image from "next/image";
import image from "@/assets/images/details2.png";
import RecentOrders from "./(components)/recent-orders";
import TotalSalesCard from "./(components)/total-sales-card";
import { useGet } from "@/utils/useGet.";
import Loader from "@/app/(components)/loader";

const AdminDashboard = () => {
  const { data, isPending } = useGet("admin/orders", "adminOrders");
  console.log("orders", data);
  const { data: dashbd } = useGet("admin/dashboard", "adminDshbd");
  console.log("dashboard", dashbd);
  const stats = [
    {
      title: "Total Sales",
      icon: totalSales,
      value: `$${dashbd?.data?.data?.sales?.toLocaleString()}`,
      percent: "0%",
      status: "up",
    },
    {
      title: "Total Order",
      icon: totalOrders,
      value: dashbd?.data?.data?.orders,
      percent: "0%",
      status: "up",
    },
    {
      title: "Total Delivery",
      icon: totalDelivery,
      value: "0",
      percent: "0%",
      status: "up",
    },
    {
      title: "New Customers",
      icon: newCustomers,
      value: dashbd?.data?.data?.users?.length,
      percent: "0%",
      status: "down",
    },
  ];
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <div className="font-openSans">
      {/* Last Updated */}
      <div className="mt-[8px]">
        <LastUpdated />
      </div>
      <div className="mt-[12px] flex flex-col gap-y-[32px] py-[16px]">
        <Header title="Dashboard" calendar={true} />
        {/* Main */}
        <main className="flex flex-col gap-y-[32px]">
          <div className="flex flex-col gap-y-[16px]">
            {/* Total sales */}
            <div className="flex justify-between gap-[16px]">
              {stats?.map((stat, index) => (
                <TotalSalesCard stat={stat} key={index} />
              ))}
            </div>
            {/* Revenue */}
            <div className=""></div>
            {/* Sales by Location */}
            <div></div>
          </div>
          {/* Top selling & Recent Orders */}
          <div className="flex w-full gap-[16px]">
            {/* Top Selling Products */}
            <div className="flex w-[384px] shrink-0 flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
              <h3 className="text-[20px] font-[600] leading-[29px] text-black">
                Top Selling Products
              </h3>
              <div className="flex flex-col gap-y-[16px]">
                {dashbd?.data?.data?.products
                  ?.slice(0, 5)
                  ?.map((product: any) => (
                    <div className="flex justify-between" key={product?.id}>
                      <div className="flex items-center gap-x-[8px]">
                        <Image
                          src={`${imgBaseUrl}/${product?.image}`}
                          width={48}
                          height={48}
                          alt={product?.name}
                          className="rounded-[4px] object-cover lg:size-[48px]"
                        />
                        <div className="flex flex-col gap-y-[8px]">
                          <h6 className="text-[14px] font-[600] leading-[20.3px] text-black">
                            {product?.name}
                          </h6>
                          <span className="text-[12px] font-[300] leading-[17.4px] text-black">
                            Category: {product?.category}
                          </span>
                        </div>
                      </div>
                      <p className="h-fit rounded-[4px] border-[1px] border-border px-[8px] py-[4px]">
                        0 Sales
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            {/* Recent Orders */}
            <div className="flex w-full flex-col gap-[24px] rounded-[10px] border-[1px] border-border py-[24px]">
              {/* Heading */}
              <div className="flex items-center justify-between px-[12px]">
                <h4 className="text-[20px] font-[600] leading-[24px] text-blackPrimary">
                  Recent Orders
                </h4>
                <div className="flex items-center">
                  <span className="text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-black">
                    See all
                  </span>
                  <ArrowRight01Icon className="size-[16px] text-[#666666]" />
                </div>
              </div>
              {/* Table */}
              {isPending ? (
                <Loader />
              ) : (
                <RecentOrders products={data?.data?.data?.trx} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

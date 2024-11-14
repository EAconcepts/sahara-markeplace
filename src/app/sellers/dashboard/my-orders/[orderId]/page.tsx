"use client";

import { useParams, useRouter } from "next/navigation";
// import { Header } from "../../(components)/header";
import { ArrowRight01Icon, CheckmarkCircle01Icon } from "hugeicons-react";
// import Details from "./(components)/details";
// import TrackingOrder from "./(components)/tracking-order";
// import Updates from "./(components)/updates";
import { useGet } from "@/utils/useGet.";
import { Header } from "@/app/dashboard/(components)/header";
import TrackingOrder from "@/app/dashboard/my-orders/[orderId]/(components)/tracking-order";
import Details from "@/app/dashboard/my-orders/[orderId]/(components)/details";

const OrderDetails = () => {
  const { orderId } = useParams();
  console.log(orderId);
  const { data, isPending } = useGet("vendor/orders", "vendorOrders");
  console.log(data);
  const order = data?.data?.data?.trx.find(
    (order: any) => order?.id === Number(orderId),
  );
  console.log(order);
  return (
    <div>
      {/* BreadCrumb */}
      <div></div>
      {/* Heading */}
      <div className="mt-[12px] pt-[16px]">
        <Header title={`Order`} text2={`#${orderId}`} style2="font-openSans" />
      </div>
      {/* Tracking Order */}
      <div className="mt-[32px] h-[190px] border-[1px] border-border px-[24px] py-[16px]">
        <TrackingOrder order={order} />
      </div>
      {/* Order Details */}
      <div className="mt-[32px]">
        <Details order={order} />
        {/* <Updates/> */}
      </div>
    </div>
  );
};

export default OrderDetails;

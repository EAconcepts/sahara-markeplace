"use client";

import { useParams, useRouter } from "next/navigation";
import { Header } from "../../(components)/header";
import { ArrowRight01Icon, CheckmarkCircle01Icon } from "hugeicons-react";
import Details from "./(components)/details";
import TrackingOrder from "./(components)/tracking-order";
import Updates from "./(components)/updates";

const OrderDetails = () => {
  const { orderId } = useParams();
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
        <TrackingOrder />
      </div>
      {/* Order Details */}
      <div className="mt-[32px]">
        <Details />
        {/* <Updates/> */}
      </div>
    </div>
  );
};

export default OrderDetails;

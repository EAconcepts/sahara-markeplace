import OrderDetails from "@/app/sellers/dashboard/my-orders/(components)/order-details";
import React from "react";

const OrderDetail = () => {
  return (
    <div>
      <OrderDetails queryKey="vendorOrders" url="vendor/orders" />
    </div>
  );
};

export default OrderDetail;

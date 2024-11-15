import React from "react";
import OrderDetails from "../(components)/order-details";

const OrdersDetail = () => {
  return (
    <div>
      <OrderDetails url="vendor/orders" queryKey="vendorOrders" />
    </div>
  );
};

export default OrdersDetail;

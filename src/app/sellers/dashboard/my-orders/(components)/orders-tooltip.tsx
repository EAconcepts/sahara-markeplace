"use client";

import { useAuth } from "@/utils/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { toast } from "sonner";

const ToolTip = ({ order }: { order?: any }) => {
  //   console.log(order);
  const [showToolTip, setShowToolTip] = useState(false);
  const statuses = ["pending", "ready", "shipped", "delivered"];
  const { token, baseUrl } = useAuth();
  const [data, setData] = useState({
    current: "",
    sid: order && order?.id,
  });
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const handleStatusUpdate = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    status: any,
  ) => {
    e.stopPropagation();
    setShowToolTip(false);
    setData((prev: any) => ({ ...prev, sid: order?.id, current: status }));
    // console.log(status), order;
    statusMutation.mutate(status);
  };
  const statusMutation = useMutation({
    mutationFn: (status: string) => {
      return axios.post(`${baseUrl}/vendor/update-order`, data, { headers });
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Order status updated successfully!");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
      console.log(error);
    },
  });
  return (
    <div>
      <div className="relative flex size-[24px] items-center justify-center rounded-[8px] border-[1px] border-border max-lg:hidden">
        <HiOutlineEllipsisVertical
          onClick={(e) => {
            e.stopPropagation();
            setShowToolTip((prev: boolean) => !prev);
          }}
          className="text-[14px] text-blackPrimary"
        />
        {showToolTip && (
          <div className="absolute left-[20px] top-[-8px] flex flex-col gap-[16px] bg-white p-[8px] text-black">
            {statuses?.map((status: any, index: number) => (
              <span onClick={(e) => handleStatusUpdate(e, status)} key={index}>
                {status}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolTip;

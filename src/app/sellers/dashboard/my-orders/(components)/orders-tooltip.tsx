"use client";

import { useAuth } from "@/utils/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { toast } from "sonner";

const ToolTip = ({ order, refetch }: { order?: any; refetch: any }) => {
  // console.log(refetch);
  const tooltipRef: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);
  const [showToolTip, setShowToolTip] = useState(false);
  const statuses = ["pending", "ready", "shipped", "delivered"];
  const { token, baseUrl, userType } = useAuth();
  const [data, setData] = useState({
    current: "",
    sid: order && order?.id,
  });
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setShowToolTip(false);
        // console.log("outside click");
      }
    };
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [tooltipRef, setShowToolTip]);
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
      return axios.post(
        `${baseUrl}${userType == "admin" ? "/admin/update-order" : "/vendor/update-order"}`,
        data,
        { headers },
      );
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Order status updated successfully!");
      refetch();
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
      console.log(error);
    },
  });
  return (
    <div>
      <div
        ref={tooltipRef}
        className="relative flex size-[24px] items-center justify-center rounded-[8px] border-[1px] border-border max-lg:hidden"
      >
        <HiOutlineEllipsisVertical
          onClick={(e) => {
            e.stopPropagation();
            setShowToolTip((prev: boolean) => !prev);
          }}
          className="text-[14px] text-blackPrimary"
        />
        {showToolTip && (
          <div className="absolute right-[26px] top-[-4px] flex flex-col items-center gap-[16px] rounded-md border-[1px] border-border bg-white py-[8px] text-black shadow-lg lg:w-[130px]">
            {statuses?.map((status: any, index: number) => (
              <span
                className="hover:bg-slate-400"
                onClick={(e) => handleStatusUpdate(e, status)}
                key={index}
              >
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

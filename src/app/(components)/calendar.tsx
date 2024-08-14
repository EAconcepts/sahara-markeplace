"use client";

import { Calendar } from "@/components/ui/calendar";
import { ArrowRight01Icon, Calendar03Icon } from "hugeicons-react";
import React, { useState } from "react";

const Calendarr = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="relative shrink-0">
      <div
        onClick={() => setShowCalendar((prev) => !prev)}
        className="flex shrink-0 gap-x-[8px] rounded-[8px] border-[1px] border-border px-[12px] py-[8px]"
      >
        <Calendar03Icon className="size-[16px] text-[#8E97A6]" />
        <div className="flex items-center gap-x-[4px]">
          <span className="text-[14px] font-[400] leading-[20.3px] text-[#8E97A6]">
            25 May - 24 Jun.
          </span>
          <ArrowRight01Icon className="size-[16px] rotate-[-90deg] text-[#8E97A6]" />
        </div>
      </div>
      {showCalendar && (
        <div className="absolute right-0 top-[40px]">
          {" "}
          <Calendar />
        </div>
      )}
    </div>
  );
};

export default Calendarr;

"use client";

import { Triangle02Icon } from "hugeicons-react";
import React, { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-y-[24px] border-b-[1px] border-b-border pb-[16px]">
      <div className="flex gap-[8px]" onClick={() => setOpen((prev) => !prev)}>
        <Triangle02Icon className="size-[16px] text-greenPrimary" />
        <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary lg:text-[16px]">
          How do I track my packages?
        </h5>
      </div>
      {open && (
        <pre className="text-wrap break-words text-[14px] font-[400] leading-[20.3px] lg:text-[16px]">
          Once you purchase an item on the Sahara Eagle Marketplace, we
          automatically create an account for you as this helps in getting your
          item delivered to you easily. Therefore to track your package, simply
          go to your user dashboard which is tagged “My Account”, then go to
          Your Order. Find the order you want to track. Select Track Package
          next to your order. View all updates to track delivery progress.
        </pre>
      )}
    </div>
  );
};

export default Faq;

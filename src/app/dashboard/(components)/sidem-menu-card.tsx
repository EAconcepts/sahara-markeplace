'use client'

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const MenuCard = ({ menu, setShowMenu }: { menu?: any; setShowMenu?: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isOpen, setIsopen] = useState(false);
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="max-lg:w-full" >
      <Button
        onClick={() => { router.push(menu?.path)
          setIsopen((prev)=>!prev);
         !menu?.sublinks && setShowMenu && setShowMenu(false)
        }}
        className={`relative ${path == menu?.path ? "bg-greenPrimary text-white max-lg:w-full" : "bg-transparent text-blackPrimary"} flex h-[44px] w-full items-center justify-between rounded-[4px] px-[16px] py-[12px]`}
      >
        <div className="flex items-center gap-x-[12px]">
          {menu?.icon && <menu.icon />}
          <span
            className={` ${path == menu?.path && "font-[600]"} text-[14px] font-[400] leading-[20.3px]`}
          >
            {menu?.title}
          </span>
        </div>
        {menu?.value && (
          <p className="rounded-[10px] bg-[#E4E7EC] px-[8px] text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-[#787C83]">
            {menu?.value}
          </p>
        )}
      </Button>
      {isOpen && menu?.sublinks && (
        <div className="flex flex-col gap-y-[8px] pl-[44px]">
          {menu?.sublinks?.map((sub: any, index: number) => (
            <div
              onClick={() => {
                router.push(sub.path)
               setShowMenu && setShowMenu(false)
              }}
              className="flex items-center gap-x-[12px]"
              key={index}
            >
              {sub.icon && <sub.icon />}
              <span
                className={` ${path == sub.path && "font-[600]"} text-[14px] font-[400] leading-[20.3px]`}
              >
                {sub.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

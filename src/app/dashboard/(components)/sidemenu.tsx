"use client";

import React from "react";
import logo from "@/assets/images/logo-sahara.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import {
  MarketingIcon,
  CustomerSupportIcon,
  Settings02Icon,
  UserCircleIcon,
  Logout02Icon,
} from "hugeicons-react";
import { NavlinksProps } from "@/app/sellers/dashboard/(components)/navlinks";
import { useAuth } from "@/utils/useAuth";
import Link from "next/link";

const Sidemenu = ({
  links,
  settingsLink,
}: {
  links: NavlinksProps[];
  settingsLink?: string;
}) => {
  const { user } = useAuth();
  const path = usePathname();
  const router = useRouter();
  return (
    <div className="border-r-[1px] border-border px-[24px] pt-[12px]">
      {/* logo */}
      <Link href={"/"} className="flex items-center gap-x-[4px] pl-[24px]">
        <Image
          src={logo}
          width={56}
          height={56}
          alt="logo"
          className="lg:size-[56px]"
        />
        <h3 className="font-playfair text-[24px] font-[600] leading-[34.8px] text-blackPrimary">
          Sahara Eagle
        </h3>
      </Link>
      {/* Menu */}
      <div className="mt-[32px] flex w-full flex-col items-start gap-y-[4px] border-b-[1px] border-border pb-[12px] font-openSans text-[14px] font-[400] leading-[20.3px]">
        {links?.map((menu: any, index: number) => (
         <div   key={index}>
         <Button
            onClick={() => router.push(menu.path)}
          
            className={`relative ${path == menu.path ? "bg-greenPrimary text-white" : "bg-transparent text-blackPrimary"} flex h-[44px] w-full items-center justify-between rounded-[4px] px-[16px] py-[12px]`}
          >
            <div className="flex items-center gap-x-[12px]">
              {menu.icon && <menu.icon />}
              <span
                className={` ${path == menu.path && "font-[600]"} text-[14px] font-[400] leading-[20.3px]`}
              >
                {menu.title}
              </span>
            </div>
            {menu.value && (
              <p className="rounded-[10px] bg-[#E4E7EC] px-[8px] text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-[#787C83]">
                {menu.value}
              </p>
            )}
          
          </Button>
          {menu?.sublinks && (
              <div className="pl-[44px] flex flex-col gap-y-[8px] ">
                {menu?.sublinks?.map((sub: any, index: number) => (
                  <div 
            onClick={() => router.push(sub.path)}

                  className="flex items-center gap-x-[12px]" key={index}>
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
        ))}
      </div>

      <div className="mt-[200px] flex flex-col">
        <div className="flex flex-col gap-y-[12px] pb-[12px] pl-[8px]">
          <button className="flex items-center gap-x-[12px] px-[16px] py-[12px]">
            <MarketingIcon />{" "}
            <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              News
            </span>
          </button>
          <button className="flex items-center gap-x-[12px] px-[16px] py-[12px]">
            <CustomerSupportIcon />{" "}
            <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              Help & Support
            </span>
          </button>
          <button
            onClick={() => router.push(`${settingsLink}`)}
            className="flex items-center gap-x-[12px] px-[16px] py-[12px]"
          >
            <Settings02Icon />{" "}
            <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              Settings
            </span>
          </button>
          <div className="h-[1px] w-full bg-border"></div>
        </div>
        {/* logout */}
        <div className="mt-[10px] flex w-full items-center justify-between px-[24px] py-[32px]">
          <div className="flex items-center gap-x-[12px]">
            <UserCircleIcon />
            <div className="flex flex-col">
              <h6 className="text-[14px] font-[700] leading-[20.3px] text-blackPrimary">
                {user?.first_name} {user?.last_name}
              </h6>
              <span className="text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
                Verify email
              </span>
            </div>
          </div>
          <Logout02Icon />
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;

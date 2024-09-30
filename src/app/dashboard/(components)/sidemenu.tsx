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
  Cancel01Icon,
} from "hugeicons-react";
import { NavlinksProps } from "@/app/sellers/dashboard/(components)/navlinks";
import { useAuth } from "@/utils/useAuth";
import Link from "next/link";
import { MenuCard } from "./sidem-menu-card";

const Sidemenu = ({
  links,
  settingsLink,
  setShowMenu,
}: {
  links: NavlinksProps[];
  settingsLink?: string;
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user, logout, userType } = useAuth();
  console.log(userType);
  const path = usePathname();
  const router = useRouter();
  // console.log(settingsLink)
  const handleLogout = () => {
    logout();
    if (userType === "seller") {
      router.replace("/sellers/auth/signin");
    } else if (userType === "admin") {
      router.replace("/admin/signin");
    } else {
      router.replace("/auth/signin");
    }
  };
  return (
    <div className="max-lg:w-ful px-[24px] pt-[12px] max-lg:z-[999] max-lg:flex max-lg:flex-col lg:border-r-[1px] lg:border-border">
      {/* X close */}
      <Cancel01Icon
        onClick={() => setShowMenu && setShowMenu(false)}
        className="mt-[24px] size-[20px] self-end text-black lg:hidden"
      />
      {/* logo */}
      <Link
        href={"/"}
        className="hidden items-center gap-x-[4px] lg:flex lg:pl-[24px]"
      >
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
          <MenuCard key={index} menu={menu} setShowMenu={setShowMenu} />
        ))}
      </div>

      <div
        className={`flex flex-col lg:mt-[200px] ${userType == "admin" && "lg:mt-0"}`}
      >
        <div className="flex flex-col gap-y-[12px] pb-[12px] pl-[8px]">
          {/* <button className="flex items-center gap-x-[12px] px-[16px] py-[12px]">
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
          </button> */}
          {userType != "admin" && (
            <button
              onClick={() => {
                setShowMenu && setShowMenu(false);
                settingsLink && router.push(settingsLink);
              }}
              className="flex items-center gap-x-[12px] px-[16px] py-[12px]"
            >
              <Settings02Icon />{" "}
              <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                Settings
              </span>
            </button>
          )}
          <div className="h-[1px] w-full bg-border"></div>
        </div>
        {/* logout */}
        <div className="mt-[10px] flex w-full items-center justify-between px-[24px] py-[32px]">
          <div className="flex items-center gap-x-[12px]">
            {userType !== "admin" && <UserCircleIcon />}
            <div className="flex flex-col">
              <h6 className="text-[14px] font-[700] leading-[20.3px] text-blackPrimary">
                {user?.first_name} {user?.last_name}
              </h6>
              {userType !== "admin" ? (
                <span className="text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
                  Verify email
                </span>
              ) : (
                <span className="text-[14px] font-[400] leading-[20.3px] text-failure">
                  Logout
                </span>
              )}
            </div>
          </div>
          <Logout02Icon onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;

"use client";

import { CartModal } from "@/app/(components)/modals/cart-modal";
import { useAuth } from "@/utils/useAuth";
import { useGet } from "@/utils/useGet.";
import {
  FavouriteIcon,
  Menu11Icon,
  Notification02Icon,
  Search01Icon,
  ShoppingCart01Icon,
  UserCircleIcon,
} from "hugeicons-react";
import React, { useState } from "react";
// import { navlinks } from "@/app/sellers/dashboard/(components)/navlinks";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo-sahara.png";
import Link from "next/link";
import Sidemenu from "@/app/dashboard/(components)/sidemenu";

const Topbar = ({
  links,
  settingsLink,
}: {
  links?: any;
  settingsLink?: string;
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const router = useRouter();
  const { user, userType } = useAuth();
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <header className="flex h-[66px] w-full items-center justify-between border-b-[1px] border-border pb-[16px] pt-[8px] max-lg:px-[24px]">
      <form className="flex h-[36px] w-[50%] gap-[8px] rounded-[12px] border-[0.5px] border-border px-[12px] py-[8px] font-inter">
        <Search01Icon className="size-[20px] text-border" />
        <input
          type="text"
          placeholder="Search order, products..."
          className="h-full w-full text-[14px] leading-[20.3px] text-blackPrimary placeholder:text-[#8E97A6]"
        />
      </form>
      <Link href={"/"}>
        <Image
          src={logo}
          width={80}
          height={80}
          alt="logo"
          className="size-[48px] lg:hidden lg:size-[80px]"
        />
      </Link>
      <div className="flex items-center gap-x-[24px]">
        <div className="relative hidden">
          <span className="py[1px] px[3px] absolute -top-[4px] right-0 size-[16px] self-center rounded-full bg-failure text-center text-[10px] text-white">
            0
          </span>
          <Notification02Icon className="size-[24px] text-blackPrimary" />
        </div>
        <Link href={"#"} className="flex items-center gap-[8px]">
          <span className="text-[16px] font-[600] leading-[23.2px] text-blackPrimary">
            Admin
          </span>
          <UserCircleIcon className="hidden size-[36px] lg:block" />
        </Link>
        <Menu11Icon
          onClick={() => setShowMenu((prev) => true)}
          className="lg:hidden"
        />
      </div>
      {showMenu && (
        <div className="fixed inset-0 hidden h-screen w-full bg-white lg:hidden">
          <div className="h-full overflow-y-scroll">
            <Sidemenu
              settingsLink={settingsLink}
              setShowMenu={setShowMenu}
              links={links}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Topbar;

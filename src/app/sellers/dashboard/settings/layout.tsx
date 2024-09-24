"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Cancel01Icon, Menu01Icon } from "hugeicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settingsLinks = [
    { title: "Personal Information", link: "" },
    { title: "Store Settings", link: "store-settings" },
    { title: "Billing Information", link: "billing-info" },
    { title: "Change Password", link: "change-password" },
    { title: "Membership Plan", link: "membership-plan" },
    { title: "Notifications", link: "notifications" },
  ];
  const path = usePathname();
  // console.log(path);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="mt-[8px] flex h-full w-full flex-col gap-y-[32px] overflow-y-hidden py-[16px] font-openSans">
      <Header title="Settings" className="max-lg:px-[24px]" />
      <div className="flex h-full w-full gap-[24px] overflow-y-hidden max-lg:flex-col">
        {/* Side menu */}
        <div className="lg:w-[30%]">
          {/* MOBILE TOGGLE */}
          <div className="px-[24px] lg:hidden">
            <Menu01Icon
              onClick={() => {
                console.log("settings");
                setShowMenu((prev) => !prev);
              }}
              className="size-[18px]"
            />
          </div>
          <aside
            className={`shrink-0 lg:w-full ${showMenu ? "inset-0 z-40 flex flex-col bg-white pt-[32px] max-lg:fixed" : "max-lg:hidden"} flex flex-col border-r-[1px] py-[12px] pl-[12px] max-lg:px-[12px]`}
          >
            <Cancel01Icon
              onClick={() => setShowMenu(false)}
              className="self-end lg:hidden"
            />
            <div className="flex flex-col gap-y-[12px] px-[8px] lg:shrink-0">
              {settingsLinks.map((item, index) => (
                <Link
                  onClick={() => setShowMenu(false)}
                  key={index}
                  href={`/sellers/dashboard/settings/${item.link}`}
                  className={`px-[16px] py-[12px] text-[14px] font-[400] leading-[20.03px] text-blackPrimary lg:shrink-0 ${(path == `/sellers/dashboard/settings/${item.link}` || (path == "/sellers/dashboard/settings" && index == 0)) && "rounded-[4px] bg-[#C4D79B] font-[600]"}`}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href={"/sellers/dashboard/settings/delete-account"}
                className={`px-[16px] py-[12px] text-start text-[14px] font-[400] leading-[20.3px] text-[#E8112D] ${path == "/sellers/dashboard/settings/delete-account" && "rounded-[4px] bg-failure font-[600] text-white"}`}
              >
                Delete Account
              </Link>
            </div>
          </aside>
        </div>

        {/* Main settings screen */}
        <main className="w-full overflow-y-scroll">{children}</main>
      </div>
    </div>
  );
}

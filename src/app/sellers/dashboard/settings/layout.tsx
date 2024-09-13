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
    { title: "Personal Information", link: "personal-info" },
    { title: "Store Settings", link: "" },
    { title: "Billing Information", link: "billing-info" },
    { title: "Change Password", link: "change-password" },
    { title: "Membership Plan", link: "membership-plan" },
    { title: "Notifications", link: "notifications" },
  ];
  const path = usePathname();
//   console.log(path);
const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <div className="w-full mt-[8px] h-full flex flex-col gap-y-[32px] py-[16px] font-openSans overflow-y-hidden">
      <Header title="Settings" className="max-lg:px-[24px]" />
      <div className="w-full flex max-lg:flex-col gap-[24px] h-full overflow-y-hidden">
        {/* Side menu */}
        <div className="">
      <div className="lg:hidden px-[24px]">
        <Menu01Icon onClick={()=>{console.log('settings');setShowMenu((prev)=>!prev)}} className="size-[18px] "/>
      </div>
        <aside className={`shrink-0 ${showMenu ? 'max-lg:fixed  flex flex-col z-40 inset-0 bg-white pt-[32px]' : 'max-lg:hidden '} flex flex-col border-r-[1px] py-[12px] pl-[12px] max-lg:px-[12px]`}>
          <Cancel01Icon onClick={()=>setShowMenu(false)} className="lg:hidden self-end"/>
          <div className="flex flex-col gap-y-[12px] px-[8px]">
            {settingsLinks.map((item, index) => (
              <Link
              onClick={()=>setShowMenu(false)}
                key={index}
                href={`/sellers/dashboard/settings/${item.link}`}
                className={`px-[16px] py-[12px] text-[14px] font-[400] leading-[20.03px] text-blackPrimary ${path == `/sellers/dashboard/settings/${item.link}` && "rounded-[4px] bg-[#C4D79B] font-[600]"}`}
              >
                {item.title}
              </Link>
            ))}
            <button className=" text-start px-[16px] py-[12px] text-[14px] font-[400] leading-[20.3px] text-[#E8112D]">
              Delete Account
            </button>
          </div>
        </aside>
        </div>

        {/* Main settings screen */}
        <main className="w-full overflow-y-scroll">
            {children}
        </main>
      </div>
    </div>
  );
}

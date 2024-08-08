"use client";

import { Header } from "@/app/dashboard/(components)/header";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <div className="w-full mt-[8px] h-full flex flex-col gap-y-[32px] py-[16px] font-openSans overflow-y-hidden">
      <Header title="Settings" />
      <div className="w-full flex gap-[24px] h-full overflow-y-hidden">
        <aside className="shrink-0 flex flex-col border-r-[1px] py-[12px] pl-[12px]">
          <div className="flex flex-col gap-y-[12px] px-[8px]">
            {settingsLinks.map((item, index) => (
              <Link
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
        {/* Main settings screen */}
        <main className="w-full overflow-y-scroll">
            {children}
        </main>
      </div>
    </div>
  );
}

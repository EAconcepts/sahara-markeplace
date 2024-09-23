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
    { title: "Change Password", link: "change-password" },
    { title: "Shipping Address", link: "shipping-address" },
    { title: "Payment Method", link: "payment-method" },
    { title: "Notifications", link: "notifications" },
  ];
  const path = usePathname();
  //   console.log(path);
  return (
    <div className="mt-[8px] flex h-full w-full flex-col gap-y-[32px] overflow-y-hidden py-[16px] font-openSans">
      <Header title="Settings" />
      <div className="flex h-full w-full gap-[24px] overflow-y-hidden">
        <aside className="flex shrink-0 flex-col border-r-[1px] py-[12px] pl-[12px]">
          <div className="flex flex-col gap-y-[12px] px-[8px]">
            {settingsLinks.map((item, index) => (
              <Link
                key={index}
                href={`/dashboard/settings/${item.link}`}
                className={`px-[16px] py-[12px] text-[14px] font-[400] leading-[20.03px] text-blackPrimary ${path == `/sellers/dashboard/settings/${item.link}` && "rounded-[4px] bg-[#C4D79B] font-[600]"}`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href={"delete-account"}
              className="px-[16px] py-[12px] text-start text-[14px] font-[400] leading-[20.3px] text-[#E8112D]"
            >
              Delete Account
            </Link>
          </div>
        </aside>
        {/* Main settings screen */}
        <main className="w-full overflow-y-scroll">{children}</main>
      </div>
    </div>
  );
}

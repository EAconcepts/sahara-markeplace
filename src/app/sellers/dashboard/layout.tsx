"use client";

import { Welcome } from "@/app/(components)/Welcome";
import Sidemenu from "@/app/dashboard/(components)/sidemenu";
import Topbar from "@/app/dashboard/(components)/topbar";
import { sellersNavLinks } from "./(components)/navlinks";
import { useAuth } from "@/utils/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SellersDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = "/sellers/dashboard/settings";
  const { token, userType } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (userType !== "seller" && token) {
      router.replace("/sellers/auth/signin");
      return;
    }
  }, [token, userType]);
  return (
    <>
      <div className="gap-x-[24px] lg:flex lg:h-screen lg:overflow-y-hidden lg:pr-[96px]">
        <aside className="h-full w-[284px] shrink-0 overflow-y-scroll max-lg:hidden">
          <Sidemenu links={sellersNavLinks} settingsLink={settings} />
        </aside>
        <main className="h-full w-full lg:overflow-y-scroll">
          <Topbar settingsLink={settings} links={sellersNavLinks} />
          {children}
          <Welcome />
        </main>
      </div>
    </>
  );
}

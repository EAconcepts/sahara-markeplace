"use client";
import {
  DashboardSquare03Icon,
  DiscountIcon,
  FavouriteIcon,
  HugeiconsProps,
  Message01Icon,
  PackageIcon,
} from "hugeicons-react";
import { Welcome } from "../(components)/Welcome";
import { ActiveStatusModal } from "./(components)/modals/account-modal";
import Sidemenu from "./(components)/sidemenu";
import Topbar from "./(components)/topbar";
import { navlinks } from "../sellers/dashboard/(components)/navlinks";
import { useEffect } from "react";
import { useAuth } from "@/utils/useAuth";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/auth/signin");
      return;
    }
  }, [token]);
  return (
    <>
      <div className="flex gap-x-[24px] max-lg:flex-col max-lg:px-[24px] lg:h-screen lg:overflow-y-hidden lg:pr-[96px]">
        <aside className="h-full w-[284px] shrink-0 overflow-y-scroll max-lg:hidden">
          <Sidemenu links={navlinks} settingsLink="/dashboard/settings" />
        </aside>
        <main className="h-full w-full lg:overflow-y-scroll">
          <Topbar links={navlinks} />
          <div className="mt-[24px]">
            <ActiveStatusModal />
          </div>
          {children}
        </main>
      </div>
      <div className="mt-[24px]">
        <Welcome />
      </div>
    </>
  );
};

export default DashboardLayout;

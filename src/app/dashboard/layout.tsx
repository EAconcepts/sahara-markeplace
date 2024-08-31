'use client' 
import { DashboardSquare03Icon, DiscountIcon, FavouriteIcon, HugeiconsProps, Message01Icon, PackageIcon } from "hugeicons-react";
import { Welcome } from "../(components)/Welcome";
import { ActiveStatusModal } from "./(components)/modals/account-modal";
import Sidemenu from "./(components)/sidemenu";
import Topbar from "./(components)/topbar";
import { navlinks } from "../sellers/dashboard/(components)/navlinks";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <>
      <div className="flex max-lg:flex-col max-lg:px-[24px] lg:h-screen gap-x-[24px] lg:overflow-y-hidden lg:pr-[96px]">
        <aside className="max-lg:hidden h-full w-[284px] shrink-0 overflow-y-scroll">
          <Sidemenu links={navlinks}settingsLink="/dashboard/settings" />
        </aside>
        <main className="h-full w-full lg:overflow-y-scroll">
          <Topbar />
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

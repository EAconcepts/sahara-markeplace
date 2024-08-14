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
      <div className="flex h-screen gap-x-[24px] overflow-y-hidden pr-[96px]">
        <aside className="h-full w-[284px] shrink-0 overflow-y-scroll">
          <Sidemenu links={navlinks}settingsLink="/dashboard/settings" />
        </aside>
        <main className="h-full w-full overflow-y-scroll">
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

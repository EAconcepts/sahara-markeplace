import { Welcome } from "@/app/(components)/Welcome";
import Sidemenu from "@/app/dashboard/(components)/sidemenu";
import Topbar from "@/app/dashboard/(components)/topbar";
import { DashboardSquare03Icon, DiscountIcon, FavouriteIcon, Message01Icon, PackageIcon } from "hugeicons-react";
import { sellersNavLinks } from "./(components)/navlinks";

export default function SellersDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    return(
  <>
    <div className="flex h-screen gap-x-[24px] overflow-y-hidden pr-[96px]">
      <aside className="h-full w-[284px] shrink-0 overflow-y-scroll">
        <Sidemenu links={sellersNavLinks} />
      </aside>
      <main className="h-full w-full overflow-y-scroll">
        <Topbar />
        {children}
        <Welcome/>
      </main>
    </div>
  </>)
}

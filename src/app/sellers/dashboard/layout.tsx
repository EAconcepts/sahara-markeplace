import { Welcome } from "@/app/(components)/Welcome";
import Sidemenu from "@/app/dashboard/(components)/sidemenu";
import Topbar from "@/app/dashboard/(components)/topbar";
import { sellersNavLinks } from "./(components)/navlinks";

export default function SellersDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    return(
  <>
    <div className="lg:flex lg:h-screen gap-x-[24px] lg:overflow-y-hidden lg:pr-[96px]">
      <aside className="max-lg:hidden h-full w-[284px] shrink-0 overflow-y-scroll">
        <Sidemenu links={sellersNavLinks} settingsLink={"/sellers/dashboard/settings"} />
      </aside>
      <main className="h-full w-full lg:overflow-y-scroll">
        <Topbar />
        {children}
        <Welcome/>
      </main>
    </div>
  </>)
}

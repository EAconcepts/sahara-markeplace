import { Welcome } from "@/app/(components)/Welcome";
import Sidemenu from "@/app/dashboard/(components)/sidemenu";
import Topbar from "@/app/dashboard/(components)/topbar";
import { sellersNavLinks } from "./(components)/navlinks";

export default function SellersDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings= "/sellers/dashboard/settings"

    return(
  <>
    <div className="lg:flex lg:h-screen gap-x-[24px] lg:overflow-y-hidden lg:pr-[96px]">
      <aside className="max-lg:hidden h-full w-[284px] shrink-0 overflow-y-scroll">
        <Sidemenu links={sellersNavLinks} settingsLink={settings} />
      </aside>
      <main className="h-full w-full lg:overflow-y-scroll">
        <Topbar settingsLink={settings} links={sellersNavLinks} />
        {children}
        <Welcome/>
      </main>
    </div>
  </>)
}

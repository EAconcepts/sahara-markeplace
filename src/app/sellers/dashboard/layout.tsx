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
  // const navLinks =[
  
  //     { icon: DashboardSquare03Icon, title: "Dashboard", path: "sllers/dashboard" },
  //     { icon: PackageIcon, title: "My Orders", path: "sellers/dashboard/my-orders" },
  //     { icon: FavouriteIcon, title: "Reviews", path: "sellers/dashboard/Reviews" },
  //     { icon: Message01Icon, title: "Products", path: "sellers/dashboard/product-listings" },
  //     { icon: DiscountIcon, title: "Discounts", path: "sellers/dashboard/discounts", value: 10 },

  // ]
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

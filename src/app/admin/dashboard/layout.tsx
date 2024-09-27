import Sidemenu from "@/app/dashboard/(components)/sidemenu";
import { adminNavLinks } from "@/app/sellers/dashboard/(components)/navlinks";
import React from "react";
import Topbar from "./(components)/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen w-full gap-[24px] overflow-y-hidden pb-[40px] pr-[96px]">
        <aside className="shrink-0 overflow-y-scroll">
          <Sidemenu links={adminNavLinks} />
        </aside>
        <main className="h-full w-full overflow-y-scroll">
          <Topbar />
          <section>{children}</section>
        </main>
      </div>
    </>
  );
}

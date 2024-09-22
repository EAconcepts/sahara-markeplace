import Sidemenu from "@/app/dashboard/(components)/sidemenu";
import { adminNavLinks } from "@/app/sellers/dashboard/(components)/navlinks";
import React from "react";
import Topbar from "./(components)/Topbar";

export default function AdminLayout({children}:{children:React.ReactNode}){

    return(
        <>
        <div className="w-full flex pb-[40px] h-screen overflow-y-hidden pr-[96px] gap-[24px]">
            <aside className="shrink-0">
                <Sidemenu links={adminNavLinks}/>
            </aside>
            <main className="w-full overflow-y-scroll h-full">
                <Topbar/>
                <section>
                    {children}
                </section>
            </main>
        </div>
        </>
    )
}
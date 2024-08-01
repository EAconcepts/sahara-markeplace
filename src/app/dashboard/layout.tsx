import { Welcome } from "../(components)/Welcome";
import { ActiveStatusModal } from "./(components)/modals/account-modal";
import Sidemenu from "./(components)/sidemenu";
import Topbar from "./(components)/topbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen gap-x-[24px] overflow-y-hidden pr-[96px]">
        <aside className="h-full w-[284px] shrink-0 overflow-y-scroll">
          <Sidemenu />
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

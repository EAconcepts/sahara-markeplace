import { usePathname } from "next/navigation";
import Topnav from "./(components)/topnav";
import { useEffect } from "react";

export default function SellersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Topnav />
      {children}
    </div>
  );
}

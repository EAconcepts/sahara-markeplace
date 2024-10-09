"use client";

import { usePathname, useRouter } from "next/navigation";
import Topnav from "./(components)/topnav";
import { useEffect } from "react";
import { useAuth } from "@/utils/useAuth";

export default function SellersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userType, token } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (userType !== "seller" && !token) {
      router.replace("/sellers/auth/signin");
    }
  }, [token, userType]);
  return (
    <div>
      <Topnav />
      {children}
    </div>
  );
}

"use client";

import { useAuth } from "@/utils/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo-sahara.png";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

const Topnav = () => {
  const { token } = useAuth();
  const router = useRouter();
  const path = usePathname();
  if(path.startsWith("/sellers/auth")){
    return null
  }
  return (
    <div className="flex h-[80px] items-center justify-between border-b-[1px] border-border bg-white px-[96px]">
      <Link href={"/sellers"}>
        <Image
          src={logo}
          width={80}
          height={80}
          alt="logo"
          className="size-[48px] lg:size-[80px]"
        />
      </Link>
      <nav className="flex gap-x-[20px] text-[14px] font-[400] text-blackPrimary max-lg:mt-[12px] max-lg:leading-[19.07px] lg:gap-x-[32px] lg:p-[8px]">
        <Link
          href={"/sellers"}
          className={`hidden font-openSans lg:block lg:text-[16px] lg:leading-[21.79px] ${path == "/sellers" && "font-[700] text-greenPrimary"}`}
        >
          Home
        </Link>
        <Link
          href={"/sellers/grow"}
          className={`font-openSans max-lg:hidden lg:text-[16px] lg:leading-[21.79px] ${path == "/sellers/grow" && "font-[700] text-greenPrimary"}`}
        >
          Grow
        </Link>
        <Link
          href={"/sellers/learn"}
          className={`font-openSans lg:text-[16px] lg:leading-[21.79px] ${path == "/sellers/learn" && "font-[700] text-greenPrimary"}`}
        >
          Learn
        </Link>
        <Link
          href={"sellers/pricing"}
          className={`font-openSans lg:text-[16px] lg:leading-[21.79px] ${path == "/sellers/pricing" && "font-[700] text-greenPrimary"}`}
        >
          Pricing
        </Link>
      </nav>

      {!token && (
        <Button
          onClick={() => router.push("/sellers/auth/signin")}
          className="rounded-[8px] bg-greenPrimary px-[24px] py-[12px] font-openSans lg:text-[16px] lg:leading-[21.79px]"
        >
          Login to account
        </Button>
      )}
    </div>
  );
};

export default Topnav;

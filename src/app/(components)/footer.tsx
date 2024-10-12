"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo2.png";
import twitter from "@/assets/images/twitter.svg";
import linkedIn from "@/assets/images/linkedin.svg";
import facebook from "@/assets/images/facebook.svg";
import youtube from "@/assets/images/youtube.svg";
import location from "@/assets/images/location.svg";
import phone from "@/assets/images/phone.svg";
import message from "@/assets/images/message.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGet } from "@/utils/useGet.";

const Footer = () => {
  const { data } = useGet("cata/prod", "products");
  console.log(data);
  const socials = [
    { icon: twitter, url: "#" },
    { icon: linkedIn, url: "#" },
    { icon: facebook, url: "#" },
    { icon: youtube, url: "#" },
  ];
  const path = usePathname();
  if (
    path.startsWith("/dashboard") ||
    path.startsWith("/sellers/auth") ||
    path.startsWith("/admin")
  ) {
    return null;
  }
  return (
    <footer className="bg-black px-[24px] lg:px-[96px]">
      <div className="flex flex-col py-[32px]">
        <div className="flex gap-x-[40px] pb-[16px] max-lg:flex-col">
          {/* Sahara Eagles */}
          <div className="flex shrink-0 flex-col lg:w-[506px] lg:pr-[32px]">
            <div className="items-center gap-x-[8px] max-lg:flex">
              <Image
                src={logo}
                width={80}
                height={80}
                alt="logo"
                className="size-[48px] lg:size-[80px]"
              />
              <h2 className="lg:text[40px] font-playfair text-[32px] font-[700] leading-[46.4px] text-white lg:leading-[58px]">
                Sahara Eagles
              </h2>
            </div>
            <div className="flex flex-col gap-y-[24px] max-lg:mt-[12px]">
              <p className="font-openSan text-wrap break-words text-[14px] font-[400] leading-[20.3px] text-white">
                Sahara Eagle Is a dynamic marketplace that Bridge&apos;s Global
                Cultures, through Discovery and Connections. We are your global
                marketplace for authentic African products and sustainable
                goods. Discover unique treasures from around the world.
              </p>
              {/* Socials */}
              <div className="flex gap-x-[24px]">
                {socials?.map((social, index) => (
                  <Link href={social.url} key={index}>
                    <Image
                      alt={social.url}
                      src={social.icon}
                      width={24}
                      height={24}
                      className="lg:Size-[24px]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Company */}
          <div className="w- flex flex-col max-lg:mt-[40px]">
            <h5 className="font-openSans text-[16px] font-[400] leading-[23.2px] text-[#8E97A6]">
              Company
            </h5>
            <div className="mt-[24px] flex flex-col gap-y-[16px]">
              <Link
                href={"/"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                About
              </Link>
              <Link
                href={"/blogs"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Blog
              </Link>
              <Link
                href={"#"}
                className="pr-[33.3px flex gap-x-[12px] font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                <span>Career </span>{" "}
                <span className="shrink-0 text-nowrap rounded-[12px] bg-[#E4E7EC] px-[12px] py-[2px] text-[14px] font-[600] leading-[20.3px] text-[#7D9A37]">
                  We&apos;re hiring
                </span>
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Contact
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Community
              </Link>
            </div>
          </div>
          {/* Sahara Eagles Departments */}
          <div className="flex w-full flex-col max-lg:mt-[24px]">
            <h5 className="font-openSans text-[16px] font-[400] leading-[23.2px] text-[#8E97A6]">
              Departments
            </h5>
            <div className="mt-[24px] flex flex-col gap-y-[16px]">
              {data?.data?.data?.categories?.slice(0, 4)?.map((catg: any) => (
                <Link
                  key={catg?.id}
                  href={`/categories/${catg?.name}`}
                  className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
                >
                  {catg?.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Legal */}
          <div className="flex w-full flex-col max-lg:mt-[24px]">
            <h5 className="font-openSans text-[16px] font-[400] leading-[23.2px] text-[#8E97A6]">
              Legal
            </h5>
            <div className="mt-[24px] flex flex-col gap-y-[16px]">
              <Link
                href={"/terms-&-conditions"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Condition of Use
              </Link>
              <Link
                href={"/terms-&-conditions"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/terms-&-conditions"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Consumer Data and Privacy disclosure
              </Link>
              <Link
                href={"/terms-&-conditions"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Delivery Information
              </Link>
              <Link
                href={"/faqs"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="mt-[64px] flex w-full justify-between border-y-[1px] border-[#8E97A6] py-[25px] font-openSans max-lg:flex-col">
          <div className="flex gap-x-[32px] text-white max-lg:flex-col max-lg:gap-y-[16px]">
            {/* Address */}
            <div className="flex gap-x-[8px]">
              <Image
                src={location}
                width={20}
                height={20}
                alt=""
                className=""
              />
              <span className="font-openSans text-[14px] font-[600]">
                17350 State Highway 249, Suite 220, Houston, TX 77064.
              </span>
            </div>
            {/* Phone */}
            <div className="flex justify-between gap-[16px] max-lg:flex-col lg:items-center lg:gap-x-[32px]">
              {/* Call */}
              <div className="flex items-start gap-x-[8px]">
                <Image src={phone} width={20} height={20} alt="" className="" />
                <div className="flex max-lg:flex-col max-lg:gap-[8px] lg:gap-x-[4px]">
                  <span className="font-openSans text-[14px] font-[600]">
                    1-800-965-8849 (U.S & Canada)
                  </span>
                  <span className="font-openSans text-[14px] font-[600]">
                    972-543-3877 (Local)
                  </span>
                  <span className="font-openSans text-[14px] font-[600]">
                    +234-706-772-5318 (Nigeria)
                  </span>
                </div>
              </div>
              {/* Email */}
              <Link
                href={"mailto:info@saharaeagles.com"}
                className="flex gap-x-[8px] lg:items-center"
              >
                <Image
                  src={message}
                  width={20}
                  height={20}
                  alt=""
                  className=""
                />
                <span className="font-openSans text-[14px] font-[600]">
                  info@saharaeagles.com
                </span>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-[14px] font-[400] leading-[20.3px] text-[#8E97A6] max-lg:mt-[24px] lg:mt-[24px] lg:text-center">
          Copyrights © 2024 Sahara Eagles. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

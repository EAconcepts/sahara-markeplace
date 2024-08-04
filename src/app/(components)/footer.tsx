'use client'

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

const Footer = () => {
  const socials = [
    { icon: twitter, url: "#" },
    { icon: linkedIn, url: "#" },
    { icon: facebook, url: "#" },
    { icon: youtube, url: "#" },
  ];
  const path = usePathname()
  if(path.startsWith('/dashboard') || path.startsWith("/sellers/auth")){
    return null
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
                Sahara Eagle is a dynamic e-commerce platform connecting African
                artisans, entrepreneurs, and farmers with global consumers.
                Through our marketplace, we aim to celebrate the rich heritage
                of Africa while fostering economic empowerment and creating
                growth opportunities.
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
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Home
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                About
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Blog
              </Link>
              <Link
                href={"#"}
                className="pr-[33.3px flex gap-x-[12px] font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                <span>Career </span>{" "}
                <span className="rounded-[12px] bg-[#E4E7EC] px-[12px] py-[2px] text-[14px] font-[600] leading-[20.3px] text-[#7D9A37]">
                  We&apos;re hiring
                </span>
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Press Center
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Community
              </Link>
            </div>
          </div>
          {/* Sahara Eagles Products */}
          <div className="flex w-full flex-col max-lg:mt-[24px]">
            <h5 className="font-openSans text-[16px] font-[400] leading-[23.2px] text-[#8E97A6]">
              Sahara Eagles Products
            </h5>
            <div className="mt-[24px] flex flex-col gap-y-[16px]">
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Fashion
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Art & Culture
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Food Items & Groceries
              </Link>

              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Beauty & Personal Care
              </Link>
            </div>
          </div>
          {/* Legal */}
          <div className="flex w-full flex-col max-lg:mt-[24px]">
            <h5 className="font-openSans text-[16px] font-[400] leading-[23.2px] text-[#8E97A6]">
              Legal
            </h5>
            <div className="mt-[24px] flex flex-col gap-y-[16px]">
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Condition of Use
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Sitemap
              </Link>

              <Link
                href={"#"}
                className="font-openSans text-[16px] font-[600] leading-[23.2px] text-white"
              >
                Delivery Information
              </Link>
              <Link
                href={"#"}
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
            <div className="flex gap-x-[8px]">
              <Image
                src={location}
                width={20}
                height={20}
                alt=""
                className=""
              />
              <span className="font-openSans text-[14px] font-[600]">
                Vack Sample No.815, Kita, UK 80361
              </span>
            </div>
            <div className="justify-between max-lg:flex">
              {/* Call */}
              <div className="flex gap-x-[8px]">
                <Image src={phone} width={20} height={20} alt="" className="" />
                <span className="font-openSans text-[14px] font-[600]">
                  +1 234 567-0000
                </span>
              </div>
              {/* Email */}
              <div className="flex gap-x-[8px]">
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
              </div>
            </div>
          </div>
          <p className="text-[14px] font-[400] leading-[20.3px] text-[#8E97A6] max-lg:mt-[24px]">
            Copyrights © 2024 Sahara Eagles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

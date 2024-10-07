"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OtherLinks } from "./components/other-links";

interface LinksProps {
  title: string;
  link: string;
}
const TermsCondition = () => {
  const [activeLink, setActiveLink] = useState<LinksProps[]>();
  const [active, setActive] = useState<string>("condition");
  const condition = [
    {
      title: "Applicable Laws",
      link: "#applicable-laws",
    },
    {
      title: "App Permissions",
      link: "#app-permissions",
    },
    {
      title: "Disclaimer of Warranties & Limitations of Liability",
      link: "#disclaimer",
    },
    {
      title: "Disputes",
      link: "#disputes",
    },
  ];
  const privacy = [
    {
      title: "Privacy Policy",
      link: "#privacy",
    },
    {
      title: "App Permissions",
      link: "#app-permissions",
    },
    {
      title: "Cookies Policy",
      link: "#cookies",
    },
    {
      title: "Advertising",
      link: "#advertising",
    },
    {
      title: "Parental Guidance",
      link: "#parental-guidance",
    },
    {
      title: "State-Specific Privacy",
      link: "#state-specific-privacy",
    },
  ];
  const otherLinks = [
    {
      title: "Electronic Communications",
      link: "#electronic-communications",
    },
    {
      title: "Copyrights",
      link: "#copyrights",
    },
    {
      title: "Trademarks",
      link: "#trademarks",
    },
    {
      title: "License & Access",
      link: "#license",
    },
    {
      title: "Your Account",
      link: "#your-account",
    },
    {
      title: "Reviews, Comment, Communications & Other Content",
      link: "#review",
    },
    {
      title: "Intellectual Property Complaints",
      link: "#intellectual-property-complaints",
    },
    {
      title: "Risk of Loss",
      link: "#risk-of-loss",
    },
    {
      title: "Returns, refund & Title",
      link: "#returns",
    },
    {
      title: "Product Description",
      link: "#product-description",
    },
    {
      title: "Pricing",
      link: "#pricing",
    },
    {
      title: "Sactions & Export Policy",
      link: "#sactions",
    },
    {
      title: "Other Businesses",
      link: "#other-businesses",
    },
  ];
  useEffect(() => {
    switch (active) {
      case "condition":
        setActiveLink(condition);
        break;
      case "privacy":
        setActiveLink(privacy);
        break;
      case "otherLinks":
        setActiveLink(otherLinks);
        break;
      default:
        "condition";
    }
  }, []);
  return (
    <div className="">
      <div className="flex h-[276px] w-full items-center justify-center bg-greenSecondary px-[24px] lg:h-[299px] lg:px-[120px]">
        {/* Heading */}
        <div className="flex flex-col gap-[32px] lg:px-[121px]">
          <h1 className="text-center font-playfair text-[36px] font-[700] leading-[52.2px] text-blackPrimary lg:text-[60px] lg:leading-[87px]">
            Terms and Condition of Use
          </h1>
        </div>
      </div>
      <section className="flex gap-[56px] px-[24px] max-lg:flex-col lg:px-[96px] lg:py-[56px]">
        {/* Links */}
        <div className="flex w-[20%] flex-col gap-[20px]">
          {/* Condition for use */}
          <div className="flex flex-col gap-[8px]">
            <h5 className="text-[20px] font-[600] leading-[29px] text-greenPrimary">
              Condition of Use
            </h5>
            {/* Links */}
            <div className="flex flex-col gap-[20px] px-[16px]">
              {condition?.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  className="text-[20px] font-[600] leading-[29px] text-[#8E97A6]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          {/* Privacy */}
          <div className="flex flex-col gap-[8px]">
            <h5 className="text-[20px] font-[600] leading-[29px] text-greenPrimary">
              Privacy
            </h5>
            {/* Links */}
            <div className="flex flex-col gap-[20px] px-[16px]">
              {privacy?.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  className="text-[20px] font-[600] leading-[29px] text-[#8E97A6]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          {/* Other Links */}
          <div className="flex flex-col gap-[20px]">
            {otherLinks?.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="text-[20px] font-[600] leading-[29px] text-[#8E97A6]"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Contents */}
        <main className="flex w-full flex-col gap-[48px]">
          {active == "condition" && <OtherLinks />}
        </main>
      </section>
    </div>
  );
};

export default TermsCondition;

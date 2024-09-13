import { Input } from "@/components/ui/input";
import { ArrowUpRight01Icon, Search01Icon } from "hugeicons-react";
import React from "react";
import Faq from "./(components)/faq";
import Link from "next/link";

const Faqs = () => {
  const quickLinks = [
    {
      title: "Learn about our parent company",
      desc: "Sahara International Corporation is the driving force behind Sahara Eagle, with a vision to transform...",
      link: "Visit saharainternationalcorporation.com",
    },
    {
      title: "Join us on this cultural journey",
      desc: "Sahara International Corporation is the driving force behind Sahara Eagle, with a vision to transform...",
      link: "Explore marketplace",
    },
    {
      title: "Learn more about the African Culture",
      desc: "Sahara International Corporation is the driving force behind Sahara Eagle, with a vision to transform...",
      link: "Sahara Eagles Blog",
    },
  ];
  return (
    <div className="">
      <div className="flex lg:h-[299px] h-[276px] w-full items-center justify-center bg-greenSecondary lg:px-[120px] px-[24px]">
        {/* Heading */}
        <div className="flex flex-col gap-[32px] lg:px-[121px]">
          <h1 className="text-center lg:text-[60px] lg:leading-[87px] font-playfair text-[36px] font-[700] leading-[52.2px] text-blackPrimary">
            Frequently Asked Questions
          </h1>
          <form className="flex lg:h-[52px] lg:w-full h-[44px] w-full items-center rounded-[12px] bg-white">
            <Search01Icon className="size-[20px] text-border" />
            <input
              type="text"
              placeholder="How can we help you?..."
              className="border-none p-[12px] font-inter text-[14px] font-[400] leading-[20.3px] text-[#8E97A6] focus-visible:outline-none"
            />{" "}
          </form>
        </div>
      </div>
      <section className="flex max-lg:flex-col lg:py-[56px] gap-[56px] px-[24px] lg:px-[96px]">
        {/* Faqs */}
        <div className="w-full flex flex-col gap-[40px] rounded-[24px]">
          <h3 className="lg:text-[30px] lg:leading-[43.5px] text-[24px] font-[600] leading-[34.8px] text-black">
            General
          </h3>
          <div className="flex flex-col gap-[40px]">
            {[1, 2, 3, 4, 5, 6].map((faq, index) => (
              <Faq key={index} />
            ))}
          </div>
        </div>
        {/* Quick links */}
        <div className="flex flex-col gap-[24px] rounded-[24px] border-[1px] border-border p-[24px]">
          <h3 className="lg:text-[30px] text-[24px] leading-[34.8px] lg:leading-[43.5px] text-black">
            Quick Links
          </h3>
          <div className="flex flex-col gap-[40px]">
            {quickLinks?.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-[8px]">
                <div className="flex flex-col gap-y-[24px]">
                  <h3 className="text-[16px] font-[600] leading-[23.2px] text-black">
                    {item.title}
                  </h3>
                  <p className="text-[14px] font-[400] leading-[20.3px] text-black">
                    {item.desc}
                  </p>
                </div>
                <Link
                  href={"#"}
                  className="flex gap-x-[2px] text-greenSecondary underline"
                >
                  <span className="text-[14px] font-[400] leading-[20.3px]">
                    {item.link}
                  </span>
                  <ArrowUpRight01Icon className="size-[16px]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;

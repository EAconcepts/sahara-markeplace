"use client";

import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faqs = () => {
  const faqs = [
    {
      qstn: "How do I access Sahara Eagle Seller Center?",
      answer:
        "Your ability to sell certain products depends on your business, the product category, and your selling account  type. Some categories are accessible to all sellers without restrictions, while others necessitate a Professional  selling plan. Additionally, certain products may be restricted or prohibited from sale. Here's a comprehensive list  of product categories open to sellers to help you kickstart your online store.",
    },
    {
      qstn: "Is Sahara Eagle Seller Center free?",
      answer:
        "Your ability to sell certain products depends on your business, the product category, and your selling account  type. Some categories are accessible to all sellers without restrictions, while others necessitate a Professional  selling plan. Additionally, certain products may be restricted or prohibited from sale. Here's a comprehensive list  of product categories open to sellers to help you kickstart your online store.",
    },
    {
      qstn: "How much does it cost to sell on Sahara Eagle using Seller Center?",
      answer:
        "Your ability to sell certain products depends on your business, the product category, and your selling account  type. Some categories are accessible to all sellers without restrictions, while others necessitate a Professional  selling plan. Additionally, certain products may be restricted or prohibited from sale. Here's a comprehensive list  of product categories open to sellers to help you kickstart your online store.",
    },
    {
      qstn: "What is a Sahara Eagle selling account?",
      answer:
        "Your ability to sell certain products depends on your business, the product category, and your selling account  type. Some categories are accessible to all sellers without restrictions, while others necessitate a Professional  selling plan. Additionally, certain products may be restricted or prohibited from sale. Here's a comprehensive list  of product categories open to sellers to help you kickstart your online store.",
    },
    {
      qstn: "What can I sell on Sahara Eagle's marketplace as a new seller?",
      answer:
        "Your ability to sell certain products depends on your business, the product category, and your selling account  type. Some categories are accessible to all sellers without restrictions, while others necessitate a Professional  selling plan. Additionally, certain products may be restricted or prohibited from sale. Here's a comprehensive list  of product categories open to sellers to help you kickstart your online store.",
    },
  ];
  return (
    <div className="flex flex-col gap-y-[32px] px-[24px] lg:px-[96px] py-[40px] font-openSans">
      <h2 className="text-[20px] lg:text-[28px] font-[700] leading-[29px] lg:leading-[40.6px] tracking-[2%] text-blackPrimary">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-y-[24px]">
        {faqs?.map((faq, index) => <Faq key={index} faq={faq} />)}
      </div>
    </div>
  );
};

export default Faqs;

export const Faq = ({ faq }: { faq: any }) => {
  const [showFaq, setShowFaq] = useState<boolean>(false);
  return (
    <div className="flex font-openSans flex-col gap-y-[8px]">
      <div
        onClick={() => setShowFaq((prev) => !prev)}
        className="flex w-full items-center justify-between border-b-[1px] border-border pb-[20.5px] pt-[12.5px]"
      >
        <span className={`text-[14px] lg:text-[16px] font-[400] leading-[16.8px] lg:leading-[19.2px] tracking-[-2%] text-blackPrimary ${showFaq && 'font-[600]'}`}>
          {faq.qstn}
        </span>
        {showFaq ? (
          <ArrowUp01Icon className="size-[20px] text-[#8E97A6]" />
        ) : (
          <ArrowDown01Icon className="size-[20px] text-[#8E97A6]" />
        )}
      </div>
      {showFaq && (
        <div className="py-[12px]">
          <pre className="font-openSans break-words text-wrap text-[14px] lg:text-[16px] font-[400] leading-[20.3px] lg:leading-[23.2px] tracking-[-2%] text-blackPrimary">
            {faq.answer}
          </pre>
        </div>
      )}
    </div>
  );
};

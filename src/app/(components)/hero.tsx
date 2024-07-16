import React from "react";
import woman from "@/assets/images/hero1.png";
import food from "@/assets/images/hero2.png";
import drum from "@/assets/images/hero3.png";
import africanCheck from "@/assets/images/africanCheck.svg";
import packageDelivery from "@/assets/images/package-delivery.svg";
import delivery from "@/assets/images/return-delivery.svg";
import call from "@/assets/images/call.svg";
import discount from "@/assets/images/discount-offers.svg";
import Image from "next/image";

const Hero = () => {
  const features = [
    { icon: africanCheck, title: "100% African products" },
    { icon: packageDelivery, title: "Free delivery for orders above $30" },
    { icon: delivery, title: "90 Days return policy " },
    { icon: discount, title: "Daily offers over 50%" },
    { icon: call, title: "24/7 Dedicated support" },
  ];
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="font-[700] text-[60px] leading-[87px] text-center font-playfair">
          Explore a world of taste sensations with African flavors
        </h1>
        {/* Hero Images */}
        <div className="flex mt-[32px]">
          <Image
            src={woman}
            alt="woman wearing beads"
            width={400}
            height={400}
            className="lg:size-[400px]"
          />
          <Image
            src={food}
            alt="african dish"
            width={400}
            height={400}
            className="lg:size-[400px]"
          />
          <Image
            src={drum}
            alt="men beating drums"
            width={400}
            height={400}
            className="lg:size-[400px]"
          />
        </div>
      </div>
      <div className="flex bg-[#F9E79F99] rounded-[200px] w-full justify-between mt-[40px] px-[24px] py-[20px] text-blackPrimary">
        {features?.map((feat, index) => (
          <div className="flex items-center gap-x-[8px]" key={index}>
            <Image
              src={feat.icon}
              width={24}
              height={24}
              alt={feat.title}
              className="lg:size-[24px]"
            />
            <span className="font-[400] text-[16px] leading-[23.2px] font-openSans">
              {feat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

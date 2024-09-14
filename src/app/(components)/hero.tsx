import React from "react";
import woman from "@/assets/images/hero1.png";
import food from "@/assets/images/hero2.png";
import drum from "@/assets/images/hero3.png";
import hero1 from "@/assets/images/mobilehero1.png";
import hero2 from "@/assets/images/mobilehero2.png";
import hero3 from "@/assets/images/mobilehero3.png";

import Image from "next/image";
import Banner from "./banner";

const Hero = () => {
  return (
    <div className="max-lg:pt-[24px]">
      <div className="flex flex-col max-lg:gap-y-[24px]">
        <h1 className="text-center max-lg:text-[24px] max-lg:leading-[36.4px]  font-playfair lg:text-[60px] font-[700] lg:leading-[87px]">
          Bridging Global Cultures Through Discovery and Connections
        </h1>
        {/* Hero Images */}
        <div className="lg:mt-[32px] hidden lg:flex">
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
        {/* Hero Images mobile */}
        <div className="max-lg:w-full overflow-hidden over lg:mt-[32px] lg:hidden flex">
          <Image
            src={hero1}
            alt="woman wearing beads"
            width={100}
            height={120}
            className="max-lg:w-full flex-1 shrink object-cover object-top"
          />
          <Image
            src={hero2}
            alt="african dish"
            width={100}
            height={120}
            className=" max-lg:w-full object-cover object-top"
          />
          <Image
            src={hero3}
            alt="men beating drums"
            width={100}
            height={120}
            className=" max-lg:w-full object-cover object-top"
          />
        </div>
        
      </div>
      <div className="mt-[40px]">
        <Banner />
      </div>
    </div>
  );
};

export default Hero;

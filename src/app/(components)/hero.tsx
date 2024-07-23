import React from "react";
import woman from "@/assets/images/hero1.png";
import food from "@/assets/images/hero2.png";
import drum from "@/assets/images/hero3.png";

import Image from "next/image";
import Banner from "./banner";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-center font-playfair text-[60px] font-[700] leading-[87px]">
          Explore a world of taste sensations with African flavors
        </h1>
        {/* Hero Images */}
        <div className="mt-[32px] flex">
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
      <div className="mt-[40px]">
        <Banner />
      </div>
    </div>
  );
};

export default Hero;

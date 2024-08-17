'use client'

import Image from "next/image";
import React from "react";
import testimony1 from "@/assets/images/testimony1.png"
import testimony2 from "@/assets/images/testimony2.png"
import testimony3 from "@/assets/images/testimony3.png"
import { PiPlay } from "react-icons/pi";

const Testimonies = () => {
    const testimonies=[
        {img: testimony1, name: "Nia Taraji", brand: "Afritique Stores"},
        {img: testimony2, name: "Kofi Osiris", brand: "Afritique Arts"},
        {img: testimony3, name: "Ola Onika", brand: "OlaCut Designs"},
    ]
  return (
    <div className="flex flex-col gap-y-[64px] px-[96px] py-[40px] font-openSans">
      <div className="flex flex-col gap-y-[8px]">
        <h4 className="text-[28px] font-[700] leading-[40.06px] tracking-[2%]">
          Sahara Eagle Testimonies
        </h4>
        <p className="text-[16px] font-[400] leading-[23.2px] tracking-[2%] text-blackPrimary">
          Don&apos;t just take our words for it, hear from fellow sellers on the
          platform.
        </p>
      </div>
      <div className="flex justify-between">
       { testimonies?.slice(0,3).map((testi, index)=>(

        <div key={index} className="relative flex h-[480px]">
            <Image
              src={testi.img}
              width={400}
              height={480}
              alt=""
              className="h-[480px] w-[400px] shrink-0 object-cover rounded-[12px]"
            />
          
          <div className="flex absolute pb-[32px] bg-gradient-to-t from-black to-[#00000000] w-full  bottom-0  left-0 justify-between px-[32px]">
            <div className="flex flex-col">
              <p className="text-[20px] font-[600] leading-[29px] text-white">
            {testi.name}
              </p>
              <small className="text-[14px] font-[400] leading-[20.3px] text-[#D4D4D8]">
               {testi.brand}
              </small>
            </div>
            <div className="flex size-[48px] items-center justify-center rounded-[12px] border-[2px] border-white bg-[#1B19444D]">
              <PiPlay className="text-white text-[20px] " />
            </div>
          </div>
        </div>
       ))
    }
      </div>
    </div>
  );
};

export default Testimonies;

'use client'

import { useState } from "react";
import Activities from "./(components)/actvities";
import Faqs from "./(components)/faq";
import Features from "./(components)/features";
import Hero from "./(components)/hero";
import Testimonies from "./(components)/testimonies";
import PricingModal from "./(components)/modals/pricing-modal";

const SellerHome = () => {
    const [showPricing, setShowPricing]= useState<boolean>(false)

  return (
    <div className="my-[24px] lg:my-[40px] flex flex-col">
      <div className="">
        <Hero />
      </div>
      <div className="mt-[40px]">
        <Activities />
      </div>
      <div className="mt-[40px]">
        <Features/>
      </div>
      <div className="mt-[40px]">
        <Testimonies/>
      </div>
      <div className="lg:mt-[40px]">
        <Faqs/>
      </div>
     {showPricing &&<PricingModal setShowPricing={setShowPricing}/>}
    </div>
  );
};

export default SellerHome;

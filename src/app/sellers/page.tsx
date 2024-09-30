"use client";

import { useEffect, useState } from "react";
import Activities from "./(components)/actvities";
import Faqs from "./(components)/faq";
import Features from "./(components)/features";
import Hero from "./(components)/hero";
import Testimonies from "./(components)/testimonies";
import PricingModal from "./(components)/modals/pricing-modal";
import { useAuth } from "@/utils/useAuth";

const SellerHome = () => {
  const { token, userType } = useAuth();

  const [showPricing, setShowPricing] = useState<boolean>(false);
  useEffect(() => {
    if ((token && userType !== "seller") || !token) setShowPricing(true);
  }, [token, userType]);

  return (
    <div className="my-[24px] flex flex-col lg:my-[40px]">
      <div className="">
        <Hero />
      </div>
      <div className="mt-[40px]">
        <Activities />
      </div>
      <div className="mt-[40px]">
        <Features />
      </div>
      <div className="mt-[40px]">
        <Testimonies />
      </div>
      <div className="lg:mt-[40px]">
        <Faqs />
      </div>
      {showPricing && <PricingModal setShowPricing={setShowPricing} />}
    </div>
  );
};

export default SellerHome;

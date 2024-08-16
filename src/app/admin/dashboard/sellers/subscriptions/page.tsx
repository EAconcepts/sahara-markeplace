import { Header } from "@/app/dashboard/(components)/header";
import { AddCircleIcon } from "hugeicons-react";

const SellersSubscriptions = () => {
  return (
    <div className="mt-[12px] flex flex-col gap-y-[32px] py-[16px] font-openSans">
      <Header
        title="Subscriptions"
        btnText="Add New"
        BtnIcon={AddCircleIcon}
        btnClass="w-fit h-[47px] px-[24px] py-[12px] gap-x-[12px] text-white text-[16px] leading-[23.2px] font-[600]"
      />
      {/* Subscriptions */}
      <div className="flex flex-col gap-x-[16px]">
        {/* Individual */}
        <div className="flex flex-col gap-[24px] rounded-[10px] border-[1px] border-border p-[16px]">
          <div className="flex flex-col gap-y-[12px]">
            <h6 className="text-[24px] font-[400] leading-[28.8px] tracking-[-2%] text-[#787C83]">
              Individual Selling Plan
            </h6>
            <div className="flex items-baseline">
              <h2 className="text-[36px] font-[700] leading-[52.2px] text-[#000000]">
                $0.85
              </h2>
              <span className="text-[14px] font-[400] leading-[20.3px] text-[#000000]">
                /per sale
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersSubscriptions;

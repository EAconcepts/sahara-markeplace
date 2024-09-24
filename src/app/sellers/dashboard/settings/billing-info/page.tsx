import { Input } from "@/components/ui/input";

const BillingInfo = () => {
  return (
    <div className="flex w-full flex-col gap-[32px] px-[24px] py-[28px]">
      <div className="flex w-[80%] flex-col gap-[24px]">
        {/* Bank Name */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Bank Name
          </label>
          <Input
            type="text"
            placeholder="Central Bank of Benin"
            className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
          />
        </div>
        {/* Account Name */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Account Name
          </label>
          <Input
            type="text"
            placeholder="Afritique Benin"
            className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
          />
        </div>
        {/* Account Number */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Account Name
          </label>
          <Input
            type="text"
            placeholder="123456789023"
            className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;

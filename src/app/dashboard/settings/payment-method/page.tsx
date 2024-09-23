import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-[32px] px-[24px] py-[28px] font-openSans">
      <div className="flex w-[80%] flex-col gap-[24px]">
        {/* Saved Cards */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Saved Cards
          </label>
          <Input
            placeholder="You have no saved card"
            disabled
            type="text"
            className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83] disabled:opacity-100"
          />
        </div>
        {/* New Card */}
        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Add New Card
            </label>
            <Input
              placeholder="Cardholder's Name"
              type="text"
              className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
            />
            <Input
              placeholder="Card number"
              type="text"
              className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
            />
          </div>
          {/* Expiry Date & CVV */}
          <div className="flex w-full gap-[24px] max-lg:flex-col">
            <Input
              id="expiryDate"
              type="text"
              className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
              placeholder="Expiry Date"
            />
            {/* Cvv*/}

            <Input
              id="cvv"
              type="text"
              placeholder="CVV"
              className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px]"
            />
          </div>
        </div>
      </div>
      <Button className="h-[36px] rounded-[8px] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] disabled:bg-[#E4E7EC] disabled:text-[#8E97A6]">
        Save Changes
      </Button>
    </div>
  );
};

export default PaymentMethod;

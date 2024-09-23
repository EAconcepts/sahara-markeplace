import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShippingAddress = () => {
  return (
    <div className="flex w-full flex-col gap-[32px]">
      <div className="flex w-[80%] flex-col gap-[24px]">
        {/* Address */}
        <div className="flex w-full flex-col gap-[8px]">
          <label
            htmlFor="address"
            className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          >
            Address
          </label>
          <Input id="address" type="text" className="h-[44px] w-full" />
        </div>
        {/* Apartment */}
        <div className="flex w-full flex-col gap-[8px]">
          <label
            htmlFor="apartment"
            className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          >
            Apartment, Suite, Unit etc
          </label>
          <Input id="apartment" type="text" className="h-[44px] w-full" />
        </div>
        {/* Country & State*/}
        <div className="flex w-full gap-[24px] max-lg:flex-col">
          {/* Country */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="country"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              Country
            </label>
            <Input id="country" type="text" className="h-[44px] w-full" />
            {/* <Select>
              <SelectTrigger className="h-[44px] w-full">
                <SelectValue placeholder="--Select--" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Country</SelectLabel>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="nga">Nigeria</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>
          {/* State */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="state"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              State
            </label>
            <Input id="state" type="text" className="h-[44px] w-full" />
          </div>
        </div>
        {/* City & Zip code */}
        <div className="flex w-full gap-[24px] max-lg:flex-col">
          {/*City*/}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="city"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              City
            </label>
            <Input id="city" type="text" className="h-[44px] w-full" />
          </div>
          {/* Zip Code */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="zipcode"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              Zip Code
            </label>
            <Input id="zipcode" type="text" className="h-[44px] w-full" />
          </div>
        </div>
      </div>
      <Button className="h-[36px] rounded-[8px] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] disabled:bg-[#E4E7EC] disabled:text-[#8E97A6]">
        Save Changes
      </Button>
    </div>
  );
};

export default ShippingAddress;

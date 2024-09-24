import Notifications from "@/app/dashboard/settings/notifications/page";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const SellerNotifications = () => {
  return (
    <div className="flex flex-col px-[24px] pt-[28px]">
      <div className="flex w-[80%] flex-col gap-[32px]">
        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="emails"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              Promotional Emails
            </label>
            <Select>
              <SelectTrigger className="h-[44px] w-full self-center text-center">
                <SelectValue
                  placeholder="--Select-- "
                  className="self-center text-center align-middle"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="self-center text-center">
                  <SelectLabel>Promotional Emails</SelectLabel>
                  <SelectItem value="--">--</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Order Updates */}
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-[4px]">
              <label
                htmlFor="emails"
                className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
              >
                Promotional Emails
              </label>
              <p className="text-[12px] font-[300] leading-[17.4px] text-blackPrimary">
                Receive a notifications once a product is ordered, or a refund
                is initiated.
              </p>
            </div>
            <Switch className="h-[22.5px] w-[40px]" />
          </div>
          {/* Inventory Management */}
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-[4px]">
              <label
                htmlFor="emails"
                className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
              >
                Inventory Management
              </label>
              <p className="text-[12px] font-[300] leading-[17.4px] text-blackPrimary">
                Receive a notifications once a product is out of stock
              </p>
            </div>
            <Switch className="h-[22.5px] w-[40px]" />
          </div>
        </div>
        <Button className="h-[36px] rounded-[8px] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] disabled:bg-[#E4E7EC] disabled:text-[#8E97A6]">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default SellerNotifications;

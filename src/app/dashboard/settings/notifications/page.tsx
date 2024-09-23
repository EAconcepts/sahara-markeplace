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

const Notifications = () => {
  return (
    <div className="flex flex-col px-[24px] pt-[28px]">
      <div className="flex flex-col gap-[32px]">
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
        <Button className="h-[36px] rounded-[8px] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] disabled:bg-[#E4E7EC] disabled:text-[#8E97A6]">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Notifications;

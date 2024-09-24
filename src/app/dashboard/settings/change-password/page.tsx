import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChangePassword = ({ url = "" }: { url?: string }) => {
  return (
    <div className="flex flex-col gap-[32px] px-[24px] py-[28px] font-openSans">
      <div className="flex w-[80%] flex-col gap-[24px]">
        {/* Current Password */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Current Password
          </label>
          <Input
            type="password"
            className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
          />
        </div>
        {/* New & Confirm Password */}
        <div className="flex w-full gap-[24px] max-lg:flex-col">
          {/* New Password */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="newPassword"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              New Password
            </label>
            <Input
              id="newPassword"
              type="password"
              className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
            />
          </div>
          {/* Confirm new password */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="ConfirmPassword"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              Confirm New Password
            </label>
            <Input
              id="ConfirmPassword"
              type="password"
              className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
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

export default ChangePassword;

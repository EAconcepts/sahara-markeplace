"use client";

import { Button } from "@/components/ui/button";
import image from "@/assets/images/image.svg";
import avatar from "@/assets/images/avatar.svg";
import imageBig from "@/assets/images/image-big.svg";
import Image from "next/image";
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
import { useAuth } from "@/utils/useAuth";

const UserSettings = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col gap-y-[32px] px-[24px] py-[28px] font-openSans">
      {/* Logo Image upload */}
      <div className="flex gap-x-[56px]">
        <div className="flex w-[305px] flex-col gap-y-[20px]">
          <div className="flex flex-col gap-y-[6px] pr-[65px]">
            <h6 className="text-[16px] font-[600] leading-[23.2px] text-[#101928]">
              Profile photo
            </h6>
            <p className="text-[14px] font-[400] leading-[20.3px] text-[#8E97A6]">
              This image will be displayed on your profile
            </p>
          </div>
          <Button className="flex w-fit gap-[10px] rounded-[8px] border-[1.5px] border-greenPrimary bg-white px-[12px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-greenPrimary">
            <Image
              src={image}
              width={20}
              height={20}
              alt="img"
              className="sie-[20px]"
            />
            <span>Upload Photo</span>
          </Button>
        </div>
        {/* image */}
        <div className="flex size-[120px] items-center justify-center rounded-full bg-[#E4E7EC]">
          <Image
            src={avatar}
            width={72}
            height={72}
            alt="image"
            className="size-[72px]"
          />
        </div>
      </div>
      <div className="h-[1px] w-full bg-border"></div>
      <div className="flex w-full flex-col gap-y-[24px] pr-[134px]">
        {/* Full Name */}
        <div className="flex gap-x-[24px]">
          <div className="flex w-full flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              First Name
            </label>
            <Input
              type="text"
              className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
              placeholder={user?.first_name}
            />
          </div>
          {/* Last name */}
          <div className="flex w-full flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Last name
            </label>
            <Input
              type="text"
              className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
              placeholder={user?.last_name}
            />
          </div>
        </div>
        {/* Description */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Email address
          </label>
          <div className="flex flex-col gap-y-[8px]">
            <Input
              type="email"
              disabled
              className="h-[44px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] p-[12px] text-[14px] leading-[20.3px] disabled:bg-[#E4E7EC] disabled:text-[#787C83]"
              placeholder={user?.email}
            />
            <button className="self-start text-[14px] font-[400] leading-[20.3px] text-[#7D9A37]">
              Verify your account
            </button>
          </div>
        </div>
        {/* Phone Number*/}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Phone number
          </label>
          <div className="gap-x[12px] flex rounded-[6px] border-[1px] border-border p-[12px]">
            <Select>
              <SelectTrigger className="h-[44px] w-fit rounded-[6px] border-none">
                <SelectValue placeholder="US" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type="tel"
              className="h-[44px] w-full border-none text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
              placeholder="+1 23455246337"
            />
          </div>
        </div>
        {/* Date of birth*/}
        <div className="flex gap-x-[16px]">
          <div className="flex w-full flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Date of Birth
            </label>
            <Input
              type="text"
              className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
              placeholder="placeholder"
            />
          </div>
          <div className="flex w-full flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Gender
            </label>
            <Select>
              <SelectTrigger className="h-[44px] w-full rounded-[6px] border-[1px] border-border">
                <SelectValue placeholder="--Select--" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
         
        </div>
      </div>
        <Button className="rounded-[8px] bg-[#E4E7EC] px-[16px] py-[8px] w-fit text-[14px] font-[600] leading-[20.3px] text-[#8E97A6]">
          Save Changes
        </Button>
       
    </div>
  );
};

export default UserSettings;

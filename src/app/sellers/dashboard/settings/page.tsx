import { Button } from "@/components/ui/button";
import image from "@/assets/images/image.svg";
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

const StoreSettings = () => {
  return (
    <div className="flex flex-col gap-y-[32px] px-[24px] py-[28px] font-openSans">
      {/* Logo Image upload */}
      <div className="flex gap-x-[56px]">
        <div className="flex w-[305px] flex-col gap-y-[20px]">
          <div className="flex flex-col gap-y-[6px] pr-[65px]">
            <h6 className="text-[16px] font-[600] leading-[23.2px] text-[#101928]">
              Logo image
            </h6>
            <p className="text-[14px] font-[400] leading-[20.3px] text-[#8E97A6]">
              This image will be displayed across our platform as your stores
              Logo
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
            src={imageBig}
            width={72}
            height={72}
            alt="image"
            className="size-[72px]"
          />
        </div>
      </div>
<div className="bg-border h-[1px] w-full"></div>
      <div className="w-full flex flex-col gap-y-[24px] pr-[134px]">
        {/* Store Name */}
        <div className="w-full flex flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Store Name
          </label>
          <Input
            type="text"
            className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
            placeholder="Afritique"
          />
        </div>
        {/* Country */}
        <div className="w-full flex flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Country
          </label>
          <Select>
            <SelectTrigger className="h-[44px] w-full rounded-[6px] border-[1px] border-border">
              <SelectValue placeholder="United States" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Description */}
        <div className="w-full flex flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Description
          </label>
          <textarea
            className="h-[124px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
            placeholder="Afritique is your one-stop shop for all things African!  We celebrate the vibrant cultures, rich traditions, and stunning fashions of the African continent. Immerse yourself in our collection of unique and stylish clothing, exquisite home wears, and authentic accessories. Afritique is more than just a store; it's a cultural experience.  "
          />
        </div>
        {/* Add Selling point */}
        <div className="w-full flex flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Add Selling Point
          </label>
          <Select>
            <SelectTrigger className="h-[44px] w-full rounded-[6px] border-[1px] border-border">
              <SelectValue placeholder="E.g. Handmade" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Social Media */}
        <div className="grid grid-cols-2 gap-x-[16px]">
          <div className="flex flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Social Media Handle
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
          <div className="flex items-end h-full">
            <Input
              type="text"
              className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
              placeholder="Afritique"
            />
          </div>
        </div>
        {/* Add another */}
        <div className="h-[44px] w-full rounded-[6px] border-dashed border-[#787C83] p-[12px]">
          <span className="text-center text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Add another handle
          </span>
        </div>
      </div>
      <div className="flex gap-x-[16px]">
        <Button className="rounded-[8px] bg-[#E4E7EC] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-[#8E97A6]">
          Save Changes
        </Button>
        <Button className="rounded-[8px] bg-[#E4E7EC] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-[#8E97A6]">
          View Live
        </Button>
      </div>
    </div>
  );
};

export default StoreSettings;

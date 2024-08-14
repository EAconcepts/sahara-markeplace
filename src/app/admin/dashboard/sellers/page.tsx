import { Header } from "@/app/dashboard/(components)/header";
import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { CheckmarkCircle01Icon, Search01Icon } from "hugeicons-react";
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

const Sellers = () => {
  return (
    <div className="mt-[12px] flex flex-col gap-y-[32px] py-[16px] font-openSans">
      {/* Heading */}
      <Header title="Sellers Management" />
      <div className="flex flex-col gap-y-[16px]">
        {/* Search  */}
        <div className="flex items-center justify-between px-[12px]">
          <form className="flex h-[36px] w-[363px] items-center gap-[8px] rounded-[8px] border-[0.5px] border-[#8E97A6] bg-white px-[12px] py-[8px]">
            <Search01Icon className="size-[16px] text-[#8E97A6]" />
            <Input
              type="search"
              placeholder="Search"
              className="h-full w-full border-none font-inter text-[14px] leading-[20.3px] text-[#8E97A6]"
            />
          </form>
          <div className="flex items-center gap-x-[16px]">
            <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
              Showing 1 of 500
            </span>
            {/* sort */}
            <Select>
              <SelectTrigger className="h-[36px] w-[181px] self-end rounded-[6px] border-none px-[8px] py-[12px]">
                <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                  Sort by:
                </span>
                <SelectValue
                  className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
                  placeholder={" Latest Added"}
                />
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
        <div className="flex flex-wrap gap-x-[16px] gap-y-[24px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (seller, index) => (
              <div
                className="flex h-[250px] w-[247px] flex-col items-center gap-[12px] rounded-[12px] border-[1px] border-border p-[24px]"
                key={index}
              >
                <div className="relative w-fit">
                  <Image
                    src={avatar}
                    width={80}
                    height={80}
                    alt=""
                    className="size-[80px] rounded-full"
                  />
                  <CheckmarkCircle01Icon className="absolute bottom-0 right-0 size-[24px] rounded-full border-none bg-success text-white" />
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div className="flex flex-col gap-y-[2px]">
                    <h4 className="text-center text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                      Chadlah Anthony
                    </h4>
                    <p className="text-center text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                      username@email.com
                    </p>
                    <p className="text-center text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                      Subscribed to Professional Plan
                    </p>
                  </div>
                </div>
                <Button className="gap-[8px] rounded-[8px] border-[1px] border-border bg-white px-[16px] py-[8px] text-center text-[14px] font-[600] leading-[20.3px] text-black">
                  View Profile
                </Button>
              </div>
            ),
          )}
        </div>
        {/* Pagination */}
        <div className="border-t-[1px] border-border"></div>
      </div>
    </div>
  );
};

export default Sellers;

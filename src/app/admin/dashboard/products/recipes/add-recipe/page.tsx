import { Header } from "@/app/dashboard/(components)/header";
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
import { Cancel01Icon } from "hugeicons-react";

const AddRecipe = () => {
  return (
    <div className="flex w-full flex-col gap-[32px] pt-[24px] font-openSans">
      <Header title="Add New Recipe" />
      <form className="flex w-full gap-[16px]">
        {/* Col-1 */}
        <div className="flex w-[50%] flex-col gap-[24px]">
          {/* Upload video */}
          <div className="flex w-full flex-col gap-[16px] rounded-[12px] border-[1px] border-border p-[16px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Recipe Video
            </label>
            <div className="flex h-[200px] w-full items-center justify-center rounded-[4px] bg-[#0000001A]">
              Upload Video{" "}
            </div>
            <div className="flex w-full items-center justify-between">
              <Button
                variant={"outline"}
                className="h-[32px] w-fit rounded-[4px] border-greenPrimary px-[16px] py-[6px] text-[14px] font-[400] leading-[20.3px]"
              >
                Upload Video
              </Button>
              <Button
                variant={"outline"}
                className="h-[32px] w-fit rounded-[4px] border-[#E8112D33] px-[16px] py-[6px] text-[14px] font-[400] leading-[20.3px] text-[#E8112D33]"
              >
                Delete Video
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
            {/* Category */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Category
              </label>
              <Input
                placeholder="Eg. Breakfast, Quick & Easy, e.t.c"
                className="h-[44px] w-full rounded-[6px] p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
                type="text"
              />
            </div>
            {/* Title */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Recipe Title
              </label>
              <Input
                className="h-[44px] w-full rounded-[6px] p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
                type="text"
              />
            </div>
            {/* Description */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Recipe Description
              </label>
              <textarea className="h-[64px] w-full rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]" />
            </div>
            {/* Ingredients */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Ingredients
              </label>
              <div className="flex flex-col gap-[16px]">
                {[1, 2, 3, 4].map((ingrd, index) => (
                  <div
                    key={index}
                    className="flex h-[44px] items-center rounded-[6px] border-[1px] border-border p-[12px]"
                  >
                    <Input
                      className="h-full w-full rounded-[6px] border-none text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
                      type="text"
                    />
                    <Cancel01Icon className="size-[20px] text-[#E8112D33]" />
                  </div>
                ))}
              </div>
            </div>
            <Button
              className="h-[32px] rounded-[4px] border-border px-[16px] py-[6px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
              variant={"outline"}
            >
              Add New Ingrdient
            </Button>
          </div>
        </div>

        {/* Col-2 */}
        <div className="flex w-[50%] flex-col gap-[24px]">
          <div className="flex h-fit flex-col gap-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
            {/* Time of Prep */}
            <div className="flex gap-[16px]">
              <div className="flex w-full flex-col gap-[8px]">
                <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Time of Preparation
                </label>
                <Input
                  className="h-[44px] w-full rounded-[6px] p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
                  type="text"
                />
              </div>
              <Select>
                <SelectTrigger className="w-fit self-end text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  <SelectValue placeholder="Minutes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Time</SelectLabel>
                    <SelectItem value="mins">Minutes</SelectItem>
                    <SelectItem value="hours">Hours</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Method of Prep */}
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Method of Preparation
            </label>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-col gap-[16px]">
                {[1, 2, 3, 4].map((ingrd, index) => (
                  <div
                    key={index}
                    className="flex h-[104px] flex-col gap-[8px] rounded-[8px] border-[1px] border-border pt-[12px]"
                  >
                    <div className="items-center] flex justify-between px-[12px]">
                      <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                        Method {index + 1}
                      </label>
                      <Cancel01Icon className="size-[20px] text-[#E8112D33]" />
                    </div>

                    <textarea className="h-[64px] w-full rounded-[6px] border-none p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]" />
                  </div>
                ))}
              </div>
            </div>

            <Button
              className="h-[32px] rounded-[4px] border-border px-[16px] py-[6px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
              variant={"outline"}
            >
              Add another Method
            </Button>
          </div>
          {/* Method of prep */}
          <div className="flex w-full gap-[12px]">
            <Button className="h-[44px] w-[fit] rounded-[4px] border-greenPrimary px-[24px] py-[12px] text-[14px] font-[400] leading-[20.3px]">
              Publish Recipe
            </Button>
            <Button
              variant={"outline"}
              className="h-[44px] w-[fit] rounded-[4px] border-[#E8112D33] px-[24px] py-[12px] text-[14px] font-[400] leading-[20.3px] text-[#E8112D33]"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;

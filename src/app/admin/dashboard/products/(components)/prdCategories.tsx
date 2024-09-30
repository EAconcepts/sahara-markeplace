import { ArrowRight01Icon } from "hugeicons-react";
import Image from "next/image";
import dashedLine from "@/assets/images/dashedLine.svg";
import { useGet } from "@/utils/useGet.";

export const PrdCatgry = () => {
  const { data } = useGet("admin/category", "adminCategory");
  // console.log("category", data);
  return (
    <div className="flex w-full flex-col gap-[24px] rounded-[12px] border-[1px] border-border px-[14px] py-[24px]">
      <div className="flex justify-between">
        <h4 className="text-[20px] font-[600] leading-[29px] text-black">
          Product Categories
        </h4>
        <button className="flex items-center gap-x-[4px] text-[#787C83]">
          <span className="text-[14px] font-[400] leading-[20.3px]">
            View all
          </span>
          <ArrowRight01Icon className="size-[20px]" />
        </button>
      </div>
      <div className="flex w-full flex-col gap-[16px]">
        {data?.data?.data?.cat?.slice(0, 5)?.map((categ: any) => (
          <div
            key={categ?.id}
            className="flex items-center justify-between gap-[8px] text-[16px] font-[400] leading-[19.2px] tracking-[-2%] text-black"
          >
            <span className="shrink-0">{categ?.name}</span>
            <div className="h-[1px] w-full border-[1px] border-b border-dashed"></div>

            <span className="shrink-0">{categ?.products} Items </span>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { Header } from "./(components)/header";
import { MapsLocation01Icon } from "hugeicons-react";
import { IoCallOutline } from "react-icons/io5";
import { newArrivals } from "../page";
import Image from "next/image";
import { Welcome } from "../(components)/Welcome";

const Dashboard = () => {
  return (
    <div className="pt-[40px]">
      <Header title={"Dashboard"} />
      {/* Recent Orders & Default Address */}
      <div className="mt-[32px] flex gap-x-[24px]">
        {/* Recent Orders */}
        <div className="flex w-full flex-col gap-y-[12px]">
          <h4 className="px-[24px] text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
            Recent Orders
          </h4>
          <div className="flex min-h-[187px] flex-col items-center justify-center rounded-[10px] border-[1px] border-border p-[24px]">
            <span className="text-[14px] font-[400] leading-[20.3px]">
              You have place no order yet
            </span>
          </div>
        </div>
        {/* Default Address */}
        <div className="flex w-[400px] shrink-0 flex-col gap-y-[12px]">
          <h4 className="px-[24px] text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
            Default Address
          </h4>
          <div className="flex min-h-[187px] flex-col items-center justify-center gap-y-[24px] rounded-[10px] border-[1px] border-border p-[24px]">
            <div className="flex flex-col gap-y-[8px] font-[400]">
              <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Juan Anabel
              </h6>
              <div className="flex items-center gap-x-[8px]">
                <MapsLocation01Icon className="size-[20px] text-greenPrimary" />
                <span className="line-clamp-1 font-inter text-[14px] leading-[20.3px] text-[#787C83]">
                  20386 Donovans Rd, Georgetown, Delaware(DE)
                </span>
              </div>
              <div className="flex items-center gap-x-[8px]">
                <IoCallOutline className="text-[16px] text-greenPrimary" />
                <span className="font-inter text-[14px] leading-[20.3px] text-[#787C83]">
                  +1 23455246337
                </span>
              </div>
            </div>
            <Button className="h-[39px] w-full rounded-[8px] bg-greenPrimary py-[8px] text-[16px] font-[600] leading-[23.2px] text-white">
              Add New Address
            </Button>
          </div>
        </div>
      </div>
      {/* Recent Searches */}
      <div className="mt-[24px] flex flex-col py-[16px] font-openSans gap-y-[32px] pb-[16px]">
        <Header title={"Recent Searches"}/>
        <div className="flex gap-x-[24px]">
            {newArrivals?.slice(0, 6).map((product, index)=>(
                <div key={index} className="flex flex-col">
                    <Image src={product.image} width={152.67} height={187} alt="" className="rounded-[4px] w-[152.67px] h-[185px] object-cover"/>
                    <p className="text-[14px] font-[400] mt-[16px] text-center text-blackPrimary">Men</p>
                </div>
            ))}
        </div>
      </div>
    
    </div>
  );
};

export default Dashboard;

import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { FaCheckCircle } from "react-icons/fa";
import { Calendar02Icon, CallIcon, Location01Icon } from "hugeicons-react";

const CustomerDetails = () => {
  return (
    <div className="pt-[8px]">
      {/* Breadcrumb */}
      <div className=""></div>
      <div className="mt-[12px] flex flex-col gap-y-[32px] py-[16px]">
        {/* Heading */}
        <div className="flex">
          <Header title="Customer Details" />
          <div className="flex gap-x-[12px] px-[12px] py-[8px]">
            <Button className="h-[36px] rounded-[4px] border-[1px] border-[#8E97A6] bg-white text-blackPrimary">
              Suspend
            </Button>
            <Button className="border-failure h-[36px] rounded-[4px] border-[1px] bg-white text-blackPrimary">
              Delete
            </Button>
          </div>
        </div>
        <section className="flex flex-col gap-y-[32px] font-openSans">
          <div className="flex gap-[16px]">
            {/* Details */}
            <div className="flex w-full flex-col rounded-[12px] border-[1px] border-border">
              {/* Avatar and Name */}
              <div className="flex gap-x-[12px] px-[24px] py-[16px]">
                {/* Avatar */}
                <div className="relative">
                  <Image
                    src={avatar}
                    width={60}
                    height={60}
                    alt=""
                    className="size-[60px] rounded-full"
                  />
                  <FaCheckCircle className="absolute bottom-0 right-0 size-[16px] rounded-full bg-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[20px] font-[600] leading-[29px] text-blackPrimary">
                    Cooper Siphon
                  </h3>
                  <span className="text-[14px] font-[400] leading-[20px] text-[#8E97A6]">
                    username@email.com
                  </span>
                </div>
              </div>
              {/* Phone Number */}
              <div className="flex gap-x-[24px] border-b-[1px] border-[#F7F9FC] px-[24px] py-[12px]">
                <CallIcon className="size-[20px] text-[#8E97A6]" />
                <div className="flex flex-col gap-y-[4px]">
                  <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Phone Number
                  </h4>
                  <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                    +1 235 467890
                  </span>
                </div>
              </div>
              {/* Location */}
              <div className="flex gap-x-[24px] border-b-[1px] border-[#F7F9FC] px-[24px] py-[12px]">
                <Location01Icon className="size-[20px] text-[#8E97A6]" />
                <div className="flex flex-col gap-y-[4px]">
                  <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Location
                  </h4>
                  <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                    Undefined, Arizona, United States
                  </span>
                </div>
              </div>
              {/* Date Created */}
              <div className="flex gap-x-[24px] border-b-[1px] border-[#F7F9FC] px-[24px] py-[12px]">
                <Calendar02Icon className="size-[20px] text-[#8E97A6]" />
                <div className="flex flex-col gap-y-[4px]">
                  <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Date Created
                  </h4>
                  <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                    February 14, 2024
                  </span>
                </div>
              </div>
              {/* First Order */}
              <div className="flex gap-x-[24px] border-b-[1px] border-[#F7F9FC] px-[24px] py-[12px]">
                <Calendar02Icon className="size-[20px] text-[#8E97A6]" />
                <div className="flex flex-col gap-y-[4px]">
                  <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    First Order
                  </h4>
                  <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                    February 20, 2024
                  </span>
                </div>
              </div>
              {/* Latest Order */}
              <div className="flex gap-x-[24px] border-b-[1px] border-[#F7F9FC] px-[24px] py-[12px]">
                <Calendar02Icon className="size-[20px] text-[#8E97A6]" />
                <div className="flex flex-col gap-y-[4px]">
                  <h4 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Latest Order
                  </h4>
                  <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                    June 02, 2024
                  </span>
                </div>
              </div>
            </div>
            {/* Orders */}
            <div className="flex w-full flex-col gap-y-[16px]">
              {/* Total Order */}
              <div className="flex flex-col gap-y-[24px] rounded-[10px] border-[1px] border-border p-[12px]">
                <div className="flex flex-col">
                  <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Total Order
                  </h5>
                  <h4 className="tracking-[-2% font-inter text-[20px] leading-[24px] text-[#101928]">
                    23
                  </h4>
                </div>
                {/* Delivered | Refund | Cancelled */}
                <div className="flex justify-between">
                  {/* Delivered */}
                  <div className="flex w-full flex-col gap-y-[12px]">
                    <h5 className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                      Delivered
                    </h5>
                    <div className="flex items-center gap-x-[7px]">
                      <h4 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
                        18
                      </h4>
                      <span className="text-[12px] font-[400] leading-[14.52px] text-success">
                        +0.00%
                      </span>
                    </div>
                  </div>
                  {/* Refund */}
                  <div className="flex w-full flex-col gap-y-[12px]">
                    <h5 className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                      Refund
                    </h5>
                    <div className="flex items-center gap-x-[7px]">
                      <h4 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
                        18
                      </h4>
                      <span className="text-[12px] font-[400] leading-[14.52px] text-success">
                        +0.00%
                      </span>
                    </div>
                  </div>
                  {/* Cancelled */}
                  <div className="flex w-full flex-col gap-y-[12px]">
                    <h5 className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                      Cancelled
                    </h5>
                    <div className="flex items-center gap-x-[7px]">
                      <h4 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
                        18
                      </h4>
                      <span className="text-[12px] font-[400] leading-[14.52px] text-success">
                        +0.00%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Orders */}
              <div className="flex h-full flex-col items-center justify-center rounded-[12px] border-[1px] border-border">
                <p className="text-[14px] font-[400] leading-[20.3px] text-black">
                  No order is currently on route
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerDetails;

import React from "react";

const Delivery = ({order}:{order?:any}) => {
  return (
    <div className="w-[318px] flex flex-col gap-y-[16px] font-openSans">
      <div className="flex flex-col gap-y-[24px] border-[1px] border-border rounded-[12px] py-[24px]">
        <h3 className="px-[12px] text-[20px] font-[600] leading-[24px] text-blackPrimary">
          Delivery Information
        </h3>
        <div className="flex flex-col gap-y-[12px] px-[12px]">
          {/* City */}
          <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
            <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
              City:
            </span>
            <span className="font-[600]">{order?.city}</span>
          </div>
          {/* Street */}
          <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
            <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
              Street:
            </span>
            <span className="font-[600]">{order?.street}</span>
          </div>
          {/* Address */}
          <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
            <span className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
              Address:
            </span>
            <span className="font-[600]">{order?.address}</span>
          </div>
          {/* Tracking no. */}
          <div className="flex gap-x-[8px] text-[12px] leading-[14.4px]">
            <span className="text-[12px] font-[400] leading-[14.4px] text-greenPrimary">
              Tracking No.:
            </span>
            <span className="font-[600] text-greenPrimary">{order?.trx_id}</span>
          </div>
        </div>
      </div>

      {/* Additional Note */}
      <div className="flex flex-col gap-y-[24px] border-[1px] border-border rounded-[12px] py-[24px]">
        <h2 className="text-[20px] px-[12px] font-[600] leading-[24px] text-blackPrimary">
          Additional Note
        </h2>
       
        <p className="mt-[53px] text-center text-[14px] font-[400] leading-[16.8px] text-[#787C83]">
         {order?.notes ? order?.notes : "There is no additional note"}
        </p>
      </div>
    </div>
  );
};

export default Delivery;

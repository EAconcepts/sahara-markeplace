import React from "react";

const Updates = () => {
  return (
    <div className="flex flex-col rounded-[10px] border-[1px] border-border py-[16px] font-openSans">
      <h3 className="px-[12px] text-[20px] font-[600] leading-[24px] tracking-[2%] text-blackPrimary">
        Updates:
      </h3>
      <table className="mt-[24px]">
        <thead>
          <tr className="h-[41px] bg-[#E4E7EC]  py-[12px]">
            <th className="text-start text-[12px] px-[24px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
              Date
            </th>
            <th className="text-start text-[12px] font-[400] px-[24px] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
              Location
            </th>
            <th className="text-start text-[12px] font-[400] px-[24px] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
              Event
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 4].map((update, index) => (
            <tr
              key={index}
              className="h-[100px] border-b-[1px] border-border px-[24px] py-[16px]"
            >
              <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                {" "}
                10th Jun. 2024
              </td>
              <td className="px-[24px] text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                {" "}
                Georgetown
              </td>
              <td className="px-[24px] text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                {" "}
                Ordered
              </td>
              <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                {" "}
                -------
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Updates;

import Image from "next/image";
import bg from "@/assets/images/feature.png";
const Activities = () => {
  return (
    <div className="relative font-openSans flex h-[240px] w-full items-center justify-around">
      <Image
        src={bg}
        width={1440}
        height={240}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        alt=""
      />
      <div className="relative z-10 flex-col items-center text-center text-white">
        <h3 className="leading-[46.4px] lg:leading-[69.6px] text-white text-center text-[32px] lg:text-[48px] font-[700]">
          +2,000
        </h3>
        <span className="text-center text-[12px] lg:text-[16px] font-[600] leading-[17.4px] lg:leading-[23.2px]">
          Active Shops
        </span>
      </div>
      <div className="relative z-10 flex-col items-center text-center text-white">
        <h3 className="leading-[46.4px] lg:leading-[69.6px] text-white text-center text-[32px] lg:text-[48px] font-[700]">
          +7,000
        </h3>
        <span className="text-center text-[12px] lg:text-[16px] font-[600] leading-[17.4px] lg:leading-[23.2px]">
          Products sold
        </span>
      </div>
      <div className="relative z-10 flex-col items-center text-center text-white">
        <h3 className="leading-[46.4px] lg:leading-[69.6px] text-white text-center text-[32px] lg:text-[48px] font-[700]">
          +2,000
        </h3>
        <span className="text-center text-[12px] lg:text-[16px] font-[600] leading-[17.4px] lg:leading-[23.2px]">
          Countries Reached
        </span>
      </div>
    </div>
  );
};

export default Activities;

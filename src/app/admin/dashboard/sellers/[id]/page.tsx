import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "@/assets/images/afritique.png";
import usa from "@/assets/images/usa.svg"

const SellerDetails = () => {
  return (
    <div className="font-openSans">
      {/* Breadcrumb */}
      <div className="mt-[8px]"> </div>
      <section className="mt-[12px] flex flex-col gap-y-[32px] py-[16px]">
        {/* Heading */}
        <div className="itemc flex w-full items-center justify-between gap-x-[12px]">
          <Header title="Sellers Profile" />
          <div className="flex items-center gap-x-[12px]">
            <Button className="h-[36px] rounded-[4px] border-[1px] border-[#8E97A6] bg-white px-[12px] py-[8px] text-[14px] font-[600] text-blackPrimary">
              Suspend
            </Button>
            <Button className="h-[36px] rounded-[4px] border-[1px] border-[#8E97A6] bg-white px-[12px] py-[8px] text-[14px] font-[600] text-blackPrimary">
              Delete
            </Button>
          </div>
        </div>
        {/* Details */}
        <div className="flex gap-x-[16px] w-full">
            <div className="w-full flex flex-col gap-y-[24px]">
                {/* Name */}
                <div className="w-full flex items-center gap-[8px] p-[16px] border-[1px] rounded-[12px] border-border">
                    <Image src={image} width={120} height={120} alt="" className="size-[120px] rounded-[12px]"/>
                    <div className="flex flex-col">
                        <h3 className="text-blackPrimary text-[32px] font-[600] leading-[46.4px]">Afritique-Benin</h3>
                        <span className="text-[14px] font-[400] leading-[20.3px] text-success">Verified</span>
                        <span className="text-[#787C83] text-[16px] leading-[23.2px] font-[400] ">Subscribed to Professional Plan</span>
                    </div>
                </div>
                {/* Description */}
                <div className="w-full border-[1px] border-border p-[16px] rounded-[12px] flex flex-col gap-y-[8px]">
                    <h3 className="text-[20px] leading-[29px] font-[600] text-blackPrimary">Description</h3>
                    <p className="font-[400] leading-[20.3px] text-[14px] text-[#787C83] ">Afritique is your one-stop shop for all things African!  We celebrate the vibrant cultures, rich traditions, and stunning fashions of the African continent. Immerse yourself in our collection of unique and stylish clothing, exquisite home wears, and authentic accessories. Afritique is more than just a store; it&apos; a cultural experience.  </p>
                </div>
                <div className="flex gap-x-[16px] ">
                    {/* Sales  */}
                    <div className="w-full flex flex-col py-[16px] px-[12px] gap-y-[12px] border-[1px] rounded-[12px] border-border">
                        <h5 className="text-black font-[400] text-[14px] leading-[20.3px] ">Sales</h5>
                        <div className="flex gap-x-[7px] items-center">
                            <h2 className="text-[20px] font-[600] font-inter leading-[24px] tracking-[-2%] text-blackPrimary">164</h2>
                            <span className="text-success font-inter leading-[14.52px] font-[400] ">+0.00%</span>
                        </div>
                    </div>
                    {/* Revenue */}
                    <div className="w-full flex flex-col py-[16px] px-[12px] gap-y-[12px] border-[1px] rounded-[12px] border-border">
                        <h5 className="text-black font-[400] text-[14px] leading-[20.3px] ">Revenue</h5>
                        <div className="flex gap-x-[7px] items-center">
                            <h2 className="text-[20px] font-[600] font-inter leading-[24px] tracking-[-2%] text-blackPrimary">$3,600</h2>
                            <span className="text-success font-inter leading-[14.52px] font-[400] ">+0.00%</span>
                        </div>
                    </div>
                    {/* Products */}
                    <div className="w-full flex flex-col py-[16px] px-[12px] gap-y-[12px] border-[1px] rounded-[12px] border-border">
                        <h5 className="text-black font-[400] text-[14px] leading-[20.3px] ">Products</h5>
                        <div className="flex gap-x-[7px] items-center">
                            <h2 className="text-[20px] font-[600] font-inter leading-[24px] tracking-[-2%] text-blackPrimary">102</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact */}
            <div className="flex flex-col w-full rounded-[12px] border-[1px] p-[16px] gap-y-[24px] border-border">
                <div className="flex flex-col gap-y-[12px] ">
                    <h2 className="text-black text-[20px] font-[600] leading-[29px]">Contact:</h2>
                    <div className="flex gap-x-[7px]">
                        <Image src={image} sizes={"80px"} alt="" className="size-[80px]  object-cover"/>
                        <div className="flex flex-col gap-y-[4px]">
                            <h5 className="text-[14px] leading-[20.3px] font-openSans font-[600] text-blackPrimary">Nia Taraji</h5>
                            <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">Username@gmail.com</p>
                            <p className="text-[14px] font-[400] text-blackPrimary leading-[20.3px] ">+1 (234) 555 - 66234</p>
                        </div>
                    </div>
                </div>
                {/* Address */}
                <div className="flex flex-col gap-y-[12px] max-w-[324px]">
                    <h2 className="text-[20px] font-[600] leading-[29px] text-black">Address</h2>
                    <div className="flex gap-x-[12px]">
                        <div className="flex flex-col gap-y-[4px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
                            <span className="">Country:</span>
                            <span className="text-[#787C83] text-[14px]">Address:</span>
                        </div>
                        <div className="flex flex-col gap-y-[4px]">
                            <div className="flex gap-x-[12px]">
                                <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">Benin</span>
                                <Image src={usa} width={24} height={16} alt="" className="w-[24px] h-[16px] "/>
                            </div>
                            <p className="text-[14px] text-wrap font-[400] leading-[20.3px] text-blackPrimary">01 BP 35 Cotonou, Marche central de Porto-Novo</p>
                        </div>
                    </div>
                </div>
                {/* Map */}
                <div></div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default SellerDetails;

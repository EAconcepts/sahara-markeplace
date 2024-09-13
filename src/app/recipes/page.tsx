import Image from "next/image";
import recipeBg from "@/assets/images/recipe-bg.png"
import pizza from "@/assets/images/pizza.png"
import { Button } from "@/components/ui/button";
import { Search01Icon } from "hugeicons-react";

const Recipes=()=>{
    const keywords = ["breakfast", "Lunch", "Quick & Easy","Dinner", "Soup", "Desserts", "Baking", "Vegan", "Special Events", "Meat & Chicken", "Snacks & Sides" ]
    return(
        <div className="font-openSans">
            <div>
            <div className="relative h-[204px] max-lg:w-full  flex items-center justify-center">
                <Image src={recipeBg} alt="background" width={430} height={204} className="h-[204px] max-lg:w-full z-0 object-cover absolute top-0 left-0"/>
                <h2 className="text-[36px] z-20 px[24px] font-playfair font-[700] leading-[52.2px] text-center text-white">Discover Amazing Recipes</h2>
            </div>
            <Image src={pizza} width={420} height={240} alt="pizaa" className="max-lg:w-full h-[240px] object-cover"/>
            </div>
            {/* Search */}
            <div className="flex flex-col py-[40px] px-[24px] gap-[24px]">
                {/* Search */}
                <div className="flex flex-col gap-[16px]">
                    <h3 className="text-[29px] text-center font-[700] leading-[29px] font-playfair text-blackPrimary">What would you like to cook?</h3>
                    <form className="rounded-[16px] flex border-[1px] justify-between h-[48px] bg-white border-border">
                        <input type="text" placeholder="Seach by Keyword" className="border-none h-full w-full py-[10px] px-[24px]  focus-visible:outline-none text-[#787C83] "/>
                        <Button className="bg-greenPrimary px-[24px] py-[10px] rounded-r-[16px]  rounded-l-none w-[56px] h-[48px]">
                            <Search01Icon className="text-white size-[20px]"/>
                        </Button>
                    </form>
                </div>
                <div className="flex gap-[12px] gap-y-[16px] justify-around flex-wrap w-full">
                    {keywords.map((keyword, index)=>(
                    <span key={index} className="bg-border text-blackPrimary px-[24px] py-[12px] rounded-[16px] font-[600] text-[14px] leading-[20.3px] text-center ">{keyword}</span>
                ))}

                </div>
            </div>
            {/* Recipes */}
            <div className="flex flex-col gap-y-[24px] px-[24px] py-[40px]">
                <div className="border-[1px] pb-[24px] flex flex-col gap-[16px] max-lg:w-full h-[360px] rounded-[8px] border-border">
                    <video src={""} width={382} height={240} controls/>
                    <div className="px-[16px] flex flex-col gap-[16px]">
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-col gap-[4px]">
                                <h6 className="text-[16px] font-[600] leading-[23.2px] text-center text-blackPrimary">Bunny chow (chicken curry rolls)</h6>
                                <span className="text-[14px] font-[400] leading-[20.3px] text-center text-blackPrimary">Cook: 46mins</span>
                            </div>
                            

                        </div>
                        <p className="text-[14px] font-[400] leading-[20.3px] text-center line-clamp-2">South African bunny chow which comprises curry in a hollowed out bread loaf, is a bud...</p>
                        <button className="text-[14px] font-[600] leading-[20.3px]border-border border-[1px] rouned-[8px] px-[16px] py-[6px] w-fit text-center text-blackPrimary">View Content</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes;
import Image from "next/image";

const Blogs =()=>{

    return(
        <div className="font-openSans">
            <div className="bg-greenSecondary w-full py-[60px] px-[24px]">
                <h2 className="font-[700] text-[36px] text-center leading-[52.6px] text-blackPrimary">Read Many of The African Culture and Stories</h2>
            </div>
            <section className="p-[24px]">
                <div className="flex flex-col gap-y-[16px]">
                    <div className="flex flex-col rounded-[12px] pb-[24px] gap-y-[16px] border-border">
                        <Image width={382} height={200} alt="" src={""} className="rounded-tr-[8px]"/>
                        <div className="px-[16px] flex flex-col gap-y-[24px]">
                            <div className="flex flex-col gap-y-[8px]"> 
                                <h3 className="text-[16px] leading-[23.2px] font-[600] text-blackPrimary">The Alluring World Of Ghanaian Kente Cloth</h3>
                                <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary line-clamp-4">Imagine a tapestry woven with vibrant colors and bold patterns, each element a thread in a rich cultural narrative. This is the allure of Ghanaian Kente cloth...</p>
                            </div>
                            <button className=" w-fit border-border rounded-[8px] border-[1px] py-[6px] px-[16px] ">View Content</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs;
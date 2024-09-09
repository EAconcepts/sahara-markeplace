
'use client'

import Image from "next/image";
import { blogs } from "../(components)/blog-card";
import { useRouter } from "next/navigation";

const Blogs =()=>{
    const router = useRouter()
    return(
        <div className=" flex flex-col w-full font-openSans">
            {/* Heading */}
            <div className="bg-greenSecondary px-[24px] py-[60px] ">
                <h1 className="text-[36px] font-[700] leading-[52.2px] text-center font-playfair text-blackPrimary">Read Many of The African Culture and Stories</h1>
               
            </div>
            <section className="flex flex-col gap-[16px] p-[24px]">
                    {blogs?.map((blog, index)=>(
                        <div  onClick={()=>router.push(`/blogs/${blog?.title}`)} className=" border-[1px] border-border rounded-[12px] pb-[24px] bg-white" key={index}>
                            <Image src={blog?.image} width={382} height={200} alt="" className="h-[200px] w-full rounded-t-[8px] rounded-r-[8px]"/>
                            <div className="flex flex-col px-[16px] gap-[24px] ">
                                <div className="flex flex-col gap-y-[8px]">
                                    <h4 className="text-[16px] font-[600] leading-[23.2px] text-blackPrimary">The Alluring World Of Ghanaian Kente Cloth</h4>
                                    <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">Imagine a tapestry woven with vibrant colors and bold patterns, each element a thread in a rich cultural narrative. This is the allure of Ghanaian Kente cloth...</p>
                                </div>
                                <button className="py-[6px] px-[16px] w-fit bg-white border-[1px] border-border text-[14px] font-[600] text-center text-black">View Content</button>
                            </div>
                        </div>
                    ))}
                </section>
        </div>
    )
}

export default Blogs;

'use client'

import Image from "next/image";
import { blogs } from "../(components)/blog-card";
import { useRouter } from "next/navigation";
import { useGet } from "@/utils/useGet.";
import BlogCard from "./[url]/(components)/blog-card";
import Loader from "../(components)/loader";

const Blogs =()=>{
    const router = useRouter()
    const {data} = useGet("blog-posts", "blogpost")
    console.log(data)
    return(
        <div className=" flex flex-col w-full font-openSans">
            {/* Heading */}
            <div className="bg-greenSecondary px-[24px] lg:px-[120px] py-[60px] ">
                <h1 className="text-[36px] font-[700] leading-[52.2px] text-center font-playfair text-blackPrimary lg:text-[60px] lg:leading-[87px]">Read Many of The African Culture and Stories</h1>  
            </div>
            <section className="flex max-lg:flex-col gap-[16px] lg:py-[56px] lg:gap-y-[32px] lg:gap-x-[16px] lg:flex-wrap p-[24px] lg:px-[96px]">
                {data ?
                    data?.data?.data?.posts?.map((blog:any)=>(
                        <BlogCard key={blog?.id} blog={blog}/>
                    ))
                    : <Loader/>
                }
                </section>
        </div>
    )
}

export default Blogs;
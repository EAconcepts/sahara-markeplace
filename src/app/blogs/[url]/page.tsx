'use client'

import { blogs } from "@/app/(components)/blog-card";
import { Facebook01Icon, TwitterIcon } from "hugeicons-react";
import Image from "next/image";

const BlogDetails=()=>{

 return(
    <div className="p-[24px] flex flex-col gap-y-[24px]">
        {/*  breadcrumb*/}
        <div></div>
        <div className="flex flex-col gap-[16px]">
            <Image src={""} width={382} height={400} alt="" className="rounded-[8px] object-cover w-full h-[400px]"/>
            <div className="flex flex-col gap-y-[12px]">
                <h4 className="text-[24px] font-[700] text-blackPrimary leading-[34.8px]">The Alluring World of Ghanaian Kente Cloth</h4>
                <p className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">Jun. 30, 2024</p>
                <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">Share:</span>
                    <div className="flex gap-[12px]">
                        <Facebook01Icon/>
                        <TwitterIcon/>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <pre className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary font-openSans break-words text-wrap">
            Kente cloth, a vibrant and intricate textile, is an iconic symbol of Ghanaian culture and heritage. Woven by skilled artisans, this masterpiece showcases the rich tapestry of Ghanaian traditions and artistry.The Art of Weaving:
The creation of Kente cloth is a meticulous process, passed down through generations. It involves weaving colorful silk and cotton threads into complex patterns that tell stories of history, folklore, and societal values. The weavers, often men, meticulously hand-weave the cloth on wooden looms, while women play a crucial role in dyeing the threads with natural dyes.
Symbolism and Meaning:
Each Kente pattern carries deep symbolism, representing various aspects of life, spirituality, and social hierarchy. The colors and designs are carefully chosen to convey specific messages and stories.
Modern Interpretations:
While Kente cloth remains deeply rooted in tradition, it has also evolved to embrace contemporary fashion trends. Modern designers incorporate Kente elements into clothing, accessories, and home decor, bringing this iconic textile to a wider audience.
Preserving Heritage:
Efforts are underway to preserve the art of Kente weaving and promote its appreciation among younger generations. By supporting Kente cloth artisans and incorporating it into modern designs, we can ensure the legacy of this cultural treasure lives on.
            </pre>
        </div>
    </div>
 )
}

export default BlogDetails;
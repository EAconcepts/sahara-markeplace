import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const BlogCard = ({blog}:{blog:any}) => {
    const router = useRouter()
    const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  return (
    <div className=" border-[1px] flex flex-col gap-y-[16px] h-[387px] border-border rounded-[12px] pb-[24px] bg-white" >
    <Image src={`${imgBaseUrl}/${blog?.image}`} width={382} height={200} alt={blog?.title} className="h-[200px] lg:w-[405.33px] w-full rounded-t-[8px] rounded-r-[8px] "/>
    <div className="flex flex-col px-[16px] gap-[24px] ">
        <div className="flex flex-col gap-y-[8px]">
            <h4 className="text-[16px] font-[600] leading-[23.2px] text-blackPrimary">{blog?.title}</h4>
            <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary line-clamp-3">{blog?.content}</p>
        </div>
        <button   onClick={()=>router.push(`/blogs/${encodeURIComponent(blog?.url)}`)} className="py-[6px] px-[16px] w-fit bg-white border-[1px] border-border text-[14px] font-[600] text-center text-black">View Content</button>
    </div>
</div>
  )
}

export default BlogCard
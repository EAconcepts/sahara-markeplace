import { useAuth } from "@/utils/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BlogCard = ({ blog }: { blog: any }) => {
  const router = useRouter();
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const { userType } = useAuth();
  return (
    <div className="flex h-[387px] flex-col gap-y-[16px] rounded-[12px] border-[1px] border-border bg-white pb-[24px] lg:w-[405.33px]">
      <Image
        src={`${imgBaseUrl}/${blog?.image}`}
        width={382}
        height={200}
        alt={blog?.title}
        className="h-[200px] w-full rounded-r-[8px] rounded-t-[8px] object-cover lg:w-[405.33px]"
      />
      <div className="flex flex-col gap-[24px] px-[16px]">
        <div className="flex flex-col gap-y-[8px]">
          <h4 className="line-clamp-1 text-[16px] font-[600] leading-[23.2px] text-blackPrimary">
            {blog?.title}
          </h4>
          <p className="line-clamp-3 text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
            {blog?.content}
          </p>
        </div>
        <button
          onClick={() => {
            if (userType == "admin") {
              router.push(
                `/admin/dashboard/blogs/${encodeURIComponent(blog?.url)}`,
              );
            } else {
              router.push(`/blogs/${encodeURIComponent(blog?.url)}`);
            }
          }}
          className="w-fit border-[1px] border-border bg-white px-[16px] py-[6px] text-center text-[14px] font-[600] text-black"
        >
          View Content
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

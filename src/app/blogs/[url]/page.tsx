"use client";

import { useGet } from "@/utils/useGet.";
import { Facebook01Icon, TwitterIcon } from "hugeicons-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import BlogCard from "./(components)/blog-card";
import Loader from "@/app/(components)/loader";

const BlogDetails = () => {
  const { url } = useParams();
  const { data } = useGet(`blog/${url}`, decodeURIComponent(url.toString()));
  console.log(data)
  let blog = data?.data?.data?.post;
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <div className="flex flex-col gap-y-[24px] p-[24px]">
      {/*  breadcrumb*/}
      <div></div>
      {data ? (
        <>
          <div className="flex gap-[16px] max-lg:flex-col lg:items-center lg:gap-[32px]">
            <Image
              src={`${imgBaseUrl}/${blog?.image}`}
              width={382}
              height={400}
              alt=""
              className="h-[400px] w-full rounded-[8px] object-cover lg:h-[740px] lg:w-[608px] lg:rounded-[12px]"
            />
            <div className="flex flex-col gap-y-[12px]">
              <h4 className="text-[24px] font-[700] leading-[34.8px] text-blackPrimary lg:text-[40px] lg:leading-[58px]">
                {blog?.title}
              </h4>
              <p className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                {blog?.time}
              </p>
              <div className="flex flex-col gap-[8px]">
                <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                  Share:
                </span>
                <div className="flex gap-[12px]">
                  <Facebook01Icon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="">
            <pre className="text-wrap break-words font-openSans text-[14px] font-[400] leading-[20.3px] text-blackPrimary lg:text-[16px] lg:leading-[23.2px]">
              {blog?.content}
            </pre>
          </div>

          {/* You may also like */}
          <div className="hidden flex-col px-[96px] py-[56px] lg:flex">
            <div className="flex flex-col gap-[32px]">
              <h4 className="text-[24px] font-[600] leading-[34.8px] text-blackPrimary">
                You may also like...
              </h4>
              <div className="flex gap-[16px]">
                {data?.data?.data?.others
                  ?.slice(0, 2)
                  ?.map((blog: any) => (
                    <BlogCard key={blog?.id} blog={blog} />
                  ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogDetails;

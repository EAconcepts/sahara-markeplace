"use client";

import Image from "next/image";
import { blogs } from "../(components)/blog-card";
import { useRouter } from "next/navigation";
import { useGet } from "@/utils/useGet.";
import BlogCard from "./[url]/(components)/blog-card";
import Loader from "../(components)/loader";

const Blogs = () => {
  const router = useRouter();
  const { data } = useGet("blog-posts", "blogpost");
  // console.log(data)
  return (
    <div className="flex w-full flex-col font-openSans">
      {/* Heading */}
      <div className="bg-greenSecondary px-[24px] py-[60px] lg:px-[120px]">
        <h1 className="text-center font-playfair text-[36px] font-[700] leading-[52.2px] text-blackPrimary lg:text-[60px] lg:leading-[87px]">
          Read Many of The African Culture and Stories
        </h1>
      </div>
      <section className="flex gap-[16px] p-[24px] max-lg:flex-col lg:flex-wrap lg:gap-x-[16px] lg:gap-y-[32px] lg:px-[96px] lg:py-[56px]">
        {data ? (
          data?.data?.data?.posts
            ?.filter((post: any) => post?.type == "blog")
            ?.map((blog: any) => <BlogCard key={blog?.id} blog={blog} />)
        ) : (
          <Loader />
        )}
      </section>
    </div>
  );
};

export default Blogs;

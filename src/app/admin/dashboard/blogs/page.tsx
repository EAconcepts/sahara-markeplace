"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { AddCircleIcon } from "hugeicons-react";
import { SearchForm } from "../products/(components)/searchForm";
import { useGet } from "@/utils/useGet.";
import { SortBy } from "../products/(components)/SortBy";
import Loader from "@/app/(components)/loader";
import BlogCard from "@/app/blogs/[url]/(components)/blog-card";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const { data, isPending } = useGet("blog-posts", "blogs");
  // console.log(data);
  const router = useRouter();
  return (
    <div className="flex flex-col gap-[32px] py-[24px]">
      <Header
        title="Blog"
        BtnIcon={AddCircleIcon}
        btnClass="py-[12px] px-[24px] rounded-[8px]"
        btnText="Add New Blog"
        onBtnClick={() => router.push("/admin/dashboard/blogs/new-blog")}
      />
      <div className="flex flex-col gap-[16px]">
        {/* Search */}
        <div className="flex w-full justify-between pl-[12px]">
          <SearchForm />
          <div className="flex gap-[16px]">
            <span>Showing {data?.data?.data?.length} result(s) </span>
            <SortBy />
          </div>
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
    </div>
  );
};

export default Blogs;

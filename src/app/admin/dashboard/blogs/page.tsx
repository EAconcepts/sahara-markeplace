"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { AddCircleIcon } from "hugeicons-react";
import { SearchForm } from "../products/(components)/searchForm";
import { useGet } from "@/utils/useGet.";
import { SortBy } from "../products/(components)/SortBy";
import Loader from "@/app/(components)/loader";
import BlogCard from "@/app/blogs/[url]/(components)/blog-card";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "@/utils/useAuth";
import axios from "axios";

const Blogs = () => {
  const { data, isPending } = useGet("blog-posts", "blogs");
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { token, baseUrl, imgUrl } = useAuth();

  const extractRecipe = (blogs: any) => {
    console.log(blogs);
    const recipes = blogs?.filter((blog: any) => blog?.type == "blog");
    return recipes;
  };
  const router = useRouter();

  useEffect(() => {
    if (searchQuery == "") {
      setBlogs(extractRecipe(data?.data?.data?.posts));
    }
  }, [data, searchQuery]);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(
      `${baseUrl}/search-recipe`,
      { search: searchQuery, type: "blog" },
      {
        headers,
      },
    );
    console.log(res);
    setBlogs(res.data.data.results);
  };
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
          <SearchForm
            handleSearch={handleSearch}
            search={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="flex gap-[16px]">
            <span>Showing {blogs?.length} result(s) </span>
            <SortBy />
          </div>
        </div>
        <section className="flex gap-[16px] p-[24px] max-lg:flex-col lg:flex-wrap lg:gap-x-[16px] lg:gap-y-[32px] lg:px-[96px] lg:py-[56px]">
          {blogs ? (
            blogs?.map((blog: any) => <BlogCard key={blog?.id} blog={blog} />)
          ) : (
            <Loader />
          )}
        </section>
      </div>
    </div>
  );
};

export default Blogs;

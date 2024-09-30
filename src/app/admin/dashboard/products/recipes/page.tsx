"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { AddCircleIcon } from "hugeicons-react";
import { SearchForm } from "../(components)/searchForm";
import { SortBy } from "../(components)/SortBy";
import Image from "next/image";
import Rating from "@/app/(components)/rating";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useGet } from "@/utils/useGet.";
import Loader from "@/app/(components)/loader";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/utils/useAuth";

const Recipes = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const { data, isPending } = useGet("blog-posts", "recipes");
  const [searchQuery, setSearchQuery] = useState<string>("");
  // console.log(data);
  const { token, baseUrl, imgUrl } = useAuth();
  const extractRecipe = (blogs: any) => {
    console.log(blogs);
    const recipes = blogs?.filter((blog: any) => blog?.type == "recipie");
    // console.log(recipes)
    // setBlogs(recipes);
    return recipes;
  };
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
      { search: searchQuery, type: "recipe" },
      {
        headers,
      },
    );
    console.log(res);
    setBlogs(res.data.data.results);
  };
  return (
    <div className="mt-[12px] flex w-full flex-col gap-[32px] pt-[24px]">
      <Header
        title="Recipes"
        btnText="Add New Recipe"
        BtnIcon={AddCircleIcon}
        onBtnClick={() =>
          router.push("/admin/dashboard/products/recipes/add-recipe")
        }
        btnClass="rounded-[8px] py-[12px] px-[24px]"
      />
      <section className="flex flex-col gap-[16px]">
        {/* Search & Sort */}
        <div className="flex items-center justify-between px-[12px]">
          <SearchForm
            handleSearch={handleSearch}
            search={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="flex items-center gap-[16px]">
            <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
              Showing {blogs?.length} result(s)
            </span>
            <SortBy />
          </div>
        </div>
        {/* Recipes */}
        <div className="grid w-full grid-cols-2 gap-x-[16px] gap-y-[32px] px-[16px] pt-[16px] lg:grid-cols-3">
          {isPending ? (
            <Loader />
          ) : blogs?.length > 0 ? (
            blogs?.map((recipe: any) => (
              <div
                key={recipe?.id}
                className="flex h-[348px] w-full flex-col gap-[16px] rounded-[12px] border-[1px] border-border p-[16px]"
              >
                <Image
                  src={`${imgUrl}/${recipe?.image}`}
                  width={292}
                  height={120}
                  alt="img"
                  className="h-[110px] w-full object-cover"
                />
                <div className="flex flex-col gap-[16px]">
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex flex-col gap-[4px]">
                      <h3 className="line-clamp-1 text-[16px] font-[600] leading-[23.2px] text-blackPrimary">
                        {recipe?.title}
                      </h3>
                      <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                        Cook: 0mins
                      </span>
                    </div>
                    <Rating rating={10} stars={5} showRatingValue={true} />
                  </div>
                  <p className="line-clamp-2 text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                    {recipe?.content}
                  </p>
                  <Button
                    onClick={() =>
                      router.push(
                        `/admin/dashboard/products/recipes/edit-recipe/${recipe?.id}`,
                      )
                    }
                    variant={"outline"}
                    className="h-[32px] rounded-[8px] border-[1px] border-border px-[16px] py-[6px] text-[14px] font-[600] leading-[20.3px] text-black"
                  >
                    View Content
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No blog posts found!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Recipes;

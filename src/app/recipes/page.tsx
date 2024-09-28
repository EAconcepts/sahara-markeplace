"use client";

import Image from "next/image";
import recipeBg from "@/assets/images/recipe-bg.png";
import pizza from "@/assets/images/pizza.png";
import { Button } from "@/components/ui/button";
import { Search01Icon } from "hugeicons-react";
import Newsletter from "../(components)/newsletter";
import { useRouter } from "next/navigation";
import { useGet } from "@/utils/useGet.";
import Loader from "../(components)/loader";

const Recipes = () => {
  const router = useRouter();
  const keywords = [
    "breakfast",
    "Lunch",
    "Quick & Easy",
    "Dinner",
    "Soup",
    "Desserts",
    "Baking",
    "Vegan",
    "Special Events",
    "Meat & Chicken",
    "Snacks & Sides",
  ];
  const { data, isPending } = useGet("blog-posts", "blogpost");
  //  console.log(data)
  const extractRecipe = (blogs: any) => {
    // console.log(blogs)
    const recipes = blogs?.filter((blog: any) => blog?.type == "recipie");
    // console.log(recipes)
    return recipes;
  };
  return (
    <div className="w-full font-openSans">
      <div className="flex w-full max-lg:flex-col lg:h-[440px]">
        <div className="relative flex h-[204px] w-full items-center justify-center lg:h-full">
          <Image
            src={recipeBg}
            alt="background"
            width={549}
            height={440}
            className="absolute left-0 top-0 z-0 h-full w-full object-cover max-lg:h-[204px]"
          />
          <h2 className="z-20 text-center font-playfair text-[36px] font-[700] leading-[52.2px] text-white lg:px-[24px] lg:text-[60px] lg:leading-[87px]">
            Discover Amazing Recipes
          </h2>
        </div>
        <Image
          src={pizza}
          width={420}
          height={240}
          alt="pizaa"
          className="h-[240px] object-cover max-lg:w-full lg:h-full lg:w-[70%]"
        />
      </div>
      {/* Search */}
      <div className="flex flex-col gap-[24px] px-[24px] py-[40px] lg:px-[96px]">
        {/* Search */}
        <div className="flex flex-col gap-[16px] lg:px-[185px]">
          <h3 className="text-center font-playfair text-[29px] font-[700] leading-[29px] text-blackPrimary">
            What would you like to cook?
          </h3>
          <form className="flex h-[48px] justify-between rounded-[16px] border-[1px] border-border bg-white">
            <input
              type="text"
              placeholder="Seach by Keyword"
              className="h-full w-full border-none px-[24px] py-[10px] text-[#787C83] focus-visible:outline-none"
            />
            <Button className="h-[48px] w-[56px] rounded-l-none rounded-r-[16px] bg-greenPrimary px-[24px] py-[10px]">
              <Search01Icon className="size-[20px] text-white lg:size-[32px]" />
            </Button>
          </form>
        </div>
        <div className="flex w-full flex-wrap justify-around gap-[12px] gap-y-[16px] lg:px-[56px]">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="rounded-[16px] bg-border px-[24px] py-[12px] text-center text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      {/* Recipes */}
      {data ? (
        <div className="lg:W-full grid grid-cols-1 gap-y-[24px] px-[24px] py-[40px] lg:grid-cols-4 lg:justify-around lg:gap-y-[32px] lg:px-[96px]">
          {data &&
            extractRecipe(data?.data?.data?.posts).map((recipe: any) => (
              <div
                key={recipe?.id}
                className="flex h-[360px] flex-col gap-[16px] rounded-[8px] border-[1px] border-border pb-[24px] max-lg:w-full lg:h-[398px] lg:w-[400px]"
              >
                <video
                  src={""}
                  width={382}
                  height={240}
                  controls
                  className="h-[240px] w-full rounded-[8px]"
                />
                <div className="flex flex-col gap-[16px] px-[16px]">
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex flex-col gap-[4px]">
                      <h6 className="text-center text-[16px] font-[600] leading-[23.2px] text-blackPrimary">
                        Bunny chow (chicken curry rolls)
                      </h6>
                      <span className="text-center text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                        Cook: 46mins
                      </span>
                    </div>
                  </div>
                  <p className="line-clamp-2 text-wrap break-words text-center text-[14px] font-[400] leading-[20.3px]">
                    South African bunny chow which comprises curry in a hollowed
                    out bread loaf, is a bud...
                  </p>
                  <button
                    onClick={() => router.push(`/recipes/1`)}
                    className="rouned-[8px] w-fit border-[1px] border-border px-[16px] py-[6px] text-center text-[14px] font-[600] leading-[20.3px] text-blackPrimary lg:self-center"
                  >
                    View Content
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        isPending && <Loader />
      )}

      {/* Newsletter */}
      <div className="lg:px-[96px]">
        <Newsletter />
      </div>
    </div>
  );
};

export default Recipes;

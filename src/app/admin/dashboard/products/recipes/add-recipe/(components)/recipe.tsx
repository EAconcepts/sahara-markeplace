"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/utils/useAuth";
import { useGet } from "@/utils/useGet.";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Cancel01Icon, CloudUploadIcon } from "hugeicons-react";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const Recipe = ({ id }: { id: any }) => {
  const [recipeDetails, setRecipeDetails] = useState({
    title: "",
    content: "",
    type: "recipie",
    image: "",
    sid: id || "",
  });
  const [image, setImage] = useState("");
  const { token, baseUrl } = useAuth();
  const headers = {
    Authorization: "Bearer " + token,
  };
  const { data, isPending } = useGet("blog-posts", "recipes");
  console.log(data);
  const extractRecipe = (blogs: any) => {
    console.log(blogs);
    const recipes = blogs?.filter((blog: any) => blog?.type == "recipie");
    // console.log(recipes)
    return recipes;
  };
  useEffect(() => {
    const recipes = extractRecipe(data?.data?.data?.posts);
    const recipe = recipes?.find((recipe: any) => recipe?.id.toString() === id);
    console.log(recipe);
    setRecipeDetails(recipe);
  }, [data]);
  const recipeMutation = useMutation({
    mutationFn: () => {
      formdata.append("title", recipeDetails.title);
      formdata.append("content", recipeDetails.content);
      formdata.append("type", recipeDetails.type);
      formdata.append("sid", recipeDetails?.sid);
      return axios.post(`${baseUrl}/admin/edit-blog`, formdata, {
        headers,
      });
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success(`Recipe added successfully!`);
    },
    onError: (error) => console.log(error),
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRecipeDetails({ ...recipeDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(recipeDetails);
    recipeMutation.mutate();
  };
  const imageRef: any = useRef(null);
  const formdata = new FormData();
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log(file);
    // const formdata = new FormData();
    setRecipeDetails((prev: any) => ({ ...prev, image: file }));
    file && formdata.append("image", file);

    const imageUrl = file && URL.createObjectURL(file);
    console.log(imageUrl);
    imageUrl && setImage(imageUrl);
  };
  const handleUpload = () => {
    imageRef && imageRef.current?.click();
  };

  return (
    <div className="flex w-full flex-col gap-[32px] pt-[24px] font-openSans">
      <Header title="Add New Recipe" />
      <form onSubmit={handleSubmit} className="flex w-full gap-[16px]">
        {/* Col-1 */}
        <div className="flex w-[50%] flex-col gap-[24px]">
          {/* Upload video */}
          <div className="flex w-full flex-col gap-[16px] rounded-[12px] border-[1px] border-border p-[16px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Recipe Image
            </label>
            <div
              onClick={handleUpload}
              className="fle hidden h-[200px] w-full items-center justify-center rounded-[4px] bg-[#0000001A]"
            >
              Upload Image{" "}
            </div>
            <div className="flex w-full flex-col items-center justify-between">
              {image ? (
                <Image
                  onClick={handleUpload}
                  src={image}
                  width={132}
                  height={192}
                  alt="product-image"
                  className="flex h-[200px] w-full items-center justify-center rounded-[4px] bg-[#0000001A] object-cover"
                />
              ) : (
                <div
                  onClick={handleUpload}
                  className="flex h-[200px] w-full flex-col items-center justify-center gap-y-[16px] rounded-[8px] border-[1px] border-dashed border-[#8E97A6] bg-[#E4E7EC] px-[8px]"
                >
                  <div className="flex flex-col items-center gap-y-[8px]">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      hidden
                      ref={imageRef}
                    />
                    <CloudUploadIcon className="text-[#787C83] max-lg:size-[20px] lg:text-[20px]" />
                    <h4 className="text-center text-[12px] font-[600] leading-[20.3px] text-[#787C83] lg:text-[14px]">
                      Upload
                    </h4>
                    <p className="text-center text-[10px] font-[600] leading-[14.5px] text-[#787C83]">
                      png. or jpeg./mp4. or mp3.
                    </p>
                  </div>
                </div>
              )}
              <div className="mt-[24px] flex gap-[24px]">
                <Button
                  variant={"outline"}
                  className="h-[32px] w-fit rounded-[4px] border-greenPrimary px-[16px] py-[6px] text-[14px] font-[400] leading-[20.3px]"
                >
                  Upload Image
                </Button>
                <Button
                  variant={"outline"}
                  className="h-[32px] w-fit rounded-[4px] border-[#E8112D33] px-[16px] py-[6px] text-[14px] font-[400] leading-[20.3px] text-[#E8112D33]"
                >
                  Delete Image
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
            {/* Category */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Category
              </label>
              <Input
                placeholder="Eg. Breakfast, Quick & Easy, e.t.c"
                className="h-[44px] w-full rounded-[6px] p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
                type="text"
              />
            </div>
            {/* Title */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Recipe Title
              </label>
              <Input
                className="h-[44px] w-full rounded-[6px] p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
                type="text"
                name={"title"}
                value={recipeDetails?.title}
                onChange={handleChange}
              />
            </div>
            {/* Description */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Recipe Description
              </label>
              <textarea
                value={recipeDetails?.content}
                onChange={(e) => {
                  setRecipeDetails({
                    ...recipeDetails,
                    content: e.target.value,
                  });
                }}
                className="min-h-[77sspx] w-full rounded-[6px] border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
              />
            </div>
            {/* Ingredients */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Ingredients
              </label>
              <div className="flex flex-col gap-[16px]">
                {[1, 2, 3, 4].map((ingrd, index) => (
                  <div
                    key={index}
                    className="flex h-[44px] items-center rounded-[6px] border-[1px] border-border p-[12px]"
                  >
                    <Input
                      className="h-full w-full rounded-[6px] border-none text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
                      type="text"
                    />
                    <Cancel01Icon className="size-[20px] text-[#E8112D33]" />
                  </div>
                ))}
              </div>
            </div>
            <Button
              type="submit"
              className="h-[32px] rounded-[4px] border-border px-[16px] py-[6px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
              variant={"outline"}
            >
              Add New Ingrdient
            </Button>
          </div>
        </div>

        {/* Col-2 */}
        <div className="flex w-[50%] flex-col gap-[24px]">
          <div className="flex h-fit flex-col gap-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
            {/* Time of Prep */}
            <div className="flex gap-[16px]">
              <div className="flex w-full flex-col gap-[8px]">
                <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Time of Preparation
                </label>
                <Input
                  className="h-[44px] w-full rounded-[6px] p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
                  type="text"
                />
              </div>
              <Select>
                <SelectTrigger className="w-fit self-end text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  <SelectValue placeholder="Minutes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Time</SelectLabel>
                    <SelectItem value="mins">Minutes</SelectItem>
                    <SelectItem value="hours">Hours</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Method of Prep */}
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Method of Preparation
            </label>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-col gap-[16px]">
                {[1, 2, 3, 4].map((ingrd, index) => (
                  <div
                    key={index}
                    className="flex h-[104px] flex-col gap-[8px] rounded-[8px] border-[1px] border-border pt-[12px]"
                  >
                    <div className="items-center] flex justify-between px-[12px]">
                      <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                        Method {index + 1}
                      </label>
                      <Cancel01Icon className="size-[20px] text-[#E8112D33]" />
                    </div>

                    <textarea className="h-[64px] w-full rounded-[6px] border-none p-[12px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]" />
                  </div>
                ))}
              </div>
            </div>

            <Button
              className="h-[32px] rounded-[4px] border-border px-[16px] py-[6px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]"
              variant={"outline"}
            >
              Add another Method
            </Button>
          </div>
          {/* Method of prep */}
          <div className="flex w-full gap-[12px]">
            <Button className="h-[44px] w-[fit] rounded-[4px] border-greenPrimary px-[24px] py-[12px] text-[14px] font-[400] leading-[20.3px]">
              Update Recipe
            </Button>
            <Button
              variant={"outline"}
              className="h-[44px] w-[fit] rounded-[4px] border-[#E8112D33] px-[24px] py-[12px] text-[14px] font-[400] leading-[20.3px] text-[#E8112D33]"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Recipe;

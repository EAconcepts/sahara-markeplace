"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/utils/useAuth";
import { useGet } from "@/utils/useGet.";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Cancel01Icon } from "hugeicons-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

const NewBlog = () => {
  const { imgUrl, token, baseUrl } = useAuth();

  const [blogDetails, setBlogDetails] = useState({
    title: "",
    content: "",
    image: "",
  });
  const headers = {
    Authorization: "Bearer " + token,
  };
  const formData = new FormData();
  const imgRef: any = useRef(null);

  const handleImageChange = () => {
    const file = imgRef.current.files[0];
    formData.append("image", file);
    const imageUrl = file && URL.createObjectURL(file);
    console.log(imageUrl);
    imageUrl && setBlogDetails((prev: any) => ({ ...prev, image: imageUrl }));
  };

  const newBlogMutation = useMutation({
    mutationFn: () => {
      formData.append("title", blogDetails.title);
      formData.append("content", blogDetails.content);
      return axios.post(`${baseUrl}/admin/add-blog`, formData, { headers });
    },
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!blogDetails.title || !blogDetails.content || !blogDetails.image) {
      alert("Please fill all the fields");
      return;
    }
    console.log(blogDetails);
    newBlogMutation.mutate();
  };
  return (
    <div className="flex w-full flex-col gap-[32px] pt-[24px] font-openSans">
      <Header title="New Blog" />
      <form className="flex gap-[16px]">
        {/* Col-1 */}
        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Blog Title
            </h6>
            <Input
              type="text"
              value={blogDetails.title}
              onChange={(e) =>
                setBlogDetails((prev) => ({ ...prev, title: e.target.value }))
              }
              className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
            />
            {blogDetails?.title}
          </div>
          {blogDetails.image && (
            <div className="flex w-full flex-col gap-[16px] rounded-[12px] border-[1px] border-border p-[16px]">
              <div className="flex w-full justify-between px-[8px]">
                <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Images
                </span>
                <Cancel01Icon
                  onClick={() =>
                    setBlogDetails((prev) => ({ ...prev, image: "" }))
                  }
                  className="size-[20px] text-failure"
                />
              </div>
              <input
                type="file"
                hidden
                ref={imgRef}
                onChange={handleImageChange}
              />

              <Image
                src={`${blogDetails?.image}`}
                width={368}
                height={220}
                alt={blogDetails?.title ?? "image"}
                className="h-[220px] w-full object-cover"
              />
            </div>
          )}

          <Button
            onClick={() => imgRef.current && imgRef.current.click()}
            className="w-fiit h-[32px] rounded-[4px] border-border px-[16px] py-[6px] text-[14px] leading-[20.3px] text-[#787C83]"
            variant={"outline"}
          >
            {blogDetails.image ? "change" : "Add"} Image
          </Button>
        </div>
        {/* Col-2 */}
        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex w-full flex-col gap-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
            <div className="flex flex-col gap-[8px] pt-[12px]">
              {/* Cancel */}
              <div className="flex w-full justify-between px-[8px]">
                <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Content
                </span>
                {blogDetails.content && (
                  <Cancel01Icon
                    onClick={() =>
                      setBlogDetails((prev) => ({ ...prev, content: "" }))
                    }
                    className="size-[20px] text-failure"
                  />
                )}
              </div>
              {/* Content */}
              <textarea
                value={blogDetails?.content}
                onChange={(e) =>
                  setBlogDetails((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }))
                }
                className="min-h-[120px] w-full text-wrap break-words rounded-[6px] border-[1px] border-border p-[12px] font-openSans text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
              />
            </div>

            <div className="flex gap-[12px]">
              <Button className="h-[44px] w-fit rounded-[4px] px-[24px] py-[12px]">
                Publish Blog
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;

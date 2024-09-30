"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/utils/useAuth";
import { useGet } from "@/utils/useGet.";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Cancel01Icon } from "hugeicons-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";

const BlogDetails = () => {
  const [editBlog, setEditBlog] = useState<boolean>(false);
  const { url } = useParams();
  const { data } = useGet("blog-posts", "blogpost");
  const { imgUrl, token, baseUrl } = useAuth();
  const post = data?.data?.data?.posts?.find(
    (post: any) =>
      post?.type == "blog" && post?.url == decodeURIComponent(url.toString()),
  );
  // console.log(post);

  const [blogDetails, setBlogDetails] = useState({
    title: post?.title,
    content: post?.content,
    image: post?.image,
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

  const updateBlogMutation = useMutation({
    mutationFn: () => {
      formData.append("title", blogDetails.title);
      formData.append("content", blogDetails.content);
      return axios.post(`${baseUrl}/admin/update-blog`, formData, { headers });
    },
  });
  return (
    <div className="flex w-full flex-col gap-[32px] pt-[24px] font-openSans">
      <Header title="Blog Content" />
      <section className="flex gap-[16px]">
        {/* Col-1 */}
        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Blog Title
            </h6>
            <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              {post?.title}
            </p>
          </div>
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
            {blogDetails?.image || blogDetails.image == "" ? (
              <Image
                src={`${blogDetails?.image}`}
                width={368}
                height={220}
                alt={blogDetails?.title ?? "image"}
                className="h-[220px] w-full object-cover"
              />
            ) : (
              <Image
                src={`${imgUrl}/${post?.image}`}
                width={368}
                height={220}
                alt={blogDetails?.title ?? "image"}
                className="h-[220px] w-full object-cover"
              />
            )}
          </div>
          <Button
            onClick={() => imgRef.current && imgRef.current.click()}
            className="w-fiit h-[32px] rounded-[4px] border-border px-[16px] py-[6px] text-[14px] leading-[20.3px] text-[#787C83]"
            variant={"outline"}
          >
            Change Image
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
                <Cancel01Icon className="size-[20px] text-failure" />
              </div>
              {/* Content */}
              <pre
                contentEditable={editBlog ? true : false}
                autoFocus={editBlog ? true : false}
                className="w-full text-wrap break-words rounded-[6px] border-[1px] border-border p-[12px] font-openSans text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
              >
                {post?.content}
              </pre>
            </div>
            <Button
              onClick={() => setEditBlog(true)}
              className="w-fiit h-[32px] rounded-[4px] border-border px-[16px] py-[6px] text-[14px] leading-[20.3px] text-[#787C83]"
              variant={"outline"}
            >
              Edit blog Content
            </Button>
            <div className="flex gap-[12px]">
              <Button className="h-[44px] w-fit rounded-[4px] px-[24px] py-[12px]">
                Publish Blog
              </Button>
              <Button
                variant={"outline"}
                className="h-[44px] w-fit rounded-[4px] border-failure px-[24px] py-[12px] text-failure"
              >
                Delete Blog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;

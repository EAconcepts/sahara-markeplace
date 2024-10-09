"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/utils/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Cancel01Icon, CloudUploadIcon } from "hugeicons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { toast } from "sonner";

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    sub_category: "",
    image: "",
  });
  const [image, setImage] = useState();
  const { token, baseUrl, imgUrl } = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const imgRef: any = useRef(null);
  const router = useRouter();
  const formData = new FormData();
  const categoryMutation = useMutation({
    mutationFn: () =>
      axios.post(`${baseUrl}/admin/add-category`, formData, { headers }),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Category added successfully!");
      router.push("/admin/dashboard/products/categories");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error("Error adding category!");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(category);
    formData.append("name", category.name);
    formData.append("subcategory", category.sub_category);
    image && formData.append("image", image);
    categoryMutation.mutate();
  };

  const handleImageChange = () => {
    const file = imgRef.current.files[0];
    setImage(file);
    formData.append("image", file);
    const imageUrl = file && URL.createObjectURL(file);
    console.log(imageUrl);
    imageUrl && setCategory((prev: any) => ({ ...prev, image: imageUrl }));
  };
  const handleUpload = () => {
    imgRef && imgRef.current?.click();
  };
  return (
    <div className="mt-[12px] flex flex-col gap-[32px] font-openSans">
      <Header title="Add New Category" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
        <div className="flex w-[30%] flex-col gap-[16px] rounded-[12px] border-[1px] border-border p-[16px]">
          <div className="flex w-full justify-between px-[8px]">
            <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Images
            </span>
            <Cancel01Icon
              onClick={() => setCategory((prev) => ({ ...prev, image: "" }))}
              className="size-[20px] text-failure"
            />
          </div>
          {/* <input type="file" hidden ref={imgRef} onChange={handleImageChange} /> */}
          {category.image != "" ? (
            <Image
              src={`${category?.image}`}
              width={368}
              height={220}
              alt={category?.name ?? "image"}
              className="h-[220px] w-full object-cover"
            />
          ) : (
            <div
              onClick={handleUpload}
              className="flex h-[192px] w-[132px] flex-col items-center justify-center gap-y-[16px] rounded-[8px] border-[1px] border-dashed border-[#8E97A6] bg-[#E4E7EC] px-[8px]"
            >
              <div className="flex flex-col items-center gap-y-[8px]">
                <input
                  type="file"
                  onChange={handleImageChange}
                  hidden
                  ref={imgRef}
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
        </div>

        {/* New Category */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="newCategory"
            className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          >
            New Category
          </label>
          <Input
            id="newCategory"
            value={category.name}
            onChange={(e) =>
              setCategory((prev) => ({ ...prev, name: e.target.value }))
            }
            className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
          />
        </div>
        {/* Sub category */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="subCategory"
            className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          >
            Sub-Categories
          </label>
          <textarea
            id="subCategory"
            value={category.sub_category}
            onChange={(e) =>
              setCategory((prev) => ({ ...prev, sub_category: e.target.value }))
            }
            className="h-[100px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
          />
        </div>
        <Button
          disabled={categoryMutation.isPending}
          type="submit"
          className="rounded-[8px] px-[24px] py-[12px] text-[16px] font-[600] leading-[23.2px]"
        >
          Add New Category
        </Button>
      </form>
    </div>
  );
};

export default AddCategory;

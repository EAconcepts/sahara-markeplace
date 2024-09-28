"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/utils/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const AddCategory = () => {
  const [category, setCategory] = useState({ name: "", sub_category: "" });
  const { token, baseUrl } = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const router = useRouter();
  const categoryMutation = useMutation({
    mutationFn: () =>
      axios.post(`${baseUrl}/admin/add-category`, category, { headers }),
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
    categoryMutation.mutate();
  };
  return (
    <div className="mt-[12px] flex flex-col gap-[32px] font-openSans">
      <Header title="Add New Category" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
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

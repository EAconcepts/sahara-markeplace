"use client";

import Loader from "@/app/(components)/loader";
import { Header } from "@/app/dashboard/(components)/header";
import { useAuth } from "@/utils/useAuth";
import { useGet } from "@/utils/useGet.";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { error } from "console";
import { AddCircleIcon, Delete02Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Categories = () => {
  const router = useRouter();
  const { data, isPending, refetch } = useGet(
    "admin/category",
    "adminCategories",
  );
  // console.log(refetch);
  const { token, baseUrl } = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: (category_id) =>
      axios.get(`${baseUrl}/admin/delete-category/${category_id}`, { headers }),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Category deleted successfully");
      queryClient.refetchQueries({ queryKey: ["adminCategories"] });
      // refetch();
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.message || "An error occured");
    },
  });
  const handleDelete = (category_id: any) => {
    deleteMutation.mutate(category_id);
    // queryClient.refetchQueries({ queryKey: ["adminCategories"] });
    // refetch();
  };
  return (
    <div className="mt-[12px] flex w-full flex-col gap-[32px] font-openSans">
      <Header
        title="Product Categories"
        btnText="Add New Category"
        BtnIcon={AddCircleIcon}
        onBtnClick={() =>
          router.push("/admin/dashboard/products/categories/add-category")
        }
        btnClass="px-[24px] py-[12px] rounded-[8px]"
      />
      <div>
        <table className="table w-full">
          <thead className="w-full">
            <tr className="w-full bg-[#E4E7EC] text-[12px] font-[600] leading-[17.4px] tracking-[0.5%] text-blackPrimary">
              <th className="px-[24px] py-[12px] text-start">Categories</th>
              <th className="px-[24px] text-start">Sub-Categories</th>
              <th className="px-[24px] text-start">Quantity</th>
              <th className="px-[24px] text-start">Total Sales</th>
              <th className="px-[24px] text-start"></th>
            </tr>
          </thead>
          <tbody>
            {isPending ? (
              <Loader />
            ) : (
              data?.data?.data?.cat?.map((catg: any) => (
                <tr key={catg?.id} className="">
                  <td className="px-[24px] py-[17.5px] text-start">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                        {catg?.name}
                      </span>
                      <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                        {catg?.type}
                      </span>
                    </div>
                  </td>
                  <td className="line-clamp-2 max-w-[360px] px-[24px] py-[17.5px] text-start text-[12px] font-[400] leading-[17.4px] text-blackPrimary">
                    {catg?.description || "No description available"}
                  </td>
                  <td className="px-[24px] py-[17.5px] text-start">
                    {catg?.products}
                  </td>
                  <td className="px-[24px] py-[17.5px] text-start">
                    <div className="flex items-end gap-[12px]">
                      <span>$0</span>
                      <span className="font-inter text-[12px] font-[400] leading-[14.5px] text-success">
                        +0.00%
                      </span>
                    </div>
                  </td>
                  <td className="px-[24px] py-[17.5px] text-start">
                    <button className="" onClick={() => handleDelete(catg?.id)}>
                      <Delete02Icon className="size-[20px] text-failure" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;

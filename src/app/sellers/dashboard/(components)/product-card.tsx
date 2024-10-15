"use client";

import { useAuth } from "@/utils/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Delete03Icon, PencilEdit01Icon } from "hugeicons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: any }) => {
  const { token, baseUrl } = useAuth();
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const router = useRouter();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      axios.get(`${baseUrl}/vendor/delete-product/${id}`, { headers }),
    onSuccess: (data) => {
      console.log(data);
      // Refresh the product list after deletion
      queryClient.invalidateQueries({ queryKey: ["vendorProducts"] });
      toast.success("Product deleted successfully!");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to delete product!");
    },
  });
  const handleDelete = (id: number) => {
    // Call API to delete product
    console.log(`Deleting product with ID: ${id}`);
    deleteMutation.mutate(id);
  };
  return (
    <div className="flex h-[240px] w-[150px] flex-col gap-y-[8px] rounded-[12px] border-[1px] border-border font-openSans lg:h-[295px] lg:w-[194px] lg:gap-y-[12px] lg:pb-[24px]">
      <Image
        src={`${imgBaseUrl}/${product?.image}`}
        width={194}
        height={160}
        className="h-[140px] w-[150px] rounded-t-[12px] object-cover lg:h-[160px] lg:w-[194px]"
        alt=""
      />

      <div className="flex flex-col px-[12px] lg:gap-y-[8px]">
        <div className="flex flex-col lg:gap-y-[4px]">
          <p className="line-clamp-1 text-[12px] font-[400] leading-[20.3px] text-[#787C83] lg:text-[14px]">
            {product?.name}
          </p>
          <h5 className="text-[14px] font-[600] leading-[23.2px] text-blackPrimary lg:text-[16px]">
            ${product?.price}
          </h5>
          <p className="text-[10px] font-[400] leading-[17.4px] text-[#008751] lg:text-[12px]">
            Available In-Stock
          </p>
        </div>
        <div className="flex max-lg:gap-x-[8px] lg:justify-between">
          <button
            onClick={() => handleDelete(product?.id)}
            className="flex rounded-[4px] border-[1px] border-[#8E97A6] py-[4px] max-lg:px-[8px] lg:px-[12px]"
          >
            <Delete03Icon className="size-[12px] text-[#E8112D] lg:size-[16px]" />
            <span className="text-[10px] font-[600] leading-[17.4px] text-[#E8112D] max-lg:hidden lg:text-[12px]">
              Delete
            </span>
          </button>
          <button
            onClick={() =>
              router.push(`/sellers/dashboard/product-listings/${product?.url}`)
            }
            className="flex rounded-[4px] border-[#8E97A6] px-[8px] py-[4px] max-lg:border-[1px] lg:rounded-[4px] lg:px-[12px]"
          >
            <PencilEdit01Icon className="size-[12px] text-[#787C83] lg:size-[16px]" />
            <span className="text-[10px] font-[600] leading-[17.4px] text-[#787C83] max-lg:hidden lg:text-[12px]">
              Edit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

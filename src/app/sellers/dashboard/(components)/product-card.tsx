'use client'

import { useAuth } from "@/utils/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Delete03Icon, PencilEdit01Icon } from "hugeicons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: any }) => {
  const {token, baseUrl} = useAuth()
  const router = useRouter()
  const headers ={
    Authorization : `Bearer ${token}`
  }
  const queryClient = useQueryClient()
  const deleteMutation=useMutation({
    mutationFn: (id)=>axios.get(`${baseUrl}/vendor/delete-product/${id}`, {headers}),
    onSuccess: ((data)=>{
      console.log(data)
      // Refresh the product list after deletion
      queryClient.invalidateQueries({ queryKey: ['vendorProducts'] })
      toast.success("Product deleted successfully!")
    }), 
    onError: ((error)=>{
      console.log(error)
      toast.error("Failed to delete product!")
    })
  })
  const handleDelete = (id: string) => {
    // Call API to delete product
    console.log(`Deleting product with ID: ${id}`);
    deleteMutation.mutate()
  };
  return (
    <div className="flex h-[295px] w-[194px] flex-col gap-y-[12px] rounded-[12px] border-[1px] border-border pb-[24px] font-openSans">
      <Image
        src={product.image}
        width={194}
        height={160}
        className="h-[160px] w-[194px] rounded-t-[12px] object-cover"
        alt=""
      />
      <div className="flex flex-col gap-y-[8px] px-[12px]">
        <div className="flex flex-col gap-y-[4px]">
          <p className="text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Robe Longue Kimono
          </p>
          <h5 className="text-[16px] font-[600] leading-[23.2px] text-blackPrimary">
            $103.99
          </h5>
          <p className="text-[12px] font-[400] leading-[17.4px] text-[#008751]">
            Available In-Stock
          </p>
        </div>
        <div className="flex justify-between">
          <button onClick={()=>handleDelete(product?.id)} className="flex rounded-[4px] px-[12px] py-[4px]">
            <Delete03Icon className="size-[16px] text-[#E8112D]" />
            <span className="text-[12px] font-[600] leading-[17.4px] text-[#E8112D]">
              Delete
            </span>
          </button>
          <button onClick={()=>router.push(`/sellers/dashboard/product-listings/${product?.id}`)} className="flex rounded-[4px] px-[12px] py-[4px]">
            <PencilEdit01Icon className="size-[16px] text-[#787C83]" />
            <span className="text-[12px] font-[600] leading-[17.4px] text-[#787C83]">
              Edit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

"use client";

import { Header } from "@/app/dashboard/(components)/header";
import Image from "next/image";
import img1 from "@/assets/images/seller-details1.png";
import img2 from "@/assets/images/sellers-details2.png";
import { Cancel01Icon, Delete03Icon, PencilEdit01Icon } from "hugeicons-react";
import { Input } from "@/components/ui/input";
import Form2 from "./(components)/form2";
import { Button } from "@/components/ui/button";
import Form1 from "./(components)/form1";
import { useGet } from "@/utils/useGet.";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "@/utils/useAuth";

const ProductDetails = () => {
  const { product_name } = useParams();
  const { data } = useGet(`product/${product_name}`, "prd-details");
  console.log(data);
  const [prdtDetails, setPrdtDetails] = useState<any>({
    name: data?.data?.data?.product?.name || "",
    price: data?.data?.data?.product?.price || "",
    image: "",
    quantity: data?.data?.data?.product?.quantity || "",
    description: data?.data?.data?.product?.description || "",
    category: data?.data?.data?.product?.category || "",
    sid: data && data?.data?.data?.product?.id,
  });
  const { token, baseUrl } = useAuth();
  console.log(data);
  const headers = {
    Authorization: "Bearer " + token,
  };
  const router = useRouter();

  useEffect(() => {
    setPrdtDetails((prev: any) => ({
      ...prev,
      name: data?.data?.data?.product?.name,
      price: data?.data?.data?.product?.price,
      image: "",
      quantity: data?.data?.data?.product?.quantity,
      description: data?.data?.data?.product?.description,
      category: data?.data?.data?.product?.category,
      sid: data && data?.data?.data?.product?.id,
    }));
  }, [data]);
  const formdata = new FormData();
  const updateMutation = useMutation({
    mutationFn: () => {
      formdata.append("name", prdtDetails.name);
      formdata.append("sid", data?.data?.data?.product?.id);
      formdata.append("price", prdtDetails.price);
      formdata.append("image", prdtDetails?.image && prdtDetails?.image);
      formdata.append("quantity", prdtDetails?.quantity);
      formdata.append("category", prdtDetails.category);
      return axios.post(`${baseUrl}/vendor/update-product`, formdata, {
        headers,
      });
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("product updated successfully!");
      router.push("/sellers/dashboard/product-listings");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Error updating product!");
    },
  });
  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(prdtDetails);
    updateMutation.mutate();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrdtDetails((prevVals: any) => ({ ...prevVals, [name]: value }));
  };
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: (id) =>
      axios.get(`${baseUrl}/vendor/delete-product/${id}`, { headers }),
    onSuccess: (data) => {
      console.log(data);
      // Refresh the product list after deletion
      queryClient.invalidateQueries({ queryKey: ["vendorProducts"] });
      toast.success("Product deleted successfully!");
      router.back();
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to delete product!");
    },
  });
  const handleDelete = (id: string) => {
    // Call API to delete product
    console.log(`Deleting product with ID: ${id}`);
    deleteMutation.mutate();
  };
  return (
    <div>
      {/* Breadcrumb */}
      <div></div>
      <div className="flex flex-col gap-y-[32px] py-[16px] font-openSans max-lg:px-[24px]">
        <Header title="Product Details" />
        {/* Details */}
        <form
          onSubmit={handleSave}
          className="flex flex-col gap-y-[32px] pb-[32px]"
        >
          <div className="flex w-full gap-x-[16px] border-b-[1px] border-border max-lg:flex-col">
            <Form1
              prdtDetails={prdtDetails}
              handleChange={handleChange}
              setPrdtDetails={setPrdtDetails}
              product={data?.data?.data?.product}
            />
            <Form2
              setPrdtDetails={setPrdtDetails}
              handleChange={handleChange}
              prdtDetails={prdtDetails}
              product={data?.data?.data?.product}
            />
          </div>
          <div className="flex items-center justify-center gap-x-[24px]">
            <Button
              type="submit"
              className="h-[47px] rounded-[8px] border-[1px] border-[#8E97A6] bg-[#E4E7EC] px-[24px] py-[12px] text-[#787C83]"
            >
              Save Changes
            </Button>
            <Button
              type="button"
              onClick={() => handleDelete(prdtDetails?.id)}
              className="h-[47px] rounded-[8px] border-[1px] border-[#E8112D] bg-[#E8112D33] px-[24px] py-[12px] text-blackPrimary"
            >
              Delete Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;

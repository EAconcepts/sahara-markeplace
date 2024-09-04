'use client'

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
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const {product_name} = useParams()
  const { data } = useGet(`product/${product_name}`, "prd-details");
  console.log(data)
  return (
    <div>
      {/* Breadcrumb */}
      <div></div>
      <div className="flex flex-col gap-y-[32px] max-lg:px-[24px] py-[16px] font-openSans">
        <Header title="Product Details" />
        {/* Details */}
        <form className=" flex flex-col gap-y-[32px] pb-[32px]">
          <div className="flex max-lg:flex-col w-full gap-x-[16px]  border-b-[1px] border-border">
           <Form1 product={data?.data?.product}/>
            <Form2 product= {data?.data?.produt} />
          </div>
          <div className="flex items-center justify-center gap-x-[24px]">
            <Button className="text-[#787C83] h-[47px] border-[1px] border-[#8E97A6] rounded-[8px] px-[24px] py-[12px] bg-[#E4E7EC]">
              Save Changes
            </Button>
            <Button className="h-[47px] text-blackPrimary border-[1px] rounded-[8px] px-[24px] py-[12px] border-[#E8112D] bg-[#E8112D33]">
              Delete Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;

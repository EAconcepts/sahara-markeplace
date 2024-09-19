'use client'

import { Header } from "@/app/dashboard/(components)/header";
import { AddCircleIcon, Delete02Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";

const Categories = () => {
    const router = useRouter()
  return (
    <div className="mt-[12px] flex w-full flex-col gap-[32px] font-openSans">
      <Header
        title="Product Categories"
        btnText="Add New Category"
        BtnIcon={AddCircleIcon} onBtnClick={()=>router.push('/admin/dashboard/products/categories/add-category')}
        btnClass="px-[24px] py-[12px] rounded-[8px]"
      />
      <div>
        <table className="w-full table">
          <thead className="w-full">
            <tr className="w-full bg-[#E4E7EC] text-[12px] font-[600] leading-[17.4px] tracking-[0.5%] text-blackPrimary">
              <th className="py-[12px] px-[24px] text-start">Categories</th>
              <th className="text-start px-[24px]">Sub-Categories</th>
              <th className="text-start px-[24px]">Quantity</th>
              <th className="text-start px-[24px]">Total Sales</th>
              <th className="text-start px-[24px]"></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 4, 5, 6].map((catg, index) => (
              <tr key={index} className="">
                <td className="py-[17.5px] px-[24px] text-start ">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">Men&apos;s Wear</span>
                    <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">Fashion</span>
                  </div>
                </td>
                <td className="line-clamp-2 max-w-[360px] py-[17.5px] px-[24px] text-start text-[12px] font-[400] leading-[17.4px] text-blackPrimary">
                  Suits & Trousers, Shirts, Coats & Jackets, Shorts, Jeans,
                  Agbada, Dashiki, Senators, Isiagu, Kaftan, Jalabia
                </td>
                <td className="py-[17.5px] px-[24px] text-start">2880</td>
                <td className="py-[17.5px] px-[24px] text-start">
                  <div className="flex items-end gap-[12px]">
                    <span>$24,732.70</span>
                    <span className="font-inter text-[12px] font-[400] leading-[14.5px] text-success">
                      +0.00%
                    </span>
                  </div>
                </td>
                <td className="py-[17.5px] px-[24px] text-start">
                  <button className="">
                    <Delete02Icon className="size-[20px] text-failure" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;

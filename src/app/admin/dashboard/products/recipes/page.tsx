'use client'

import { Header } from "@/app/dashboard/(components)/header";
import { AddCircleIcon } from "hugeicons-react";
import { SearchForm } from "../(components)/searchForm";
import { SortBy } from "../(components)/SortBy";
import Image from "next/image";
import Rating from "@/app/(components)/rating";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const Recipes=()=>{
    const router = useRouter()
    return(
        <div className="mt-[12px] flex flex-col w-full pt-[24px] gap-[32px]">
            <Header title="Recipes" btnText="Add New Recipe" BtnIcon={AddCircleIcon} onBtnClick={()=>router.push('/admin/dashboard/products/recipes/add-recipe')} btnClass="rounded-[8px] py-[12px] px-[24px]"/>
            <section className="flex flex-col gap-[16px]">
                {/* Search & Sort */}
                <div className="flex items-center justify-between px-[12px]">
                    <SearchForm/>
                    <div className="flex gap-[16px] items-center">
                        <span className="font-[600] text-[14px] leading-[16.8px] text-blackPrimary">Showing 1 of 500</span>
                        <SortBy/>
                    </div>
                </div>
                {/* Recipes */}
                <div className="pt-[16px] px-[16px] grid grid-cols-2 lg:grid-cols-3 gap-x-[16px] gap-y-[32px]">
                    {[1,2,3,4,5,3,5].map((recipe, index)=>(
                        <div key={index} className="w-full h-[348px] p-[16px] flex flex-col gap-[16px] rounded-[12px] border-[1px] border-border">
                            <Image src={""} width={292} height={120} alt="img" className="object-cover w-full h-[120px]"/>
                            <div className="flex flex-col gap-[16px]">
                                <div className="flex flex-col gap-[12px]">
                                    <div className="flex flex-col gap-[4px]">
                                        <h3 className="text-[16px] leading-[23.2px] text-blackPrimary font-[600]">Nigerian Plantain Porridge</h3>
                                        <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">Cook: 56mins</span>
                                    </div>
                                    <Rating rating={10} stars={5} showRatingValue={true}/>
                                </div>
                                <p className="line-clamp-2 font-[400] text-[14px] leading-[20.3px] text-blackPrimary">Nigerian Plantain Porridge is a rich meal that all plantain lovers will surely enjoy. It can...</p>
                                <Button variant={"outline"} className="px-[16px] py-[6px] border-[1px] border-border h-[32px] text-[14px] font-[600] leading-[20.3px] text-black rounded-[8px]">View Content</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Recipes;
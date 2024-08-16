"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "@/assets/images/afritique.png";
import usa from "@/assets/images/usa.svg";
import OrderHistory from "../../(components)/order-history";
// import { newArrivals } from "@/app/page";
import Orders from "@/app/sellers/dashboard/my-orders/(components)/orders";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search01Icon } from "hugeicons-react";
import { Input } from "@/components/ui/input";
import SellerProductCard from "./(components)/Seller-products";
import { newArrivals } from "@/app/(components)/reviews";

const SellerDetails = () => {
  return (
    <div className="font-openSans">
      {/* Breadcrumb */}
      <div className="mt-[8px]"> </div>
      <section className="mt-[12px] flex flex-col gap-y-[32px] py-[16px]">
        {/* Heading */}
        <div className="itemc flex w-full items-center justify-between gap-x-[12px]">
          <Header title="Sellers Profile" />
          <div className="flex items-center gap-x-[12px]">
            <Button className="h-[36px] rounded-[4px] border-[1px] border-[#8E97A6] bg-white px-[12px] py-[8px] text-[14px] font-[600] text-blackPrimary">
              Suspend
            </Button>
            <Button className="h-[36px] rounded-[4px] border-[1px] border-[#8E97A6] bg-white px-[12px] py-[8px] text-[14px] font-[600] text-blackPrimary">
              Delete
            </Button>
          </div>
        </div>
        {/* Details */}
        <div className="flex w-full gap-x-[16px]">
          <div className="flex w-full flex-col gap-y-[24px]">
            {/* Name */}
            <div className="flex w-full items-center gap-[8px] rounded-[12px] border-[1px] border-border p-[16px]">
              <Image
                src={image}
                width={120}
                height={120}
                alt=""
                className="size-[120px] rounded-[12px]"
              />
              <div className="flex flex-col">
                <h3 className="text-[32px] font-[600] leading-[46.4px] text-blackPrimary">
                  Afritique-Benin
                </h3>
                <span className="text-[14px] font-[400] leading-[20.3px] text-success">
                  Verified
                </span>
                <span className="text-[16px] font-[400] leading-[23.2px] text-[#787C83]">
                  Subscribed to Professional Plan
                </span>
              </div>
            </div>
            {/* Description */}
            <div className="flex w-full flex-col gap-y-[8px] rounded-[12px] border-[1px] border-border p-[16px]">
              <h3 className="text-[20px] font-[600] leading-[29px] text-blackPrimary">
                Description
              </h3>
              <p className="text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
                Afritique is your one-stop shop for all things African! We
                celebrate the vibrant cultures, rich traditions, and stunning
                fashions of the African continent. Immerse yourself in our
                collection of unique and stylish clothing, exquisite home wears,
                and authentic accessories. Afritique is more than just a store;
                it&apos; a cultural experience.{" "}
              </p>
            </div>
            <div className="flex gap-x-[16px]">
              {/* Sales  */}
              <div className="flex w-full flex-col gap-y-[12px] rounded-[12px] border-[1px] border-border px-[12px] py-[16px]">
                <h5 className="text-[14px] font-[400] leading-[20.3px] text-black">
                  Sales
                </h5>
                <div className="flex items-center gap-x-[7px]">
                  <h2 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
                    164
                  </h2>
                  <span className="font-inter font-[400] leading-[14.52px] text-success">
                    +0.00%
                  </span>
                </div>
              </div>
              {/* Revenue */}
              <div className="flex w-full flex-col gap-y-[12px] rounded-[12px] border-[1px] border-border px-[12px] py-[16px]">
                <h5 className="text-[14px] font-[400] leading-[20.3px] text-black">
                  Revenue
                </h5>
                <div className="flex items-center gap-x-[7px]">
                  <h2 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
                    $3,600
                  </h2>
                  <span className="font-inter font-[400] leading-[14.52px] text-success">
                    +0.00%
                  </span>
                </div>
              </div>
              {/* Products */}
              <div className="flex w-full flex-col gap-y-[12px] rounded-[12px] border-[1px] border-border px-[12px] py-[16px]">
                <h5 className="text-[14px] font-[400] leading-[20.3px] text-black">
                  Products
                </h5>
                <div className="flex items-center gap-x-[7px]">
                  <h2 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
                    102
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="flex w-full flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border p-[16px]">
            <div className="flex flex-col gap-y-[12px]">
              <h2 className="text-[20px] font-[600] leading-[29px] text-black">
                Contact:
              </h2>
              <div className="flex gap-x-[7px]">
                <Image
                  src={image}
                  sizes={"80px"}
                  alt=""
                  className="size-[80px] object-cover"
                />
                <div className="flex flex-col gap-y-[4px]">
                  <h5 className="font-openSans text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Nia Taraji
                  </h5>
                  <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                    Username@gmail.com
                  </p>
                  <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                    +1 (234) 555 - 66234
                  </p>
                </div>
              </div>
            </div>
            {/* Address */}
            <div className="flex max-w-[324px] flex-col gap-y-[12px]">
              <h2 className="text-[20px] font-[600] leading-[29px] text-black">
                Address
              </h2>
              <div className="flex gap-x-[12px]">
                <div className="flex flex-col gap-y-[4px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
                  <span className="">Country:</span>
                  <span className="text-[14px] text-[#787C83]">Address:</span>
                </div>
                <div className="flex flex-col gap-y-[4px]">
                  <div className="flex gap-x-[12px]">
                    <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                      Benin
                    </span>
                    <Image
                      src={usa}
                      width={24}
                      height={16}
                      alt=""
                      className="h-[16px] w-[24px]"
                    />
                  </div>
                  <p className="text-wrap text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                    01 BP 35 Cotonou, Marche central de Porto-Novo
                  </p>
                </div>
              </div>
            </div>
            {/* Map */}
            <div></div>
          </div>
        </div>
        {/* Products */}
        <div className="flex flex-col gap-y-[32px]">
          {/* Search & Sort */}
          <div className="flex flex-col gap-y-[12px]">
            <h4 className="text-[20px] font-[600] leading-[29px] text-black">
              Products
            </h4>
            {/* Search  */}
            <div className="flex items-center justify-between px-[12px]">
              <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
                Showing 1 of 12
              </span>
              <form className="flex h-[36px] w-[363px] items-center gap-[8px] rounded-[8px] border-[0.5px] border-[#8E97A6] bg-white px-[12px] py-[8px]">
                <Search01Icon className="size-[16px] text-[#8E97A6]" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="h-full w-full border-none font-inter text-[14px] leading-[20.3px] text-[#8E97A6]"
                />
              </form>
              <div className="flex items-center gap-x-[16px]">
                <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
                  Showing 1 of 500
                </span>
                {/* sort */}
                <Select>
                  <SelectTrigger className="h-[36px] w-[181px] self-end rounded-[6px] border-none px-[8px] py-[12px]">
                    <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                      Sort by:
                    </span>
                    <SelectValue
                      className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
                      placeholder={" Latest Added"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {/* Products */}
          <div className="flex flex-wrap justify-between gap-x-[16px] gap-y-[32px]">
            {newArrivals?.map((product, index) => (
              <SellerProductCard key={index} product={product} />
            ))}
          </div>
          {/* Pagination */}
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default SellerDetails;

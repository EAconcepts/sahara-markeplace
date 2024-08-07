'use client'

import { DashboardSquare03Icon, DiscountIcon, FavouriteIcon, HugeiconsProps, Message01Icon, PackageIcon } from "hugeicons-react";
import { FC, RefAttributes } from "react";


export interface NavlinksProps{
    icon: FC<Omit<HugeiconsProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    path: string;
    value?: number;
  }
export const sellersNavLinks: NavlinksProps[] =[
  
    { icon: DashboardSquare03Icon, title: "Dashboard", path: "sllers/dashboard" },
    { icon: PackageIcon, title: "My Orders", path: "sellers/dashboard/my-orders" },
    { icon: FavouriteIcon, title: "Reviews", path: "sellers/dashboard/Reviews" },
    { icon: Message01Icon, title: "Products", path: "sellers/dashboard/product-listings" },
    { icon: DiscountIcon, title: "Discounts", path: "sellers/dashboard/discounts", value: 10 },

]

export const navlinks :NavlinksProps[] = [
    { icon: DashboardSquare03Icon, title: "Dashboard", path: "/dashboard" },
    { icon: PackageIcon, title: "My Orders", path: "/dashboard/my-orders" },
    { icon: FavouriteIcon, title: "Wishlist", path: "/dashboard/wishlist" },
    { icon: Message01Icon, title: "Quotes", path: "/dashboard/quotes" },
    { icon: DiscountIcon, title: "Discounts", path: "/dashboard/discounts", value: 10 },
  ];
"use client";

import {
  AlignBoxMiddleLeftIcon,
  DashboardSquare03Icon,
  DiscountIcon,
  FavouriteIcon,
  FolderLibraryIcon,
  HugeiconsProps,
  Message01Icon,
  News01Icon,
  PackageAddIcon,
  PackageIcon,
  ProductLoadingIcon,
  Settings02Icon,
  UserAccountIcon,
  UserMultiple02Icon,
} from "hugeicons-react";
import { FC, RefAttributes } from "react";

export interface NavlinksProps {
  icon: FC<Omit<HugeiconsProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  path: string;
  value?: number;
  sublinks?: any;
  // showSublinks?:boolean
}
export const sellersNavLinks: NavlinksProps[] = [
  {
    icon: DashboardSquare03Icon,
    title: "Dashboard",
    path: "/sellers/dashboard",
  },
  {
    icon: ProductLoadingIcon,
    title: "Products",
    path: "#",
    // showSublinks: false,
    sublinks: [
      {
        title: "Product List",
        path: "/sellers/dashboard/product-listings",
        icon: PackageIcon,
      },
      // { title: "Categories", path: "#",icon: FolderLibraryIcon, },
      {
        title: "Add Products",
        path: "/sellers/dashboard/add-product",
        icon: PackageAddIcon,
      },
    ],
  },
  {
    icon: PackageIcon,
    title: "My Orders",
    path: "/sellers/dashboard/my-orders",
  },
  // {
  //   icon: FavouriteIcon,
  //   title: "Reviews",
  //   path: "/sellers/dashboard/reviews",
  //   value: 10,
  // },
  // { icon: DiscountIcon, title: "Quotes", path: "#" },
];

export const navlinks: NavlinksProps[] = [
  { icon: DashboardSquare03Icon, title: "Dashboard", path: "/dashboard" },
  { icon: PackageIcon, title: "My Orders", path: "/dashboard/my-orders" },
  // { icon: FavouriteIcon, title: "Wishlist", path: "/dashboard/wishlist" },
  // { icon: Message01Icon, title: "Quotes", path: "/dashboard/quotes" },
  // {
  //   icon: DiscountIcon,
  //   title: "Discounts",
  //   path: "/dashboard/discounts",
  //   value: 10,
  // },
];

export const adminNavLinks: NavlinksProps[] = [
  { icon: DashboardSquare03Icon, title: "Dashboard", path: "/admin/dashboard" },
  {
    icon: Message01Icon,
    title: "Products",
    path: "#",
    sublinks: [
      {
        title: "Product List",
        path: "/admin/dashboard/products",
        icon: PackageIcon,
      },
      // { title: "Categories", path: "#",icon: FolderLibraryIcon, },
      {
        title: "Categories",
        path: "/admin/dashboard/products/categories",
        icon: PackageAddIcon,
      },
      { title: "Requests", path: "#", icon: PackageAddIcon },
      {
        title: "Recipes",
        path: "/admin/dashboard/products/recipes",
        icon: PackageAddIcon,
      },
    ],
  },
  { icon: PackageIcon, title: "Order list", path: "/admin/dashboard/orders" },
  {
    icon: PackageIcon,
    title: "Transactions",
    path: "/admin/dashboard/my-orders",
  },
  {
    icon: UserMultiple02Icon,
    title: "Customers",
    path: "/admin/dashboard/customers",
  },
  { icon: UserAccountIcon, title: "Sellers", path: "/admin/dashboard/sellers" },
  {
    icon: AlignBoxMiddleLeftIcon,
    title: "Applications",
    path: "#",
  },
  {
    icon: News01Icon,
    title: "Blogs",
    path: "/admin/dashboard/blogs",
    value: 10,
  },
  {
    icon: DiscountIcon,
    title: "Coupons/Discounts",
    path: "#",
    value: 10,
  },
  { icon: Message01Icon, title: "Reviews", path: "#" },
  { icon: Settings02Icon, title: "Settings", path: "#" },
];

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
}
export const sellersNavLinks: NavlinksProps[] = [
  {
    icon: DashboardSquare03Icon,
    title: "Dashboard",
    path: "sellers/dashboard",
  },
  {
    icon: ProductLoadingIcon,
    title: "Products",
    path: "#",
    sublinks: [
      { title: "Product List", path: "/sellers/dashboard/product-listings",icon: PackageIcon, },
      { title: "Categories", path: "/sellers/dashboard/categories",icon: FolderLibraryIcon, },
      { title: "Add Products", path: "/sellers/dashboard/add-products", icon: PackageAddIcon, },
    ],
  },
  {
    icon: PackageIcon,
    title: "My Orders",
    path: "/sellers/dashboard/my-orders",
  },
  {
    icon: FavouriteIcon,
    title: "Reviews",
    path: "sellers/dashboard/Reviews",
    value: 10,
  },
  { icon: DiscountIcon, title: "Quotes", path: "sellers/dashboard/quotes" },
];

export const navlinks: NavlinksProps[] = [
  { icon: DashboardSquare03Icon, title: "Dashboard", path: "/dashboard" },
  { icon: PackageIcon, title: "My Orders", path: "/dashboard/my-orders" },
  { icon: FavouriteIcon, title: "Wishlist", path: "/dashboard/wishlist" },
  { icon: Message01Icon, title: "Quotes", path: "/dashboard/quotes" },
  {
    icon: DiscountIcon,
    title: "Discounts",
    path: "/dashboard/discounts",
    value: 10,
  },
];

export const adminNavLinks: NavlinksProps[] = [
  { icon: DashboardSquare03Icon, title: "Dashboard", path: "sllers/dashboard" },
  {
    icon: Message01Icon,
    title: "Products",
    path: "admin/dashboard/product-listings",
  },
  { icon: PackageIcon, title: "Order list", path: "admin/dashboard/my-orders" },
  {
    icon: PackageIcon,
    title: "Transactions",
    path: "admin/dashboard/my-orders",
  },
  { icon: UserMultiple02Icon, title: "Customers", path: "dashboard/customers" },
  { icon: UserAccountIcon, title: "Sellers", path: "/admin/dashboard/sellers" },
  {
    icon: AlignBoxMiddleLeftIcon,
    title: "Applications",
    path: "admin/dashboard/my-orders",
  },
  {
    icon: News01Icon,
    title: "Blogs",
    path: "admin/dashboard/discounts",
    value: 10,
  },
  {
    icon: DiscountIcon,
    title: "Coupons/Discounts",
    path: "admin/dashboard/discounts",
    value: 10,
  },
  { icon: Message01Icon, title: "Reviews", path: "admin/dashboard/Reviews" },
  { icon: Settings02Icon, title: "Settings", path: "admin/dashboard/Reviews" },
];

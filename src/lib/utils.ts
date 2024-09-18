import { type ClassValue, clsx } from "clsx"
import { Dispatch, SetStateAction } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export  const getUnderPrice=(data:any, price:number, setUnderPrice:Dispatch<SetStateAction<never[]>>)=>{
  const filtered =  data?.data?.data?.products?.filter((product:any)=>Number(product?.price) <price)
  console.log(filtered)
  setUnderPrice(filtered)
}
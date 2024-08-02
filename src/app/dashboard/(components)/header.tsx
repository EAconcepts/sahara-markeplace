import { twMerge } from "tailwind-merge"

export const Header=({title, className, text2, style2}:{title:string; className?:string; text2?:string; style2?:string})=>{

    return(
        <div className="w-full flex gap-x-[12px]">
            <h2 className={twMerge("font-playfair font-[600] text-[24px] leading-[34.8px] text-blackPrimary shrink-0", className)}>{title} <span className={style2}>{text2}</span></h2>
            <div className="bg-border h-[1px] w-full self-end"></div>
        </div>
    )
}
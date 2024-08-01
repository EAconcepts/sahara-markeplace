
export const Header=({title}:{title:string})=>{

    return(
        <div className="w-full flex gap-x-[12px]">
            <h2 className="font-playfair font-[600] text-[24px] leading-[34.8px] text-blackPrimary shrink-0">{title}</h2>
            <div className="bg-border h-[1px] w-full self-end"></div>
        </div>
    )
}
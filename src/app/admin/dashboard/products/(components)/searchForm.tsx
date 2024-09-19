import { Input } from "@/components/ui/input"
import { Search01Icon } from "hugeicons-react"

export const SearchForm=()=>{
    return(
        <form className="flex h-[36px] w-[363px] items-center gap-[8px] rounded-[8px] border-[0.5px] border-[#8E97A6] bg-white px-[12px] py-[8px]">
        <Search01Icon className="size-[16px] text-[#8E97A6]" />
        <Input
          type="search"
          placeholder="Search"
          className="h-full w-full border-none font-inter text-[14px] leading-[20.3px] text-[#8E97A6]"
        />
      </form>
    )
}
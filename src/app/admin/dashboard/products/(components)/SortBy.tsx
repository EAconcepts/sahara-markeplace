import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export const SortBy=()=>{
    return(
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
    )
}
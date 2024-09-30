import { Input } from "@/components/ui/input";
import { Search01Icon } from "hugeicons-react";
import { Dispatch, FormEvent, SetStateAction } from "react";

export const SearchForm = ({
  search,
  setSearchQuery,
  handleSearch,
}: {
  search?: string;
  setSearchQuery?: Dispatch<SetStateAction<string>>;
  handleSearch?: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      onSubmit={handleSearch}
      className="flex h-[36px] w-[363px] items-center gap-[8px] rounded-[8px] border-[0.5px] border-[#8E97A6] bg-white px-[12px] py-[8px]"
    >
      <Search01Icon className="size-[16px] text-[#8E97A6]" />
      <Input
        type="search"
        value={search}
        onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
        placeholder="Search"
        className="h-full w-full border-none font-inter text-[14px] leading-[20.3px] text-[#8E97A6] focus-within:border-none focus-within:outline-none focus:border-none focus:outline-none focus-visible:border-none focus-visible:outline-none"
      />
    </form>
  );
};

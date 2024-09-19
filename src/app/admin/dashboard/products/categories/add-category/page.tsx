import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddCategory = () => {
  return (
    <div className="mt-[12px] flex flex-col gap-[32px] font-openSans">
      <Header title="Add New Category" />
      <form className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="newCategory"
            className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          >
            New Category
          </label>
          <Input
            id="newCategory"
            className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="newCategory"
            className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          >
            Sub-Categories
          </label>
          <textarea
            id="newCategory"
            className="h-[100px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
          />
        </div>
        <Button className="rounded-[8px] px-[24px] py-[12px] text-[16px] font-[600] leading-[23.2px]">
          Add New Category
        </Button>
      </form>
    </div>
  );
};

export default AddCategory;

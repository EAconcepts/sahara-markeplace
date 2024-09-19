import { Button } from "@/components/ui/button";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?:string
}

const Pagination: FC<PaginationProps> = ({className,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`mx-1 rounded border px-3 py-1 ${
            currentPage === i
              ? "border-greenPrimary bg-white"
              : "border-gray-300"
          }`}
          disabled={currentPage === i}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className={twMerge("mt-4 flex items-center justify-end gap-x-[24px]", className)}>
        <p className="text-[14px] font-[600] leading-[20.3px] text-black">Page {currentPage && currentPage} of {totalPages && totalPages}</p>
        <div className="flex space-x-1">{renderPageNumbers()}</div>
        <div className="flex items-center gap-x-[24px]">
      <Button
        onClick={() => {
          onPageChange(currentPage - 1);
          console.log(currentPage);
        }}
        disabled={currentPage === 1}
        className={`w-fit rounded-[8px] border-[1px] bg-transparent px-[12px] py-[8px] text-[14px] font-[600px] leading-[20.3px] text-blackPrimary ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-opacity-40"
        }`}
      >
        Previous
      </Button>
      
      <button
        onClick={() => {
          onPageChange(currentPage + 1);
          console.log(currentPage);
        }}
        disabled={currentPage === totalPages}
        className={`w-fit rounded-[8px] border-[1px] bg-greenPrimary px-[12px] py-[8px] text-[14px] font-[600px] leading-[20.3px] text-white ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-opacity-50"
        }`}
      >
        Next
      </button>
      </div>
    </div>
  );
};

export default Pagination;

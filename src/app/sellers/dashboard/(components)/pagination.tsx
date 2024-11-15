import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  className,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    const visiblePages = 5; // Max visible page numbers including ellipses
    const sidePages = 2; // Number of pages to show on either side of the current page

    if (totalPages <= visiblePages) {
      // Show all pages when total pages are less than or equal to visiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      // Always show the first page
      pages.push(renderPageButton(1));

      if (currentPage > sidePages + 2) {
        // Add ellipsis if there's a gap between the first page and the current page range
        pages.push(
          <span key="start-ellipsis" className="px-2">
            ...
          </span>,
        );
      }

      // Pages around the current page
      const startPage = Math.max(2, currentPage - sidePages);
      const endPage = Math.min(totalPages - 1, currentPage + sidePages);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(renderPageButton(i));
      }

      if (currentPage < totalPages - sidePages - 1) {
        // Add ellipsis if there's a gap between the current page range and the last page
        pages.push(
          <span key="end-ellipsis" className="px-2">
            ...
          </span>,
        );
      }

      // Always show the last page
      pages.push(renderPageButton(totalPages));
    }

    return pages;
  };

  const renderPageButton = (page: number) => (
    <button
      key={page}
      onClick={() => onPageChange(page)}
      className={`mx-1 rounded border px-3 py-1 ${
        currentPage === page
          ? "border-greenPrimary bg-white"
          : "border-gray-300"
      }`}
      disabled={currentPage === page}
    >
      {page}
    </button>
  );

  return (
    <div
      className={twMerge(
        "mt-4 flex items-center justify-end gap-x-[24px]",
        className,
      )}
    >
      <p className="text-[14px] font-[600] leading-[20.3px] text-black">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex space-x-1">{renderPageNumbers()}</div>
      <div className="flex items-center gap-x-[24px]">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-fit rounded-[8px] border-[1px] bg-transparent px-[12px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-blackPrimary ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-opacity-40"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-fit rounded-[8px] border-[1px] bg-greenPrimary px-[12px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-white ${
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

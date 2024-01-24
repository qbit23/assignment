// Pagination.tsx

import React from "react";
import Icon from "../Icon";
import { mainModule } from "process";

interface PaginationProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  pageSize,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div>
      <span>
        {(currentPage - 1) * pageSize + 1}-
        {Math.min((currentPage - 1) * pageSize + pageSize, totalCount)} of{" "}
        {totalCount}{" "}
      </span>
      <Icon
        className="material-symbols-outlined text-[10px] font-semibold bg-gray-200 rounded-md hover:bg-gray-300 p-1 m-1"
        name="arrow_back_ios"
        onClick={handlePrevPage}
      ></Icon>
      <Icon
        className="material-symbols-outlined text-[10px] font-semibold bg-gray-200 rounded-md hover:bg-gray-300 p-1 "
        name="arrow_forward_ios"
        onClick={handleNextPage}
      ></Icon>
    </div>
  );
};

export default Pagination;

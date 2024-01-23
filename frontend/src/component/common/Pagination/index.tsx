// Pagination.tsx

import React from 'react';
import Icon from '../Icon';
import { mainModule } from 'process';

interface PaginationProps {
  total_count: number;
  pageSize: number;
  currentPage: number;
  total_pages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total_count,
  pageSize,
  currentPage,
  total_pages,
  onPageChange,
}) => {

  const handleNextPage = () => {
    if (currentPage < total_pages) {
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
      <span>{(currentPage-1)*pageSize + 1}-{Math.min((currentPage-1)*pageSize+pageSize, total_count)} of {total_count}   </span>
      <Icon className='material-symbols-outlined text-[10px] font-semibold bg-gray-200 rounded-md hover:bg-gray-300 p-1 m-1' name='arrow_back_ios' onClick={handlePrevPage} ></Icon>
      <Icon className='material-symbols-outlined text-[10px] font-semibold bg-gray-200 rounded-md hover:bg-gray-300 p-1 ' name='arrow_forward_ios' onClick={handleNextPage}></Icon>
    </div>
  );
};

export default Pagination;

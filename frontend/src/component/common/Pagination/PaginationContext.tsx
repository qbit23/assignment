// PaginationContext.tsx

import React, { createContext, useContext, useState } from 'react';

interface PaginationContextProps {
  total_count: number;
  pageSize: number;
  currentPage: number;
  total_pages: number;
  onPageChange: (newPage: number) => void;
  updatePaginationState: (total_count: number, total_pages: number) => void;

}
interface PaginationProviderProps {
  children: React.ReactNode;
}
const PaginationContext = createContext<PaginationContextProps | undefined>(undefined);

export const PaginationProvider: React.FC<PaginationProviderProps> = ({ children }) => {
  const [pagination, setPagination] = useState({
    total_count: 50,
    pageSize: 25,
    currentPage: 1,
    total_pages: 2,
    onPageChange: (newPage: number) => {},
    updatePaginationState: (total_count: number, total_pages: number) => {},
  });

  const contextValue: PaginationContextProps = {
    ...pagination,
    onPageChange: (newPage: number) => {
      setPagination((prevPagination) => ({ ...prevPagination, currentPage: newPage }));
    },
    updatePaginationState: (total_count: number, total_pages: number)=>{
      setPagination((prevPagination: any)=>({...prevPagination, total_count: total_count, total_pages: total_pages}))
    }

  };

  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }
  return context;
};

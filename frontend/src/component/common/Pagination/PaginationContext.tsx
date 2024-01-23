// PaginationContext.tsx

import React, { createContext, useContext, useState } from 'react';

interface PaginationContextProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  updatePaginationState: (totalCount: number, totalPages: number) => void;

}
interface PaginationProviderProps {
  children: React.ReactNode;
}
const PaginationContext = createContext<PaginationContextProps | undefined>(undefined);

export const PaginationProvider: React.FC<PaginationProviderProps> = ({ children }) => {
  const [pagination, setPagination] = useState({
    totalCount: 50,
    pageSize: 25,
    currentPage: 1,
    totalPages: 2,
    onPageChange: (newPage: number) => {},
    updatePaginationState: (totalCount: number, totalPages: number) => {},
  });

  const contextValue: PaginationContextProps = {
    ...pagination,
    onPageChange: (newPage: number) => {
      setPagination((prevPagination) => ({ ...prevPagination, currentPage: newPage }));
    },
    updatePaginationState: (totalCount: number, totalPages: number)=>{
      setPagination((prevPagination: any)=>({...prevPagination, totalCount: totalCount, totalPages: totalPages}))
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

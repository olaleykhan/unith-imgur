import { useEffect, useMemo } from 'react';

export const usePaginatedData = (dataLength: number, currentPage: number, itemsPerPage: number, setCurrentPage: (p: number) => void) => {
  const totalPages = Math.ceil(dataLength / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [dataLength, currentPage, itemsPerPage, totalPages, setCurrentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return { currentPage, itemsPerPage, handlePageChange };
};


export const usePaginatedItems = (data: any[], currentPage: number, itemsPerPage: number) => {
    const paginatedData = useMemo(() => {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return data.slice(start, end);
    }, [data, currentPage, itemsPerPage]);
  
    return paginatedData;
  };
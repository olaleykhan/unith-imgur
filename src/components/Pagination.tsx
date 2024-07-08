import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box, Pagination as MUIPagination } from "@mui/material";
import { setCurrentPage } from "@/lib/store/images/imageSlice";
import { usePaginatedData } from "@/hooks/usePagination";

interface PaginationProps {
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: any) => state.image.currentPage);
  const itemsPerPage = useSelector((state: any) => state.image.itemsPerPage);

  const { handlePageChange } = usePaginatedData(
    totalItems,
    currentPage,
    itemsPerPage,
    (page) => dispatch(setCurrentPage(page))
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <Box display="flex" alignItems="center" mt={2}>
      <MUIPagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => handlePageChange(page)}
        variant="outlined"
        color="primary"
        shape="rounded"
      />
    </Box>
  );
};

export default Pagination;

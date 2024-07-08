"use client";
import { useFetchAllQuery } from "@/lib/store/images/imagesApiSlice";
import { Grid, Container, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import { usePaginatedItems } from "@/hooks/usePagination";

const ImageList = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useFetchAllQuery(undefined);

  const dispatch = useDispatch();
  const currentPage = useSelector((state: any) => state.image.currentPage);
  const itemsPerPage = useSelector((state: any) => state.image.itemsPerPage);

  const paginatedData = usePaginatedItems(
    data ?? [],
    currentPage,
    itemsPerPage
  );

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    return (
      <Container
        disableGutters
        sx={{
          pb: 2,
        }}
      >
        <Grid
          container
          justifyContent="center"
          rowSpacing={6}
          columnSpacing={3}
        >
          {paginatedData.map((img) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2.4}
              key={img.id}
              container
              justifyContent="center"
            >
              <ImageCard imageData={img} />
            </Grid>
          ))}
        </Grid>

        <Box>
          <Pagination totalItems={data.length} />
        </Box>
      </Container>
    );
  }

  return null;
};

export default ImageList;

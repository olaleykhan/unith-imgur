"use client";
import { useFetchAllQuery } from "@/lib/store/images/imagesApiSlice";
import { Grid, Container } from "@mui/material";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import { usePaginatedItems } from "@/hooks/usePagination";

const ImageList = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useFetchAllQuery(undefined);

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
      <Container>
        <Grid
          container
          justifyContent="flex-start"
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

        <Grid
          container
          justifyContent={{
            xs: "center",
            lg: "flex-start",
          }}
        >
          <Pagination totalItems={data.length} />
        </Grid>
      </Container>
    );
  }

  return null;
};

export default ImageList;

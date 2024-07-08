"use client";
import { useFetchAllQuery } from "@/lib/store/images/imagesApiSlice";
import { Grid, Container } from "@mui/material";
import ImageCard from "./ImageCard";
import Loading from "@/components/Loading";

const ImageList = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useFetchAllQuery(undefined);

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
          justifyContent="center"
          rowSpacing={6}
          columnSpacing={3}
        >
          {data.map((img) => (
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
      </Container>
    );
  }

  return null;
};

export default ImageList;

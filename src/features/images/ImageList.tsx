"use client";
import { useFetchAllQuery } from "@/lib/store/images/imagesApiSlice";
import { useState } from "react";
import Image from "next/image";
import { Box, Grid, Container } from "@mui/material";
import ImageCard from "./ImageCard";

const ImageList = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useFetchAllQuery(undefined);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!! Peace</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    console.log(data, "data from API");

    return (
      <Container>
        <Grid container columnSpacing={3} rowSpacing={6}>
          {data.map((img) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={img.id}>
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

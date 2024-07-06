"use client";
import { useFetchAllQuery } from "@/lib/store/images/imagesApiSlice";
import { useState } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";

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
      <div>
        <Box>
          <Grid container>
            {data.map((img) => (
              <Grid item key={img.index}>
                {img.title}
              </Grid>
            ))}
          </Grid>
        </Box>
        <p> DOne</p>
      </div>
    );
  }

  return null;
};

export default ImageList;

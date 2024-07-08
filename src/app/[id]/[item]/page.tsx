"use client";
import { useState } from "react";
import React from "react";
import { useFetchAllQuery } from "@/lib/store/images/imagesApiSlice";
// import { useTheme } from "@emotion/react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  useTheme,
} from "@mui/material";

type Props = {
  params: { id: string; item: string };
};

const Page: React.FC<Props> = ({ params }) => {
  const theme = useTheme();
  const { id } = params;

  const { data, isLoading, isError, isSuccess } = useFetchAllQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      data: data?.find((image) => image.index === Number(id)),
      ...rest,
    }),
  });

  if (isError) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Error: Image not found
        </Typography>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (isSuccess && !data) {
    return <> this image does not exist in store</>;
  }

  if (isSuccess) {
    return (
      <Grid container justifyContent="center">
        <Grid item xs>
          <Card sx={{ boxShadow: 8 }}>
            <CardMedia
              component="img"
              image={data?.image}
              alt={data?.title}
              // loading="lazy"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "https://placehold.co/200";
              }}
              sx={{
                height: 300,
                objectFit: "cover",
                borderRadius: "4px 4px 0 0",
                [theme.breakpoints.up("md")]: {
                  height: 400,
                },
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data?.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }

  return null;
};

export default Page;

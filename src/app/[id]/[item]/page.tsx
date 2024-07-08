"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useFetchAllQuery } from "@/lib/store/images/imagesApiSlice";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  useTheme,
} from "@mui/material";
import Loading from "@/components/Loading";
import { PLACEHOLDER_IMG } from "@/config";

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

  const [image, setImage] = useState(data?.image);

  useEffect(() => {
    if (data) {
      setImage(data.image);
    }
  }, [data]);

  function handleError() {
    setImage(PLACEHOLDER_IMG);
  }

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
    return <Loading />;
  }

  if (isSuccess && !data) {
    return <>This image does not exist in store</>;
  }

  if (isSuccess) {
    return (
      <Grid container justifyContent="center">
        <Grid item xs>
          <Card sx={{ boxShadow: 8 }}>
            <CardMedia
              component="img"
              image={image}
              alt={data?.title}
              onError={handleError}
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
              <Typography gutterBottom variant="body1" color="text.primary">
                {data?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
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

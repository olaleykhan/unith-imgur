import { FC } from "react";
import { Box, Skeleton, Grid, Container } from "@mui/material";
import ImageLoader from "./ImageLoader";

type Props = {
  length: number;
};
const ImageListLoader: FC<Props> = ({ length }) => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container>
        <Grid
          container
          justifyContent="center"
          rowSpacing={6}
          columnSpacing={3}
        >
          {Array.from(new Array(length)).map((i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2.4}
              key={i}
              container
              justifyContent="center"
              direction="column"
              gap={2}
              wrap="nowrap"
              sx={{
                maxWidth: 300,
              }}
            >
              <ImageLoader />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImageListLoader;

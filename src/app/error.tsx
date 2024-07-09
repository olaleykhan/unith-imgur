"use client";
import Link from "next/link";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <Container>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The URL <code>{currentUrl}</code> does not exist.
        </Typography>
        <Button variant="contained" color="primary" component={Link} href="/">
          Home
        </Button>
      </Grid>
    </Container>
  );
};

export default Error;

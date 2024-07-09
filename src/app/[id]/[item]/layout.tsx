import Header from "@/components/Header";
import { Button, Container, Typography, Box, Grid } from "@mui/material";
import Link from "next/link";

interface Props {
  readonly children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="md" disableGutters>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        minHeight={{
          xs: "80vh",
          md: "100vh",
        }}
        maxHeight="100vh"
      >
        <Grid item>
          <Header height={100}> Image Details</Header>
        </Grid>

        <Grid xs item>
          {children}
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          height={100}
        >
          <Button
            variant="contained"
            component={Link}
            href="/"
            sx={{
              width: 200,
            }}
          >
            Go Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;

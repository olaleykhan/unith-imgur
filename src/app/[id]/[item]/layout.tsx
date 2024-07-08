import Header from "@/components/Header";
import { Button, Container, Typography, Box, Grid } from "@mui/material";
import Link from "next/link";

interface Props {
  readonly children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height: "100vh",
        }}
      >
        <Header height={50}> Image Details</Header>
        <Box
          sx={{
            height: "calc(100vh - 200px)",
          }}
        >
          {children}
        </Box>
        <Box
          mt={4}
          sx={{
            height: 50,
          }}
        >
          <Grid container justifyContent="center">
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
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;

import Header from "@/components/Header";
import { Button, Container, Typography, Box, Grid } from "@mui/material";
import Link from "next/link";

interface Props {
  readonly children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        // bgcolor: "red",
      }}
    >
      <Box
        sx={{
          height: "100vh",
        }}
      >
        <Header> Image Details</Header>
        <Box
   
        >
          {children}
        </Box>
      </Box>
      <Box mt={4}>
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
    </Container>
  );
};

export default Layout;

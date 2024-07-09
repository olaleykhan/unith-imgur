import ImageList from "@/features/images/ImageList";
import Header from "@/components/Header";
import { Box, Container } from "@mui/material";

export default function Page() {
  return (
    <Box component="main" height="100vh">
      <Header height={100}>Simple Data Set</Header>

      <ImageList />
    </Box>
  );
}

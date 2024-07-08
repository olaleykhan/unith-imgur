import Image from "next/image";
import ImageList from "@/features/images/ImageList";
import Header from "@/components/Header";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <main>
      <Box
        sx={{
          pb: 2,
        }}
      >
        <Header>Simple Data Set</Header>
      </Box>
      <ImageList />
    </main>
  );
}

import { Button, Box } from "@mui/material";
import Link from "next/link";

interface Props {
  readonly children: React.ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div>
      <Box
        sx={{
          height: "600px",
        }}
      >
        {children}
      </Box>

      <Button variant="contained" component={Link} href="/">
        {" "}
        Go Home
      </Button>
    </div>
  );
};

export default layout;

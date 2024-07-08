import { ReactNode, FC } from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  children: ReactNode;
};
const Header: FC<Props> = ({ children }) => {
  return (
    <Box p={2} component="header">
      <Typography variant="h4" textAlign="center">
        {children}
      </Typography>
    </Box>
  );
};

export default Header;

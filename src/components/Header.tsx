import { ReactNode, FC } from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  children: ReactNode;
  height?: string | number;
};
const Header: FC<Props> = ({ children, height }) => {
  return (
    <Box p={2} height={height} component="header">
      <Typography variant="h4" textAlign="center">
        {children}
      </Typography>
    </Box>
  );
};

export default Header;

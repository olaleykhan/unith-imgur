import { ReactNode, FC } from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  children: ReactNode;
};
const Header: FC<Props> = ({ children }) => {
  return (
    <Box p={4} component="header">
      <Typography
        variant="h4"
        fontSize={{}}
        fontWeight="bold"
        textAlign="center"
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Header;

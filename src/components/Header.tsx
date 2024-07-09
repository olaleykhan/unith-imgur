import { ReactNode, FC } from "react";
import { Box, Typography, Grid } from "@mui/material";

type Props = {
  children: ReactNode;
  height?: string | number;
};
const Header: FC<Props> = ({ children, height }) => {
  return (
    <Box py={2} height={height} component="header">
      <Grid height="100%" container alignItems="center" justifyContent="center">
        <Typography variant="h4" textAlign="center">
          {children}
        </Typography>
      </Grid>
    </Box>
  );
};

export default Header;

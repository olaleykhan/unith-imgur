"use client";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Error() {
  return (
    <div>
      <Typography variant="h1">Something went wrong!</Typography>

      <br />
      <Button variant="contained" component={Link} href="/">
        Go Home
      </Button>
    </div>
  );
}

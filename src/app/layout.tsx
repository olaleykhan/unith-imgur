import type { Metadata } from "next";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { StoreProvider } from "./StoreProvider";
import { theme } from "@/theme";

export const metadata: Metadata = {
  title: "Unith Imgur",
  description:
    "A Unith frontend assessment to display competency in mordern frontend technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CssBaseline />
      <body>
        <ThemeProvider theme={theme}>
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

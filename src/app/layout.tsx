import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import "./globals.css";4
import { StoreProvider } from "./StoreProvider";
import { theme } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

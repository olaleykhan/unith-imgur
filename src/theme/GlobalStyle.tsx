import React from "react";
import { Global, css } from "@emotion/react";

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        html {
          font-size: 10px;
          font-family: "Inter", sans-serif;
          @media only screen and (min-width: 600px) {
            font-size: 12px;
          }
          @media only screen and (min-width: 900px) {
            font-size: 14px;
          }
          @media only screen and (min-width: 1200px) {
            font-size: 16px;
          }
        }
      `}
    />
  );
};

export default GlobalStyle;

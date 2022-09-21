import React from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import App from "./component/App";

let theme = createTheme({
  typography: {
    fontFamily: [
      "Open Sans",
      "Lato",
      "Poppins",
      "-apple-system",
      "Palatino",
      "Georgia",
      '"Segoe UI"',
      "Montserrat",
      '"Playfair Display"',
      "Helvetica",
      "sans-serif",
      '"Abril Fatface"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#1A2634",
    },
    secondary: {
      main: "#0075F6 ", //2666CF
      light: "#FFCE76",
      dark: "#0900C3",
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

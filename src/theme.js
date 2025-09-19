// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#f1f1f1", // main text
      secondary: "#b0b0b0", // secondary text
    },
    primary: {
      main: "#00e5ff", // accent (cyan)
    },
    secondary: {
      main: "#ff4ecd", // highlight (pink)
    },
    background: {
      default: "transparent", // so gradient shows
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
  },
});

export default theme;

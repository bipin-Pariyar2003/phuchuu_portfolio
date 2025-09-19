import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Blog from "./views/Blog";
import Projects from "./views/Projects";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // 👈 import custom theme
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: `
            linear-gradient(
              135deg,
              rgba(46, 0, 62, 0.85),
              rgba(26, 26, 64, 0.8),
              rgba(13, 50, 77, 0.8)
            )
          `,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)", // Safari fix
          m: 0,
          p: 0,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;

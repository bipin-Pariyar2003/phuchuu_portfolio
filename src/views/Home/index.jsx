import React from "react";
import Navbar from "../../components/Navbar";
import { Box, Typography, Button, Avatar } from "@mui/material";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)", // subtract navbar height
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          background:
            "linear-gradient(135deg, rgba(46,0,62,0.85), rgba(26,26,64,0.8), rgba(13,50,77,0.8))",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Image Section */}
        <Box sx={{ mb: { xs: 4, md: 0 }, mr: { md: 6 } }}>
          <Avatar
            src="/bipika.png" // replace with actual image path
            alt="Bipika Kumari Chaudhary"
            sx={{
              width: { xs: 200, md: 250 },
              height: { xs: 200, md: 250 },
              border: "4px solid #00e5ff",
            }}
          />
        </Box>

        {/* Text Section */}
        <Box>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, color: "#00e5ff" }}>
            Hi, I am Bipika Kumari Chaudhary
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, color: "#f1f1f1" }}>
            UI/UX Designer & Frontend Developer
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 500, color: "#b0b0b0" }}>
            I craft beautiful and user-friendly interfaces with clean code. Passionate
            about design and bringing ideas to life on the web. I specialize in Figma,
            HTML, CSS, JavaScript, and building responsive frontend projects.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mr: 2 }} href="#contact">
            Hire Me
          </Button>
          <Button variant="outlined" color="secondary" href="#projects">
            View Projects
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;

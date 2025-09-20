import React from "react";
import Navbar from "../../components/Navbar";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Home = () => {
  const navigate = useNavigate();
  const handleHireMeClick = () => {
    navigate("/contact");
  };
  const handleViewProjectsClick = () => {
    navigate("/projects");
  };
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
        <Box sx={{ mn: { xs: 4, md: 0 }, mr: { md: 6 } }}>
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
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#00e5ff",
              fontSize: { xs: "1.5rem", md: "3rem" },
            }}
          >
            <Typewriter
              words={["Hi, I am Bipika Kumari Chaudhary"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={10000}
            />
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 3, color: "#f1f1f1", fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            UI/UX Designer & Frontend Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              maxWidth: 500,
              color: "#b0b0b0",
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}
          >
            I craft beautiful and user-friendly interfaces with clean code. Passionate
            about design and bringing ideas to life on the web. I specialize in Figma,
            HTML, CSS, JavaScript, and building responsive frontend projects.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2, mb: 2 }}
            onClick={handleHireMeClick}
          >
            Hire Me
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ mr: 2, mb: 2 }}
            onClick={handleViewProjectsClick}
          >
            View Projects
          </Button>
          <br />
          <Button
            variant="outlined"
            sx={{ mb: 2 }}
            href="/Bipika_Kumari_Chaudhary_Resume.pdf"
            download
          >
            {" "}
            <DownloadForOfflineIcon sx={{ mr: 1 }} />
            Download Resume
          </Button>
          <br />

          <GitHub
            sx={{
              ml: { xs: 0, md: 8 },
              mt: 2,
              scale: 1.5,
              ":hover": { color: "grey", cursor: "pointer" },
            }}
          />
          <LinkedIn
            sx={{
              ml: 4,
              scale: 1.5,
              mt: 2,
              ":hover": { color: "grey", cursor: "pointer" },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Home;

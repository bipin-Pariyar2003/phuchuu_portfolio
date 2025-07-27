import { Typography, Box, keyframes } from "@mui/material";
import React from "react";
import bipika from "/bipika.png";
import About from "../About";

// Floating animation
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          p: 3,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/background.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            animation: `${float} 4s ease-in-out infinite`, // floating animation
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h2" sx={{ color: "#333333", fontWeight: "bold" }}>
              Welcome to My Portfolio
            </Typography>
            <Typography variant="h5" sx={{ color: "#fff", mt: 2 }}>
              Explore my projects and skills.
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", mt: 1 }}>
              I am a passionate developer with experience in various technologies.
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", mt: 1 }}>
              Let's connect and collaborate!
            </Typography>
            <Box sx={{ mt: 2 }}>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "10px 20px",
                  background: "#333333",
                  borderRadius: "6px",
                  transition: "background 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.background = "#555")}
                onMouseOut={(e) => (e.target.style.background = "#333")}
              >
                Contact Me
              </a>
            </Box>
          </Box>
        </Box>

        {/* Image Section */}
        <Box sx={{ flex: 1, display: "flex" }}>
          <Box
            sx={{
              flex: 1,
              pl: 15,
              animation: `${float} 5s ease-in-out infinite`, // floating image
            }}
          >
            <img src={bipika} alt="Bipika" style={{ width: "500px" }} />
          </Box>
        </Box>
      </Box>

      <About />
    </>
  );
};

export default Home;

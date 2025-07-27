import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/background2.jpg')",
          p: 3,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 10,
              height: "100%",
            }}
          >
            <Typography variant="h4" sx={{ color: "#333333", fontWeight: "bold" }}>
              About Me
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ color: "#333333", mt: 2 }}>
              I am a passionate developer with experience in various technologies. I love
              creating web applications and exploring new tools and frameworks.
            </Typography>
            <Typography variant="body1" sx={{ color: "#333333", mt: 1 }}>
              My goal is to build efficient and user-friendly applications that solve
              real-world problems.
            </Typography>
            <Typography variant="body1" sx={{ color: "#333333", mt: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa expedita
              eveniet repellat, ullam harum eum aut. Totam laborum autem amet voluptas
              deleniti eos provident iste tempora error, molestiae quae a!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;

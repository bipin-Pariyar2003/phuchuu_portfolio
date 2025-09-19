import React from "react";
import Navbar from "../../components/Navbar";
import { Box, Typography, Grid, Chip } from "@mui/material";

const About = () => {
  const skills = [
    "UI/UX Design",
    "Frontend Development",
    "Figma",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Responsive Design",
  ];
  const tools = ["Figma", "Adobe XD", "VSCode", "Git", "MUI", "Chrome DevTools"];

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          px: 4,
          py: 6,
          background:
            "linear-gradient(135deg, rgba(46,0,62,0.85), rgba(26,26,64,0.8), rgba(13,50,77,0.8))",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <Typography variant="h3" sx={{ mb: 4, color: "#00e5ff", textAlign: "center" }}>
          About Me
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, maxWidth: 800, color: "#f1f1f1", mx: "auto", textAlign: "center" }}
        >
          Hello! I am Bipika Kumari Chaudhary, a passionate UI/UX designer and frontend
          developer. I love creating user-friendly, modern, and visually appealing
          websites and applications. My goal is to combine creativity and technical skills
          to deliver engaging digital experiences.
        </Typography>

        {/* Skills Section */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h5" sx={{ mb: 2, color: "#00e5ff" }}>
            Skills
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip
                  label={skill}
                  sx={{
                    backgroundColor: "rgba(0, 229, 255, 0.15)",
                    color: "#00e5ff",
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tools Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ mb: 2, color: "#ff4ecd" }}>
            Tools I Use
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {tools.map((tool, index) => (
              <Grid item key={index}>
                <Chip
                  label={tool}
                  sx={{
                    backgroundColor: "rgba(255, 78, 205, 0.15)",
                    color: "#ff4ecd",
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default About;

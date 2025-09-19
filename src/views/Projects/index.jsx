import React from "react";
import Navbar from "../../components/Navbar";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Business Website Redesign",
    image: "/assets/project1.jpg",
    description:
      "Redesigned a corporate website with modern UI/UX principles and responsive layout.",
    skills: ["UI/UX", "Figma", "React", "CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    image: "/assets/project1.jpg",
    description:
      "Created a personal portfolio website showcasing projects and skills with interactive design.",
    skills: ["UI/UX", "React", "MUI", "Responsive Design"],
    link: "#",
  },
  {
    title: "E-commerce Landing Page",
    image: "/assets/project1.jpg",
    description:
      "Developed a clean and attractive e-commerce landing page with smooth animations.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "#",
  },
];

const Projects = () => {
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
        <Typography variant="h3" sx={{ mb: 6, color: "#00e5ff", textAlign: "center" }}>
          My Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#f1f1f1",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ mb: 1, color: "#00e5ff" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "#b0b0b0" }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                    {project.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        sx={{
                          backgroundColor: "rgba(0, 229, 255, 0.15)",
                          color: "#00e5ff",
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.link}
                    target="_blank"
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;

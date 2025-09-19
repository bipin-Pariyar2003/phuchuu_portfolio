import React from "react";
import Navbar from "../../components/Navbar";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from "@mui/material";

const blogPosts = [
  {
    title: "Top 5 UI/UX Trends in 2025",
    date: "Sep 15, 2025",
    summary:
      "Explore the latest trends in UI/UX design that are shaping digital experiences this year.",
  },
  {
    title: "How I Build Responsive Frontend Projects",
    date: "Aug 28, 2025",
    summary:
      "Step-by-step approach to creating responsive and modern frontend designs using React and MUI.",
  },
  {
    title: "Design Tips for Beginners",
    date: "Jul 12, 2025",
    summary:
      "Practical tips for aspiring designers to improve their UI/UX skills and portfolio.",
  },
];

const Blog = () => {
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
          My Blog
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#f1f1f1",
                  height: "100%",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 1, color: "#00e5ff" }}>
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 2, color: "#b0b0b0" }}>
                      {post.date}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#f1f1f1" }}>
                      {post.summary}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2, textAlign: "right" }}>
                    <Button size="small" variant="contained" color="primary">
                      Read More
                    </Button>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Blog;

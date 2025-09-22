import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const blogPosts = [
  {
    title: "Top 5 UI/UX Trends in 2025",
    date: "Sep 15, 2025",
    summary:
      "Explore the latest trends in UI/UX design that are shaping digital experiences this year.",
    description:
      "Explore the latest trends in UI/UX design that are shaping digital experiences this year.",
  },
  {
    title: "How I Build Responsive Frontend Projects",
    date: "Aug 28, 2025",
    summary:
      "Step-by-step approach to creating responsive and modern frontend designs using React and MUI.",
    description:
      "Step-by-step approach to creating responsive and modern frontend designs using React and MUI.",
  },
  {
    title: "Design Tips for Beginners",
    date: "Jul 12, 2025",
    summary:
      "Practical tips for aspiring designers to improve their UI/UX skills and portfolio.",
    description:
      "Practical tips for aspiring designers to improve their UI/UX skills and portfolio.",
  },
  {
    title: "The Importance of Color Theory in Design",
    date: "Jun 30, 2025",
    summary:
      "Understanding color theory and its impact on user experience and brand identity.",
    description:
      "Understanding color theory and its impact on user experience and brand identity.",
  },
  {
    title: "My Journey into Frontend Development",
    date: "May 20, 2025",
    summary:
      "A personal story of how I transitioned into frontend development and design.",
    description:
      "A personal story of how I transitioned into frontend development and design.",
  },
];

const Blog = () => {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
  };

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
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpen(post)}
                    >
                      Read More
                    </Button>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal / Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedPost && (
          <>
            <DialogTitle sx={{ color: "#00e5ff" }}>
              {selectedPost.title}{" "}
              <span style={{ color: "#b0b0b0", fontSize: "0.75rem" }}>
                - {selectedPost.date}
              </span>
            </DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ color: "#f1f1f1" }}>
                {selectedPost.description}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary" variant="contained">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Blog;

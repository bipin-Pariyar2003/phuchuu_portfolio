import React from "react";
import Navbar from "../../components/Navbar";
import { Box, Typography, TextField, Button, Grid, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Facebook, Instagram } from "@mui/icons-material";

const Contact = () => {
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
          Get In Touch
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, maxWidth: 700, color: "#f1f1f1", mx: "auto", textAlign: "center" }}
        >
          I’m always open to new opportunities, collaborations, or just a friendly chat!
          Drop me a message below and I’ll get back to you as soon as possible.
        </Typography>

        {/* Contact Form */}
        <Box
          component="form"
          sx={{
            maxWidth: 700,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            label="Your Name"
            variant="filled"
            fullWidth
            InputProps={{
              sx: { backgroundColor: "rgba(255,255,255,0.05)", color: "#f1f1f1" },
            }}
            InputLabelProps={{ sx: { color: "#00e5ff" } }}
          />
          <TextField
            label="Your Email"
            variant="filled"
            fullWidth
            InputProps={{
              sx: { backgroundColor: "rgba(255,255,255,0.05)", color: "#f1f1f1" },
            }}
            InputLabelProps={{ sx: { color: "#00e5ff" } }}
          />
          <TextField
            label="Your Message"
            variant="filled"
            fullWidth
            multiline
            rows={5}
            InputProps={{
              sx: { backgroundColor: "rgba(255,255,255,0.05)", color: "#f1f1f1" },
            }}
            InputLabelProps={{ sx: { color: "#00e5ff" } }}
          />
          <Button variant="contained" color="primary" sx={{ alignSelf: "flex-start" }}>
            Send Message
          </Button>
        </Box>

        {/* Social Links */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h5" sx={{ mb: 2, color: "#ff4ecd" }}>
            Connect with me
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <IconButton
                sx={{ color: "#00e5ff" }}
                href="https://github.com/bipika-c"
                target="_blank"
              >
                <GitHub />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{ color: "#00e5ff" }}
                href="https://www.linkedin.com/in/bipika-chaudhary-71b308281/"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{ color: "#00e5ff" }}
                href="https://www.facebook.com/BipiikaaChaudhary"
                target="_blank"
              >
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{ color: "#00e5ff" }}
                href="https://www.instagram.com/_.phuchuuu._/?__pwa=1"
                target="_blank"
              >
                <Instagram />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;

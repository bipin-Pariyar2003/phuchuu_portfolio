import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Alert,
} from "@mui/material";
import { GitHub, LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithTime = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "bipin_gmail_1976", // 🔹 replace with your EmailJS Service ID
        "template_u2bao7h", // 🔹 replace with your EmailJS Template ID
        formDataWithTime,
        "7wcq-gWY8bY03Dgpx" // 🔹 replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "✅ Message sent successfully!",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus({
            type: "error",
            message: "❌ Failed to send message. Please try again later.",
          });
        }
      );
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
        <Typography variant="h3" sx={{ mb: 4, color: "#00e5ff", textAlign: "center" }}>
          Get In Touch
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: 700,
            color: "#f1f1f1",
            mx: "auto",
            textAlign: "center",
          }}
        >
          I’m always open to new opportunities, collaborations, or just a friendly chat!
          Drop me a message below and I’ll get back to you as soon as possible.
        </Typography>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 700,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            name="name"
            label="Your Name"
            variant="filled"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
            InputProps={{
              sx: { backgroundColor: "rgba(255,255,255,0.05)", color: "#f1f1f1" },
            }}
            InputLabelProps={{ sx: { color: "#00e5ff" } }}
          />
          <TextField
            name="email"
            label="Your Email"
            type="email"
            variant="filled"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            required
            InputProps={{
              sx: { backgroundColor: "rgba(255,255,255,0.05)", color: "#f1f1f1" },
            }}
            InputLabelProps={{ sx: { color: "#00e5ff" } }}
          />
          <TextField
            name="message"
            label="Your Message"
            variant="filled"
            fullWidth
            multiline
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            InputProps={{
              sx: { backgroundColor: "rgba(255,255,255,0.05)", color: "#f1f1f1" },
            }}
            InputLabelProps={{ sx: { color: "#00e5ff" } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ alignSelf: "flex-start" }}
          >
            Send Message
          </Button>
        </Box>

        {/* Success/Error message */}
        {status.message && (
          <Box sx={{ maxWidth: 700, mx: "auto", mt: 3 }}>
            <Alert severity={status.type}>{status.message}</Alert>
          </Box>
        )}

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

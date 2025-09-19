import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const handleBlog = () => {
    navigate("/blog");
  };
  const handleProjects = () => {
    navigate("/projects");
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        height: "",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#f1f1f1" }}>
          My Portfolio
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="primary" onClick={handleHome}>
            Home
          </Button>
          <Button color="primary" onClick={handleAbout}>
            About
          </Button>
          <Button color="primary" onClick={handleContact}>
            Contact
          </Button>
          <Button color="primary" onClick={handleBlog}>
            Blog
          </Button>
          <Button color="primary" onClick={handleProjects}>
            Projects
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

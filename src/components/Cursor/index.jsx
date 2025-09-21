import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgba(0, 229, 255, 0.7)",
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        transition: "transform 0.08s ease-out",
        zIndex: 9999,
        mixBlendMode: "difference", // optional for neon effect
      }}
    />
  );
};

export default Cursor;

import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function PointsDisplay({ points, pps, onPin }) {
  return (
    <Box
      sx={{
        minWidth: 180,
        p: 1.5,
        borderRadius: 2,
        background: "linear-gradient(135deg, #e0e0e0, #bdbdbd)",
        boxShadow: 2,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="subtitle2" sx={{ color: "#333", fontWeight: "bold" }}>
          P$
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
          {points.toFixed(1)}
        </Typography>
        <Typography variant="body2" sx={{ color: "#4caf50", fontWeight: "bold" }}>
          {pps.toFixed(1)} P$/s
        </Typography>
      </Box>
      <Button variant="contained" size="small" onClick={onPin}>
        📌
      </Button>
    </Box>
  );
}

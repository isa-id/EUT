import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function PointsDisplay({ points, pps, onPin }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box>
        <Typography variant="caption" sx={{ color: "#aaa" }}>
          P$
          {pps !== 0 && (
            <span
              style={{
                marginLeft: 6,
                color: "#4caf50",
                fontWeight: "bold",
              }}
            >
              (+{pps.toFixed(1)}/s)
            </span>
          )}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {points.toFixed(1)}
        </Typography>
      </Box>

      {/* Botón de pin integrado */}
      <Button
        variant="outlined"
        size="small"
        onClick={onPin}
        sx={{ minWidth: 40 }}
      >
        📌
      </Button>
    </Box>
  );
}

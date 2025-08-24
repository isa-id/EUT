import React from "react";
import { Box, Typography } from "@mui/material";

export default function PinBar({ pinned, points, pps }) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "60px",
        backgroundColor: "#222",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        px: 2,
        boxShadow: "0 -2px 6px rgba(0,0,0,0.2)",
        zIndex: 1300,
      }}
    >
      {pinned.length === 0 ? (
        <Typography variant="body2" sx={{ color: "#bbb" }}>
          📌 Pin a currency to show it here
        </Typography>
      ) : (
        pinned.map((currency, idx) => {
          if (currency.name === "P$") {
            return (
              <Box
                key={idx}
                sx={{
                  backgroundColor: "#333",
                  borderRadius: 2,
                  px: 2,
                  py: 0.5,
                  minWidth: 140,
                  textAlign: "center",
                }}
              >
                {/* Nombre */}
                <Typography
                  variant="caption"
                  sx={{ color: "#ddd", display: "block" }}
                >
                  {currency.name}
                </Typography>

                {/* Puntos */}
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", lineHeight: 1.2 }}
                >
                  {points.toFixed(1)}
                </Typography>

                {/* PPS en color dinámico */}
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: 1.2,
                    color:
                      pps > 0
                        ? "#4caf50"
                        : pps < 0
                        ? "#f44336"
                        : "#aaa",
                  }}
                >
                  {pps.toFixed(1)} {currency.name}/s
                </Typography>
              </Box>
            );
          }

          // Otros currencies
          return (
            <Box
              key={idx}
              sx={{
                backgroundColor: "#333",
                borderRadius: 2,
                px: 2,
                py: 0.5,
                minWidth: 100,
                textAlign: "center",
              }}
            >
              <Typography variant="caption" sx={{ color: "#aaa" }}>
                {currency.name}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {currency.value?.toFixed(1) ?? 0}
              </Typography>
            </Box>
          );
        })
      )}
    </Box>
  );
}

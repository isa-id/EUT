import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function App() {
  const [points, setPoints] = useState(0);
  const [pps, setPPS] = useState(0);
  const [pinned, setPinned] = useState([{ name: "P$" }]);

  // Valor por tick (100ms)
  const pointsPerTick = 0.32; // equivale a 3.2 P$/s

  // Simular el incremento de puntos
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => prev + pointsPerTick);
    }, 100); // 100ms -> 10 ticks por segundo
    return () => clearInterval(interval);
  }, []);

  // Calcular PPS cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setPPS(pointsPerTick * 10); // 10 ticks por segundo
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // PinBar
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#121212",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography variant="h4">Juego EUT Demo</Typography>
        <Typography variant="h5">Puntos: {points.toFixed(1)}</Typography>

        <Button
          variant="contained"
          onClick={() => setPoints(points + 10)}
          sx={{ mt: 2 }}
        >
          +10 P$
        </Button>
      </Box>

      {/* PinBar */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "65px",
          backgroundColor: "#222",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          px: 2,
          boxShadow: "0 -2px 6px rgba(0,0,0,0.2)",
          zIndex: 1300,
        }}
      >
        {pinned.map((currency, idx) => (
          <Box
            key={idx}
            sx={{
              backgroundColor: "#333",
              borderRadius: 2,
              px: 2,
              py: 0.5,
              minWidth: 150,
              textAlign: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#fff", display: "block", fontWeight: "bold" }}
            >
              {currency.name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              {points.toFixed(1)}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
                color: pps > 0 ? "#00e676" : pps < 0 ? "#ff5252" : "#ccc",
              }}
            >
              {pps.toFixed(1)} {currency.name}/s
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import EUT from "./Game/EUT";
import PointsDisplay from "./Components/PointsDisplay";

// ---------------- PinBar ----------------
function PinBar({ pinnedCurrencies }) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        gap: 2,
        px: 2,
        py: 1,
        backgroundColor: "#222",
        borderTop: "1px solid #444",
        justifyContent: "flex-start",
        overflowX: "auto",
      }}
    >
      {pinnedCurrencies.map((currency, idx) => (
        <Box
          key={idx}
          sx={{
            backgroundColor: "#333",
            borderRadius: 2,
            px: 2,
            py: 0.5,
            minWidth: 120,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" sx={{ color: "#aaa" }}>
            {currency.name}
            {currency.pps !== 0 && (
              <span
                style={{
                  marginLeft: 6,
                  color: "#4caf50",
                  fontWeight: "bold",
                }}
              >
                (+{currency.pps.toFixed(1)}/s)
              </span>
            )}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            {currency.points.toFixed(1)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

// ---------------- Main App ----------------
export default function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [points, setPoints] = useState(0);
  const [pps, setPps] = useState(0); // puntos por segundo
  const [pinnedCurrencies, setPinnedCurrencies] = useState([]);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Manejar pin desde el PointsDisplay
  const handlePin = (name) => {
    if (!pinnedCurrencies.find((c) => c.name === name)) {
      setPinnedCurrencies([
        ...pinnedCurrencies,
        { name, points, pps },
      ]);
    }
  };

  // Actualizar valores en tiempo real en la pinbar
  useEffect(() => {
    setPinnedCurrencies((prev) =>
      prev.map((c) =>
        c.name === "P$" ? { ...c, points, pps } : c
      )
    );
  }, [points, pps]);

  return (
    <>
      {/* AppBar fija arriba */}
      <AppBar position="static" color="default" elevation={2}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            EUT
          </Typography>

          {/* Botón de ver puntos */}
          <Button color="inherit" onClick={handleOpen}>
            Show currencys
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <div style={{ padding: "8px 16px" }}>
              {/* Ahora PointsDisplay trae su propio botón de pin */}
              <PointsDisplay
                points={points}
                pps={pps}
                onPin={() => handlePin("P$")}
              />
            </div>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Contenido del juego */}
      <EUT points={points} setPoints={setPoints} setPps={setPps} />

      {/* Barra de monedas pineadas */}
      <PinBar pinnedCurrencies={pinnedCurrencies} />
    </>
  );
}

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
        zIndex: 1300,
      }}
    >
      {pinnedCurrencies.length === 0 ? (
        <Typography sx={{ color: "#bbb" }}>📌 Pin a currency to show it here</Typography>
      ) : (
        pinnedCurrencies.map((currency, idx) => (
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
            <Typography variant="caption" sx={{ color: "#fff", display: "block", fontWeight: "bold" }}>
              {currency.name}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#fff" }}>
              {currency.points.toFixed(1)}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: currency.pps > 0 ? "#00e676" : currency.pps < 0 ? "#ff5252" : "#ccc",
              }}
            >
              {currency.pps.toFixed(1)} {currency.name}/s
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
}

// ---------------- Main App ----------------
export default function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [points, setPoints] = useState(0);
  const [pps, setPps] = useState(1); // puntos por segundo inicial
  const [pinnedCurrencies, setPinnedCurrencies] = useState([]);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handlePin = (name) => {
    if (!pinnedCurrencies.find((c) => c.name === name)) {
      setPinnedCurrencies([...pinnedCurrencies, { name, points, pps }]);
    }
  };

  // Actualizar valores de pinbar en tiempo real
  useEffect(() => {
    setPinnedCurrencies((prev) =>
      prev.map((c) => (c.name === "P$" ? { ...c, points, pps } : c))
    );
  }, [points, pps]);

  // DEBUG
  useEffect(() => {
    console.log("📌 pinnedCurrencies:", pinnedCurrencies);
  }, [pinnedCurrencies]);

  return (
    <>
      <AppBar position="static" color="default" elevation={2}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            EUT
          </Typography>

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
              <PointsDisplay points={points} pps={pps} onPin={() => handlePin("P$")} />
            </div>
          </Menu>
        </Toolbar>
      </AppBar>

      <EUT points={points} setPoints={setPoints} setPps={setPps} />

      <PinBar pinnedCurrencies={pinnedCurrencies} />
    </>
  );
}

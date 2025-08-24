import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function UpgradeButton({ cost, label, description, onUpgrade, disabled }) {
  return (
    <Box sx={{ width: 250, height: 200 }}> {/* Tamaño fijo */}
      <Card
        variant="outlined"
        sx={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 3,
          boxShadow: 4,
          backgroundColor: "#2c2c2c",
          border: "2px solid #555",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: 6,
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          {/* Nombre del upgrade */}
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{ fontFamily: "Impact", color: "#e0e0e0", letterSpacing: 1 }}
          >
            {label}
          </Typography>

          {/* Descripción */}
          <Typography
            variant="body2"
            sx={{ color: "#bdbdbd", mb: 1.5 }}
          >
            {description}
          </Typography>

          {/* Costo */}
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", color: "#f5f5f5" }}
          >
            Costo: {cost}
          </Typography>
        </CardContent>

        {/* Botón de comprar */}
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            onClick={onUpgrade}
            disabled={disabled}
            sx={{
              fontFamily: "Impact",
              backgroundColor: disabled ? "#424242" : "#9e9e9e",
              color: disabled ? "#9e9e9e" : "#212121",
              borderRadius: "12px",
              boxShadow: disabled ? "none" : "0px 3px 6px rgba(0,0,0,0.4)",
              "&:hover": {
                backgroundColor: disabled ? "#424242" : "#bdbdbd",
              },
            }}
          >
            Comprar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

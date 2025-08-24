import React from "react";
import Grid from "@mui/material/Grid";
import UpgradeButton from "./UpgradeButton";

export default function UpgradesGrid({ upgrades }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {upgrades.map((upg, i) => (
        <Grid key={i}>
          <UpgradeButton
            cost={upg.cost}
            label={upg.label}
            description={upg.description}
            onUpgrade={upg.onUpgrade}
            disabled={upg.disabled}
          />
        </Grid>
      ))}
    </Grid>
  );
}

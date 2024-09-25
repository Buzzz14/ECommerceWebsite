import { Button, Step, StepLabel, Stepper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

function OrderTracker({ activeStep }) {
  return (
    <div className="w-full">
      <Grid
        alignItems={"center"}
        justifyContent={"center"}
        container
        spacing={6}
      >
        <Grid size={{ xs: 10 }}>
          <Stepper
            sx={{
              ".MuiStepIcon-root.Mui-active": { color: "rgb(126 34 206)" },
              ".MuiStepIcon-root.Mui-completed": { color: "rgb(126 34 206)" },
            }}
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step>
                <StepLabel sx={{ color: "#7e22ce", fontSize: "44px" }}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Button sx={{ color: "rgb(126 34 206)" }}> Cancel Order</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderTracker;

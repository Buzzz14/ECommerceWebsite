import React from "react";
import AddressCard from "../Checkout/AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import Grid from "@mui/material/Grid2";
import { deepPurple } from "@mui/material/colors";
import { Box } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function OrderDetails() {
  return (
    <div className="space-y-5">
      <div className="py-5 rounded px-5 lg:px-20 border shadow-md">
        <div>
          <h1 className="font-bold text-xl mb-3">Delivery Address</h1>
          <AddressCard />
        </div>
      </div>

      <div className="py-5 rounded px-5 lg:px-20 border shadow-md">
        <div>
          <OrderTracker activeStep={2} />
        </div>
      </div>

      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            container
            className="shadow-md hover:shadow-lg rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            size={{ xs: 12 }}
          >
            <Grid size={{ xs: 6 }}>
              <div className="flex items-center space-x-6">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c49ccc7e3f5d2601734413c87cdf619c.jpg"
                  alt="product"
                />

                <div className="space-y-2 ml-5 ">
                  <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: Pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: linaria</p>
                  <p> रु54964</p>
                </div>
              </div>
            </Grid>

            <Grid>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Products</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OrderDetails;

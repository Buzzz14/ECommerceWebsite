import Grid from "@mui/material/Grid2";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";

function OrderCard() {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md hover:shadow-xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 6 }}>
          <div>
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://i.pinimg.com/564x/99/f4/ba/99f4bad033142e4efeb2a388f4502990.jpg"
              alt="orderImage"
            />
            <div className="ml-5">
              <p>Men slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold ">Size: M</p>
              <p className="opacity-50 text-xs font-semibold ">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <p>रु4654</p>
        </Grid>
        <Grid size={{ xs: 4 }}>
          {true && (
            <div className="">
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered On March 03</span>
              </p>
              <p className="text-xs">
                Your item has been delivered.
              </p>
            </div>
          )}
          {false && 
            <p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2"
              />
              <span>Expected Delivery On March 03</span>
            </p>
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;

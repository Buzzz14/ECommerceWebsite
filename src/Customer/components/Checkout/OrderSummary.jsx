import React from "react";
import AddressCard from "./AddressCard/AddressCard";
import CartItem from "../Cart/CardItem/CartItem";
import { Button, Divider } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

function OrderSummary() {
  return (
    <div className="space-y-5">
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative gap-4">
          <div className="col-span-2 space-y-4">
            {[1, 1, 1, 1, 1].map((item, index) => (
              <CartItem key={index} />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-6 shadow-lg">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <Divider />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>रु45664</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">-रु456</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <Divider />
                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">रु45664</span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full mt-5"
                sx={{
                  px: "2.5rem",
                  py: "0.7rem",
                  mt: "2rem",
                  bgcolor: deepPurple[500],
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;

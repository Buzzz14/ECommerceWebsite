import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Customer/components/Navigation/Navigation";
import Footer from "../Customer/components/Footer/Footer";
import HomePage from "../Customer/components/HomePage/HomePage";
import Cart from "../Customer/components/Cart/Cart";
import Product from "../Customer/components/Product/Product";
import ProductDetails from "../Customer/components/ProductDetails/ProductDetails";
import Checkout from "../Customer/components/Checkout/Checkout";
import Order from "../Customer/components/Order/Order";
import OrderDetails from "../Customer/components/Order/OrderDetails";

function CustomerRoutes() {
  return (
    <>
      <div>
        <Navigation />
      </div>

      <div className="m-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/:levelOne/:levelTwo/:levelThree"
            element={<Product />}
          />
          <Route path="/:product/:productId/" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:orderId" element={<OrderDetails />} />
        </Routes>
      </div>

      {/* <Checkout/> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}

      <div>
        <Footer />
      </div>
    </>
  );
}

export default CustomerRoutes;

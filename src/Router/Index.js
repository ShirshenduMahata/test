import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Index";
import Layout from "../Layout/Index";
import Auth from "../Pages/Auth/Index";
import CatagoryProducts from "../Pages/Category.Product/Index";
import ProductDetail from "../Pages/Product.Detail/Index";
import Cart from "../Pages/Cart/Index.js";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop_list" element={<CatagoryProducts/>}/>
            <Route path="/product_detail" element={<ProductDetail/>}/>
            <Route path="/cart" element={<Cart/>}/>

          </Route>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

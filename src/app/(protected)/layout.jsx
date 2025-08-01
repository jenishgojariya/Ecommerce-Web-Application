"use client";

import { Navbar } from "@/components";
import { initiateCart } from "@/lib/features/cartSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
    if (cartData.length > 0) {
      dispatch(initiateCart(cartData));
    }
    return () => {};
  }, []);

  return (
    <div className="p-4">
      <Navbar />
      <div className="px-1">{children}</div>
    </div>
  );
};

export default layout;

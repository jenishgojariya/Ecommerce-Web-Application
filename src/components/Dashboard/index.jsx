"use client"; // 🔥 MUST in App Router if using sessionStorage/localStorage

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import Card from "../Card";
import { addToCart, updateCartData } from "@/lib/features/cartSlice";

const DashboardComp = () => {
  const [originalData, setOriginalData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [filterOption, setFilterOption] = useState("");
  const [reset, setReset] = useState(false);
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cart);

  const fetchData = async () => {
    if (typeof window !== "undefined") {
      const cachedData = JSON.parse(sessionStorage.getItem("products")) || [];

      if (cachedData.length > 0) {
        setOriginalData(cachedData);
        setProductData(cachedData);
        return;
      }

      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      const setData = data.products;

      if (setData.length > 0) {
        sessionStorage.setItem("products", JSON.stringify(setData));
        setProductData(setData);
        setOriginalData(setData);
      }
    }
  };

  const handleFilterChange = (value) => {
    if (!value) {
      setProductData(originalData);
      return;
    }

    const data = [...originalData];
    if (value === "l2h") data.sort((a, b) => a.price - b.price);
    else if (value === "h2l") data.sort((a, b) => b.price - a.price);
    setProductData(data);
    setReset(true);
  };

  const handleCartClick = (data) => {
    if (typeof window !== "undefined") {
      // const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
      console.log("cartData --- ", cartData);
      console.log("id --- ", data.id);

      if (cartData.length > 0) {
        const index = cartData.findIndex((item) => item.id === data.id);

        if (index >= 0) {
          dispatch(updateCartData({ id: data.id, act: "inc" }));
          return;
        }
      }
    }
    dispatch(addToCart({ ...data, count: 1 }));
  };

  const handleResetClick = () => {
    setReset(false);
    setFilterOption("");
  };

  useEffect(() => {
    handleFilterChange(filterOption);
  }, [filterOption]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("cartData", JSON.stringify(cartData));
    }
  }, [cartData]);

  return productData ? (
    <>
      <div className="w-full flex justify-end gap-1 items-center">
        <Filter filterOption={filterOption} setFilterOption={setFilterOption} />
        {reset && <X className="text-red-500" onClick={handleResetClick} />}
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {productData?.map((data) => (
          <Card key={data.id} {...data} handleCartClick={handleCartClick} />
        ))}
      </div>
    </>
  ) : (
    <div>No data Found...</div>
  );
};

export default DashboardComp;

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { removeCartData } from "@/lib/features/cartSlice";

const CartComp = () => {
  const dispatch = useDispatch();
  const { cartData = [] } = useSelector((state) => state.cart); // fallback to empty array

  const handleCartClick = useCallback(
    (id) => {
      dispatch(removeCartData(id));
    },
    [dispatch]
  );

  const total = useMemo(() => {
    return cartData.reduce((acc, item) => acc + item.price * item.count, 0);
  }, [cartData]);

  if (!cartData.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No items in the cart.
      </div>
    );
  }

  return (
    <div className="w-full">
      {total > 0 && (
        <div className="p-4 rounded-lg bg-white border flex justify-between items-center mb-4 shadow-sm">
          <h2 className="text-xl font-semibold">Total Purchase:</h2>
          <p className="text-lg font-bold text-green-600">
            ${total.toFixed(2)}
          </p>
        </div>
      )}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {cartData.map((item, index) => (
          <Card
            key={item.id || index}
            {...item}
            handleCartClick={handleCartClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CartComp;

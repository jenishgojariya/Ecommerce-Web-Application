import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { removeCartData } from "@/lib/features/cartSlice";

const CartComp = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cart);

  const handleCartClick = (id) => {
    dispatch(removeCartData(id));
  };

  if (!cartData?.length > 0) {
    return <div>No data found..</div>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
      {cartData?.map((data, ind) => (
        <Card key={ind} {...data} handleCartClick={handleCartClick} />
      ))}
    </div>
  );
};

export default CartComp;

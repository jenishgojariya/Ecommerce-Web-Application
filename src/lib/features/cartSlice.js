import { createSlice } from "@reduxjs/toolkit";

const initData = JSON.parse(sessionStorage.getItem("cartData")) || [];
const initialState = {
  cartData: initData,
  isLoading: false,
  cartLength: initData.length,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartData.push(action.payload);
      state.cartLength++;
    },
    updateCartData(state, action) {
      const index = action.payload;
      let count = state.cartData[index];
      count.count = count.count + 1;
    },
    removeCartData(state, action) {
      const newData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      state.cartData = newData;
      state.cartLength = newData.length;
      sessionStorage.setItem("cartData", JSON.stringify(newData));
    },
  },
});

export const { addToCart, updateCartData, removeCartData } = cartSlice.actions;

export default cartSlice.reducer;

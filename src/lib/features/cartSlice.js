import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  isLoading: false,
  cartLength: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const data = action.payload;
      state.cartData.push(data);
      state.cartLength++;
      sessionStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    initiateCart(state, action) {
      const data = action.payload;
      state.cartData = [...data];
      state.cartLength = data.length;
      // sessionStorage.setItem("cartData", JSON.stringify(data));
    },
    updateCartData(state, action) {
      const { id, act } = action.payload;
      let index = state.cartData.findIndex((item) => item.id === id);
      let count = state.cartData[index];

      if (act === "inc") {
        count.count++;
      } else if (act === "dec") {
        count.count--;
      }
      if (count.count === 0) {
        state.cartData.splice(index, 1);
        state.cartLength--;
      }
      sessionStorage.setItem("cartData", JSON.stringify(state.cartData));
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

export const { addToCart, updateCartData, removeCartData, initiateCart } =
  cartSlice.actions;

export default cartSlice.reducer;

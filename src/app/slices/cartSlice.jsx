import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartData: JSON.parse(localStorage.getItem("cartData"))
      ? JSON.parse(localStorage.getItem("cartData"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findProduct !== -1) {
        state.cartData[findProduct].qun += 1;
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      } else {
        state.cartData = [...state.cartData, action.payload];
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      }
    },
    removeCart: (state, action) => {
      state.cartData.splice(action.payload, 1);
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    updateCart: (state, action) => {
      let findIndex = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.type === "plus") {
        state.cartData[findIndex].qun += 1;
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      } else {
        state.cartData[findIndex].qun -= 1;
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import modalReducer from "./features/ModalSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    cart: cartReducer,
    modal: modalReducer,
  },
});

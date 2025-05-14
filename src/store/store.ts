import { configureStore } from "@reduxjs/toolkit";
import ShoppingSlice from "./slice/ShoppingSlice";

export const store = configureStore({
    reducer:{
        shopping: ShoppingSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
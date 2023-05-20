import { configureStore } from "@reduxjs/toolkit";
import popular from "./popular";

export const store = configureStore({
  reducer: {
    popular: popular,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

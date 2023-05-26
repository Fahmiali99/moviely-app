import { configureStore } from "@reduxjs/toolkit";
import popular from "./popular";
import trending from "./trending";
import horor from "./horor";

export const store = configureStore({
  reducer: {
    popular: popular,
    trending: trending,
    horor: horor,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

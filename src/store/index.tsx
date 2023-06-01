import { configureStore } from "@reduxjs/toolkit";
import popular from "./movie/popular";
import trending from "./movie/trending";
import horor from "./movie/horor";
import discover from "./televisi/discover";

export const store = configureStore({
  reducer: {
    popular: popular,
    trending: trending,
    horor: horor,
    discover: discover,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

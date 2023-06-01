import { configureStore } from "@reduxjs/toolkit";
import popular from "./movie/popular";
import trending from "./movie/trending";
import horor from "./movie/horor";
import discover from "./televisi/discover";
import playing from "./movie/playing";

export const store = configureStore({
  reducer: {
    // movie
    popular: popular,
    trending: trending,
    horor: horor,
    playing: playing,
    // televisi
    discover: discover,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

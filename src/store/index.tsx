import { configureStore } from "@reduxjs/toolkit";
import popular from "./movie/popular";
import trending from "./movie/trending";
import horor from "./movie/horor";

import playing from "./movie/playing";
import kejahatan from "./televisi/kejahatan";
import animasi from "./televisi/animasi";
import komedi from "./televisi/komedi";
import dokumenter from "./televisi/dokumenter";
import drama from "./televisi/drama";
import keluarga from "./televisi/keluarga";
import discover from "./movie/discover";

export const store = configureStore({
  reducer: {
    // movie
    popular: popular,
    trending: trending,
    horor: horor,
    playing: playing,
    discover: discover,
    // televisi
    animasi: animasi,
    kejahatan: kejahatan,
    komedi: komedi,
    dokumenter: dokumenter,
    drama: drama,
    keluarga: keluarga,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

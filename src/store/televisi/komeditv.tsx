import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  komeditv: any;
}

const initialState: InitialState = {
  komeditv: {},
};

export const komeditv = createSlice({
  name: "komeditv",
  initialState,
  reducers: {
    setKomediTv: (state, action) => {
      state.komeditv = action.payload;
    },
  },
});

export const { setKomediTv } = komeditv.actions;
export default komeditv.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  animasi: any;
}

const initialState: InitialState = {
  animasi: {},
};

export const animasi = createSlice({
  name: "animasi",
  initialState,
  reducers: {
    setAnimasi: (state, action) => {
      state.animasi = action.payload;
    },
  },
});

export const { setAnimasi } = animasi.actions;
export default animasi.reducer;

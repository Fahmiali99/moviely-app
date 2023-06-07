import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  kejahatan: any;
}

const initialState: InitialState = {
  kejahatan: {},
};

export const kejahatan = createSlice({
  name: "kejahatan",
  initialState,
  reducers: {
    setKejatan: (state, action) => {
      state.kejahatan = action.payload;
    },
  },
});

export const { setKejatan } = kejahatan.actions;
export default kejahatan.reducer;

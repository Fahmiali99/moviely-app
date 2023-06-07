import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  dokumenter: any;
}

const initialState: InitialState = {
  dokumenter: {},
};

export const dokumenter = createSlice({
  name: "dokumenter",
  initialState,
  reducers: {
    setDokumenter: (state, action) => {
      state.dokumenter = action.payload;
    },
  },
});

export const { setDokumenter } = dokumenter.actions;
export default dokumenter.reducer;

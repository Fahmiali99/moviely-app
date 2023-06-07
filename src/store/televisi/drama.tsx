import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  drama: any;
}

const initialState: InitialState = {
  drama: {},
};

export const drama = createSlice({
  name: "drama",
  initialState,
  reducers: {
    setDrama: (state, action) => {
      state.drama = action.payload;
    },
  },
});

export const { setDrama } = drama.actions;
export default drama.reducer;

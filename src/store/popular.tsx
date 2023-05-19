import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  popular: any;
}

const initialState: InitialState = {
  popular: {},
};

export const popular = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const { setPopular } = popular.actions;
export default popular.reducer;

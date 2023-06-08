import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  popular: any;
  language: any;
}

const initialState: InitialState = {
  popular: {},
  language: "",
};

export const popular = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setPopular, setLanguage } = popular.actions;
export default popular.reducer;

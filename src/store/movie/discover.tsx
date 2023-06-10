import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  discover: any;
  language: any;
}

const initialState: InitialState = {
  discover: {},
  language: "",
};

export const discover = createSlice({
  name: "discover",
  initialState,
  reducers: {
    setDiscover: (state, action) => {
      state.discover = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setDiscover, setLanguage } = discover.actions;
export default discover.reducer;

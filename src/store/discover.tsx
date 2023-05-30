import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  discover: any;
}

const initialState: InitialState = {
  discover: {},
};

export const discover = createSlice({
  name: "discover",
  initialState,
  reducers: {
    setDiscover: (state, action) => {
      state.discover = action.payload;
    },
  },
});

export const { setDiscover } = discover.actions;
export default discover.reducer;

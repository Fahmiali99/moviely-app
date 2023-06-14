import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  upcoming: any;
}

const initialState: InitialState = {
  upcoming: {},
};

export const upcoming = createSlice({
  name: "upcoming",
  initialState,
  reducers: {
    setUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});

export const { setUpcoming } = upcoming.actions;
export default upcoming.reducer;

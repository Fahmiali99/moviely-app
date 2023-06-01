import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  horor: any;
}

const initialState: InitialState = {
  horor: {},
};

export const horor = createSlice({
  name: "horor",
  initialState,
  reducers: {
    setHoror: (state, action) => {
      state.horor = action.payload;
    },
  },
});

export const { setHoror } = horor.actions;
export default horor.reducer;

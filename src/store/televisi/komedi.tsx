import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  komedi: any;
}

const initialState: InitialState = {
  komedi: {},
};

export const komedi = createSlice({
  name: "komedi",
  initialState,
  reducers: {
    setKomedi: (state, action) => {
      state.komedi = action.payload;
    },
  },
});

export const { setKomedi } = komedi.actions;
export default komedi.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  keluarga: any;
}

const initialState: InitialState = {
  keluarga: {},
};

export const keluarga = createSlice({
  name: "keluarga",
  initialState,
  reducers: {
    setKeluarga: (state, action) => {
      state.keluarga = action.payload;
    },
  },
});

export const { setKeluarga } = keluarga.actions;
export default keluarga.reducer;

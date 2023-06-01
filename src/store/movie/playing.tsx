import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  playing: any;
}

const initialState: InitialState = {
  playing: {},
};

export const playing = createSlice({
  name: "playing",
  initialState,
  reducers: {
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
  },
});

export const { setPlaying } = playing.actions;
export default playing.reducer;

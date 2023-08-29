import { createSlice } from "@reduxjs/toolkit";
import { soundBanks } from "../soundBanks";

const soundsSlice = createSlice({
  name: "sounds",
  initialState: {
    soundBank: soundBanks.bankA,
    soundPlayed: "none",
  },
  reducers: {
    displaySound: (state, action) => {
      state.soundPlayed = action.payload;
    },
    changeBank: (state, action) => {
      state.soundBank = action.payload;
    },
  },
});

export const { changeBank, displaySound } = soundsSlice.actions;

export default soundsSlice;

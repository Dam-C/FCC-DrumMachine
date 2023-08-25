import { createSlice } from "@reduxjs/toolkit";

const bankA = {
  soundsList: [
    {
      name: "attack",
      keypad: "A",
      link: "../src/assets/soundbank-start/attack.mp3",
    },
    {
      name: "blip",
      keypad: "Z",
      link: "../src//assets/soundbank-start/blip.mp3",
    },
    {
      name: "blow",
      keypad: "E",
      link: "../src//assets/soundbank-start/blow.mp3",
    },
    {
      name: "cursor-move",
      keypad: "Q",
      link: "../src//assets/soundbank-start/cursor-move.mp3",
    },
    {
      name: "explosion",
      keypad: "S",
      link: "../src//assets/soundbank-start/explosion.mp3",
    },
    {
      name: "healthup",
      keypad: "D",
      link: "../src//assets/soundbank-start/healthup.mp3",
    },
    {
      name: "hit",
      keypad: "W",
      link: "../src//assets/soundbank-start/hit.mp3",
    },
    {
      name: "power-up",
      keypad: "X",
      link: "../src//assets/soundbank-start/power-up.mp3",
    },
    {
      name: "trampoline",
      keypad: "C",
      link: "../src//assets/soundbank-start/trampoline.mp3",
    },
  ],
};

const bankB = {
  soundsList: [
    { name: "attack", link: "./assets/soundbank-start/attack.mp3" },
    { name: "blip", link: "./assets/soundbank-start/blip.mp3" },
    { name: "blow", link: "./assets/soundbank-start/blow.mp3" },
    { name: "cursor-move", link: "./assets/soundbank-start/cursor-move.mp3" },
    { name: "explosion", link: "./assets/soundbank-start/explosion.mp3" },
    { name: "healthup", link: "./assets/soundbank-start/healthup.mp3" },
    { name: "hit", link: "./assets/soundbank-start/hit.mp3" },
    { name: "power-up", link: "./assets/soundbank-start/power-up.mp3" },
    { name: "trampoline", link: "./assets/soundbank-start/trampoline.mp3" },
  ],
};

const soundsSlice = createSlice({
  name: "sounds",
  initialState: {
    soundBank: bankA,
  },
  reducers: {
    changeBank: (state, action) => {
      state.soundBank = action.payload;
    },
  },
});

export const changeBank = soundsSlice.actions;

export default soundsSlice;

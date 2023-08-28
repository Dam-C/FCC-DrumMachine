import { createSlice } from "@reduxjs/toolkit";

const soundBanks = {
  bankA: {
    soundsList: [
      {
        name: "attack",
        pushkey: "q",
        keypad: "Q",
        link: "../src/assets/soundbank-start/attack.mp3",
      },
      {
        name: "blip",
        pushkey: "w",
        keypad: "W",
        link: "../src//assets/soundbank-start/blip.mp3",
      },
      {
        name: "blow",
        pushkey: "e",
        keypad: "E",
        link: "../src//assets/soundbank-start/blow.mp3",
      },
      {
        name: "cursor-move",
        pushkey: "a",
        keypad: "A",
        link: "../src//assets/soundbank-start/cursor-move.mp3",
      },
      {
        name: "explosion",
        pushkey: "s",
        keypad: "S",
        link: "../src//assets/soundbank-start/explosion.mp3",
      },
      {
        name: "healthup",
        pushkey: "d",
        keypad: "D",
        link: "../src//assets/soundbank-start/healthup.mp3",
      },
      {
        name: "hit",
        pushkey: "z",
        keypad: "Z",
        link: "../src//assets/soundbank-start/hit.mp3",
      },
      {
        name: "power-up",
        pushkey: "x",
        keypad: "X",
        link: "../src//assets/soundbank-start/power-up.mp3",
      },
      {
        name: "trampoline",
        pushkey: "c",
        keypad: "C",
        link: "../src//assets/soundbank-start/trampoline.mp3",
      },
    ],
  },
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

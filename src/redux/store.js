import { configureStore } from "@reduxjs/toolkit";
import soundsSlice from "./soundsSlice";

export const store = configureStore({
  reducer: {
    sounds: soundsSlice.reducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    styles: ["bg-white text-black"],
    isDarkMode: false,
  },
  reducers: {
    addTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      state.styles = state.isDarkMode
        ? ["bg-black text-white"]
        : ["bg-white text-black"];
    },
    setColors: (state, action) => {
      state.styles = action.payload;
    },
  },
});

export const { addTheme, setColors } = colorSlice.actions;
export default colorSlice.reducer;

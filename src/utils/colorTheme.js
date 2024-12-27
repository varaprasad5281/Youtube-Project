import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    backgroundColor: "white",
    textColor: "black",
  },
  reducers: {
    addBackground: (state) => {
      state.backgroundColor = "black";
    },
    addFontColor: (state) => {
      state.backgroundColor = "white";
    },
  },
});
export const { addBackground, addFontColor } = colorSlice.actions;
export default colorSlice.reducer;

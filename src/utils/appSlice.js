import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isAvatar: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    isAvatarChange: (state) => {
      state.isAvatar = !state.isAvatar;
    },
  },
});
export const { toggleMenu, closeMenu, isAvatarChange } = appSlice.actions;
export default appSlice.reducer;

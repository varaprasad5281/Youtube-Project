import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
  },
  reducers: {
    addUserName: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { addUserName } = userSlice.actions;
export default userSlice.reducer;

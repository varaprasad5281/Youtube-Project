import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action) => {
      state.comments.pop(action.payload);
    },
  },
});
export const { addComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;

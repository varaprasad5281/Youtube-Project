import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTermVideo: null,
    searchVideoResults: null,
  },
  reducers: {
    cacheReuslts: (state, action) => {
      state = Object.assign(state, action.payload); // Merging the objects
    },
    addSearchTerm: (state, action) => {
      state.searchTermVideo = action.payload;
    },
    addSearchRelatedVideo: (state, action) => {
      state.searchVideoResults = action.payload;
    },
  },
});

export const { cacheReuslts, addSearchTerm, addSearchRelatedVideo } =
  searchSlice.actions;
export default searchSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatReducer from "./chatSlice";
import userReducer from "../utils/userSlice";
import commentReducer from "./commentSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatReducer,
    user: userReducer,
    comments: commentReducer,
  },
});

export default store;

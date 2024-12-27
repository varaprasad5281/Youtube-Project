import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatReducer from "./chatSlice";
import userReducer from "../utils/userSlice";
import commentReducer from "./commentSlice";
import colorReducer from "./colorTheme";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatReducer,
    user: userReducer,
    comments: commentReducer,
    colors: colorReducer,
  },
});

export default store;

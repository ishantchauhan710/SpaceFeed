import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./slices/loadingSlice";
import notificationSlice from "./slices/notificationSlice";
import userSlice from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    notification: notificationSlice,
    loading: loadingSlice,
    user: userSlice,
  },
});

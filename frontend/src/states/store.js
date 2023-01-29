import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./slices/loadingSlice";
import notificationSlice from "./slices/notificationSlice";
export const store = configureStore({
  reducer: {
    notification: notificationSlice,
    loading: loadingSlice,
  },
});

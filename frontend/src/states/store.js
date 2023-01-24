import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./slices/notificationSlice";
export const store = configureStore({
  reducer: {
    notification: notificationSlice,
  },
});

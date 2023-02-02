import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import loadingSlice from "./other/loadingSlice";
import notificationSlice from "./other/notificationSlice";
import profileSlice from "./profileSlice";
export const store = configureStore({
  reducer: {
    notification: notificationSlice,
    loading: loadingSlice,
    home: homeSlice,
    profile: profileSlice,
  },
});

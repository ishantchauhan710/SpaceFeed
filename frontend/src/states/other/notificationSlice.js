import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notificationVisible: false,
  notificationMessage: "",
  notificationType: "",
};
export const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState: initialState,
  reducers: {
    showError: (state, action) => {
      state.notificationMessage = action.payload;
      state.notificationType = "error";
      state.notificationVisible = true;
    },
    showSuccess: (state, action) => {
      state.notificationMessage = action.payload;
      state.notificationType = "success";
      state.notificationVisible = true;
    },
    hideNotification: (state) => {
      state.notificationVisible = false;
    },
  },
});

export const { showError, showSuccess, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

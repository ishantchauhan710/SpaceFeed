import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  imageVisible: false,
  imageSrc: "",
  imageCaption: "",
};
export const imageModalSlice = createSlice({
  name: "imageSlice",
  initialState: initialState,
  reducers: {
    showImageModal: (state, action) => {
      state.imageSrc = action.payload;
      state.imageVisible = true;
    },
    hideImageModal: (state) => {
      state.imageVisible = false;
    },
  },
});

export const { showImageModal, hideImageModal } = imageModalSlice.actions;
export default imageModalSlice.reducer;

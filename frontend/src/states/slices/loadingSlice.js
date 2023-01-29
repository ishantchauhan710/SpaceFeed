import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;

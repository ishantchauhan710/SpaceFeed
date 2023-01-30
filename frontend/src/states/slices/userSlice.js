import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

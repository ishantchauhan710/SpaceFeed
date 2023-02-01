import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  profileUser: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setProfileUser: (state, action) => {
      state.profileUser = action.payload;
    },
  },
});

export const { setUser, setProfileUser } = userSlice.actions;
export default userSlice.reducer;

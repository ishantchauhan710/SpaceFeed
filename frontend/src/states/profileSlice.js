import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  posts: [],
  followers: [],
};

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
  },
});

export const { setUser, setPosts, setFollowers } = profileSlice.actions;
export default profileSlice.reducer;

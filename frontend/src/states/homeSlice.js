import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  posts: [],
  followers: [],
};

export const homeSlice = createSlice({
  name: "homeSlice",
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

export const { setUser, setPosts, setFollowers } = homeSlice.actions;
export default homeSlice.reducer;

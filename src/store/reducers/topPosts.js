import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  error: null,
  list: [],
  read: [],
  paging: {},
  isLoading: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setAsRead(state, action) {
      state.read = [...new Set([...state.read, action.payload])];
    },
    dismissPost(state, action) {
      state.list = state.list.filter(item => item.data.id !== action.payload);
    },
    dismissAll(state) {
      state.list = [];
      state.paging = {};
    },
    fetchTopPosts(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchTopPostsSuccess(state, action) {
      const { after, before, children } = action.payload;
      state.list.push(...children);
      state.paging = { after, before }; 
      state.isLoading = false;
    },
    fetchTopPostsError(state, action) {
      state.error = action.payload.error;
      state.isLoading = false;
    },
  }
});

export const { 
  setAsRead,
  dismissPost,
  dismissAll,
  fetchTopPosts,
  fetchTopPostsSuccess,
  fetchTopPostsError,
} = postsSlice.actions;

export default postsSlice.reducer;

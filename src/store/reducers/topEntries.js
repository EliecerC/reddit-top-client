import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  error: null,
  list: [],
  read: [],
  paging: {},
  isLoading: false,
};

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    setAsRead(state, action) {
      state.read.push(action.payload);
    },
    dismissEntry(state, action) {
      state.list = state.list.filter(item => item.data.id !== action.payload);
    },
    dismissAll(state) {
      state.list = [];
      state.paging = {};
    },
    fetchTopEntries(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchTopEntriesSuccess(state, action) {
      const { after, before, children } = action.payload;
      state.list.push(...children);
      state.paging = { after, before }; 
      state.isLoading = false;
    },
    fetchTopEntriesError(state, action) {
      state.error = action.payload.error;
      state.isLoading = false;
    },
  }
});

export const { 
  setAsRead,
  dismissEntry,
  dismissAll,
  fetchTopEntries,
  fetchTopEntriesSuccess,
  fetchTopEntriesError,
} = entriesSlice.actions;

export default entriesSlice.reducer;

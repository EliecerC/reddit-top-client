import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  error: null,
  list: [],
  read: [],
  dismissed: [],
  isLoading: false,
};

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    setAsRead(state, action) {
      state.read.push(action.payload);
    },
    setAsDismissed(state, action) {
      state.dismissed.push(action.payload);
    },
    dismissAll(state) {
      state.dismissed = state.list.map(item => item.id);
    },
    fetchTopEntries(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchTopEntriesSuccess(state, action) {
      state.list = action.payload;
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
  setAsDismissed,
  dismissAll,
  fetchTopEntries,
  fetchTopEntriesSuccess,
  fetchTopEntriesError,
} = entriesSlice.actions;

export default entriesSlice.reducer;

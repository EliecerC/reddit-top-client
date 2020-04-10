import { combineEpics } from 'redux-observable';
import { fetchTopEntriesEpic } from './topEntries';

const rootEpic = combineEpics(
  fetchTopEntriesEpic
);

export default rootEpic;
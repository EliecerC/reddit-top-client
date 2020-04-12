import { combineEpics } from 'redux-observable';
import { fetchTopPostsEpic } from './topPosts';

const rootEpic = combineEpics(
  fetchTopPostsEpic
);

export default rootEpic;
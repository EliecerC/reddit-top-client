import axios from 'axios';
import { from } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import {
  fetchTopPosts,
  fetchTopPostsSuccess,
  fetchTopPostsError,
} from '../../reducers/topPosts';

export const fetchTopPostsEpic = action$ => action$.pipe(
  ofType(fetchTopPosts.type),
  mergeMap(({ payload }) =>
    from(
      axios
        .get('https://www.reddit.com/r/all/top.json', {
          params: {
            limit: payload ? payload.limit || 5 : 5,
            after: payload ? payload.after : null
          }
        })
        .then(response => response.data.data)
        .then(fetchTopPostsSuccess)
        .catch(fetchTopPostsError)
    )
  )
);

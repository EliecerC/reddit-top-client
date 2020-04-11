import axios from 'axios';
import { from } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import {
  fetchTopEntries,
  fetchTopEntriesSuccess,
  fetchTopEntriesError,
} from '../../reducers/topEntries';

export const fetchTopEntriesEpic = action$ => action$.pipe(
  ofType(fetchTopEntries.type),
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
        .then(fetchTopEntriesSuccess)
        .catch(fetchTopEntriesError)
    )
  )
);

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
  mergeMap(action =>
    from(
      new Promise((resolve) => {
        setTimeout(() => resolve(action.payload), 1000);
      })
        .then(fetchTopEntriesSuccess)
        .catch(fetchTopEntriesError)
    )
  )
);

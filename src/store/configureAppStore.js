import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootEpic from './middleware/epics';
import rootReducer from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'topPosts',
  storage,
};
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
const epicMiddleware = createEpicMiddleware();

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [
      loggerMiddleware,
      epicMiddleware,
      ...getDefaultMiddleware({ thunk: false })
    ],
    preloadedState,
    enhancers: [monitorReducersEnhancer]
  });

  let persistor = persistStore(store);

  epicMiddleware.run(rootEpic);
  
  /* eslint-disable no-undef */
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }
  /* eslint-enable no-undef */

  return { store, persistor };
}
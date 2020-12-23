import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './rootReducer';
import sagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  middlewares.push(logger);
}

const rootReducer = combineReducers({ ...reducers });

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

sagaMiddleware.run(sagas);

export { store };

export type RootState = ReturnType<typeof rootReducer>;

// export dispatch hooks and types
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

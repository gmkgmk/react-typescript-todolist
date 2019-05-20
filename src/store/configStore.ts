import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reduceReducers';
import rootSaga from './sagaConfig';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const sagaMiddleware = createSagaMiddleware();

const createPromiseMiddleware = () => next => action => {
  return new Promise((resolve, reject) => {
    next({
      ...action,
      next: resolve,
      error: reject,
    });
  });
};

const middlewares = [createPromiseMiddleware, sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger').createLogger;
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

export default function configureStore(initialState: any = {}) {
  const store = createStore(
    createReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

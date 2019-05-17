import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reduceReducers';
import rootSaga from './sagaGenerater';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const sagaMiddleware = createSagaMiddleware();

function noop(e: any) {
  console.error(e);
}

const createPromiseMiddleware = () => next => action => {
  const { type } = action;
  if (type) {
    return new Promise((resolve, reject) => {
      next({
        ...action,
        next: resolve,
        error: reject,
      });
    });
  } else {
    return next({
      ...action,
      next: noop,
      error: noop,
    });
  }
};

const store = createStore(
  createReducer(),
  composeWithDevTools(applyMiddleware(createPromiseMiddleware, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;

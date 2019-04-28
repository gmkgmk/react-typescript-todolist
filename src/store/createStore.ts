import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReduce from '@/reduce/index';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReduce,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;
